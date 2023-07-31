/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Token20Batcher,
  Token20BatcherInterface,
} from "../Token20Batcher";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "to",
        type: "address[]",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mintBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506102a8806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80636e870f4d14610030575b600080fd5b61004361003e366004610191565b610045565b005b60005b8281101561013d5760005b8581101561012a5786868281811061006d5761006d610205565b9050602002016020810190610082919061021b565b6001600160a01b03166340c10f198686858181106100a2576100a2610205565b90506020020160208101906100b7919061021b565b6040516001600160e01b031960e084901b1681526001600160a01b03909116600482015260248101869052604401600060405180830381600087803b1580156100ff57600080fd5b505af1158015610113573d6000803e3d6000fd5b5050505080806101229061024b565b915050610053565b50806101358161024b565b915050610048565b505050505050565b60008083601f84011261015757600080fd5b50813567ffffffffffffffff81111561016f57600080fd5b6020830191508360208260051b850101111561018a57600080fd5b9250929050565b6000806000806000606086880312156101a957600080fd5b853567ffffffffffffffff808211156101c157600080fd5b6101cd89838a01610145565b909750955060208801359150808211156101e657600080fd5b506101f388828901610145565b96999598509660400135949350505050565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561022d57600080fd5b81356001600160a01b038116811461024457600080fd5b9392505050565b60006001820161026b57634e487b7160e01b600052601160045260246000fd5b506001019056fea264697066735822122091ffb01b80ef8edc5f9cfe2879b6120629cb4d0da34b198cc2636329d9b80f5764736f6c634300080d0033";

export class Token20Batcher__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Token20Batcher> {
    return super.deploy(overrides || {}) as Promise<Token20Batcher>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Token20Batcher {
    return super.attach(address) as Token20Batcher;
  }
  connect(signer: Signer): Token20Batcher__factory {
    return super.connect(signer) as Token20Batcher__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Token20BatcherInterface {
    return new utils.Interface(_abi) as Token20BatcherInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Token20Batcher {
    return new Contract(address, _abi, signerOrProvider) as Token20Batcher;
  }
}