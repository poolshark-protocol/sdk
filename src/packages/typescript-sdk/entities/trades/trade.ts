import invariant from 'tiny-invariant';
import { IToken } from '../tokens/itoken';
import { ONE, TradeType, ZERO } from '../../utils/constants';
import { Token } from '../tokens/token';
import { Percent } from '../math/percent';
import { Price } from '../math/price';
import { Pool } from '../pools/pool';
import { Route } from './route';
import { TokenAmount } from '../tokens/tokenAmount';
import { Ratio } from '../math/ratio';
import { sortedInsert } from '../../utils/sortedInsert';
import { InsufficientInputAmountError } from '../../utils/errors';

/**
 * Trades comparator, an extension of the input output comparator that also considers other dimensions of the trade in ranking them
 * @template TInput The input token, either Ether or an ERC-20
 * @template TOutput The output token, either Ether or an ERC-20
 * @template TTradeType The trade type, either exact input or exact output
 * @param a The first trade to compare
 * @param b The second trade to compare
 * @returns A sorted ordering for two neighboring elements in a trade array
 */
export function tradeComparator<
  TInput extends IToken,
  TOutput extends IToken,
  TTradeType extends TradeType,
>(
  a: Trade<TInput, TOutput, TTradeType>,
  b: Trade<TInput, TOutput, TTradeType>,
) {
  // must have same input and output token for comparison
  invariant(a.inputAmount.token.equals(b.inputAmount.token), 'INPUT_CURRENCY');
  invariant(
    a.outputAmount.token.equals(b.outputAmount.token),
    'OUTPUT_CURRENCY',
  );
  if (a.outputAmount.equalTo(b.outputAmount)) {
    if (a.inputAmount.equalTo(b.inputAmount)) {
      // consider the number of hops since each hop costs gas
      const aHops = a.swaps.reduce(
        (total, cur) => total + cur.route.tokenPath.length,
        0,
      );
      const bHops = b.swaps.reduce(
        (total, cur) => total + cur.route.tokenPath.length,
        0,
      );
      return aHops - bHops;
    }
    // trade A requires less input than trade B, so A should come first
    if (a.inputAmount.lessThan(b.inputAmount)) {
      return -1;
    } else {
      return 1;
    }
  } else {
    // tradeA has less output than trade B, so should come second
    if (a.outputAmount.lessThan(b.outputAmount)) {
      return 1;
    } else {
      return -1;
    }
  }
}

export interface BestTradeOptions {
  // how many results to return
  maxNumResults?: number;
  // the maximum number of hops a trade should contain
  maxHops?: number;
}

/**
 * Represents a trade executed against a set of routes where some percentage of the input is
 * split across each route.
 *
 * Each route has its own set of pools. Pools can not be re-used across routes.
 *
 * Does not account for slippage, i.e., changes in price environment that can occur between
 * the time the trade is submitted and when it is executed.
 * @template TInput The input token, either Ether or an ERC-20
 * @template TOutput The output token, either Ether or an ERC-20
 * @template TTradeType The trade type, either exact input or exact output
 */
export class Trade<
  TInput extends IToken,
  TOutput extends IToken,
  TTradeType extends TradeType,
> {
  /**
   * @deprecated Deprecated in favor of 'swaps' property. If the trade consists of multiple routes
   * this will return an error.
   *
   * When the trade consists of just a single route, this returns the route of the trade,
   * i.e. which pools the trade goes through.
   */
  public get route(): Route<TInput, TOutput> {
    invariant(this.swaps.length == 1, 'MULTIPLE_ROUTES');
    return this.swaps[0].route;
  }

  /**
   * The swaps of the trade, i.e. which routes and how much is swapped in each that
   * make up the trade.
   */
  public readonly swaps: {
    route: Route<TInput, TOutput>;
    inputAmount: TokenAmount<TInput>;
    outputAmount: TokenAmount<TOutput>;
  }[];

  /**
   * The type of the trade, either exact in or exact out.
   */
  public readonly tradeType: TTradeType;

  /**
   * The cached result of the input amount computation
   * @private
   */
  private _inputAmount: TokenAmount<TInput> | undefined;

  /**
   * The input amount for the trade assuming no slippage.
   */
  public get inputAmount(): TokenAmount<TInput> {
    if (this._inputAmount) {
      return this._inputAmount;
    }

    const inputIToken = this.swaps[0].inputAmount.token;
    const totalInputFromRoutes = this.swaps
      .map(({ inputAmount }) => inputAmount)
      .reduce(
        (total, cur) => total.add(cur),
        TokenAmount.fromRawAmount(inputIToken, 0),
      );

    this._inputAmount = totalInputFromRoutes;
    return this._inputAmount;
  }

  /**
   * The cached result of the output amount computation
   * @private
   */
  private _outputAmount: TokenAmount<TOutput> | undefined;

  /**
   * The output amount for the trade assuming no slippage.
   */
  public get outputAmount(): TokenAmount<TOutput> {
    if (this._outputAmount) {
      return this._outputAmount;
    }

    const outputIToken = this.swaps[0].outputAmount.token;
    const totalOutputFromRoutes = this.swaps
      .map(({ outputAmount }) => outputAmount)
      .reduce(
        (total, cur) => total.add(cur),
        TokenAmount.fromRawAmount(outputIToken, 0),
      );

    this._outputAmount = totalOutputFromRoutes;
    return this._outputAmount;
  }

  /**
   * The cached result of the computed execution price
   * @private
   */
  private _executionPrice: Price<TInput, TOutput> | undefined;

  /**
   * The price expressed in terms of output amount/input amount.
   */
  public get executionPrice(): Price<TInput, TOutput> {
    return (
      this._executionPrice ??
      (this._executionPrice = new Price(
        this.inputAmount.token,
        this.outputAmount.token,
        this.inputAmount.quotient,
        this.outputAmount.quotient,
      ))
    );
  }

  /**
   * The cached result of the price impact computation
   * @private
   */
  private _priceImpact: Percent | undefined;

  /**
   * Returns the percent difference between the route's mid price and the price impact
   */
  public get priceImpact(): Percent {
    if (this._priceImpact) {
      return this._priceImpact;
    }

    let spotOutputAmount = TokenAmount.fromRawAmount(
      this.outputAmount.token,
      0,
    );
    for (const { route, inputAmount } of this.swaps) {
      const midPrice = route.midPrice;
      spotOutputAmount = spotOutputAmount.add(midPrice.quote(inputAmount));
    }

    const priceImpact = spotOutputAmount
      .subtract(this.outputAmount)
      .divide(spotOutputAmount);
    this._priceImpact = new Percent(
      priceImpact.numerator,
      priceImpact.denominator,
    );

    return this._priceImpact;
  }

  /**
   * Constructs an exact in trade with the given amount in and route
   * @template TInput The input token, either Ether or an ERC-20
   * @template TOutput The output token, either Ether or an ERC-20
   * @param route The route of the exact in trade
   * @param amountIn The amount being passed in
   * @returns The exact in trade
   */
  public static async exactIn<TInput extends IToken, TOutput extends IToken>(
    route: Route<TInput, TOutput>,
    amountIn: TokenAmount<TInput>,
  ): Promise<Trade<TInput, TOutput, TradeType.EXACT_INPUT>> {
    return Trade.fromRoute(route, amountIn, TradeType.EXACT_INPUT);
  }

  /**
   * Constructs an exact out trade with the given amount out and route
   * @template TInput The input token, either Ether or an ERC-20
   * @template TOutput The output token, either Ether or an ERC-20
   * @param route The route of the exact out trade
   * @param amountOut The amount returned by the trade
   * @returns The exact out trade
   */
  public static async exactOut<TInput extends IToken, TOutput extends IToken>(
    route: Route<TInput, TOutput>,
    amountOut: TokenAmount<TOutput>,
  ): Promise<Trade<TInput, TOutput, TradeType.EXACT_OUTPUT>> {
    return Trade.fromRoute(route, amountOut, TradeType.EXACT_OUTPUT);
  }

  /**
   * Constructs a trade by simulating swaps through the given route
   * @template TInput The input token, either Ether or an ERC-20.
   * @template TOutput The output token, either Ether or an ERC-20.
   * @template TTradeType The type of the trade, either exact in or exact out.
   * @param route route to swap through
   * @param amount the amount specified, either input or output, depending on tradeType
   * @param tradeType whether the trade is an exact input or exact output swap
   * @returns The route
   */
  public static async fromRoute<
    TInput extends IToken,
    TOutput extends IToken,
    TTradeType extends TradeType,
  >(
    route: Route<TInput, TOutput>,
    amount: TTradeType extends TradeType.EXACT_INPUT
      ? TokenAmount<TInput>
      : TokenAmount<TOutput>,
    tradeType: TTradeType,
  ): Promise<Trade<TInput, TOutput, TTradeType>> {
    const amounts: TokenAmount<Token>[] = new Array(route.tokenPath.length);
    let inputAmount: TokenAmount<TInput>;
    let outputAmount: TokenAmount<TOutput>;
    if (tradeType === TradeType.EXACT_INPUT) {
      invariant(amount.token.equals(route.input), 'INPUT');
      amounts[0] = amount.wrapped;
      for (let i = 0; i < route.tokenPath.length - 1; i++) {
        const pool = route.pools[i];
        const [outputAmount] = await pool.getOutputAmount(amounts[i]);
        amounts[i + 1] = outputAmount;
      }
      inputAmount = TokenAmount.fromRatioAmount(
        route.input,
        amount.numerator,
        amount.denominator,
      );
      outputAmount = TokenAmount.fromRatioAmount(
        route.output,
        amounts[amounts.length - 1].numerator,
        amounts[amounts.length - 1].denominator,
      );
    } else {
      invariant(amount.token.equals(route.output), 'OUTPUT');
      amounts[amounts.length - 1] = amount.wrapped;
      for (let i = route.tokenPath.length - 1; i > 0; i--) {
        const pool = route.pools[i - 1];
        const [inputAmount] = await pool.getInputAmount(amounts[i]);
        amounts[i - 1] = inputAmount;
      }
      inputAmount = TokenAmount.fromRatioAmount(
        route.input,
        amounts[0].numerator,
        amounts[0].denominator,
      );
      outputAmount = TokenAmount.fromRatioAmount(
        route.output,
        amount.numerator,
        amount.denominator,
      );
    }

    return new Trade({
      routes: [{ inputAmount, outputAmount, route }],
      tradeType,
    });
  }

  /**
   * Constructs a trade from routes by simulating swaps
   *
   * @template TInput The input token, either Ether or an ERC-20.
   * @template TOutput The output token, either Ether or an ERC-20.
   * @template TTradeType The type of the trade, either exact in or exact out.
   * @param routes the routes to swap through and how much of the amount should be routed through each
   * @param tradeType whether the trade is an exact input or exact output swap
   * @returns The trade
   */
  public static async fromRoutes<
    TInput extends IToken,
    TOutput extends IToken,
    TTradeType extends TradeType,
  >(
    routes: {
      amount: TTradeType extends TradeType.EXACT_INPUT
        ? TokenAmount<TInput>
        : TokenAmount<TOutput>;
      route: Route<TInput, TOutput>;
    }[],
    tradeType: TTradeType,
  ): Promise<Trade<TInput, TOutput, TTradeType>> {
    const populatedRoutes: {
      route: Route<TInput, TOutput>;
      inputAmount: TokenAmount<TInput>;
      outputAmount: TokenAmount<TOutput>;
    }[] = [];

    for (const { route, amount } of routes) {
      const amounts: TokenAmount<Token>[] = new Array(route.tokenPath.length);
      let inputAmount: TokenAmount<TInput>;
      let outputAmount: TokenAmount<TOutput>;

      if (tradeType === TradeType.EXACT_INPUT) {
        invariant(amount.token.equals(route.input), 'INPUT');
        inputAmount = TokenAmount.fromRatioAmount(
          route.input,
          amount.numerator,
          amount.denominator,
        );
        amounts[0] = TokenAmount.fromRatioAmount(
          route.input.wrapped,
          amount.numerator,
          amount.denominator,
        );

        for (let i = 0; i < route.tokenPath.length - 1; i++) {
          const pool = route.pools[i];
          const [outputAmount] = await pool.getOutputAmount(amounts[i]);
          amounts[i + 1] = outputAmount;
        }

        outputAmount = TokenAmount.fromRatioAmount(
          route.output,
          amounts[amounts.length - 1].numerator,
          amounts[amounts.length - 1].denominator,
        );
      } else {
        invariant(amount.token.equals(route.output), 'OUTPUT');
        outputAmount = TokenAmount.fromRatioAmount(
          route.output,
          amount.numerator,
          amount.denominator,
        );
        amounts[amounts.length - 1] = TokenAmount.fromRatioAmount(
          route.output.wrapped,
          amount.numerator,
          amount.denominator,
        );

        for (let i = route.tokenPath.length - 1; i > 0; i--) {
          const pool = route.pools[i - 1];
          const [inputAmount] = await pool.getInputAmount(amounts[i]);
          amounts[i - 1] = inputAmount;
        }

        inputAmount = TokenAmount.fromRatioAmount(
          route.input,
          amounts[0].numerator,
          amounts[0].denominator,
        );
      }

      populatedRoutes.push({ route, inputAmount, outputAmount });
    }

    return new Trade({
      routes: populatedRoutes,
      tradeType,
    });
  }

  /**
   * Creates a trade without computing the result of swapping through the route. Useful when you have simulated the trade
   * elsewhere and do not have any tick data
   * @template TInput The input token, either Ether or an ERC-20
   * @template TOutput The output token, either Ether or an ERC-20
   * @template TTradeType The type of the trade, either exact in or exact out
   * @param constructorArguments The arguments passed to the trade constructor
   * @returns The unchecked trade
   */
  public static createUncheckedTrade<
    TInput extends IToken,
    TOutput extends IToken,
    TTradeType extends TradeType,
  >(constructorArguments: {
    route: Route<TInput, TOutput>;
    inputAmount: TokenAmount<TInput>;
    outputAmount: TokenAmount<TOutput>;
    tradeType: TTradeType;
  }): Trade<TInput, TOutput, TTradeType> {
    return new Trade({
      ...constructorArguments,
      routes: [
        {
          inputAmount: constructorArguments.inputAmount,
          outputAmount: constructorArguments.outputAmount,
          route: constructorArguments.route,
        },
      ],
    });
  }

  /**
   * Creates a trade without computing the result of swapping through the routes. Useful when you have simulated the trade
   * elsewhere and do not have any tick data
   * @template TInput The input token, either Ether or an ERC-20
   * @template TOutput The output token, either Ether or an ERC-20
   * @template TTradeType The type of the trade, either exact in or exact out
   * @param constructorArguments The arguments passed to the trade constructor
   * @returns The unchecked trade
   */
  public static createUncheckedTradeWithMultipleRoutes<
    TInput extends IToken,
    TOutput extends IToken,
    TTradeType extends TradeType,
  >(constructorArguments: {
    routes: {
      route: Route<TInput, TOutput>;
      inputAmount: TokenAmount<TInput>;
      outputAmount: TokenAmount<TOutput>;
    }[];
    tradeType: TTradeType;
  }): Trade<TInput, TOutput, TTradeType> {
    return new Trade(constructorArguments);
  }

  /**
   * Construct a trade by passing in the pre-computed property values
   * @param routes The routes through which the trade occurs
   * @param tradeType The type of trade, exact input or exact output
   */
  private constructor({
    routes,
    tradeType,
  }: {
    routes: {
      route: Route<TInput, TOutput>;
      inputAmount: TokenAmount<TInput>;
      outputAmount: TokenAmount<TOutput>;
    }[];
    tradeType: TTradeType;
  }) {
    const inputIToken = routes[0].inputAmount.token;
    const outputIToken = routes[0].outputAmount.token;
    invariant(
      routes.every(({ route }) =>
        inputIToken.wrapped.equals(route.input.wrapped),
      ),
      'INPUT_CURRENCY_MATCH',
    );
    invariant(
      routes.every(({ route }) =>
        outputIToken.wrapped.equals(route.output.wrapped),
      ),
      'OUTPUT_CURRENCY_MATCH',
    );

    const numPools = routes
      .map(({ route }) => route.pools.length)
      .reduce((total, cur) => total + cur, 0);
    const poolAddressSet = new Set<string>();
    for (const { route } of routes) {
      for (const pool of route.pools) {
        poolAddressSet.add(
          Pool.getAddress(pool.token0, pool.token1, pool.swapFee),
        );
      }
    }

    invariant(numPools == poolAddressSet.size, 'POOLS_DUPLICATED');

    this.swaps = routes;
    this.tradeType = tradeType;
  }

  /**
   * Get the minimum amount that must be received from this trade for the given slippage tolerance
   * @param slippageTolerance The tolerance of unfavorable slippage from the execution price of this trade
   * @returns The amount out
   */
  public minimumAmountOut(
    slippageTolerance: Percent,
    amountOut = this.outputAmount,
  ): TokenAmount<TOutput> {
    invariant(!slippageTolerance.lessThan(ZERO), 'SLIPPAGE_TOLERANCE');
    if (this.tradeType === TradeType.EXACT_OUTPUT) {
      return amountOut;
    } else {
      const slippageAdjustedAmountOut = new Ratio(ONE)
        .add(slippageTolerance)
        .invert()
        .multiply(amountOut.quotient).quotient;
      return TokenAmount.fromRawAmount(
        amountOut.token,
        slippageAdjustedAmountOut,
      );
    }
  }

  /**
   * Get the maximum amount in that can be spent via this trade for the given slippage tolerance
   * @param slippageTolerance The tolerance of unfavorable slippage from the execution price of this trade
   * @returns The amount in
   */
  public maximumAmountIn(
    slippageTolerance: Percent,
    amountIn = this.inputAmount,
  ): TokenAmount<TInput> {
    invariant(!slippageTolerance.lessThan(ZERO), 'SLIPPAGE_TOLERANCE');
    if (this.tradeType === TradeType.EXACT_INPUT) {
      return amountIn;
    } else {
      const slippageAdjustedAmountIn = new Ratio(ONE)
        .add(slippageTolerance)
        .multiply(amountIn.quotient).quotient;
      return TokenAmount.fromRawAmount(
        amountIn.token,
        slippageAdjustedAmountIn,
      );
    }
  }

  /**
   * Return the execution price after accounting for slippage tolerance
   * @param slippageTolerance the allowed tolerated slippage
   * @returns The execution price
   */
  public worstExecutionPrice(
    slippageTolerance: Percent,
  ): Price<TInput, TOutput> {
    return new Price(
      this.inputAmount.token,
      this.outputAmount.token,
      this.maximumAmountIn(slippageTolerance).quotient,
      this.minimumAmountOut(slippageTolerance).quotient,
    );
  }

  /**
   * Given a list of pools, and a fixed amount in, returns the top `maxNumResults` trades that go from an input token
   * amount to an output token, making at most `maxHops` hops.
   * Note this does not consider aggregation, as routes are linear. It's possible a better route exists by splitting
   * the amount in among multiple routes.
   * @param pools the pools to consider in finding the best trade
   * @param nextAmountIn exact amount of input currency to spend
   * @param currencyOut the desired currency out
   * @param maxNumResults maximum number of results to return
   * @param maxHops maximum number of hops a returned trade can make, e.g. 1 hop goes through a single pool
   * @param currentPools used in recursion; the current list of pools
   * @param currencyAmountIn used in recursion; the original value of the currencyAmountIn parameter
   * @param bestTrades used in recursion; the current list of best trades
   * @returns The exact in trade
   */
  public static async bestTradeExactIn<
    TInput extends IToken,
    TOutput extends IToken,
  >(
    pools: Pool[],
    currencyAmountIn: TokenAmount<TInput>,
    currencyOut: TOutput,
    { maxNumResults = 3, maxHops = 3 }: BestTradeOptions = {},
    // used in recursion.
    currentPools: Pool[] = [],
    nextAmountIn: TokenAmount<IToken> = currencyAmountIn,
    bestTrades: Trade<TInput, TOutput, TradeType.EXACT_INPUT>[] = [],
  ): Promise<Trade<TInput, TOutput, TradeType.EXACT_INPUT>[]> {
    invariant(pools.length > 0, 'POOLS');
    invariant(maxHops > 0, 'MAX_HOPS');
    invariant(
      currencyAmountIn === nextAmountIn || currentPools.length > 0,
      'INVALID_RECURSION',
    );

    const amountIn = nextAmountIn.wrapped;
    const tokenOut = currencyOut.wrapped;
    for (let i = 0; i < pools.length; i++) {
      const pool = pools[i];
      // pool irrelevant
      if (
        !pool.token0.equals(amountIn.token) &&
        !pool.token1.equals(amountIn.token)
      )
        continue;

      let amountOut: TokenAmount<Token>;
      try {
        [amountOut] = await pool.getOutputAmount(amountIn);
      } catch (error) {
        // input too low
        if (error instanceof InsufficientInputAmountError) {
          continue;
        }
        throw error;
      }
      // we have arrived at the output token, so this is the final trade of one of the paths
      if (amountOut.token.isToken && amountOut.token.equals(tokenOut)) {
        sortedInsert(
          bestTrades,
          await Trade.fromRoute(
            new Route(
              [...currentPools, pool],
              currencyAmountIn.token,
              currencyOut,
            ),
            currencyAmountIn,
            TradeType.EXACT_INPUT,
          ),
          maxNumResults,
          tradeComparator,
        );
      } else if (maxHops > 1 && pools.length > 1) {
        const poolsExcludingThisPool = pools
          .slice(0, i)
          .concat(pools.slice(i + 1, pools.length));

        // otherwise, consider all the other paths that lead from this token as long as we have not exceeded maxHops
        await Trade.bestTradeExactIn(
          poolsExcludingThisPool,
          currencyAmountIn,
          currencyOut,
          {
            maxNumResults,
            maxHops: maxHops - 1,
          },
          [...currentPools, pool],
          amountOut,
          bestTrades,
        );
      }
    }

    return bestTrades;
  }

  /**
   * similar to the above method but instead targets a fixed output amount
   * given a list of pools, and a fixed amount out, returns the top `maxNumResults` trades that go from an input token
   * to an output token amount, making at most `maxHops` hops
   * note this does not consider aggregation, as routes are linear. it's possible a better route exists by splitting
   * the amount in among multiple routes.
   * @param pools the pools to consider in finding the best trade
   * @param currencyIn the currency to spend
   * @param currencyAmountOut the desired currency amount out
   * @param nextAmountOut the exact amount of currency out
   * @param maxNumResults maximum number of results to return
   * @param maxHops maximum number of hops a returned trade can make, e.g. 1 hop goes through a single pool
   * @param currentPools used in recursion; the current list of pools
   * @param bestTrades used in recursion; the current list of best trades
   * @returns The exact out trade
   */
  public static async bestTradeExactOut<
    TInput extends IToken,
    TOutput extends IToken,
  >(
    pools: Pool[],
    currencyIn: TInput,
    currencyAmountOut: TokenAmount<TOutput>,
    { maxNumResults = 3, maxHops = 3 }: BestTradeOptions = {},
    // used in recursion.
    currentPools: Pool[] = [],
    nextAmountOut: TokenAmount<IToken> = currencyAmountOut,
    bestTrades: Trade<TInput, TOutput, TradeType.EXACT_OUTPUT>[] = [],
  ): Promise<Trade<TInput, TOutput, TradeType.EXACT_OUTPUT>[]> {
    invariant(pools.length > 0, 'POOLS');
    invariant(maxHops > 0, 'MAX_HOPS');
    invariant(
      currencyAmountOut === nextAmountOut || currentPools.length > 0,
      'INVALID_RECURSION',
    );

    const amountOut = nextAmountOut.wrapped;
    const tokenIn = currencyIn.wrapped;
    for (let i = 0; i < pools.length; i++) {
      const pool = pools[i];
      // pool irrelevant
      if (
        !pool.token0.equals(amountOut.token) &&
        !pool.token1.equals(amountOut.token)
      )
        continue;

      let amountIn: TokenAmount<Token>;
      try {
        [amountIn] = await pool.getInputAmount(amountOut);
      } catch (error) {
        // not enough liquidity in this pool
        if (error instanceof InsufficientInputAmountError) {
          continue;
        }
        throw error;
      }
      // we have arrived at the input token, so this is the first trade of one of the paths
      if (amountIn.token.equals(tokenIn)) {
        sortedInsert(
          bestTrades,
          await Trade.fromRoute(
            new Route(
              [pool, ...currentPools],
              currencyIn,
              currencyAmountOut.token,
            ),
            currencyAmountOut,
            TradeType.EXACT_OUTPUT,
          ),
          maxNumResults,
          tradeComparator,
        );
      } else if (maxHops > 1 && pools.length > 1) {
        const poolsExcludingThisPool = pools
          .slice(0, i)
          .concat(pools.slice(i + 1, pools.length));

        // otherwise, consider all the other paths that arrive at this token as long as we have not exceeded maxHops
        await Trade.bestTradeExactOut(
          poolsExcludingThisPool,
          currencyIn,
          currencyAmountOut,
          {
            maxNumResults,
            maxHops: maxHops - 1,
          },
          [pool, ...currentPools],
          amountIn,
          bestTrades,
        );
      }
    }

    return bestTrades;
  }
}
