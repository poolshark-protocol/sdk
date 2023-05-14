import { Ratio } from "./ratio";
import { BigintIsh, Rounding } from "../../libraries/math/constants";
import { TokenAmount } from "../tokens/tokenAmount";
import JSBI from "jsbi";
import { IToken } from "../tokens/itoken";
import invariant from "tiny-invariant";


export class Price<TokenIn extends IToken, TokenOut extends IToken> extends Ratio {
    public readonly tokenIn: TokenIn  // input i.e. denominator
    public readonly tokenOut: TokenOut // output i.e. numerator
    public readonly scalar: Ratio // ratio of tokenOut.decimals / tokenIn.decimals 

    public constructor(
        ...args:
        | [TokenIn, TokenOut, BigintIsh, BigintIsh]
        | [{ inAmount: TokenAmount<TokenIn>; outAmount: TokenAmount<TokenOut> }]
    ) {
        let tokenIn: TokenIn;
        let tokenOut: TokenOut;
        let denominator: BigintIsh;
        let numerator: BigintIsh;
        if (args.length === 4) {
            ;[tokenIn, tokenOut, numerator, denominator] = args
        } else {
            const result = args[0].outAmount.divide(args[0].inAmount)
            ;[tokenIn, tokenOut, numerator, denominator] = [
                args[0].inAmount.token,
                args[0].outAmount.token,
                result.denominator,
                result.numerator
            ]
        }
        super(numerator, denominator)

        this.tokenIn = tokenIn
        this.tokenOut = tokenOut
        this.scalar = new Ratio(
            JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(tokenIn.decimals)),
            JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(tokenOut.decimals)) 
        )
    }

    /**
     * Flip the price, switching the base and quote currency
     */
    public invert(): Price<TokenOut, TokenIn> {
        return new Price(this.tokenOut, this.tokenIn, this.numerator, this.denominator)
    }

      /**
   * Multiply the price by another price, returning a new price. The other price must have the same base currency as this price's quote currency
   * @param other the other price
   */
    public multiply<TOtherOut extends IToken>(other: Price<TokenOut, TOtherOut>): Price<TokenIn, TOtherOut> {
        invariant(this.tokenOut.equals(other.tokenIn), 'TOKEN')
        const ratio = super.multiply(other)
        return new Price(this.tokenIn, other.tokenOut, ratio.denominator, ratio.numerator)
    }

      /**
   * Return the amount of quote currency corresponding to a given amount of the base currency
   * @param currencyAmount the amount of base currency to quote against the price
   */
  public quote(tokenAmount: TokenAmount<TokenIn>): TokenAmount<TokenOut> {
    invariant(tokenAmount.token.equals(this.tokenIn), 'TOKEN')
    const result = super.multiply(tokenAmount)
    return TokenAmount.fromRatioAmount(this.tokenOut, result.numerator, result.denominator)
  }

  /**
   * Get the value scaled by decimals for formatting
   * @private
   */
  private get adjustedForDecimals(): Ratio {
    return super.multiply(this.scalar)
  }

  public toSignificant(significantDigits: number = 6, format?: object, rounding?: Rounding): string {
    return this.adjustedForDecimals.toSignificant(significantDigits, format, rounding)
  }

  public toFixed(decimalPlaces: number = 4, format?: object, rounding?: Rounding): string {
    return this.adjustedForDecimals.toFixed(decimalPlaces, format, rounding)
  }
}