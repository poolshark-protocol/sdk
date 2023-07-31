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
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import type { TypedEventFilter, TypedEvent, TypedListener } from './common';

interface TicksInterface extends ethers.utils.Interface {
  functions: {};

  events: {
    'Initialize(int24,int24,uint160)': EventFragment;
    'Swap(address,bool,uint256,uint256,uint160,uint128,int24)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Initialize'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Swap'): EventFragment;
}

export type InitializeEvent = TypedEvent<
  [number, number, BigNumber] & {
    minTick: number;
    maxTick: number;
    startPrice: BigNumber;
  }
>;

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

export class Ticks extends BaseContract {
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

  interface: TicksInterface;

  functions: {};

  callStatic: {};

  filters: {
    'Initialize(int24,int24,uint160)'(
      minTick?: null,
      maxTick?: null,
      startPrice?: null,
    ): TypedEventFilter<
      [number, number, BigNumber],
      { minTick: number; maxTick: number; startPrice: BigNumber }
    >;

    Initialize(
      minTick?: null,
      maxTick?: null,
      startPrice?: null,
    ): TypedEventFilter<
      [number, number, BigNumber],
      { minTick: number; maxTick: number; startPrice: BigNumber }
    >;

    'Swap(address,bool,uint256,uint256,uint160,uint128,int24)'(
      recipient?: string | null,
      zeroForOne?: null,
      amountIn?: null,
      amountOut?: null,
      price?: null,
      liquidity?: null,
      tickAtPrice?: null,
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
      tickAtPrice?: null,
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

  estimateGas: {};

  populateTransaction: {};
}
