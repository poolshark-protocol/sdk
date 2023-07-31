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

interface LimitPoolFactoryInterface extends ethers.utils.Interface {
  functions: {
    "createLimitPool(address,address,int16,uint160)": FunctionFragment;
    "getLimitPool(address,address,int16)": FunctionFragment;
    "implementation()": FunctionFragment;
    "limitPools(bytes32)": FunctionFragment;
    "owner()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createLimitPool",
    values: [string, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLimitPool",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "limitPools",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "createLimitPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLimitPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "limitPools", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;

  events: {
    "PoolCreated(address,address,address,int16)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PoolCreated"): EventFragment;
}

export type PoolCreatedEvent = TypedEvent<
  [string, string, string, number] & {
    pool: string;
    token0: string;
    token1: string;
    tickSpacing: number;
  }
>;

export class LimitPoolFactory extends BaseContract {
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

  interface: LimitPoolFactoryInterface;

  functions: {
    createLimitPool(
      tokenIn: string,
      tokenOut: string,
      tickSpacing: BigNumberish,
      startPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getLimitPool(
      tokenIn: string,
      tokenOut: string,
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    implementation(overrides?: CallOverrides): Promise<[string]>;

    limitPools(arg0: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;
  };

  createLimitPool(
    tokenIn: string,
    tokenOut: string,
    tickSpacing: BigNumberish,
    startPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getLimitPool(
    tokenIn: string,
    tokenOut: string,
    tickSpacing: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  implementation(overrides?: CallOverrides): Promise<string>;

  limitPools(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    createLimitPool(
      tokenIn: string,
      tokenOut: string,
      tickSpacing: BigNumberish,
      startPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getLimitPool(
      tokenIn: string,
      tokenOut: string,
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    implementation(overrides?: CallOverrides): Promise<string>;

    limitPools(arg0: BytesLike, overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "PoolCreated(address,address,address,int16)"(
      pool?: null,
      token0?: string | null,
      token1?: string | null,
      tickSpacing?: BigNumberish | null
    ): TypedEventFilter<
      [string, string, string, number],
      { pool: string; token0: string; token1: string; tickSpacing: number }
    >;

    PoolCreated(
      pool?: null,
      token0?: string | null,
      token1?: string | null,
      tickSpacing?: BigNumberish | null
    ): TypedEventFilter<
      [string, string, string, number],
      { pool: string; token0: string; token1: string; tickSpacing: number }
    >;
  };

  estimateGas: {
    createLimitPool(
      tokenIn: string,
      tokenOut: string,
      tickSpacing: BigNumberish,
      startPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getLimitPool(
      tokenIn: string,
      tokenOut: string,
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<BigNumber>;

    limitPools(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createLimitPool(
      tokenIn: string,
      tokenOut: string,
      tickSpacing: BigNumberish,
      startPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getLimitPool(
      tokenIn: string,
      tokenOut: string,
      tickSpacing: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    limitPools(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}