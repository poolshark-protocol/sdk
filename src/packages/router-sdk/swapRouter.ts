import { Interface } from '@ethersproject/abi';
import { toHex } from '../typescript-sdk/utils/calldata';
import {
  SwapOptions,
  SwapParams,
} from '../smart-contract-sdk/parameters/trade/swap';
import {
  MSG_SENDER,
  ProtocolType,
  SWAP_ROUTER_ADDRESS,
  TradeType,
} from '../typescript-sdk/utils/constants';
import { validateAndParseAddress } from '../typescript-sdk/entities/addresses/checksum';
import { Trade } from '../typescript-sdk/entities/trades/trade';
import { IToken } from '../typescript-sdk/entities/tokens/itoken';
import { swapRouterABI } from '../smart-contract-sdk/abis/evm/router/swapRouter';
import { addRouteToPath } from '../typescript-sdk/utils/path';
import invariant from 'tiny-invariant';
import { TokenAmount } from '../typescript-sdk/entities/tokens/tokenAmount';
import { Route } from '../typescript-sdk/entities/trades/route';

type AnyTradeType = Trade<IToken, IToken, TradeType>;

export abstract class SwapRouter {
  public static INTERFACE: Interface = new Interface(swapRouterABI);

  /**
   * Cannot be constructed.
   */
  private constructor() {}

  /**
   * @notice Generates the calldata for a Swap with a Route.
   * @param trade The Trade to encode.
   * @param params SwapOptions to use for the trade.
   * @param routerMustCustody Flag for whether funds should be sent to the router
   * @param performAggregatedSlippageCheck Flag for whether we want to perform an aggregated slippage check
   * @returns A string array of calldatas for the trade.
   */
  private static encodeSwap(
    trade: Trade<IToken, IToken, TradeType>,
    params: SwapParams,
    routerMustCustody: boolean,
    performAggregatedSlippageCheck: boolean,
  ): string[] {
    const calldatas: string[] = [];

    for (const { route, inputAmount, outputAmount } of trade.swaps) {
      const amountIn: string = toHex(
        trade.maximumAmountIn(params.slippageTolerance, inputAmount).quotient,
      );
      const amountOut: string = toHex(
        trade.minimumAmountOut(params.slippageTolerance, outputAmount).quotient,
      );

      // flag for whether the trade is single hop or not
      const singleHop = route.pools.length === 1;

      const recipient = routerMustCustody
        ? SWAP_ROUTER_ADDRESS
        : typeof params.recipient === 'undefined'
        ? MSG_SENDER
        : validateAndParseAddress(params.recipient);

      if (singleHop) {
        if (trade.tradeType === TradeType.EXACT_INPUT) {
          const exactInputSingleParams = {
            tokenIn: route.tokenPath[0].address,
            tokenOut: route.tokenPath[1].address,
            fee: route.pools[0].swapFee,
            recipient,
            amountIn,
            amountOutMinimum: performAggregatedSlippageCheck ? 0 : amountOut,
            sqrtPriceLimitX96: 0,
          };

          calldatas.push(
            SwapRouter.INTERFACE.encodeFunctionData('exactInputSingle', [
              exactInputSingleParams,
            ]),
          );
        } else {
          const exactOutputSingleParams = {
            tokenIn: route.tokenPath[0].address,
            tokenOut: route.tokenPath[1].address,
            fee: route.pools[0].swapFee,
            recipient,
            amountOut,
            amountInMaximum: amountIn,
            sqrtPriceLimitX96: 0,
          };

          calldatas.push(
            SwapRouter.INTERFACE.encodeFunctionData('exactOutputSingle', [
              exactOutputSingleParams,
            ]),
          );
        }
      } else {
        const path: string = addRouteToPath(
          route,
          trade.tradeType === TradeType.EXACT_OUTPUT,
        );

        if (trade.tradeType === TradeType.EXACT_INPUT) {
          const exactInputParams = {
            path,
            recipient,
            amountIn,
            amountOutMinimum: performAggregatedSlippageCheck ? 0 : amountOut,
          };

          calldatas.push(
            SwapRouter.INTERFACE.encodeFunctionData('exactInput', [
              exactInputParams,
            ]),
          );
        } else {
          const exactOutputParams = {
            path,
            recipient,
            amountOut,
            amountInMaximum: amountIn,
          };

          calldatas.push(
            SwapRouter.INTERFACE.encodeFunctionData('exactOutput', [
              exactOutputParams,
            ]),
          );
        }
      }
    }
    return calldatas;
  }

  private static encodeSwaps(
    trades: AnyTradeType,
    options: SwapOptions,
    isSwapAndAdd?: boolean,
  ): {
    calldatas: string[];
    sampleTrade: Trade<IToken, IToken, TradeType>;
    routerMustCustody: boolean;
    inputIsNative: boolean;
    outputIsNative: boolean;
    totalAmountIn: TokenAmount<IToken>;
    minimumAmountOut: TokenAmount<IToken>;
    quoteAmountOut: TokenAmount<IToken>;
  } {
    // If dealing with an instance of the aggregated Trade object, unbundle it to individual trade objects.
    if (trades instanceof Trade) {
      invariant(
        trades.swaps.every(
          swap =>
            swap.route.protocol == ProtocolType.COVER ||
            swap.route.protocol == ProtocolType.LIMIT ||
            swap.route.protocol == ProtocolType.RANGE ||
            swap.route.protocol == ProtocolType.MIXED,
        ),
        'UNSUPPORTED_PROTOCOL',
      );

      let individualTrades: Trade<IToken, IToken, TradeType>[] = [];

      for (const { route, inputAmount, outputAmount } of trades.swaps) {
        if (true) {
          individualTrades.push(
            Trade.createUncheckedTrade({
              route: route as Route<IToken, IToken>,
              inputAmount,
              outputAmount,
              tradeType: trades.tradeType,
            }),
          );
        }
      }
      trades = individualTrades;
    }

    if (!Array.isArray(trades)) {
      trades = [trades];
    }

    const numberOfTrades = trades.reduce(
      (numberOfTrades, trade) =>
        numberOfTrades + (trade instanceof Trade ? trade.swaps.length : 1),
      0,
    );

    const sampleTrade = trades[0];

    // All trades should have the same starting/ending currency and trade type
    invariant(
      trades.every(trade =>
        trade.inputAmount.currency.equals(sampleTrade.inputAmount.currency),
      ),
      'TOKEN_IN_DIFF',
    );
    invariant(
      trades.every(trade =>
        trade.outputAmount.currency.equals(sampleTrade.outputAmount.currency),
      ),
      'TOKEN_OUT_DIFF',
    );
    invariant(
      trades.every(trade => trade.tradeType === sampleTrade.tradeType),
      'TRADE_TYPE_DIFF',
    );

    const calldatas: string[] = [];

    const inputIsNative = sampleTrade.inputAmount.currency.isNative;
    const outputIsNative = sampleTrade.outputAmount.currency.isNative;

    // flag for whether we want to perform an aggregated slippage check
    //   1. when there are >2 exact input trades. this is only a heuristic,
    //      as it's still more gas-expensive even in this case, but has benefits
    //      in that the reversion probability is lower
    const performAggregatedSlippageCheck =
      sampleTrade.tradeType === TradeType.EXACT_INPUT && numberOfTrades > 2;
    // flag for whether funds should be send first to the router
    //   1. when receiving ETH (which much be unwrapped from WETH)
    //   2. when a fee on the output is being taken
    //   3. when performing swap and add
    //   4. when performing an aggregated slippage check
    const routerMustCustody =
      outputIsNative ||
      !!options.fee ||
      !!isSwapAndAdd ||
      performAggregatedSlippageCheck;

    // encode permit if necessary
    if (options.inputTokenPermit) {
      invariant(sampleTrade.inputAmount.currency.isToken, 'NON_TOKEN_PERMIT');
      calldatas.push(
        SelfPermit.encodePermit(
          sampleTrade.inputAmount.currency,
          options.inputTokenPermit,
        ),
      );
    }

    for (const trade of trades) {
      if (trade instanceof V2Trade) {
        calldatas.push(
          SwapRouter.encodeV2Swap(
            trade,
            options,
            routerMustCustody,
            performAggregatedSlippageCheck,
          ),
        );
      } else if (trade instanceof V3Trade) {
        for (const calldata of SwapRouter.encodeV3Swap(
          trade,
          options,
          routerMustCustody,
          performAggregatedSlippageCheck,
        )) {
          calldatas.push(calldata);
        }
      } else if (trade instanceof MixedRouteTrade) {
        for (const calldata of SwapRouter.encodeMixedRouteSwap(
          trade,
          options,
          routerMustCustody,
          performAggregatedSlippageCheck,
        )) {
          calldatas.push(calldata);
        }
      } else {
        throw new Error('Unsupported trade object');
      }
    }

    const ZERO_IN: TokenAmount<IToken> = TokenAmount.fromRawAmount(
      sampleTrade.inputAmount.currency,
      0,
    );
    const ZERO_OUT: TokenAmount<IToken> = TokenAmount.fromRawAmount(
      sampleTrade.outputAmount.currency,
      0,
    );

    const minimumAmountOut: TokenAmount<IToken> = trades.reduce(
      (sum, trade) =>
        sum.add(trade.minimumAmountOut(options.slippageTolerance)),
      ZERO_OUT,
    );

    const quoteAmountOut: TokenAmount<IToken> = trades.reduce(
      (sum, trade) => sum.add(trade.outputAmount),
      ZERO_OUT,
    );

    const totalAmountIn: TokenAmount<IToken> = trades.reduce(
      (sum, trade) => sum.add(trade.maximumAmountIn(options.slippageTolerance)),
      ZERO_IN,
    );

    return {
      calldatas,
      sampleTrade,
      routerMustCustody,
      inputIsNative,
      outputIsNative,
      totalAmountIn,
      minimumAmountOut,
      quoteAmountOut,
    };
  }
}
