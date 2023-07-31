/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type {
  LimitPoolManagerEvents,
  LimitPoolManagerEventsInterface,
} from '../LimitPoolManagerEvents';

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousFactory',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newFactory',
        type: 'address',
      },
    ],
    name: 'FactoryChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousFeeTo',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newFeeTo',
        type: 'address',
      },
    ],
    name: 'FeeToTransfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'previousOwner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'OwnerTransfer',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address[]',
        name: 'collectPools',
        type: 'address[]',
      },
      {
        indexed: false,
        internalType: 'uint128[]',
        name: 'token0Fees',
        type: 'uint128[]',
      },
      {
        indexed: false,
        internalType: 'uint128[]',
        name: 'token1Fees',
        type: 'uint128[]',
      },
    ],
    name: 'ProtocolFeesCollected',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address[]',
        name: 'modifyPools',
        type: 'address[]',
      },
      {
        indexed: false,
        internalType: 'uint16[]',
        name: 'syncFees',
        type: 'uint16[]',
      },
      {
        indexed: false,
        internalType: 'uint16[]',
        name: 'fillFees',
        type: 'uint16[]',
      },
      {
        indexed: false,
        internalType: 'bool[]',
        name: 'setFees',
        type: 'bool[]',
      },
      {
        indexed: false,
        internalType: 'uint128[]',
        name: 'token0Fees',
        type: 'uint128[]',
      },
      {
        indexed: false,
        internalType: 'uint128[]',
        name: 'token1Fees',
        type: 'uint128[]',
      },
    ],
    name: 'ProtocolFeesModified',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'int16',
        name: 'tickSpacing',
        type: 'int16',
      },
    ],
    name: 'TickSpacingEnabled',
    type: 'event',
  },
];

export class LimitPoolManagerEvents__factory {
  static readonly abi = _abi;
  static createInterface(): LimitPoolManagerEventsInterface {
    return new utils.Interface(_abi) as LimitPoolManagerEventsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): LimitPoolManagerEvents {
    return new Contract(
      address,
      _abi,
      signerOrProvider,
    ) as LimitPoolManagerEvents;
  }
}
