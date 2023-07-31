/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICurveMath, ICurveMathInterface } from "../ICurveMath";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint160",
        name: "price",
        type: "uint160",
      },
      {
        components: [
          {
            internalType: "uint160",
            name: "min",
            type: "uint160",
          },
          {
            internalType: "uint160",
            name: "max",
            type: "uint160",
          },
        ],
        internalType: "struct ITickMath.PriceBounds",
        name: "bounds",
        type: "tuple",
      },
    ],
    name: "checkPrice",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "lower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "upper",
        type: "int24",
      },
      {
        internalType: "int16",
        name: "tickSpacing",
        type: "int16",
      },
    ],
    name: "checkTicks",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "priceLower",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceUpper",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
      },
    ],
    name: "getAmountsForLiquidity",
    outputs: [
      {
        internalType: "uint128",
        name: "token0amount",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "token1amount",
        type: "uint128",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceLower",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceUpper",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
      },
    ],
    name: "getDx",
    outputs: [
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceLower",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceUpper",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "roundUp",
        type: "bool",
      },
    ],
    name: "getDy",
    outputs: [
      {
        internalType: "uint256",
        name: "dy",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "priceLower",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "priceUpper",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dy",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dx",
        type: "uint256",
      },
    ],
    name: "getLiquidityForAmounts",
    outputs: [
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "liquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "input",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
    ],
    name: "getNewPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "newPrice",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
      {
        components: [
          {
            internalType: "contract ITwapSource",
            name: "source",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint160",
                name: "min",
                type: "uint160",
              },
              {
                internalType: "uint160",
                name: "max",
                type: "uint160",
              },
            ],
            internalType: "struct ITickMath.PriceBounds",
            name: "bounds",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "token0",
            type: "address",
          },
          {
            internalType: "address",
            name: "token1",
            type: "address",
          },
          {
            internalType: "address",
            name: "inputPool",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minAmountPerAuction",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "genesisTime",
            type: "uint32",
          },
          {
            internalType: "int16",
            name: "minPositionWidth",
            type: "int16",
          },
          {
            internalType: "int16",
            name: "tickSpread",
            type: "int16",
          },
          {
            internalType: "uint16",
            name: "twapLength",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "auctionLength",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "blockTime",
            type: "uint16",
          },
          {
            internalType: "uint8",
            name: "token0Decimals",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "token1Decimals",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "minAmountLowerPriced",
            type: "bool",
          },
        ],
        internalType: "struct ICoverPoolStructs.Immutables",
        name: "",
        type: "tuple",
      },
    ],
    name: "getPriceAtTick",
    outputs: [
      {
        internalType: "uint160",
        name: "price",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint160",
        name: "price",
        type: "uint160",
      },
      {
        components: [
          {
            internalType: "contract ITwapSource",
            name: "source",
            type: "address",
          },
          {
            components: [
              {
                internalType: "uint160",
                name: "min",
                type: "uint160",
              },
              {
                internalType: "uint160",
                name: "max",
                type: "uint160",
              },
            ],
            internalType: "struct ITickMath.PriceBounds",
            name: "bounds",
            type: "tuple",
          },
          {
            internalType: "address",
            name: "token0",
            type: "address",
          },
          {
            internalType: "address",
            name: "token1",
            type: "address",
          },
          {
            internalType: "address",
            name: "inputPool",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "minAmountPerAuction",
            type: "uint256",
          },
          {
            internalType: "uint32",
            name: "genesisTime",
            type: "uint32",
          },
          {
            internalType: "int16",
            name: "minPositionWidth",
            type: "int16",
          },
          {
            internalType: "int16",
            name: "tickSpread",
            type: "int16",
          },
          {
            internalType: "uint16",
            name: "twapLength",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "auctionLength",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "blockTime",
            type: "uint16",
          },
          {
            internalType: "uint8",
            name: "token0Decimals",
            type: "uint8",
          },
          {
            internalType: "uint8",
            name: "token1Decimals",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "minAmountLowerPriced",
            type: "bool",
          },
        ],
        internalType: "struct ICoverPoolStructs.Immutables",
        name: "",
        type: "tuple",
      },
    ],
    name: "getTickAtPrice",
    outputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int16",
        name: "tickSpacing",
        type: "int16",
      },
    ],
    name: "maxPrice",
    outputs: [
      {
        internalType: "uint160",
        name: "maxPrice",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int16",
        name: "tickSpacing",
        type: "int16",
      },
    ],
    name: "maxTick",
    outputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int16",
        name: "tickSpacing",
        type: "int16",
      },
    ],
    name: "minPrice",
    outputs: [
      {
        internalType: "uint160",
        name: "minPrice",
        type: "uint160",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int16",
        name: "tickSpacing",
        type: "int16",
      },
    ],
    name: "minTick",
    outputs: [
      {
        internalType: "int24",
        name: "tick",
        type: "int24",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class ICurveMath__factory {
  static readonly abi = _abi;
  static createInterface(): ICurveMathInterface {
    return new utils.Interface(_abi) as ICurveMathInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICurveMath {
    return new Contract(address, _abi, signerOrProvider) as ICurveMath;
  }
}