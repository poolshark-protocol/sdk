/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  RangePoolStorage,
  RangePoolStorageInterface,
} from "../RangePoolStorage";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
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
            internalType: "uint128",
            name: "burnPercent",
            type: "uint128",
          },
        ],
        internalType: "struct IRangePoolStructs.BurnParams",
        name: "burnParams",
        type: "tuple",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "protocolFee",
        type: "uint16",
      },
      {
        internalType: "bool",
        name: "setFee",
        type: "bool",
      },
    ],
    name: "fees",
    outputs: [
      {
        internalType: "uint128",
        name: "token0Fees",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "token1Fees",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "sampleLengthNext",
        type: "uint16",
      },
    ],
    name: "increaseSampleLength",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
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
            internalType: "uint128",
            name: "amount0",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "amount1",
            type: "uint128",
          },
        ],
        internalType: "struct IRangePoolStructs.MintParams",
        name: "mintParams",
        type: "tuple",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "poolState",
    outputs: [
      {
        internalType: "uint8",
        name: "unlocked",
        type: "uint8",
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
      {
        internalType: "int56",
        name: "tickSecondsAccum",
        type: "int56",
      },
      {
        internalType: "uint160",
        name: "secondsPerLiquidityAccum",
        type: "uint160",
      },
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
        internalType: "uint200",
        name: "feeGrowthGlobal0",
        type: "uint200",
      },
      {
        internalType: "uint200",
        name: "feeGrowthGlobal1",
        type: "uint200",
      },
      {
        components: [
          {
            internalType: "uint16",
            name: "index",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "length",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "lengthNext",
            type: "uint16",
          },
        ],
        internalType: "struct IRangePoolStructs.SampleState",
        name: "samples",
        type: "tuple",
      },
      {
        components: [
          {
            internalType: "uint128",
            name: "token0",
            type: "uint128",
          },
          {
            internalType: "uint128",
            name: "token1",
            type: "uint128",
          },
        ],
        internalType: "struct IRangePoolStructs.ProtocolFees",
        name: "protocolFees",
        type: "tuple",
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
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    name: "positions",
    outputs: [
      {
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "amount0",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "amount1",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "feeGrowthInside0Last",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feeGrowthInside1Last",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint160",
            name: "priceLimit",
            type: "uint160",
          },
          {
            internalType: "uint128",
            name: "amount",
            type: "uint128",
          },
          {
            internalType: "bool",
            name: "exactIn",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "zeroForOne",
            type: "bool",
          },
        ],
        internalType: "struct IRangePoolStructs.QuoteParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "quote",
    outputs: [
      {
        internalType: "uint256",
        name: "inAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "outAmount",
        type: "uint256",
      },
      {
        internalType: "uint160",
        name: "priceAfter",
        type: "uint160",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32[]",
        name: "secondsAgo",
        type: "uint32[]",
      },
    ],
    name: "sample",
    outputs: [
      {
        internalType: "int56[]",
        name: "tickSecondsAccum",
        type: "int56[]",
      },
      {
        internalType: "uint160[]",
        name: "secondsPerLiquidityAccum",
        type: "uint160[]",
      },
      {
        internalType: "uint160",
        name: "averagePrice",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "averageLiquidity",
        type: "uint128",
      },
      {
        internalType: "int24",
        name: "averageTick",
        type: "int24",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "samples",
    outputs: [
      {
        internalType: "uint32",
        name: "blockTimestamp",
        type: "uint32",
      },
      {
        internalType: "int56",
        name: "tickSecondsAccum",
        type: "int56",
      },
      {
        internalType: "uint160",
        name: "secondsPerLiquidityAccum",
        type: "uint160",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
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
        ],
        internalType: "struct IRangePoolStructs.SnapshotParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "snapshot",
    outputs: [
      {
        internalType: "int56",
        name: "tickSecondsAccum",
        type: "int56",
      },
      {
        internalType: "uint160",
        name: "secondsPerLiquidityAccum",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "feesOwed0",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "feesOwed1",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "to",
            type: "address",
          },
          {
            internalType: "uint160",
            name: "priceLimit",
            type: "uint160",
          },
          {
            internalType: "uint128",
            name: "amount",
            type: "uint128",
          },
          {
            internalType: "bool",
            name: "exactIn",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "zeroForOne",
            type: "bool",
          },
          {
            internalType: "bytes",
            name: "callbackData",
            type: "bytes",
          },
        ],
        internalType: "struct IRangePoolStructs.SwapParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "swap",
    outputs: [
      {
        internalType: "int256",
        name: "amount0",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "amount1",
        type: "int256",
      },
    ],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "tickSpacing",
    outputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
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
    name: "ticks",
    outputs: [
      {
        internalType: "int128",
        name: "liquidityDelta",
        type: "int128",
      },
      {
        internalType: "uint200",
        name: "feeGrowthOutside0",
        type: "uint200",
      },
      {
        internalType: "uint200",
        name: "feeGrowthOutside1",
        type: "uint200",
      },
      {
        internalType: "int56",
        name: "tickSecondsAccumOutside",
        type: "int56",
      },
      {
        internalType: "uint160",
        name: "secondsPerLiquidityAccumOutside",
        type: "uint160",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class RangePoolStorage__factory {
  static readonly abi = _abi;
  static createInterface(): RangePoolStorageInterface {
    return new utils.Interface(_abi) as RangePoolStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RangePoolStorage {
    return new Contract(address, _abi, signerOrProvider) as RangePoolStorage;
  }
}
