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

interface LimitPoolManagerEventsInterface extends ethers.utils.Interface {
  functions: {};

  events: {
    "FactoryChanged(address,address)": EventFragment;
    "FeeToTransfer(address,address)": EventFragment;
    "OwnerTransfer(address,address)": EventFragment;
    "ProtocolFeesCollected(address[],uint128[],uint128[])": EventFragment;
    "ProtocolFeesModified(address[],uint16[],uint16[],bool[],uint128[],uint128[])": EventFragment;
    "TickSpacingEnabled(int16)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FactoryChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeToTransfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerTransfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProtocolFeesCollected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProtocolFeesModified"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TickSpacingEnabled"): EventFragment;
}

export type FactoryChangedEvent = TypedEvent<
  [string, string] & { previousFactory: string; newFactory: string }
>;

export type FeeToTransferEvent = TypedEvent<
  [string, string] & { previousFeeTo: string; newFeeTo: string }
>;

export type OwnerTransferEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type ProtocolFeesCollectedEvent = TypedEvent<
  [string[], BigNumber[], BigNumber[]] & {
    collectPools: string[];
    token0Fees: BigNumber[];
    token1Fees: BigNumber[];
  }
>;

export type ProtocolFeesModifiedEvent = TypedEvent<
  [string[], number[], number[], boolean[], BigNumber[], BigNumber[]] & {
    modifyPools: string[];
    syncFees: number[];
    fillFees: number[];
    setFees: boolean[];
    token0Fees: BigNumber[];
    token1Fees: BigNumber[];
  }
>;

export type TickSpacingEnabledEvent = TypedEvent<
  [number] & { tickSpacing: number }
>;

export class LimitPoolManagerEvents extends BaseContract {
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

  interface: LimitPoolManagerEventsInterface;

  functions: {};

  callStatic: {};

  filters: {
    "FactoryChanged(address,address)"(
      previousFactory?: string | null,
      newFactory?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousFactory: string; newFactory: string }
    >;

    FactoryChanged(
      previousFactory?: string | null,
      newFactory?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousFactory: string; newFactory: string }
    >;

    "FeeToTransfer(address,address)"(
      previousFeeTo?: string | null,
      newFeeTo?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousFeeTo: string; newFeeTo: string }
    >;

    FeeToTransfer(
      previousFeeTo?: string | null,
      newFeeTo?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousFeeTo: string; newFeeTo: string }
    >;

    "OwnerTransfer(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnerTransfer(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "ProtocolFeesCollected(address[],uint128[],uint128[])"(
      collectPools?: null,
      token0Fees?: null,
      token1Fees?: null
    ): TypedEventFilter<
      [string[], BigNumber[], BigNumber[]],
      {
        collectPools: string[];
        token0Fees: BigNumber[];
        token1Fees: BigNumber[];
      }
    >;

    ProtocolFeesCollected(
      collectPools?: null,
      token0Fees?: null,
      token1Fees?: null
    ): TypedEventFilter<
      [string[], BigNumber[], BigNumber[]],
      {
        collectPools: string[];
        token0Fees: BigNumber[];
        token1Fees: BigNumber[];
      }
    >;

    "ProtocolFeesModified(address[],uint16[],uint16[],bool[],uint128[],uint128[])"(
      modifyPools?: null,
      syncFees?: null,
      fillFees?: null,
      setFees?: null,
      token0Fees?: null,
      token1Fees?: null
    ): TypedEventFilter<
      [string[], number[], number[], boolean[], BigNumber[], BigNumber[]],
      {
        modifyPools: string[];
        syncFees: number[];
        fillFees: number[];
        setFees: boolean[];
        token0Fees: BigNumber[];
        token1Fees: BigNumber[];
      }
    >;

    ProtocolFeesModified(
      modifyPools?: null,
      syncFees?: null,
      fillFees?: null,
      setFees?: null,
      token0Fees?: null,
      token1Fees?: null
    ): TypedEventFilter<
      [string[], number[], number[], boolean[], BigNumber[], BigNumber[]],
      {
        modifyPools: string[];
        syncFees: number[];
        fillFees: number[];
        setFees: boolean[];
        token0Fees: BigNumber[];
        token1Fees: BigNumber[];
      }
    >;

    "TickSpacingEnabled(int16)"(
      tickSpacing?: null
    ): TypedEventFilter<[number], { tickSpacing: number }>;

    TickSpacingEnabled(
      tickSpacing?: null
    ): TypedEventFilter<[number], { tickSpacing: number }>;
  };

  estimateGas: {};

  populateTransaction: {};
}
