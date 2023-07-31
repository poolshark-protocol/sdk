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

interface IPoolInterface extends ethers.utils.Interface {
  functions: {
    "immutables()": FunctionFragment;
    "swap((address,uint160,uint128,bool,bool,bytes))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "immutables",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swap",
    values: [
      {
        to: string;
        priceLimit: BigNumberish;
        amount: BigNumberish;
        exactIn: boolean;
        zeroForOne: boolean;
        callbackData: BytesLike;
      }
    ]
  ): string;

  decodeFunctionResult(functionFragment: "immutables", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "swap", data: BytesLike): Result;

  events: {};
}

export class IPool extends BaseContract {
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

  interface: IPoolInterface;

  functions: {
    immutables(
      overrides?: CallOverrides
    ): Promise<
      [
        [
          string,
          [BigNumber, BigNumber] & { min: BigNumber; max: BigNumber },
          string,
          string,
          number
        ] & {
          owner: string;
          bounds: [BigNumber, BigNumber] & { min: BigNumber; max: BigNumber };
          token0: string;
          token1: string;
          tickSpacing: number;
        }
      ]
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
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  immutables(
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      [BigNumber, BigNumber] & { min: BigNumber; max: BigNumber },
      string,
      string,
      number
    ] & {
      owner: string;
      bounds: [BigNumber, BigNumber] & { min: BigNumber; max: BigNumber };
      token0: string;
      token1: string;
      tickSpacing: number;
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
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    immutables(
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        [BigNumber, BigNumber] & { min: BigNumber; max: BigNumber },
        string,
        string,
        number
      ] & {
        owner: string;
        bounds: [BigNumber, BigNumber] & { min: BigNumber; max: BigNumber };
        token0: string;
        token1: string;
        tickSpacing: number;
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
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amount0: BigNumber; amount1: BigNumber }
    >;
  };

  filters: {};

  estimateGas: {
    immutables(overrides?: CallOverrides): Promise<BigNumber>;

    swap(
      params: {
        to: string;
        priceLimit: BigNumberish;
        amount: BigNumberish;
        exactIn: boolean;
        zeroForOne: boolean;
        callbackData: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    immutables(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    swap(
      params: {
        to: string;
        priceLimit: BigNumberish;
        amount: BigNumberish;
        exactIn: boolean;
        zeroForOne: boolean;
        callbackData: BytesLike;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
