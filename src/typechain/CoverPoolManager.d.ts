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
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface CoverPoolManagerInterface extends ethers.utils.Interface {
  functions: {
    "MAX_PROTOCOL_FEE()": FunctionFragment;
    "collectProtocolFees(address[])": FunctionFragment;
    "enableTwapSource(bytes32,address,address)": FunctionFragment;
    "enableVolatilityTier(bytes32,uint16,int16,uint16,uint128,uint16,uint16,uint16,uint16,int16,bool)": FunctionFragment;
    "factory()": FunctionFragment;
    "feeTo()": FunctionFragment;
    "modifyProtocolFees(address[],uint16[],uint16[],bool[])": FunctionFragment;
    "modifyVolatilityTierFees(bytes32,uint16,int16,uint16,uint16,uint16)": FunctionFragment;
    "oneSecond()": FunctionFragment;
    "owner()": FunctionFragment;
    "setFactory(address)": FunctionFragment;
    "transferFeeTo(address)": FunctionFragment;
    "transferOwner(address)": FunctionFragment;
    "twapSources(bytes32)": FunctionFragment;
    "volatilityTiers(bytes32,uint16,int16,uint16)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "MAX_PROTOCOL_FEE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "collectProtocolFees",
    values: [string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "enableTwapSource",
    values: [BytesLike, string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "enableVolatilityTier",
    values: [
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      boolean
    ]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(functionFragment: "feeTo", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "modifyProtocolFees",
    values: [string[], BigNumberish[], BigNumberish[], boolean[]]
  ): string;
  encodeFunctionData(
    functionFragment: "modifyVolatilityTierFees",
    values: [
      BytesLike,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "oneSecond", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "setFactory", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferFeeTo",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwner",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "twapSources",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "volatilityTiers",
    values: [BytesLike, BigNumberish, BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "MAX_PROTOCOL_FEE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "collectProtocolFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableTwapSource",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableVolatilityTier",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "feeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "modifyProtocolFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "modifyVolatilityTierFees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "oneSecond", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setFactory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferFeeTo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "twapSources",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "volatilityTiers",
    data: BytesLike
  ): Result;

  events: {
    "FactoryChanged(address,address)": EventFragment;
    "FeeToTransfer(address,address)": EventFragment;
    "OwnerTransfer(address,address)": EventFragment;
    "ProtocolFeesCollected(address[],uint128[],uint128[])": EventFragment;
    "ProtocolFeesModified(address[],uint16[],uint16[],bool[],uint128[],uint128[])": EventFragment;
    "TwapSourceEnabled(bytes32,address,address,address)": EventFragment;
    "VolatilityTierEnabled(address,address,uint16,int16,uint16,uint128,uint16,uint16,uint16,uint16,int16,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FactoryChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FeeToTransfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnerTransfer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProtocolFeesCollected"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProtocolFeesModified"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TwapSourceEnabled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "VolatilityTierEnabled"): EventFragment;
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

export type TwapSourceEnabledEvent = TypedEvent<
  [string, string, string, string] & {
    sourceName: string;
    sourceAddress: string;
    curveAddress: string;
    factoryAddress: string;
  }
>;

export type VolatilityTierEnabledEvent = TypedEvent<
  [
    string,
    string,
    number,
    number,
    number,
    BigNumber,
    number,
    number,
    number,
    number,
    number,
    boolean
  ] & {
    sourceAddress: string;
    curveAddress: string;
    feeTier: number;
    tickSpread: number;
    twapLength: number;
    minAmountPerAuction: BigNumber;
    auctionLength: number;
    blockTime: number;
    syncFee: number;
    fillFee: number;
    minPositionWidth: number;
    minLowerPriced: boolean;
  }
>;

export class CoverPoolManager extends BaseContract {
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

  interface: CoverPoolManagerInterface;

  functions: {
    MAX_PROTOCOL_FEE(overrides?: CallOverrides): Promise<[number]>;

    collectProtocolFees(
      collectPools: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enableTwapSource(
      sourceName: BytesLike,
      sourceAddress: string,
      curveAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    enableVolatilityTier(
      sourceName: BytesLike,
      feeTier: BigNumberish,
      tickSpread: BigNumberish,
      twapLength: BigNumberish,
      minAmountPerAuction: BigNumberish,
      auctionLength: BigNumberish,
      blockTime: BigNumberish,
      syncFee: BigNumberish,
      fillFee: BigNumberish,
      minPositionWidth: BigNumberish,
      minLowerPriced: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    feeTo(overrides?: CallOverrides): Promise<[string]>;

    modifyProtocolFees(
      modifyPools: string[],
      syncFees: BigNumberish[],
      fillFees: BigNumberish[],
      setFees: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    modifyVolatilityTierFees(
      sourceName: BytesLike,
      feeTier: BigNumberish,
      tickSpread: BigNumberish,
      twapLength: BigNumberish,
      syncFee: BigNumberish,
      fillFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    oneSecond(overrides?: CallOverrides): Promise<[number]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setFactory(
      factory_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferFeeTo(
      newFeeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    twapSources(
      sourceName: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string] & { sourceAddress: string; curveAddress: string }
    >;

    volatilityTiers(
      sourceName: BytesLike,
      feeTier: BigNumberish,
      tickSpread: BigNumberish,
      twapLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        [BigNumber, number, number, number, number, number, boolean] & {
          minAmountPerAuction: BigNumber;
          auctionLength: number;
          blockTime: number;
          syncFee: number;
          fillFee: number;
          minPositionWidth: number;
          minAmountLowerPriced: boolean;
        }
      ] & {
        config: [BigNumber, number, number, number, number, number, boolean] & {
          minAmountPerAuction: BigNumber;
          auctionLength: number;
          blockTime: number;
          syncFee: number;
          fillFee: number;
          minPositionWidth: number;
          minAmountLowerPriced: boolean;
        };
      }
    >;
  };

  MAX_PROTOCOL_FEE(overrides?: CallOverrides): Promise<number>;

  collectProtocolFees(
    collectPools: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enableTwapSource(
    sourceName: BytesLike,
    sourceAddress: string,
    curveAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  enableVolatilityTier(
    sourceName: BytesLike,
    feeTier: BigNumberish,
    tickSpread: BigNumberish,
    twapLength: BigNumberish,
    minAmountPerAuction: BigNumberish,
    auctionLength: BigNumberish,
    blockTime: BigNumberish,
    syncFee: BigNumberish,
    fillFee: BigNumberish,
    minPositionWidth: BigNumberish,
    minLowerPriced: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  factory(overrides?: CallOverrides): Promise<string>;

  feeTo(overrides?: CallOverrides): Promise<string>;

  modifyProtocolFees(
    modifyPools: string[],
    syncFees: BigNumberish[],
    fillFees: BigNumberish[],
    setFees: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  modifyVolatilityTierFees(
    sourceName: BytesLike,
    feeTier: BigNumberish,
    tickSpread: BigNumberish,
    twapLength: BigNumberish,
    syncFee: BigNumberish,
    fillFee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  oneSecond(overrides?: CallOverrides): Promise<number>;

  owner(overrides?: CallOverrides): Promise<string>;

  setFactory(
    factory_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferFeeTo(
    newFeeTo: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwner(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  twapSources(
    sourceName: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, string] & { sourceAddress: string; curveAddress: string }
  >;

  volatilityTiers(
    sourceName: BytesLike,
    feeTier: BigNumberish,
    tickSpread: BigNumberish,
    twapLength: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, number, number, number, number, number, boolean] & {
      minAmountPerAuction: BigNumber;
      auctionLength: number;
      blockTime: number;
      syncFee: number;
      fillFee: number;
      minPositionWidth: number;
      minAmountLowerPriced: boolean;
    }
  >;

  callStatic: {
    MAX_PROTOCOL_FEE(overrides?: CallOverrides): Promise<number>;

    collectProtocolFees(
      collectPools: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    enableTwapSource(
      sourceName: BytesLike,
      sourceAddress: string,
      curveAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    enableVolatilityTier(
      sourceName: BytesLike,
      feeTier: BigNumberish,
      tickSpread: BigNumberish,
      twapLength: BigNumberish,
      minAmountPerAuction: BigNumberish,
      auctionLength: BigNumberish,
      blockTime: BigNumberish,
      syncFee: BigNumberish,
      fillFee: BigNumberish,
      minPositionWidth: BigNumberish,
      minLowerPriced: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    factory(overrides?: CallOverrides): Promise<string>;

    feeTo(overrides?: CallOverrides): Promise<string>;

    modifyProtocolFees(
      modifyPools: string[],
      syncFees: BigNumberish[],
      fillFees: BigNumberish[],
      setFees: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    modifyVolatilityTierFees(
      sourceName: BytesLike,
      feeTier: BigNumberish,
      tickSpread: BigNumberish,
      twapLength: BigNumberish,
      syncFee: BigNumberish,
      fillFee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    oneSecond(overrides?: CallOverrides): Promise<number>;

    owner(overrides?: CallOverrides): Promise<string>;

    setFactory(factory_: string, overrides?: CallOverrides): Promise<void>;

    transferFeeTo(newFeeTo: string, overrides?: CallOverrides): Promise<void>;

    transferOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;

    twapSources(
      sourceName: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string] & { sourceAddress: string; curveAddress: string }
    >;

    volatilityTiers(
      sourceName: BytesLike,
      feeTier: BigNumberish,
      tickSpread: BigNumberish,
      twapLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, number, number, number, number, number, boolean] & {
        minAmountPerAuction: BigNumber;
        auctionLength: number;
        blockTime: number;
        syncFee: number;
        fillFee: number;
        minPositionWidth: number;
        minAmountLowerPriced: boolean;
      }
    >;
  };

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

    "TwapSourceEnabled(bytes32,address,address,address)"(
      sourceName?: null,
      sourceAddress?: null,
      curveAddress?: null,
      factoryAddress?: null
    ): TypedEventFilter<
      [string, string, string, string],
      {
        sourceName: string;
        sourceAddress: string;
        curveAddress: string;
        factoryAddress: string;
      }
    >;

    TwapSourceEnabled(
      sourceName?: null,
      sourceAddress?: null,
      curveAddress?: null,
      factoryAddress?: null
    ): TypedEventFilter<
      [string, string, string, string],
      {
        sourceName: string;
        sourceAddress: string;
        curveAddress: string;
        factoryAddress: string;
      }
    >;

    "VolatilityTierEnabled(address,address,uint16,int16,uint16,uint128,uint16,uint16,uint16,uint16,int16,bool)"(
      sourceAddress?: null,
      curveAddress?: null,
      feeTier?: null,
      tickSpread?: null,
      twapLength?: null,
      minAmountPerAuction?: null,
      auctionLength?: null,
      blockTime?: null,
      syncFee?: null,
      fillFee?: null,
      minPositionWidth?: null,
      minLowerPriced?: null
    ): TypedEventFilter<
      [
        string,
        string,
        number,
        number,
        number,
        BigNumber,
        number,
        number,
        number,
        number,
        number,
        boolean
      ],
      {
        sourceAddress: string;
        curveAddress: string;
        feeTier: number;
        tickSpread: number;
        twapLength: number;
        minAmountPerAuction: BigNumber;
        auctionLength: number;
        blockTime: number;
        syncFee: number;
        fillFee: number;
        minPositionWidth: number;
        minLowerPriced: boolean;
      }
    >;

    VolatilityTierEnabled(
      sourceAddress?: null,
      curveAddress?: null,
      feeTier?: null,
      tickSpread?: null,
      twapLength?: null,
      minAmountPerAuction?: null,
      auctionLength?: null,
      blockTime?: null,
      syncFee?: null,
      fillFee?: null,
      minPositionWidth?: null,
      minLowerPriced?: null
    ): TypedEventFilter<
      [
        string,
        string,
        number,
        number,
        number,
        BigNumber,
        number,
        number,
        number,
        number,
        number,
        boolean
      ],
      {
        sourceAddress: string;
        curveAddress: string;
        feeTier: number;
        tickSpread: number;
        twapLength: number;
        minAmountPerAuction: BigNumber;
        auctionLength: number;
        blockTime: number;
        syncFee: number;
        fillFee: number;
        minPositionWidth: number;
        minLowerPriced: boolean;
      }
    >;
  };

  estimateGas: {
    MAX_PROTOCOL_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    collectProtocolFees(
      collectPools: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enableTwapSource(
      sourceName: BytesLike,
      sourceAddress: string,
      curveAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    enableVolatilityTier(
      sourceName: BytesLike,
      feeTier: BigNumberish,
      tickSpread: BigNumberish,
      twapLength: BigNumberish,
      minAmountPerAuction: BigNumberish,
      auctionLength: BigNumberish,
      blockTime: BigNumberish,
      syncFee: BigNumberish,
      fillFee: BigNumberish,
      minPositionWidth: BigNumberish,
      minLowerPriced: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    feeTo(overrides?: CallOverrides): Promise<BigNumber>;

    modifyProtocolFees(
      modifyPools: string[],
      syncFees: BigNumberish[],
      fillFees: BigNumberish[],
      setFees: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    modifyVolatilityTierFees(
      sourceName: BytesLike,
      feeTier: BigNumberish,
      tickSpread: BigNumberish,
      twapLength: BigNumberish,
      syncFee: BigNumberish,
      fillFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    oneSecond(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setFactory(
      factory_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferFeeTo(
      newFeeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    twapSources(
      sourceName: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    volatilityTiers(
      sourceName: BytesLike,
      feeTier: BigNumberish,
      tickSpread: BigNumberish,
      twapLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MAX_PROTOCOL_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    collectProtocolFees(
      collectPools: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enableTwapSource(
      sourceName: BytesLike,
      sourceAddress: string,
      curveAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    enableVolatilityTier(
      sourceName: BytesLike,
      feeTier: BigNumberish,
      tickSpread: BigNumberish,
      twapLength: BigNumberish,
      minAmountPerAuction: BigNumberish,
      auctionLength: BigNumberish,
      blockTime: BigNumberish,
      syncFee: BigNumberish,
      fillFee: BigNumberish,
      minPositionWidth: BigNumberish,
      minLowerPriced: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    modifyProtocolFees(
      modifyPools: string[],
      syncFees: BigNumberish[],
      fillFees: BigNumberish[],
      setFees: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    modifyVolatilityTierFees(
      sourceName: BytesLike,
      feeTier: BigNumberish,
      tickSpread: BigNumberish,
      twapLength: BigNumberish,
      syncFee: BigNumberish,
      fillFee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    oneSecond(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setFactory(
      factory_: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferFeeTo(
      newFeeTo: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    twapSources(
      sourceName: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    volatilityTiers(
      sourceName: BytesLike,
      feeTier: BigNumberish,
      tickSpread: BigNumberish,
      twapLength: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
