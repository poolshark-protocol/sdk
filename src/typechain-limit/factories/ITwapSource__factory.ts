/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ITwapSource, ITwapSourceInterface } from "../ITwapSource";

const _abi = [
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
            internalType: "struct ConstantProduct.PriceBounds",
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
            internalType: "int16",
            name: "tickSpacing",
            type: "int16",
          },
        ],
        internalType: "struct ILimitPoolStructs.Immutables",
        name: "constants",
        type: "tuple",
      },
    ],
    name: "calculateAverageTick",
    outputs: [
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
    inputs: [],
    name: "factory",
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
    inputs: [
      {
        internalType: "uint16",
        name: "feeTier",
        type: "uint16",
      },
    ],
    name: "feeTierTickSpacing",
    outputs: [
      {
        internalType: "int24",
        name: "tickSpacing",
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
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "feeTier",
        type: "uint16",
      },
    ],
    name: "getPool",
    outputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
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
            internalType: "struct ConstantProduct.PriceBounds",
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
            internalType: "int16",
            name: "tickSpacing",
            type: "int16",
          },
        ],
        internalType: "struct ILimitPoolStructs.Immutables",
        name: "constants",
        type: "tuple",
      },
    ],
    name: "initialize",
    outputs: [
      {
        internalType: "uint8",
        name: "initializable",
        type: "uint8",
      },
      {
        internalType: "int24",
        name: "startingTick",
        type: "int24",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ITwapSource__factory {
  static readonly abi = _abi;
  static createInterface(): ITwapSourceInterface {
    return new utils.Interface(_abi) as ITwapSourceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITwapSource {
    return new Contract(address, _abi, signerOrProvider) as ITwapSource;
  }
}
