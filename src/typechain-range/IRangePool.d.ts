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
  Overrides,
  CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import type { TypedEventFilter, TypedEvent, TypedListener } from './common';

interface IRangePoolInterface extends ethers.utils.Interface {
  functions: {
    'burn((address,int24,int24,uint128))': FunctionFragment;
    'fees(uint16,bool)': FunctionFragment;
    'increaseSampleLength(uint16)': FunctionFragment;
    'mint((address,int24,int24,uint128,uint128))': FunctionFragment;
    'owner()': FunctionFragment;
    'poolState()': FunctionFragment;
    'positions(int24,int24)': FunctionFragment;
    'quote((uint160,uint128,bool,bool))': FunctionFragment;
    'sample(uint32[])': FunctionFragment;
    'samples(uint256)': FunctionFragment;
    'snapshot((address,int24,int24))': FunctionFragment;
    'swap((address,uint160,uint128,bool,bool,bytes))': FunctionFragment;
    'tickSpacing()': FunctionFragment;
    'ticks(int24)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'burn',
    values: [
      {
        to: string;
        lower: BigNumberish;
        upper: BigNumberish;
        burnPercent: BigNumberish;
      },
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'fees',
    values: [BigNumberish, boolean],
  ): string;
  encodeFunctionData(
    functionFragment: 'increaseSampleLength',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'mint',
    values: [
      {
        to: string;
        lower: BigNumberish;
        upper: BigNumberish;
        amount0: BigNumberish;
        amount1: BigNumberish;
      },
    ],
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'poolState', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'positions',
    values: [BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'quote',
    values: [
      {
        priceLimit: BigNumberish;
        amount: BigNumberish;
        exactIn: boolean;
        zeroForOne: boolean;
      },
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'sample',
    values: [BigNumberish[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'samples',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'snapshot',
    values: [{ owner: string; lower: BigNumberish; upper: BigNumberish }],
  ): string;
  encodeFunctionData(
    functionFragment: 'swap',
    values: [
      {
        to: string;
        priceLimit: BigNumberish;
        amount: BigNumberish;
        exactIn: boolean;
        zeroForOne: boolean;
        callbackData: BytesLike;
      },
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'tickSpacing',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'ticks', values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: 'burn', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'fees', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'increaseSampleLength',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'mint', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'poolState', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'positions', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'quote', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'sample', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'samples', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'snapshot', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'swap', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'tickSpacing',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'ticks', data: BytesLike): Result;

  events: {};
}

export class IRangePool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
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
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IRangePoolInterface;

  functions: {
    burn(
      burnParams: {
        to: string;
        lower: BigNumberish;
        upper: BigNumberish;
        burnPercent: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    fees(
      protocolFee: BigNumberish,
      setFee: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    increaseSampleLength(
      sampleLengthNext: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    mint(
      mintParams: {
        to: string;
        lower: BigNumberish;
        upper: BigNumberish;
        amount0: BigNumberish;
        amount1: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    poolState(overrides?: CallOverrides): Promise<
      [
        number,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        [number, number, number] & {
          index: number;
          length: number;
          lengthNext: number;
        },
        [BigNumber, BigNumber] & { token0: BigNumber; token1: BigNumber },
      ]
    >;

    positions(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;

    quote(
      params: {
        priceLimit: BigNumberish;
        amount: BigNumberish;
        exactIn: boolean;
        zeroForOne: boolean;
      },
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        inAmount: BigNumber;
        outAmount: BigNumber;
        priceAfter: BigNumber;
      }
    >;

    sample(
      secondsAgo: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber[], BigNumber[], BigNumber, BigNumber, number] & {
        tickSecondsAccum: BigNumber[];
        secondsPerLiquidityAccum: BigNumber[];
        averagePrice: BigNumber;
        averageLiquidity: BigNumber;
        averageTick: number;
      }
    >;

    samples(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[number, BigNumber, BigNumber]>;

    snapshot(
      params: { owner: string; lower: BigNumberish; upper: BigNumberish },
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        tickSecondsAccum: BigNumber;
        secondsPerLiquidityAccum: BigNumber;
        feesOwed0: BigNumber;
        feesOwed1: BigNumber;
      }
    >;

    swap(
      params: {
        to: string;
        priceLimit: BigNumberish;
        amount: BigNumberish;
        exactIn: boolean;
        zeroForOne: boolean;
        callbackData: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    tickSpacing(overrides?: CallOverrides): Promise<[number]>;

    ticks(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
  };

  burn(
    burnParams: {
      to: string;
      lower: BigNumberish;
      upper: BigNumberish;
      burnPercent: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  fees(
    protocolFee: BigNumberish,
    setFee: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  increaseSampleLength(
    sampleLengthNext: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  mint(
    mintParams: {
      to: string;
      lower: BigNumberish;
      upper: BigNumberish;
      amount0: BigNumberish;
      amount1: BigNumberish;
    },
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  poolState(overrides?: CallOverrides): Promise<
    [
      number,
      number,
      number,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      [number, number, number] & {
        index: number;
        length: number;
        lengthNext: number;
      },
      [BigNumber, BigNumber] & { token0: BigNumber; token1: BigNumber },
    ]
  >;

  positions(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;

  quote(
    params: {
      priceLimit: BigNumberish;
      amount: BigNumberish;
      exactIn: boolean;
      zeroForOne: boolean;
    },
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber, BigNumber] & {
      inAmount: BigNumber;
      outAmount: BigNumber;
      priceAfter: BigNumber;
    }
  >;

  sample(
    secondsAgo: BigNumberish[],
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber[], BigNumber[], BigNumber, BigNumber, number] & {
      tickSecondsAccum: BigNumber[];
      secondsPerLiquidityAccum: BigNumber[];
      averagePrice: BigNumber;
      averageLiquidity: BigNumber;
      averageTick: number;
    }
  >;

  samples(
    arg0: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<[number, BigNumber, BigNumber]>;

  snapshot(
    params: { owner: string; lower: BigNumberish; upper: BigNumberish },
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      tickSecondsAccum: BigNumber;
      secondsPerLiquidityAccum: BigNumber;
      feesOwed0: BigNumber;
      feesOwed1: BigNumber;
    }
  >;

  swap(
    params: {
      to: string;
      priceLimit: BigNumberish;
      amount: BigNumberish;
      exactIn: boolean;
      zeroForOne: boolean;
      callbackData: BytesLike;
    },
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  tickSpacing(overrides?: CallOverrides): Promise<number>;

  ticks(
    arg0: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;

  callStatic: {
    burn(
      burnParams: {
        to: string;
        lower: BigNumberish;
        upper: BigNumberish;
        burnPercent: BigNumberish;
      },
      overrides?: CallOverrides,
    ): Promise<void>;

    fees(
      protocolFee: BigNumberish,
      setFee: boolean,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber] & { token0Fees: BigNumber; token1Fees: BigNumber }
    >;

    increaseSampleLength(
      sampleLengthNext: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    mint(
      mintParams: {
        to: string;
        lower: BigNumberish;
        upper: BigNumberish;
        amount0: BigNumberish;
        amount1: BigNumberish;
      },
      overrides?: CallOverrides,
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    poolState(overrides?: CallOverrides): Promise<
      [
        number,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        [number, number, number] & {
          index: number;
          length: number;
          lengthNext: number;
        },
        [BigNumber, BigNumber] & { token0: BigNumber; token1: BigNumber },
      ]
    >;

    positions(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;

    quote(
      params: {
        priceLimit: BigNumberish;
        amount: BigNumberish;
        exactIn: boolean;
        zeroForOne: boolean;
      },
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber] & {
        inAmount: BigNumber;
        outAmount: BigNumber;
        priceAfter: BigNumber;
      }
    >;

    sample(
      secondsAgo: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber[], BigNumber[], BigNumber, BigNumber, number] & {
        tickSecondsAccum: BigNumber[];
        secondsPerLiquidityAccum: BigNumber[];
        averagePrice: BigNumber;
        averageLiquidity: BigNumber;
        averageTick: number;
      }
    >;

    samples(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[number, BigNumber, BigNumber]>;

    snapshot(
      params: { owner: string; lower: BigNumberish; upper: BigNumberish },
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        tickSecondsAccum: BigNumber;
        secondsPerLiquidityAccum: BigNumber;
        feesOwed0: BigNumber;
        feesOwed1: BigNumber;
      }
    >;

    swap(
      params: {
        to: string;
        priceLimit: BigNumberish;
        amount: BigNumberish;
        exactIn: boolean;
        zeroForOne: boolean;
        callbackData: BytesLike;
      },
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
    >;

    tickSpacing(overrides?: CallOverrides): Promise<number>;

    ticks(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber, BigNumber, BigNumber, BigNumber]>;
  };

  filters: {};

  estimateGas: {
    burn(
      burnParams: {
        to: string;
        lower: BigNumberish;
        upper: BigNumberish;
        burnPercent: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    fees(
      protocolFee: BigNumberish,
      setFee: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    increaseSampleLength(
      sampleLengthNext: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    mint(
      mintParams: {
        to: string;
        lower: BigNumberish;
        upper: BigNumberish;
        amount0: BigNumberish;
        amount1: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    poolState(overrides?: CallOverrides): Promise<BigNumber>;

    positions(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    quote(
      params: {
        priceLimit: BigNumberish;
        amount: BigNumberish;
        exactIn: boolean;
        zeroForOne: boolean;
      },
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    sample(
      secondsAgo: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    samples(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    snapshot(
      params: { owner: string; lower: BigNumberish; upper: BigNumberish },
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    swap(
      params: {
        to: string;
        priceLimit: BigNumberish;
        amount: BigNumberish;
        exactIn: boolean;
        zeroForOne: boolean;
        callbackData: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    tickSpacing(overrides?: CallOverrides): Promise<BigNumber>;

    ticks(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    burn(
      burnParams: {
        to: string;
        lower: BigNumberish;
        upper: BigNumberish;
        burnPercent: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    fees(
      protocolFee: BigNumberish,
      setFee: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    increaseSampleLength(
      sampleLengthNext: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    mint(
      mintParams: {
        to: string;
        lower: BigNumberish;
        upper: BigNumberish;
        amount0: BigNumberish;
        amount1: BigNumberish;
      },
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolState(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    positions(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    quote(
      params: {
        priceLimit: BigNumberish;
        amount: BigNumberish;
        exactIn: boolean;
        zeroForOne: boolean;
      },
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    sample(
      secondsAgo: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    samples(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    snapshot(
      params: { owner: string; lower: BigNumberish; upper: BigNumberish },
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    swap(
      params: {
        to: string;
        priceLimit: BigNumberish;
        amount: BigNumberish;
        exactIn: boolean;
        zeroForOne: boolean;
        callbackData: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    tickSpacing(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ticks(
      arg0: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
