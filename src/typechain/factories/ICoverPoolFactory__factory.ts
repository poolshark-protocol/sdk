/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  ICoverPoolFactory,
  ICoverPoolFactoryInterface,
} from "../ICoverPoolFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "coverPools",
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
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "fee",
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
    name: "createCoverPool",
    outputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
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
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "fee",
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
    name: "getCoverPool",
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
];

export class ICoverPoolFactory__factory {
  static readonly abi = _abi;
  static createInterface(): ICoverPoolFactoryInterface {
    return new utils.Interface(_abi) as ICoverPoolFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICoverPoolFactory {
    return new Contract(address, _abi, signerOrProvider) as ICoverPoolFactory;
  }
}