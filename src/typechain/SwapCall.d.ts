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

interface SwapCallInterface extends ethers.utils.Interface {
  functions: {};

  events: {
    "SwapPool0(address,uint128,uint128,uint160,uint160)": EventFragment;
    "SwapPool1(address,uint128,uint128,uint160,uint160)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "SwapPool0"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SwapPool1"): EventFragment;
}

export type SwapPool0Event = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber] & {
    recipient: string;
    amountIn: BigNumber;
    amountOut: BigNumber;
    priceLimit: BigNumber;
    newPrice: BigNumber;
  }
>;

export type SwapPool1Event = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber, BigNumber] & {
    recipient: string;
    amountIn: BigNumber;
    amountOut: BigNumber;
    priceLimit: BigNumber;
    newPrice: BigNumber;
  }
>;

export class SwapCall extends BaseContract {
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

  interface: SwapCallInterface;

  functions: {};

  callStatic: {};

  filters: {
    "SwapPool0(address,uint128,uint128,uint160,uint160)"(
      recipient?: string | null,
      amountIn?: null,
      amountOut?: null,
      priceLimit?: null,
      newPrice?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        recipient: string;
        amountIn: BigNumber;
        amountOut: BigNumber;
        priceLimit: BigNumber;
        newPrice: BigNumber;
      }
    >;

    SwapPool0(
      recipient?: string | null,
      amountIn?: null,
      amountOut?: null,
      priceLimit?: null,
      newPrice?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        recipient: string;
        amountIn: BigNumber;
        amountOut: BigNumber;
        priceLimit: BigNumber;
        newPrice: BigNumber;
      }
    >;

    "SwapPool1(address,uint128,uint128,uint160,uint160)"(
      recipient?: string | null,
      amountIn?: null,
      amountOut?: null,
      priceLimit?: null,
      newPrice?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        recipient: string;
        amountIn: BigNumber;
        amountOut: BigNumber;
        priceLimit: BigNumber;
        newPrice: BigNumber;
      }
    >;

    SwapPool1(
      recipient?: string | null,
      amountIn?: null,
      amountOut?: null,
      priceLimit?: null,
      newPrice?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber, BigNumber],
      {
        recipient: string;
        amountIn: BigNumber;
        amountOut: BigNumber;
        priceLimit: BigNumber;
        newPrice: BigNumber;
      }
    >;
  };

  estimateGas: {};

  populateTransaction: {};
}
