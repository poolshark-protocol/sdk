/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type {
  LimitPoolErrors,
  LimitPoolErrorsInterface,
} from '../LimitPoolErrors';

const _abi = [
  {
    inputs: [],
    name: 'CollectToZeroAddress',
    type: 'error',
  },
  {
    inputs: [],
    name: 'FactoryOnly',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidPosition',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidSwapFee',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidTick',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidTickSpread',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidToken',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidTokenDecimals',
    type: 'error',
  },
  {
    inputs: [],
    name: 'LiquidityOverflow',
    type: 'error',
  },
  {
    inputs: [],
    name: 'Locked',
    type: 'error',
  },
  {
    inputs: [],
    name: 'LowerNotEvenTick',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MaxTickLiquidity',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotEnoughOutputLiquidity',
    type: 'error',
  },
  {
    inputs: [],
    name: 'Overflow',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OwnerOnly',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ProtocolFeeCeilingExceeded',
    type: 'error',
  },
  {
    inputs: [],
    name: 'Token0Missing',
    type: 'error',
  },
  {
    inputs: [],
    name: 'Token1Missing',
    type: 'error',
  },
  {
    inputs: [],
    name: 'UpperNotOddTick',
    type: 'error',
  },
  {
    inputs: [],
    name: 'WaitUntilEnoughObservations',
    type: 'error',
  },
];

export class LimitPoolErrors__factory {
  static readonly abi = _abi;
  static createInterface(): LimitPoolErrorsInterface {
    return new utils.Interface(_abi) as LimitPoolErrorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): LimitPoolErrors {
    return new Contract(address, _abi, signerOrProvider) as LimitPoolErrors;
  }
}
