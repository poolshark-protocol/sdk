[
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'sourceName',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'sourceAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'curveAddress',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
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
        internalType: 'bytes32',
        name: 'sourceName',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'sourceAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'curveAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'factoryAddress',
        type: 'address',
      },
    ],
    name: 'TwapSourceEnabled',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'address',
        name: 'sourceAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'curveAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'feeTier',
        type: 'uint16',
      },
      {
        indexed: false,
        internalType: 'int16',
        name: 'tickSpread',
        type: 'int16',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'twapLength',
        type: 'uint16',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'minAmountPerAuction',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'auctionLength',
        type: 'uint16',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'blockTime',
        type: 'uint16',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'syncFee',
        type: 'uint16',
      },
      {
        indexed: false,
        internalType: 'uint16',
        name: 'fillFee',
        type: 'uint16',
      },
      {
        indexed: false,
        internalType: 'int16',
        name: 'minPositionWidth',
        type: 'int16',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'minLowerPriced',
        type: 'bool',
      },
    ],
    name: 'VolatilityTierEnabled',
    type: 'event',
  },
  {
    inputs: [],
    name: 'MAX_PROTOCOL_FEE',
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
        internalType: 'address[]',
        name: 'collectPools',
        type: 'address[]',
      },
    ],
    name: 'collectProtocolFees',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'sourceName',
        type: 'bytes32',
      },
      {
        internalType: 'address',
        name: 'sourceAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'curveAddress',
        type: 'address',
      },
    ],
    name: 'enableTwapSource',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'sourceName',
        type: 'bytes32',
      },
      {
        internalType: 'uint16',
        name: 'feeTier',
        type: 'uint16',
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
        internalType: 'uint128',
        name: 'minAmountPerAuction',
        type: 'uint128',
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
        internalType: 'uint16',
        name: 'syncFee',
        type: 'uint16',
      },
      {
        internalType: 'uint16',
        name: 'fillFee',
        type: 'uint16',
      },
      {
        internalType: 'int16',
        name: 'minPositionWidth',
        type: 'int16',
      },
      {
        internalType: 'bool',
        name: 'minLowerPriced',
        type: 'bool',
      },
    ],
    name: 'enableVolatilityTier',
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
    inputs: [
      {
        internalType: 'address[]',
        name: 'modifyPools',
        type: 'address[]',
      },
      {
        internalType: 'uint16[]',
        name: 'syncFees',
        type: 'uint16[]',
      },
      {
        internalType: 'uint16[]',
        name: 'fillFees',
        type: 'uint16[]',
      },
      {
        internalType: 'bool[]',
        name: 'setFees',
        type: 'bool[]',
      },
    ],
    name: 'modifyProtocolFees',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'sourceName',
        type: 'bytes32',
      },
      {
        internalType: 'uint16',
        name: 'feeTier',
        type: 'uint16',
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
        name: 'syncFee',
        type: 'uint16',
      },
      {
        internalType: 'uint16',
        name: 'fillFee',
        type: 'uint16',
      },
    ],
    name: 'modifyVolatilityTierFees',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'oneSecond',
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
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'sourceName',
        type: 'bytes32',
      },
    ],
    name: 'twapSources',
    outputs: [
      {
        internalType: 'address',
        name: 'sourceAddress',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'curveAddress',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'sourceName',
        type: 'bytes32',
      },
      {
        internalType: 'uint16',
        name: 'feeTier',
        type: 'uint16',
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
    ],
    name: 'volatilityTiers',
    outputs: [
      {
        components: [
          {
            internalType: 'uint128',
            name: 'minAmountPerAuction',
            type: 'uint128',
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
            internalType: 'uint16',
            name: 'syncFee',
            type: 'uint16',
          },
          {
            internalType: 'uint16',
            name: 'fillFee',
            type: 'uint16',
          },
          {
            internalType: 'int16',
            name: 'minPositionWidth',
            type: 'int16',
          },
          {
            internalType: 'bool',
            name: 'minAmountLowerPriced',
            type: 'bool',
          },
        ],
        internalType: 'struct CoverPoolManagerStructs.VolatilityTier',
        name: 'config',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];
