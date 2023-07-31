/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  LimitPoolImmutables,
  LimitPoolImmutablesInterface,
} from '../LimitPoolImmutables';

const _abi = [
  {
    inputs: [],
    name: 'maxPrice',
    outputs: [
      {
        internalType: 'uint160',
        name: '',
        type: 'uint160',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'minPrice',
    outputs: [
      {
        internalType: 'uint160',
        name: '',
        type: 'uint160',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tickSpacing',
    outputs: [
      {
        internalType: 'int16',
        name: '',
        type: 'int16',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'token0',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'token1',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b5061016a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80630dfe1681146100675780638da5cb5b1461008c578063d0c93a7c14610094578063d21220a7146100af578063e38d6b5c146100b7578063e45be8eb146100bf575b600080fd5b61006f6100c7565b6040516001600160a01b0390911681526020015b60405180910390f35b61006f6100d8565b61009c6100e4565b60405160019190910b8152602001610083565b61006f610100565b61006f61010c565b61006f610118565b60006100d36014610120565b905090565b60006100d36000610120565b60003660011981013560f090811c90910360640135901c905090565b60006100d36028610120565b60006100d36050610120565b60006100d3603c5b3660011981013560f01c9003013560601c9056fea264697066735822122060f9fd12ef150a032edf1807ad9c44ee0d4a5121cdc9091d43d9064cf7bcf9f864736f6c634300080d0033';

export class LimitPoolImmutables__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<LimitPoolImmutables> {
    return super.deploy(overrides || {}) as Promise<LimitPoolImmutables>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): LimitPoolImmutables {
    return super.attach(address) as LimitPoolImmutables;
  }
  connect(signer: Signer): LimitPoolImmutables__factory {
    return super.connect(signer) as LimitPoolImmutables__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LimitPoolImmutablesInterface {
    return new utils.Interface(_abi) as LimitPoolImmutablesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): LimitPoolImmutables {
    return new Contract(address, _abi, signerOrProvider) as LimitPoolImmutables;
  }
}
