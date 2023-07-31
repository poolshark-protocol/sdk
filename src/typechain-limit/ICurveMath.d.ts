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

interface ICurveMathInterface extends ethers.utils.Interface {
  functions: {
    'checkPrice(uint160,(uint160,uint160))': FunctionFragment;
    'checkTicks(int24,int24,int16)': FunctionFragment;
    'getAmountsForLiquidity(uint256,uint256,uint256,uint256,bool)': FunctionFragment;
    'getDx(uint256,uint256,uint256,bool)': FunctionFragment;
    'getDy(uint256,uint256,uint256,bool)': FunctionFragment;
    'getLiquidityForAmounts(uint256,uint256,uint256,uint256,uint256)': FunctionFragment;
    'getNewPrice(uint256,uint256,uint256,bool)': FunctionFragment;
    'getPriceAtTick(int24,(address,(uint160,uint160),address,address,int16))': FunctionFragment;
    'getTickAtPrice(uint160,(address,(uint160,uint160),address,address,int16))': FunctionFragment;
    'maxPrice(int16)': FunctionFragment;
    'maxTick(int16)': FunctionFragment;
    'minPrice(int16)': FunctionFragment;
    'minTick(int16)': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'checkPrice',
    values: [BigNumberish, { min: BigNumberish; max: BigNumberish }],
  ): string;
  encodeFunctionData(
    functionFragment: 'checkTicks',
    values: [BigNumberish, BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'getAmountsForLiquidity',
    values: [BigNumberish, BigNumberish, BigNumberish, BigNumberish, boolean],
  ): string;
  encodeFunctionData(
    functionFragment: 'getDx',
    values: [BigNumberish, BigNumberish, BigNumberish, boolean],
  ): string;
  encodeFunctionData(
    functionFragment: 'getDy',
    values: [BigNumberish, BigNumberish, BigNumberish, boolean],
  ): string;
  encodeFunctionData(
    functionFragment: 'getLiquidityForAmounts',
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'getNewPrice',
    values: [BigNumberish, BigNumberish, BigNumberish, boolean],
  ): string;
  encodeFunctionData(
    functionFragment: 'getPriceAtTick',
    values: [
      BigNumberish,
      {
        owner: string;
        bounds: { min: BigNumberish; max: BigNumberish };
        token0: string;
        token1: string;
        tickSpacing: BigNumberish;
      },
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'getTickAtPrice',
    values: [
      BigNumberish,
      {
        owner: string;
        bounds: { min: BigNumberish; max: BigNumberish };
        token0: string;
        token1: string;
        tickSpacing: BigNumberish;
      },
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'maxPrice',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'maxTick',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'minPrice',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'minTick',
    values: [BigNumberish],
  ): string;

  decodeFunctionResult(functionFragment: 'checkPrice', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'checkTicks', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getAmountsForLiquidity',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'getDx', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getDy', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getLiquidityForAmounts',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getNewPrice',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getPriceAtTick',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'getTickAtPrice',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'maxPrice', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'maxTick', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'minPrice', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'minTick', data: BytesLike): Result;

  events: {};
}

export class ICurveMath extends BaseContract {
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

  interface: ICurveMathInterface;

  functions: {
    checkPrice(
      price: BigNumberish,
      bounds: { min: BigNumberish; max: BigNumberish },
      overrides?: CallOverrides,
    ): Promise<[void]>;

    checkTicks(
      lower: BigNumberish,
      upper: BigNumberish,
      tickSpacing: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[void]>;

    getAmountsForLiquidity(
      priceLower: BigNumberish,
      priceUpper: BigNumberish,
      price: BigNumberish,
      liquidity: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber] & {
        token0amount: BigNumber;
        token1amount: BigNumber;
      }
    >;

    getDx(
      liquidity: BigNumberish,
      priceLower: BigNumberish,
      priceUpper: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { dx: BigNumber }>;

    getDy(
      liquidity: BigNumberish,
      priceLower: BigNumberish,
      priceUpper: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { dy: BigNumber }>;

    getLiquidityForAmounts(
      priceLower: BigNumberish,
      priceUpper: BigNumberish,
      currentPrice: BigNumberish,
      dy: BigNumberish,
      dx: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { liquidity: BigNumber }>;

    getNewPrice(
      price: BigNumberish,
      liquidity: BigNumberish,
      input: BigNumberish,
      zeroForOne: boolean,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { newPrice: BigNumber }>;

    getPriceAtTick(
      tick: BigNumberish,
      arg1: {
        owner: string;
        bounds: { min: BigNumberish; max: BigNumberish };
        token0: string;
        token1: string;
        tickSpacing: BigNumberish;
      },
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { price: BigNumber }>;

    getTickAtPrice(
      price: BigNumberish,
      arg1: {
        owner: string;
        bounds: { min: BigNumberish; max: BigNumberish };
        token0: string;
        token1: string;
        tickSpacing: BigNumberish;
      },
      overrides?: CallOverrides,
    ): Promise<[number] & { tick: number }>;

    maxPrice(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { maxPrice: BigNumber }>;

    maxTick(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[number] & { tick: number }>;

    minPrice(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { minPrice: BigNumber }>;

    minTick(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[number] & { tick: number }>;
  };

  checkPrice(
    price: BigNumberish,
    bounds: { min: BigNumberish; max: BigNumberish },
    overrides?: CallOverrides,
  ): Promise<void>;

  checkTicks(
    lower: BigNumberish,
    upper: BigNumberish,
    tickSpacing: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<void>;

  getAmountsForLiquidity(
    priceLower: BigNumberish,
    priceUpper: BigNumberish,
    price: BigNumberish,
    liquidity: BigNumberish,
    roundUp: boolean,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber] & {
      token0amount: BigNumber;
      token1amount: BigNumber;
    }
  >;

  getDx(
    liquidity: BigNumberish,
    priceLower: BigNumberish,
    priceUpper: BigNumberish,
    roundUp: boolean,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getDy(
    liquidity: BigNumberish,
    priceLower: BigNumberish,
    priceUpper: BigNumberish,
    roundUp: boolean,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getLiquidityForAmounts(
    priceLower: BigNumberish,
    priceUpper: BigNumberish,
    currentPrice: BigNumberish,
    dy: BigNumberish,
    dx: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getNewPrice(
    price: BigNumberish,
    liquidity: BigNumberish,
    input: BigNumberish,
    zeroForOne: boolean,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getPriceAtTick(
    tick: BigNumberish,
    arg1: {
      owner: string;
      bounds: { min: BigNumberish; max: BigNumberish };
      token0: string;
      token1: string;
      tickSpacing: BigNumberish;
    },
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getTickAtPrice(
    price: BigNumberish,
    arg1: {
      owner: string;
      bounds: { min: BigNumberish; max: BigNumberish };
      token0: string;
      token1: string;
      tickSpacing: BigNumberish;
    },
    overrides?: CallOverrides,
  ): Promise<number>;

  maxPrice(
    tickSpacing: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  maxTick(
    tickSpacing: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<number>;

  minPrice(
    tickSpacing: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  minTick(
    tickSpacing: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<number>;

  callStatic: {
    checkPrice(
      price: BigNumberish,
      bounds: { min: BigNumberish; max: BigNumberish },
      overrides?: CallOverrides,
    ): Promise<void>;

    checkTicks(
      lower: BigNumberish,
      upper: BigNumberish,
      tickSpacing: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    getAmountsForLiquidity(
      priceLower: BigNumberish,
      priceUpper: BigNumberish,
      price: BigNumberish,
      liquidity: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber] & {
        token0amount: BigNumber;
        token1amount: BigNumber;
      }
    >;

    getDx(
      liquidity: BigNumberish,
      priceLower: BigNumberish,
      priceUpper: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getDy(
      liquidity: BigNumberish,
      priceLower: BigNumberish,
      priceUpper: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getLiquidityForAmounts(
      priceLower: BigNumberish,
      priceUpper: BigNumberish,
      currentPrice: BigNumberish,
      dy: BigNumberish,
      dx: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getNewPrice(
      price: BigNumberish,
      liquidity: BigNumberish,
      input: BigNumberish,
      zeroForOne: boolean,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getPriceAtTick(
      tick: BigNumberish,
      arg1: {
        owner: string;
        bounds: { min: BigNumberish; max: BigNumberish };
        token0: string;
        token1: string;
        tickSpacing: BigNumberish;
      },
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getTickAtPrice(
      price: BigNumberish,
      arg1: {
        owner: string;
        bounds: { min: BigNumberish; max: BigNumberish };
        token0: string;
        token1: string;
        tickSpacing: BigNumberish;
      },
      overrides?: CallOverrides,
    ): Promise<number>;

    maxPrice(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    maxTick(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<number>;

    minPrice(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    minTick(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<number>;
  };

  filters: {};

  estimateGas: {
    checkPrice(
      price: BigNumberish,
      bounds: { min: BigNumberish; max: BigNumberish },
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    checkTicks(
      lower: BigNumberish,
      upper: BigNumberish,
      tickSpacing: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getAmountsForLiquidity(
      priceLower: BigNumberish,
      priceUpper: BigNumberish,
      price: BigNumberish,
      liquidity: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getDx(
      liquidity: BigNumberish,
      priceLower: BigNumberish,
      priceUpper: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getDy(
      liquidity: BigNumberish,
      priceLower: BigNumberish,
      priceUpper: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getLiquidityForAmounts(
      priceLower: BigNumberish,
      priceUpper: BigNumberish,
      currentPrice: BigNumberish,
      dy: BigNumberish,
      dx: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getNewPrice(
      price: BigNumberish,
      liquidity: BigNumberish,
      input: BigNumberish,
      zeroForOne: boolean,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getPriceAtTick(
      tick: BigNumberish,
      arg1: {
        owner: string;
        bounds: { min: BigNumberish; max: BigNumberish };
        token0: string;
        token1: string;
        tickSpacing: BigNumberish;
      },
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getTickAtPrice(
      price: BigNumberish,
      arg1: {
        owner: string;
        bounds: { min: BigNumberish; max: BigNumberish };
        token0: string;
        token1: string;
        tickSpacing: BigNumberish;
      },
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    maxPrice(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    maxTick(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    minPrice(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    minTick(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    checkPrice(
      price: BigNumberish,
      bounds: { min: BigNumberish; max: BigNumberish },
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    checkTicks(
      lower: BigNumberish,
      upper: BigNumberish,
      tickSpacing: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getAmountsForLiquidity(
      priceLower: BigNumberish,
      priceUpper: BigNumberish,
      price: BigNumberish,
      liquidity: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getDx(
      liquidity: BigNumberish,
      priceLower: BigNumberish,
      priceUpper: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getDy(
      liquidity: BigNumberish,
      priceLower: BigNumberish,
      priceUpper: BigNumberish,
      roundUp: boolean,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getLiquidityForAmounts(
      priceLower: BigNumberish,
      priceUpper: BigNumberish,
      currentPrice: BigNumberish,
      dy: BigNumberish,
      dx: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getNewPrice(
      price: BigNumberish,
      liquidity: BigNumberish,
      input: BigNumberish,
      zeroForOne: boolean,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getPriceAtTick(
      tick: BigNumberish,
      arg1: {
        owner: string;
        bounds: { min: BigNumberish; max: BigNumberish };
        token0: string;
        token1: string;
        tickSpacing: BigNumberish;
      },
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getTickAtPrice(
      price: BigNumberish,
      arg1: {
        owner: string;
        bounds: { min: BigNumberish; max: BigNumberish };
        token0: string;
        token1: string;
        tickSpacing: BigNumberish;
      },
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    maxPrice(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    maxTick(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    minPrice(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    minTick(
      tickSpacing: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
