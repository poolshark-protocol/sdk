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

interface UniswapV3SourceInterface extends ethers.utils.Interface {
  functions: {
    "calculateAverageTick((address,(uint160,uint160),address,address,address,uint256,uint32,int16,int16,uint16,uint16,uint16,uint8,uint8,bool),int24)": FunctionFragment;
    "factory()": FunctionFragment;
    "feeTierTickSpacing(uint16)": FunctionFragment;
    "getPool(address,address,uint16)": FunctionFragment;
    "initialize((address,(uint160,uint160),address,address,address,uint256,uint32,int16,int16,uint16,uint16,uint16,uint8,uint8,bool))": FunctionFragment;
    "oneSecond()": FunctionFragment;
    "uniV3Factory()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "calculateAverageTick",
    values: [
      {
        source: string;
        bounds: { min: BigNumberish; max: BigNumberish };
        token0: string;
        token1: string;
        inputPool: string;
        minAmountPerAuction: BigNumberish;
        genesisTime: BigNumberish;
        minPositionWidth: BigNumberish;
        tickSpread: BigNumberish;
        twapLength: BigNumberish;
        auctionLength: BigNumberish;
        blockTime: BigNumberish;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        minAmountLowerPriced: boolean;
      },
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "factory", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "feeTierTickSpacing",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPool",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      {
        source: string;
        bounds: { min: BigNumberish; max: BigNumberish };
        token0: string;
        token1: string;
        inputPool: string;
        minAmountPerAuction: BigNumberish;
        genesisTime: BigNumberish;
        minPositionWidth: BigNumberish;
        tickSpread: BigNumberish;
        twapLength: BigNumberish;
        auctionLength: BigNumberish;
        blockTime: BigNumberish;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        minAmountLowerPriced: boolean;
      }
    ]
  ): string;
  encodeFunctionData(functionFragment: "oneSecond", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "uniV3Factory",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "calculateAverageTick",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "factory", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "feeTierTickSpacing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPool", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "oneSecond", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "uniV3Factory",
    data: BytesLike
  ): Result;

  events: {};
}

export class UniswapV3Source extends BaseContract {
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

  interface: UniswapV3SourceInterface;

  functions: {
    calculateAverageTick(
      constants: {
        source: string;
        bounds: { min: BigNumberish; max: BigNumberish };
        token0: string;
        token1: string;
        inputPool: string;
        minAmountPerAuction: BigNumberish;
        genesisTime: BigNumberish;
        minPositionWidth: BigNumberish;
        tickSpread: BigNumberish;
        twapLength: BigNumberish;
        auctionLength: BigNumberish;
        blockTime: BigNumberish;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        minAmountLowerPriced: boolean;
      },
      latestTick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number] & { averageTick: number }>;

    factory(overrides?: CallOverrides): Promise<[string]>;

    feeTierTickSpacing(
      feeTier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number]>;

    getPool(
      token0: string,
      token1: string,
      feeTier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string] & { pool: string }>;

    initialize(
      constants: {
        source: string;
        bounds: { min: BigNumberish; max: BigNumberish };
        token0: string;
        token1: string;
        inputPool: string;
        minAmountPerAuction: BigNumberish;
        genesisTime: BigNumberish;
        minPositionWidth: BigNumberish;
        tickSpread: BigNumberish;
        twapLength: BigNumberish;
        auctionLength: BigNumberish;
        blockTime: BigNumberish;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        minAmountLowerPriced: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    oneSecond(overrides?: CallOverrides): Promise<[number]>;

    uniV3Factory(overrides?: CallOverrides): Promise<[string]>;
  };

  calculateAverageTick(
    constants: {
      source: string;
      bounds: { min: BigNumberish; max: BigNumberish };
      token0: string;
      token1: string;
      inputPool: string;
      minAmountPerAuction: BigNumberish;
      genesisTime: BigNumberish;
      minPositionWidth: BigNumberish;
      tickSpread: BigNumberish;
      twapLength: BigNumberish;
      auctionLength: BigNumberish;
      blockTime: BigNumberish;
      token0Decimals: BigNumberish;
      token1Decimals: BigNumberish;
      minAmountLowerPriced: boolean;
    },
    latestTick: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  factory(overrides?: CallOverrides): Promise<string>;

  feeTierTickSpacing(
    feeTier: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number>;

  getPool(
    token0: string,
    token1: string,
    feeTier: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  initialize(
    constants: {
      source: string;
      bounds: { min: BigNumberish; max: BigNumberish };
      token0: string;
      token1: string;
      inputPool: string;
      minAmountPerAuction: BigNumberish;
      genesisTime: BigNumberish;
      minPositionWidth: BigNumberish;
      tickSpread: BigNumberish;
      twapLength: BigNumberish;
      auctionLength: BigNumberish;
      blockTime: BigNumberish;
      token0Decimals: BigNumberish;
      token1Decimals: BigNumberish;
      minAmountLowerPriced: boolean;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  oneSecond(overrides?: CallOverrides): Promise<number>;

  uniV3Factory(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    calculateAverageTick(
      constants: {
        source: string;
        bounds: { min: BigNumberish; max: BigNumberish };
        token0: string;
        token1: string;
        inputPool: string;
        minAmountPerAuction: BigNumberish;
        genesisTime: BigNumberish;
        minPositionWidth: BigNumberish;
        tickSpread: BigNumberish;
        twapLength: BigNumberish;
        auctionLength: BigNumberish;
        blockTime: BigNumberish;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        minAmountLowerPriced: boolean;
      },
      latestTick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    factory(overrides?: CallOverrides): Promise<string>;

    feeTierTickSpacing(
      feeTier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number>;

    getPool(
      token0: string,
      token1: string,
      feeTier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(
      constants: {
        source: string;
        bounds: { min: BigNumberish; max: BigNumberish };
        token0: string;
        token1: string;
        inputPool: string;
        minAmountPerAuction: BigNumberish;
        genesisTime: BigNumberish;
        minPositionWidth: BigNumberish;
        tickSpread: BigNumberish;
        twapLength: BigNumberish;
        auctionLength: BigNumberish;
        blockTime: BigNumberish;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        minAmountLowerPriced: boolean;
      },
      overrides?: CallOverrides
    ): Promise<
      [number, number] & { initializable: number; startingTick: number }
    >;

    oneSecond(overrides?: CallOverrides): Promise<number>;

    uniV3Factory(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    calculateAverageTick(
      constants: {
        source: string;
        bounds: { min: BigNumberish; max: BigNumberish };
        token0: string;
        token1: string;
        inputPool: string;
        minAmountPerAuction: BigNumberish;
        genesisTime: BigNumberish;
        minPositionWidth: BigNumberish;
        tickSpread: BigNumberish;
        twapLength: BigNumberish;
        auctionLength: BigNumberish;
        blockTime: BigNumberish;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        minAmountLowerPriced: boolean;
      },
      latestTick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    factory(overrides?: CallOverrides): Promise<BigNumber>;

    feeTierTickSpacing(
      feeTier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPool(
      token0: string,
      token1: string,
      feeTier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      constants: {
        source: string;
        bounds: { min: BigNumberish; max: BigNumberish };
        token0: string;
        token1: string;
        inputPool: string;
        minAmountPerAuction: BigNumberish;
        genesisTime: BigNumberish;
        minPositionWidth: BigNumberish;
        tickSpread: BigNumberish;
        twapLength: BigNumberish;
        auctionLength: BigNumberish;
        blockTime: BigNumberish;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        minAmountLowerPriced: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    oneSecond(overrides?: CallOverrides): Promise<BigNumber>;

    uniV3Factory(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    calculateAverageTick(
      constants: {
        source: string;
        bounds: { min: BigNumberish; max: BigNumberish };
        token0: string;
        token1: string;
        inputPool: string;
        minAmountPerAuction: BigNumberish;
        genesisTime: BigNumberish;
        minPositionWidth: BigNumberish;
        tickSpread: BigNumberish;
        twapLength: BigNumberish;
        auctionLength: BigNumberish;
        blockTime: BigNumberish;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        minAmountLowerPriced: boolean;
      },
      latestTick: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    feeTierTickSpacing(
      feeTier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPool(
      token0: string,
      token1: string,
      feeTier: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      constants: {
        source: string;
        bounds: { min: BigNumberish; max: BigNumberish };
        token0: string;
        token1: string;
        inputPool: string;
        minAmountPerAuction: BigNumberish;
        genesisTime: BigNumberish;
        minPositionWidth: BigNumberish;
        tickSpread: BigNumberish;
        twapLength: BigNumberish;
        auctionLength: BigNumberish;
        blockTime: BigNumberish;
        token0Decimals: BigNumberish;
        token1Decimals: BigNumberish;
        minAmountLowerPriced: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    oneSecond(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    uniV3Factory(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
