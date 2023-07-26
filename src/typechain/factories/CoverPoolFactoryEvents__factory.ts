/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  CoverPoolFactoryEvents,
  CoverPoolFactoryEventsInterface,
} from "../CoverPoolFactoryEvents";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "twapSource",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "inputPool",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "fee",
        type: "uint16",
      },
      {
        indexed: true,
        internalType: "int16",
        name: "tickSpread",
        type: "int16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "twapLength",
        type: "uint16",
      },
    ],
    name: "PoolCreated",
    type: "event",
  },
];

export class CoverPoolFactoryEvents__factory {
  static readonly abi = _abi;
  static createInterface(): CoverPoolFactoryEventsInterface {
    return new utils.Interface(_abi) as CoverPoolFactoryEventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CoverPoolFactoryEvents {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as CoverPoolFactoryEvents;
  }
}
