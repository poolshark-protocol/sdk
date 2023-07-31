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

interface CoverPoolFactoryEventsInterface extends ethers.utils.Interface {
  functions: {};

  events: {
    'PoolCreated(address,address,address,address,address,uint16,int16,uint16)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'PoolCreated'): EventFragment;
}

export type PoolCreatedEvent = TypedEvent<
  [string, string, string, string, string, number, number, number] & {
    pool: string;
    twapSource: string;
    inputPool: string;
    token0: string;
    token1: string;
    fee: number;
    tickSpread: number;
    twapLength: number;
  }
>;

export class CoverPoolFactoryEvents extends BaseContract {
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

  interface: CoverPoolFactoryEventsInterface;

  functions: {};

  callStatic: {};

  filters: {
    'PoolCreated(address,address,address,address,address,uint16,int16,uint16)'(
      pool?: null,
      twapSource?: null,
      inputPool?: null,
      token0?: string | null,
      token1?: string | null,
      fee?: null,
      tickSpread?: BigNumberish | null,
      twapLength?: null,
    ): TypedEventFilter<
      [string, string, string, string, string, number, number, number],
      {
        pool: string;
        twapSource: string;
        inputPool: string;
        token0: string;
        token1: string;
        fee: number;
        tickSpread: number;
        twapLength: number;
      }
    >;

    PoolCreated(
      pool?: null,
      twapSource?: null,
      inputPool?: null,
      token0?: string | null,
      token1?: string | null,
      fee?: null,
      tickSpread?: BigNumberish | null,
      twapLength?: null,
    ): TypedEventFilter<
      [string, string, string, string, string, number, number, number],
      {
        pool: string;
        twapSource: string;
        inputPool: string;
        token0: string;
        token1: string;
        fee: number;
        tickSpread: number;
        twapLength: number;
      }
    >;
  };

  estimateGas: {};

  populateTransaction: {};
}
