/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface SampleCallInterface extends ethers.utils.Interface {
  functions: {
    "perform((uint8,uint16,int24,int56,uint160,uint160,uint128,uint128,uint200,uint200,(uint16,uint16,uint16),(uint128,uint128)),uint32[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "perform",
    values: [
      {
        unlocked: BigNumberish;
        protocolFee: BigNumberish;
        tickAtPrice: BigNumberish;
        tickSecondsAccum: BigNumberish;
        secondsPerLiquidityAccum: BigNumberish;
        price: BigNumberish;
        liquidity: BigNumberish;
        liquidityGlobal: BigNumberish;
        feeGrowthGlobal0: BigNumberish;
        feeGrowthGlobal1: BigNumberish;
        samples: {
          index: BigNumberish;
          length: BigNumberish;
          lengthNext: BigNumberish;
        };
        protocolFees: { token0: BigNumberish; token1: BigNumberish };
      },
      BigNumberish[]
    ]
  ): string;

  decodeFunctionResult(functionFragment: "perform", data: BytesLike): Result;

  events: {
    "Swap(address,bool,uint256,uint256,uint160,uint128,int24)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Swap"): EventFragment;
}

export type SwapEvent = TypedEvent<
  [string, boolean, BigNumber, BigNumber, BigNumber, BigNumber, number] & {
    recipient: string;
    zeroForOne: boolean;
    amountIn: BigNumber;
    amountOut: BigNumber;
    price: BigNumber;
    liquidity: BigNumber;
    tickAtPrice: number;
  }
>;

export class SampleCall extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: SampleCallInterface;

  functions: {
    perform(
      state: {
        unlocked: BigNumberish;
        protocolFee: BigNumberish;
        tickAtPrice: BigNumberish;
        tickSecondsAccum: BigNumberish;
        secondsPerLiquidityAccum: BigNumberish;
        price: BigNumberish;
        liquidity: BigNumberish;
        liquidityGlobal: BigNumberish;
        feeGrowthGlobal0: BigNumberish;
        feeGrowthGlobal1: BigNumberish;
        samples: {
          index: BigNumberish;
          length: BigNumberish;
          lengthNext: BigNumberish;
        };
        protocolFees: { token0: BigNumberish; token1: BigNumberish };
      },
      secondsAgo: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[], BigNumber, BigNumber, number] & {
        tickSecondsAccum: BigNumber[];
        secondsPerLiquidityAccum: BigNumber[];
        averagePrice: BigNumber;
        averageLiquidity: BigNumber;
        averageTick: number;
      }
    >;
  };

  perform(
    state: {
      unlocked: BigNumberish;
      protocolFee: BigNumberish;
      tickAtPrice: BigNumberish;
      tickSecondsAccum: BigNumberish;
      secondsPerLiquidityAccum: BigNumberish;
      price: BigNumberish;
      liquidity: BigNumberish;
      liquidityGlobal: BigNumberish;
      feeGrowthGlobal0: BigNumberish;
      feeGrowthGlobal1: BigNumberish;
      samples: {
        index: BigNumberish;
        length: BigNumberish;
        lengthNext: BigNumberish;
      };
      protocolFees: { token0: BigNumberish; token1: BigNumberish };
    },
    secondsAgo: BigNumberish[],
    overrides?: CallOverrides
  ): Promise<
    [BigNumber[], BigNumber[], BigNumber, BigNumber, number] & {
      tickSecondsAccum: BigNumber[];
      secondsPerLiquidityAccum: BigNumber[];
      averagePrice: BigNumber;
      averageLiquidity: BigNumber;
      averageTick: number;
    }
  >;

  callStatic: {
    perform(
      state: {
        unlocked: BigNumberish;
        protocolFee: BigNumberish;
        tickAtPrice: BigNumberish;
        tickSecondsAccum: BigNumberish;
        secondsPerLiquidityAccum: BigNumberish;
        price: BigNumberish;
        liquidity: BigNumberish;
        liquidityGlobal: BigNumberish;
        feeGrowthGlobal0: BigNumberish;
        feeGrowthGlobal1: BigNumberish;
        samples: {
          index: BigNumberish;
          length: BigNumberish;
          lengthNext: BigNumberish;
        };
        protocolFees: { token0: BigNumberish; token1: BigNumberish };
      },
      secondsAgo: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[], BigNumber, BigNumber, number] & {
        tickSecondsAccum: BigNumber[];
        secondsPerLiquidityAccum: BigNumber[];
        averagePrice: BigNumber;
        averageLiquidity: BigNumber;
        averageTick: number;
      }
    >;
  };

  filters: {
    "Swap(address,bool,uint256,uint256,uint160,uint128,int24)"(
      recipient?: string | null,
      zeroForOne?: null,
      amountIn?: null,
      amountOut?: null,
      price?: null,
      liquidity?: null,
      tickAtPrice?: null
    ): TypedEventFilter<
      [string, boolean, BigNumber, BigNumber, BigNumber, BigNumber, number],
      {
        recipient: string;
        zeroForOne: boolean;
        amountIn: BigNumber;
        amountOut: BigNumber;
        price: BigNumber;
        liquidity: BigNumber;
        tickAtPrice: number;
      }
    >;

    Swap(
      recipient?: string | null,
      zeroForOne?: null,
      amountIn?: null,
      amountOut?: null,
      price?: null,
      liquidity?: null,
      tickAtPrice?: null
    ): TypedEventFilter<
      [string, boolean, BigNumber, BigNumber, BigNumber, BigNumber, number],
      {
        recipient: string;
        zeroForOne: boolean;
        amountIn: BigNumber;
        amountOut: BigNumber;
        price: BigNumber;
        liquidity: BigNumber;
        tickAtPrice: number;
      }
    >;
  };

  estimateGas: {
    perform(
      state: {
        unlocked: BigNumberish;
        protocolFee: BigNumberish;
        tickAtPrice: BigNumberish;
        tickSecondsAccum: BigNumberish;
        secondsPerLiquidityAccum: BigNumberish;
        price: BigNumberish;
        liquidity: BigNumberish;
        liquidityGlobal: BigNumberish;
        feeGrowthGlobal0: BigNumberish;
        feeGrowthGlobal1: BigNumberish;
        samples: {
          index: BigNumberish;
          length: BigNumberish;
          lengthNext: BigNumberish;
        };
        protocolFees: { token0: BigNumberish; token1: BigNumberish };
      },
      secondsAgo: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    perform(
      state: {
        unlocked: BigNumberish;
        protocolFee: BigNumberish;
        tickAtPrice: BigNumberish;
        tickSecondsAccum: BigNumberish;
        secondsPerLiquidityAccum: BigNumberish;
        price: BigNumberish;
        liquidity: BigNumberish;
        liquidityGlobal: BigNumberish;
        feeGrowthGlobal0: BigNumberish;
        feeGrowthGlobal1: BigNumberish;
        samples: {
          index: BigNumberish;
          length: BigNumberish;
          lengthNext: BigNumberish;
        };
        protocolFees: { token0: BigNumberish; token1: BigNumberish };
      },
      secondsAgo: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}