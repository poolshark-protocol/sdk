export const rangePoolManagerABI = [
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'FeeTierAlreadyEnabled',
    type: 'error',
  },
  {
    inputs: [],
    name: 'FeeTierTickSpacingInvalid',
    type: 'error',
  },
  {
    inputs: [],
    name: 'FeeToOnly',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OwnerOnly',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ProtocolFeeMaxExceeded',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TransferredToZeroAddress',
    type: 'error',
  },
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
        indexed: false,
        internalType: 'uint16',
        name: 'swapFee',
        type: 'uint16',
      },
      {
        indexed: false,
        internalType: 'int24',
        name: 'tickSpacing',
        type: 'int24',
      },
    ],
    name: 'FeeTierEnabled',
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
        name: 'pool',
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
    name: 'ProtocolFeeCollected',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address[]',
        name: 'pool',
        type: 'address[]',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'protocolFee',
        type: 'uint16',
      },
    ],
    name: 'ProtocolFeeUpdated',
    type: 'event',
  },
  {
    inputs: [],
    name: '_owner',
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
        internalType: 'address[]',
        name: 'collectPools',
        type: 'address[]',
      },
    ],
    name: 'collectTopPools',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint16',
        name: 'swapFee',
        type: 'uint16',
      },
      {
        internalType: 'int24',
        name: 'tickSpacing',
        type: 'int24',
      },
    ],
    name: 'enableFeeTier',
    outputs: [],
    stateMutability: 'nonpayable',
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
        name: '',
        type: 'uint16',
      },
    ],
    name: 'feeTiers',
    outputs: [
      {
        internalType: 'int24',
        name: '',
        type: 'int24',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'feeTo',
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
    inputs: [],
    name: 'owner',
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
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'protocolFees',
    outputs: [
      {
        internalType: 'uint16',
        name: '',
        type: 'uint16',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'factory_',
        type: 'address',
      },
    ],
    name: 'setFactory',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'removePools',
        type: 'address[]',
      },
      {
        internalType: 'address[]',
        name: 'addPools',
        type: 'address[]',
      },
      {
        internalType: 'uint16',
        name: 'protocolFee',
        type: 'uint16',
      },
    ],
    name: 'setTopPools',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newFeeTo',
        type: 'address',
      },
    ],
    name: 'transferFeeTo',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'newOwner',
        type: 'address',
      },
    ],
    name: 'transferOwner',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];
