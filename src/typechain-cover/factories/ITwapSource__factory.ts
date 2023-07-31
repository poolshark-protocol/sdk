/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type { ITwapSource, ITwapSourceInterface } from '../ITwapSource';

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: 'contract ITwapSource',
            name: 'source',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint160',
                name: 'min',
                type: 'uint160',
              },
              {
                internalType: 'uint160',
                name: 'max',
                type: 'uint160',
              },
            ],
            internalType: 'struct ITickMath.PriceBounds',
            name: 'bounds',
            type: 'tuple',
          },
          {
            internalType: 'address',
            name: 'token0',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'token1',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'inputPool',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'minAmountPerAuction',
            type: 'uint256',
          },
          {
            internalType: 'uint32',
            name: 'genesisTime',
            type: 'uint32',
          },
          {
            internalType: 'int16',
            name: 'minPositionWidth',
            type: 'int16',
          },
          {
            internalType: 'int16',
            name: 'tickSpread',
            type: 'int16',
          },
          {
            internalType: 'uint16',
            name: 'twapLength',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'auctionLength',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'blockTime',
            type: 'uint16',
          },
          {
            internalType: 'uint8',
            name: 'token0Decimals',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'token1Decimals',
            type: 'uint8',
          },
          {
            internalType: 'bool',
            name: 'minAmountLowerPriced',
            type: 'bool',
          },
        ],
        internalType: 'struct ICoverPoolStructs.Immutables',
        name: 'constants',
        type: 'tuple',
      },
      {
        internalType: 'int24',
        name: 'latestTick',
        type: 'int24',
      },
    ],
    name: 'calculateAverageTick',
    outputs: [
      {
        internalType: 'int24',
        name: 'averageTick',
        type: 'int24',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'factory',
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
  {
    inputs: [
      {
        internalType: 'uint16',
        name: 'feeTier',
        type: 'uint16',
      },
    ],
    name: 'feeTierTickSpacing',
    outputs: [
      {
        internalType: 'int24',
        name: 'tickSpacing',
        type: 'int24',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'tokenA',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'tokenB',
        type: 'address',
      },
      {
        internalType: 'uint16',
        name: 'feeTier',
        type: 'uint16',
      },
    ],
    name: 'getPool',
    outputs: [
      {
        internalType: 'address',
        name: 'pool',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'contract ITwapSource',
            name: 'source',
            type: 'address',
          },
          {
            components: [
              {
                internalType: 'uint160',
                name: 'min',
                type: 'uint160',
              },
              {
                internalType: 'uint160',
                name: 'max',
                type: 'uint160',
              },
            ],
            internalType: 'struct ITickMath.PriceBounds',
            name: 'bounds',
            type: 'tuple',
          },
          {
            internalType: 'address',
            name: 'token0',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'token1',
            type: 'address',
          },
          {
            internalType: 'address',
            name: 'inputPool',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'minAmountPerAuction',
            type: 'uint256',
          },
          {
            internalType: 'uint32',
            name: 'genesisTime',
            type: 'uint32',
          },
          {
            internalType: 'int16',
            name: 'minPositionWidth',
            type: 'int16',
          },
          {
            internalType: 'int16',
            name: 'tickSpread',
            type: 'int16',
          },
          {
            internalType: 'uint16',
            name: 'twapLength',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'auctionLength',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'blockTime',
            type: 'uint16',
          },
          {
            internalType: 'uint8',
            name: 'token0Decimals',
            type: 'uint8',
          },
          {
            internalType: 'uint8',
            name: 'token1Decimals',
            type: 'uint8',
          },
          {
            internalType: 'bool',
            name: 'minAmountLowerPriced',
            type: 'bool',
          },
        ],
        internalType: 'struct ICoverPoolStructs.Immutables',
        name: 'constants',
        type: 'tuple',
      },
    ],
    name: 'initialize',
    outputs: [
      {
        internalType: 'uint8',
        name: 'initializable',
        type: 'uint8',
      },
      {
        internalType: 'int24',
        name: 'startingTick',
        type: 'int24',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

export class ITwapSource__factory {
  static readonly abi = _abi;
  static createInterface(): ITwapSourceInterface {
    return new utils.Interface(_abi) as ITwapSourceInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): ITwapSource {
    return new Contract(address, _abi, signerOrProvider) as ITwapSource;
  }
}
