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

interface BurnCallInterface extends ethers.utils.Interface {
  functions: {};

  events: {
    'BurnLimit(address,int24,int24,int24,bool,uint128,uint128,uint128)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'BurnLimit'): EventFragment;
}

export type BurnLimitEvent = TypedEvent<
  [string, number, number, number, boolean, BigNumber, BigNumber, BigNumber] & {
    to: string;
    lower: number;
    upper: number;
    claim: number;
    zeroForOne: boolean;
    liquidityBurned: BigNumber;
    tokenInClaimed: BigNumber;
    tokenOutBurned: BigNumber;
  }
>;

export class BurnCall extends BaseContract {
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

  interface: BurnCallInterface;

  functions: {};

  callStatic: {};

  filters: {
    'BurnLimit(address,int24,int24,int24,bool,uint128,uint128,uint128)'(
      to?: string | null,
      lower?: null,
      upper?: null,
      claim?: null,
      zeroForOne?: null,
      liquidityBurned?: null,
      tokenInClaimed?: null,
      tokenOutBurned?: null,
    ): TypedEventFilter<
      [
        string,
        number,
        number,
        number,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
      ],
      {
        to: string;
        lower: number;
        upper: number;
        claim: number;
        zeroForOne: boolean;
        liquidityBurned: BigNumber;
        tokenInClaimed: BigNumber;
        tokenOutBurned: BigNumber;
      }
    >;

    BurnLimit(
      to?: string | null,
      lower?: null,
      upper?: null,
      claim?: null,
      zeroForOne?: null,
      liquidityBurned?: null,
      tokenInClaimed?: null,
      tokenOutBurned?: null,
    ): TypedEventFilter<
      [
        string,
        number,
        number,
        number,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
      ],
      {
        to: string;
        lower: number;
        upper: number;
        claim: number;
        zeroForOne: boolean;
        liquidityBurned: BigNumber;
        tokenInClaimed: BigNumber;
        tokenOutBurned: BigNumber;
      }
    >;
  };

  estimateGas: {};

  populateTransaction: {};
}
