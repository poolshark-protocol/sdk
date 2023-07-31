/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  RangePoolERC1155Errors,
  RangePoolERC1155ErrorsInterface,
} from "../RangePoolERC1155Errors";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BurnExceedsBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "BurnFromAddress0",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC1155NotSupported",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "accountsLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "idsLength",
        type: "uint256",
      },
    ],
    name: "LengthMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "MintToAddress0",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "SelfApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "SpenderNotApproved",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TransferExceedsBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferFromOrToAddress0",
    type: "error",
  },
  {
    inputs: [],
    name: "TransferToSelf",
    type: "error",
  },
];

export class RangePoolERC1155Errors__factory {
  static readonly abi = _abi;
  static createInterface(): RangePoolERC1155ErrorsInterface {
    return new utils.Interface(_abi) as RangePoolERC1155ErrorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RangePoolERC1155Errors {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RangePoolERC1155Errors;
  }
}
