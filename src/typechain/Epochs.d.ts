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
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface EpochsInterface extends ethers.utils.Interface {
  functions: {};

  events: {
    "FinalDeltasAccumulated(uint128,uint128,uint32,int24,bool)": EventFragment;
    "StashDeltasAccumulated(uint128,uint128,uint128,uint128,uint32,int24,bool)": EventFragment;
    "StashDeltasCleared(int24,bool)": EventFragment;
    "Sync(uint160,uint160,uint128,uint128,uint32,uint32,int24,int24)": EventFragment;
    "SyncFeesCollected(address,uint128,uint128)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FinalDeltasAccumulated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StashDeltasAccumulated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StashDeltasCleared"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Sync"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SyncFeesCollected"): EventFragment;
}

export type FinalDeltasAccumulatedEvent = TypedEvent<
  [BigNumber, BigNumber, number, number, boolean] & {
    amountInDelta: BigNumber;
    amountOutDelta: BigNumber;
    accumEpoch: number;
    accumTick: number;
    isPool0: boolean;
  }
>;

export type StashDeltasAccumulatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber, number, number, boolean] & {
    amountInDelta: BigNumber;
    amountOutDelta: BigNumber;
    amountInDeltaMaxStashed: BigNumber;
    amountOutDeltaMaxStashed: BigNumber;
    accumEpoch: number;
    stashTick: number;
    isPool0: boolean;
  }
>;

export type StashDeltasClearedEvent = TypedEvent<
  [number, boolean] & { stashTick: number; isPool0: boolean }
>;

export type SyncEvent = TypedEvent<
  [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    number,
    number,
    number,
    number
  ] & {
    pool0Price: BigNumber;
    pool1Price: BigNumber;
    pool0Liquidity: BigNumber;
    pool1Liquidity: BigNumber;
    auctionStart: number;
    accumEpoch: number;
    oldLatestTick: number;
    newLatestTick: number;
  }
>;

export type SyncFeesCollectedEvent = TypedEvent<
  [string, BigNumber, BigNumber] & {
    collector: string;
    token0Amount: BigNumber;
    token1Amount: BigNumber;
  }
>;

export class Epochs extends BaseContract {
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

  interface: EpochsInterface;

  functions: {};

  callStatic: {};

  filters: {
    "FinalDeltasAccumulated(uint128,uint128,uint32,int24,bool)"(
      amountInDelta?: null,
      amountOutDelta?: null,
      accumEpoch?: null,
      accumTick?: null,
      isPool0?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, number, number, boolean],
      {
        amountInDelta: BigNumber;
        amountOutDelta: BigNumber;
        accumEpoch: number;
        accumTick: number;
        isPool0: boolean;
      }
    >;

    FinalDeltasAccumulated(
      amountInDelta?: null,
      amountOutDelta?: null,
      accumEpoch?: null,
      accumTick?: null,
      isPool0?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, number, number, boolean],
      {
        amountInDelta: BigNumber;
        amountOutDelta: BigNumber;
        accumEpoch: number;
        accumTick: number;
        isPool0: boolean;
      }
    >;

    "StashDeltasAccumulated(uint128,uint128,uint128,uint128,uint32,int24,bool)"(
      amountInDelta?: null,
      amountOutDelta?: null,
      amountInDeltaMaxStashed?: null,
      amountOutDeltaMaxStashed?: null,
      accumEpoch?: null,
      stashTick?: null,
      isPool0?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, BigNumber, number, number, boolean],
      {
        amountInDelta: BigNumber;
        amountOutDelta: BigNumber;
        amountInDeltaMaxStashed: BigNumber;
        amountOutDeltaMaxStashed: BigNumber;
        accumEpoch: number;
        stashTick: number;
        isPool0: boolean;
      }
    >;

    StashDeltasAccumulated(
      amountInDelta?: null,
      amountOutDelta?: null,
      amountInDeltaMaxStashed?: null,
      amountOutDeltaMaxStashed?: null,
      accumEpoch?: null,
      stashTick?: null,
      isPool0?: null
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber, BigNumber, number, number, boolean],
      {
        amountInDelta: BigNumber;
        amountOutDelta: BigNumber;
        amountInDeltaMaxStashed: BigNumber;
        amountOutDeltaMaxStashed: BigNumber;
        accumEpoch: number;
        stashTick: number;
        isPool0: boolean;
      }
    >;

    "StashDeltasCleared(int24,bool)"(
      stashTick?: null,
      isPool0?: null
    ): TypedEventFilter<
      [number, boolean],
      { stashTick: number; isPool0: boolean }
    >;

    StashDeltasCleared(
      stashTick?: null,
      isPool0?: null
    ): TypedEventFilter<
      [number, boolean],
      { stashTick: number; isPool0: boolean }
    >;

    "Sync(uint160,uint160,uint128,uint128,uint32,uint32,int24,int24)"(
      pool0Price?: null,
      pool1Price?: null,
      pool0Liquidity?: null,
      pool1Liquidity?: null,
      auctionStart?: null,
      accumEpoch?: null,
      oldLatestTick?: null,
      newLatestTick?: null
    ): TypedEventFilter<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        number,
        number,
        number
      ],
      {
        pool0Price: BigNumber;
        pool1Price: BigNumber;
        pool0Liquidity: BigNumber;
        pool1Liquidity: BigNumber;
        auctionStart: number;
        accumEpoch: number;
        oldLatestTick: number;
        newLatestTick: number;
      }
    >;

    Sync(
      pool0Price?: null,
      pool1Price?: null,
      pool0Liquidity?: null,
      pool1Liquidity?: null,
      auctionStart?: null,
      accumEpoch?: null,
      oldLatestTick?: null,
      newLatestTick?: null
    ): TypedEventFilter<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        number,
        number,
        number
      ],
      {
        pool0Price: BigNumber;
        pool1Price: BigNumber;
        pool0Liquidity: BigNumber;
        pool1Liquidity: BigNumber;
        auctionStart: number;
        accumEpoch: number;
        oldLatestTick: number;
        newLatestTick: number;
      }
    >;

    "SyncFeesCollected(address,uint128,uint128)"(
      collector?: null,
      token0Amount?: null,
      token1Amount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { collector: string; token0Amount: BigNumber; token1Amount: BigNumber }
    >;

    SyncFeesCollected(
      collector?: null,
      token0Amount?: null,
      token1Amount?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber],
      { collector: string; token0Amount: BigNumber; token1Amount: BigNumber }
    >;
  };

  estimateGas: {};

  populateTransaction: {};
}
