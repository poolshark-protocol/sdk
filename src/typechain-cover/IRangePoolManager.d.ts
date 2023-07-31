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
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import type { TypedEventFilter, TypedEvent, TypedListener } from './common';

interface IRangePoolManagerInterface extends ethers.utils.Interface {
  functions: {
    'feeTiers(uint16)': FunctionFragment;
    'feeTo()': FunctionFragment;
    'owner()': FunctionFragment;
    'protocolFees(address)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'feeTiers',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'feeTo', values?: undefined): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'protocolFees',
    values: [string],
  ): string;

  decodeFunctionResult(functionFragment: 'feeTiers', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'feeTo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'protocolFees',
    data: BytesLike,
  ): Result;

  events: {};
}

export class IRangePoolManager extends BaseContract {
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

  interface: IRangePoolManagerInterface;

  functions: {
    feeTiers(
      swapFee: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[number]>;

    feeTo(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    protocolFees(pool: string, overrides?: CallOverrides): Promise<[number]>;
  };

  feeTiers(swapFee: BigNumberish, overrides?: CallOverrides): Promise<number>;

  feeTo(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  protocolFees(pool: string, overrides?: CallOverrides): Promise<number>;

  callStatic: {
    feeTiers(swapFee: BigNumberish, overrides?: CallOverrides): Promise<number>;

    feeTo(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    protocolFees(pool: string, overrides?: CallOverrides): Promise<number>;
  };

  filters: {};

  estimateGas: {
    feeTiers(
      swapFee: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    feeTo(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    protocolFees(pool: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    feeTiers(
      swapFee: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    feeTo(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    protocolFees(
      pool: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
