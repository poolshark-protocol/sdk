/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ICoverPoolManager,
  ICoverPoolManagerInterface,
} from "../ICoverPoolManager";

const _abi = [
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
    inputs: [
      {
        internalType: "bytes32",
        name: "sourceName",
        type: "bytes32",
      },
    ],
    name: "twapSources",
    outputs: [
      {
        internalType: "address",
        name: "sourceAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "curveAddress",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "sourceName",
        type: "bytes32",
      },
      {
        internalType: "uint16",
        name: "feeTier",
        type: "uint16",
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
    ],
    name: "volatilityTiers",
    outputs: [
      {
        components: [
          {
            internalType: "uint128",
            name: "minAmountPerAuction",
            type: "uint128",
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
            internalType: "uint16",
            name: "syncFee",
            type: "uint16",
          },
          {
            internalType: "uint16",
            name: "fillFee",
            type: "uint16",
          },
          {
            internalType: "int16",
            name: "minPositionWidth",
            type: "int16",
          },
          {
            internalType: "bool",
            name: "minAmountLowerPriced",
            type: "bool",
          },
        ],
        internalType: "struct CoverPoolManagerStructs.VolatilityTier",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ICoverPoolManager__factory {
  static readonly abi = _abi;
  static createInterface(): ICoverPoolManagerInterface {
    return new utils.Interface(_abi) as ICoverPoolManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICoverPoolManager {
    return new Contract(address, _abi, signerOrProvider) as ICoverPoolManager;
  }
}
