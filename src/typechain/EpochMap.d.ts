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
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface EpochMapInterface extends ethers.utils.Interface {
  functions: {
    "getIndices(int24,(ITwapSource,(uint160,uint160),address,address,address,uint256,uint32,int16,int16,uint16,uint16,uint16,uint8,uint8,bool))": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getIndices",
    values: [
      BigNumberish,
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

  decodeFunctionResult(functionFragment: "getIndices", data: BytesLike): Result;

  events: {};
}

export class EpochMap extends BaseContract {
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

  interface: EpochMapInterface;

  functions: {
    getIndices(
      tick: BigNumberish,
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
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        tickIndex: BigNumber;
        wordIndex: BigNumber;
        blockIndex: BigNumber;
        volumeIndex: BigNumber;
      }
    >;
  };

  getIndices(
    tick: BigNumberish,
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
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      tickIndex: BigNumber;
      wordIndex: BigNumber;
      blockIndex: BigNumber;
      volumeIndex: BigNumber;
    }
  >;

  callStatic: {
    getIndices(
      tick: BigNumberish,
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
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        tickIndex: BigNumber;
        wordIndex: BigNumber;
        blockIndex: BigNumber;
        volumeIndex: BigNumber;
      }
    >;
  };

  filters: {};

  estimateGas: {
    getIndices(
      tick: BigNumberish,
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
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getIndices(
      tick: BigNumberish,
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
    ): Promise<PopulatedTransaction>;
  };
}
