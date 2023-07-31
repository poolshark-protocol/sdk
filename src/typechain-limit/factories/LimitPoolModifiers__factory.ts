/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  LimitPoolModifiers,
  LimitPoolModifiersInterface,
} from "../LimitPoolModifiers";

const _abi = [
  {
    inputs: [],
    name: "CollectToZeroAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "FactoryOnly",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidPosition",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSwapFee",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidTick",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidTickSpread",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidToken",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidTokenDecimals",
    type: "error",
  },
  {
    inputs: [],
    name: "LiquidityOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "Locked",
    type: "error",
  },
  {
    inputs: [],
    name: "LowerNotEvenTick",
    type: "error",
  },
  {
    inputs: [],
    name: "MaxTickLiquidity",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEnoughOutputLiquidity",
    type: "error",
  },
  {
    inputs: [],
    name: "Overflow",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerOnly",
    type: "error",
  },
  {
    inputs: [],
    name: "ProtocolFeeCeilingExceeded",
    type: "error",
  },
  {
    inputs: [],
    name: "Token0Missing",
    type: "error",
  },
  {
    inputs: [],
    name: "Token1Missing",
    type: "error",
  },
  {
    inputs: [],
    name: "UpperNotOddTick",
    type: "error",
  },
  {
    inputs: [],
    name: "WaitUntilEnoughObservations",
    type: "error",
  },
  {
    inputs: [],
    name: "feeTo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "globalState",
    outputs: [
      {
        internalType: "uint8",
        name: "unlocked",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pool0",
    outputs: [
      {
        internalType: "uint160",
        name: "price",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "liquidityGlobal",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "protocolFees",
        type: "uint128",
      },
      {
        internalType: "uint32",
        name: "swapEpoch",
        type: "uint32",
      },
      {
        internalType: "uint16",
        name: "protocolFee",
        type: "uint16",
      },
      {
        internalType: "int24",
        name: "tickAtPrice",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pool1",
    outputs: [
      {
        internalType: "uint160",
        name: "price",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "liquidityGlobal",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "protocolFees",
        type: "uint128",
      },
      {
        internalType: "uint32",
        name: "swapEpoch",
        type: "uint32",
      },
      {
        internalType: "uint16",
        name: "protocolFee",
        type: "uint16",
      },
      {
        internalType: "int24",
        name: "tickAtPrice",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    name: "positions0",
    outputs: [
      {
        internalType: "uint160",
        name: "claimPriceLast",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "amountIn",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "amountOut",
        type: "uint128",
      },
      {
        internalType: "uint32",
        name: "epochLast",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    name: "positions1",
    outputs: [
      {
        internalType: "uint160",
        name: "claimPriceLast",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "amountIn",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "amountOut",
        type: "uint128",
      },
      {
        internalType: "uint32",
        name: "epochLast",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tickMap",
    outputs: [
      {
        internalType: "uint256",
        name: "blocks",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    name: "ticks0",
    outputs: [
      {
        internalType: "uint160",
        name: "priceAt",
        type: "uint160",
      },
      {
        internalType: "int128",
        name: "liquidityDelta",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    name: "ticks1",
    outputs: [
      {
        internalType: "uint160",
        name: "priceAt",
        type: "uint160",
      },
      {
        internalType: "int128",
        name: "liquidityDelta",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class LimitPoolModifiers__factory {
  static readonly abi = _abi;
  static createInterface(): LimitPoolModifiersInterface {
    return new utils.Interface(_abi) as LimitPoolModifiersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LimitPoolModifiers {
    return new Contract(address, _abi, signerOrProvider) as LimitPoolModifiers;
  }
}