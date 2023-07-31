/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type {
  IRangePoolFactory,
  IRangePoolFactoryInterface,
} from '../IRangePoolFactory';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'fromToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'destToken',
        type: 'address',
      },
      {
        internalType: 'uint16',
        name: 'fee',
        type: 'uint16',
      },
    ],
    name: 'getRangePool',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class IRangePoolFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IRangePoolFactoryInterface {
    return new utils.Interface(_abi) as IRangePoolFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): IRangePoolFactory {
    return new Contract(address, _abi, signerOrProvider) as IRangePoolFactory;
  }
}
