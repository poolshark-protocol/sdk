/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  RangePoolEvents,
  RangePoolEventsInterface,
} from "../RangePoolEvents";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int24",
        name: "lower",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "int24",
        name: "upper",
        type: "int24",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "tokenBurned",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "liquidityBurned",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount0",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount1",
        type: "uint128",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "int24",
        name: "lower",
        type: "int24",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "upper",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "liquidityCompounded",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "positionAmount0",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "positionAmount1",
        type: "uint128",
      },
    ],
    name: "Compound",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint160",
        name: "startPrice",
        type: "uint160",
      },
      {
        indexed: false,
        internalType: "int24",
        name: "tickAtPrice",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "int24",
        name: "minTick",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "int24",
        name: "maxTick",
        type: "int24",
      },
    ],
    name: "Initialize",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int24",
        name: "lower",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "int24",
        name: "upper",
        type: "int24",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "tokenMinted",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "liquidityMinted",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount0",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount1",
        type: "uint128",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint160",
        name: "price",
        type: "uint160",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "int24",
        name: "tickAtPrice",
        type: "int24",
      },
    ],
    name: "Swap",
    type: "event",
  },
];

export class RangePoolEvents__factory {
  static readonly abi = _abi;
  static createInterface(): RangePoolEventsInterface {
    return new utils.Interface(_abi) as RangePoolEventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RangePoolEvents {
    return new Contract(address, _abi, signerOrProvider) as RangePoolEvents;
  }
}
