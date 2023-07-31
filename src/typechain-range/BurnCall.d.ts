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
    'Burn(address,int24,int24,uint256,uint128,uint128,uint128,uint128)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Burn'): EventFragment;
}

export type BurnEvent = TypedEvent<
  [
    string,
    number,
    number,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
  ] & {
    recipient: string;
    lower: number;
    upper: number;
    tokenId: BigNumber;
    tokenBurned: BigNumber;
    liquidityBurned: BigNumber;
    amount0: BigNumber;
    amount1: BigNumber;
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
    'Burn(address,int24,int24,uint256,uint128,uint128,uint128,uint128)'(
      recipient?: string | null,
      lower?: null,
      upper?: null,
      tokenId?: BigNumberish | null,
      tokenBurned?: null,
      liquidityBurned?: null,
      amount0?: null,
      amount1?: null,
    ): TypedEventFilter<
      [
        string,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
      ],
      {
        recipient: string;
        lower: number;
        upper: number;
        tokenId: BigNumber;
        tokenBurned: BigNumber;
        liquidityBurned: BigNumber;
        amount0: BigNumber;
        amount1: BigNumber;
      }
    >;

    Burn(
      recipient?: string | null,
      lower?: null,
      upper?: null,
      tokenId?: BigNumberish | null,
      tokenBurned?: null,
      liquidityBurned?: null,
      amount0?: null,
      amount1?: null,
    ): TypedEventFilter<
      [
        string,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
      ],
      {
        recipient: string;
        lower: number;
        upper: number;
        tokenId: BigNumber;
        tokenBurned: BigNumber;
        liquidityBurned: BigNumber;
        amount0: BigNumber;
        amount1: BigNumber;
      }
    >;
  };

  estimateGas: {};

  populateTransaction: {};
}
