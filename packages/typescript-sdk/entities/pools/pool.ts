import JSBI from "jsbi";
import invariant from "tiny-invariant";
import { BigintIsh, FeeAmount, NEGATIVE_ONE, ONE, Q192, TICK_SPACINGS, ZERO } from "../../libraries/math/constants";
import { TickMath } from "../../libraries/math/tickMath";
import { Tick, TickConstructorArgs } from "./ticks/tick";
import { EMPTY_TICK_DATA_PROVIDER, TickDataProvider, TickListDataProvider } from "./ticks/tickData";
import { Token } from "../tokens/token";
import { Price } from "../math/price";
import { TokenAmount } from "../tokens/tokenAmount";
import { Ticks } from "../../libraries/ticks";


export interface SwapStep {
    sqrtPriceStart: JSBI
    sqrtPriceCross: JSBI
    crossTick: number
    amountIn: JSBI
    amountOut: JSBI
    feeAmount: JSBI
}

export interface SwapCache {
    cross: boolean
    crossTick: number
    crossPrice: JSBI
    sqrtPrice: JSBI
    tick: number
    liquidity: JSBI
    amountInLeft: JSBI
    amountOut: JSBI
    swapFee: FeeAmount
}

/**
 * Represents a range pool
 */
export class Pool {
    public readonly token0: Token
    public readonly token1: Token
    public readonly swapFee: FeeAmount
    public readonly sqrtPrice: JSBI
    public readonly liquidity: JSBI
    public readonly tickAtPrice: number
    public readonly tickProvider: TickDataProvider

    private _token0Price?: Price<Token, Token>
    private _token1Price?: Price<Token, Token>

    /**
     * Construct a pool
     * @param token0 One of the tokens in the pool
     * @param token1 The other token in the pool
     * @param fee The fee in hundredths of a bips of the input amount of every swap that is collected by the pool
     * @param sqrtPrice The sqrt of the current ratio of amounts of token1 to token0
     * @param liquidity The current value of in range liquidity
     * @param tickAtPrice The current tick of the pool
     * @param ticks The current state of the pool ticks or a data provider that can return tick data
     */
    public constructor(
        token0: Token,
        token1: Token,
        fee: FeeAmount,
        sqrtPrice: BigintIsh,
        liquidity: BigintIsh,
        tickAtPrice: number,
        ticks?: TickDataProvider | (Tick | TickConstructorArgs)[]
    ) {
        invariant(Number.isInteger(fee) && fee < 1_000_000, 'FEE')

        const tickCurrentSqrtRatioX96 = TickMath.getSqrtRatioAtTick(tickAtPrice)
        const nextTickSqrtRatioX96 = TickMath.getSqrtRatioAtTick(tickAtPrice + 1)
        invariant(
            JSBI.greaterThanOrEqual(JSBI.BigInt(sqrtPrice), tickCurrentSqrtRatioX96) &&
            JSBI.lessThanOrEqual(JSBI.BigInt(sqrtPrice), nextTickSqrtRatioX96),
        'PRICE_BOUNDS'
        )
        // always create a copy of the list since we want the pool's tick list to be immutable
        ;[this.token0, this.token1] = token0.sort(token1) ? [token0, token1] : [token1, token0]
        this.swapFee = fee
        this.sqrtPrice = JSBI.BigInt(sqrtPrice)
        this.liquidity = JSBI.BigInt(liquidity)
        this.tickAtPrice = tickAtPrice
        if (ticks)
            this.tickProvider = Array.isArray(ticks) ? new TickListDataProvider(ticks, TICK_SPACINGS[fee]) : ticks
        else
            this.tickProvider = EMPTY_TICK_DATA_PROVIDER
    }

    /**
     * Returns true if the token is either token0 or token1
     * @param token The token to check
     * @returns True if token is either token0 or token
     */
    public contains(token: Token): boolean {
        return token.equals(this.token0) || token.equals(this.token1)
    }

    /**
     * Returns true if the token is either token0 or token1
     * @param token The token to check
     * @returns True if token is either token0 or token
     */
    public involvesToken(token: Token): boolean {
        return token.equals(this.token0) || token.equals(this.token1)
    }

    /**
     * Returns the current mid price of the pool in terms of token0, i.e. the ratio of token1 over token0
     */
    public get token0Price(): Price<Token, Token> {
        return (
        this._token0Price ??
        (this._token0Price = new Price(
            this.token0,
            this.token1,
            Q192,
            JSBI.multiply(this.sqrtPrice, this.sqrtPrice)
        ))
        )
    }

    /**
     * Returns the current mid price of the pool in terms of token1, i.e. the ratio of token0 over token1
     */
    public get token1Price(): Price<Token, Token> {
        return (
        this._token1Price ??
        (this._token1Price = new Price(
            this.token1,
            this.token0,
            JSBI.multiply(this.sqrtPrice, this.sqrtPrice),
            Q192
        ))
        )
    }

    /**
     * Return the price of the given token in terms of the other token in the pool.
     * @param token The token to return price of
     * @returns The price of the given token, in terms of the other.
     */
    public priceOf(token: Token): Price<Token, Token> {
        invariant(this.involvesToken(token), 'TOKEN')
        return token.equals(this.token0) ? this.token0Price : this.token1Price
    }

    /**
     * Returns the chain ID of the tokens in the pool.
     */
    public get chainId(): number {
        return this.token0.chainId
    }

      /**
   * Given an input amount of a token, return the computed output amount, and a pool with state updated after the trade
   * @param inputAmount The input amount for which to quote the output amount
   * @param sqrtPriceLimitX96 The Q64.96 sqrt price limit
   * @returns The output amount and the pool with updated state
   */
  public async getOutputAmount(
    inputAmount: TokenAmount<Token>,
    sqrtPriceLimitX96?: JSBI
  ): Promise<[TokenAmount<Token>, Pool]> {
    invariant(this.involvesToken(inputAmount.token), 'TOKEN')

    const zeroForOne = inputAmount.token.equals(this.token0)

    const { amountCalculated: outputAmount, sqrtPrice, liquidity, tickCurrent } = await this.swap(
      zeroForOne,
      inputAmount.quotient,
      sqrtPriceLimitX96
    )
    const outputToken = zeroForOne ? this.token1 : this.token0
    return [
      TokenAmount.fromRawAmount(outputToken, JSBI.multiply(outputAmount, NEGATIVE_ONE)),
      new Pool(this.token0, this.token1, this.swapFee, sqrtPrice, liquidity, tickCurrent, this.tickProvider)
    ]
  }

  /**
   * Given a desired output amount of a token, return the computed input amount and a pool with state updated after the trade
   * @param outputAmount the output amount for which to quote the input amount
   * @param sqrtPriceLimitX96 The Q64.96 sqrt price limit. If zero for one, the price cannot be less than this value after the swap. If one for zero, the price cannot be greater than this value after the swap
   * @returns The input amount and the pool with updated state
   */
  public async getInputAmount(
    outputAmount: TokenAmount<Token>,
    sqrtPriceLimitX96?: JSBI
  ): Promise<[TokenAmount<Token>, Pool]> {
    invariant(outputAmount.token.isToken && this.involvesToken(outputAmount.token), 'TOKEN')

    const zeroForOne = outputAmount.token.equals(this.token1)

    const { amountCalculated: inputAmount, sqrtPrice, liquidity, tickCurrent } = await this.swap(
      zeroForOne,
      JSBI.multiply(outputAmount.quotient, NEGATIVE_ONE),
      sqrtPriceLimitX96
    )
    const inputToken = zeroForOne ? this.token0 : this.token1
    return [
      TokenAmount.fromRawAmount(inputToken, inputAmount),
      new Pool(this.token0, this.token1, this.swapFee, sqrtPrice, liquidity, tickCurrent, this.tickProvider)
    ]
  }

    /**
   * Executes a swap
   * @param zeroForOne Whether the amount in is token0 or token1
   * @param amountSpecified The amount of the swap, which implicitly configures the swap as exact input (positive), or exact output (negative)
   * @param sqrtPriceLimit The Q64.96 sqrt price limit. If zero for one, the price cannot be less than this value after the swap. If one for zero, the price cannot be greater than this value after the swap
   * @returns amountCalculated
   * @returns sqrtPrice
   * @returns liquidity
   * @returns tickCurrent
   */
    private async swap(
        zeroForOne: boolean,
        amountSpecified: JSBI,
        sqrtPriceLimit?: JSBI
      ): Promise<{ amountCalculated: JSBI; sqrtPrice: JSBI; liquidity: JSBI; tickCurrent: number }> {
        if (!sqrtPriceLimit)
          sqrtPriceLimit = zeroForOne
            ? JSBI.add(TickMath.MIN_SQRT_RATIO, ONE)
            : JSBI.subtract(TickMath.MAX_SQRT_RATIO, ONE)
    
        if (zeroForOne) {
          invariant(JSBI.greaterThan(sqrtPriceLimit, TickMath.MIN_SQRT_RATIO), 'RATIO_MIN')
          invariant(JSBI.lessThan(sqrtPriceLimit, this.sqrtPrice), 'RATIO_CURRENT')
        } else {
          invariant(JSBI.lessThan(sqrtPriceLimit, TickMath.MAX_SQRT_RATIO), 'RATIO_MAX')
          invariant(JSBI.greaterThan(sqrtPriceLimit, this.sqrtPrice), 'RATIO_CURRENT')
        }
        // TODO: handle exact output
        // const exactInput = JSBI.greaterThanOrEqual(amountSpecified, ZERO)
    
        // keep track of swap state
    
        let cache: SwapCache = {
          cross: true,
          crossTick: await this.tickProvider.nextCloseTick(this.tickAtPrice, zeroForOne, this.tickSpacing),
          crossPrice: this.sqrtPrice,
          amountInLeft: amountSpecified,
          amountOut: ZERO,
          sqrtPrice: this.sqrtPrice,
          tick: this.tickAtPrice,
          liquidity: this.liquidity,
          swapFee: this.swapFee
        }

        ; cache = await Ticks.swap(this, cache, sqrtPriceLimit, zeroForOne)
    
        return {
          amountCalculated: cache.amountOut,
          sqrtPrice: cache.sqrtPrice,
          liquidity: cache.liquidity,
          tickCurrent: cache.tick
        }
      }
    
      public get tickSpacing(): number {
        return TICK_SPACINGS[this.swapFee]
      }
}

