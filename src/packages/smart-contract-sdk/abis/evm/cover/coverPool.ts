export const coverPoolABI = [
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint128",
                "name": "minAmountPerAuction",
                "type": "uint128"
              },
              {
                "internalType": "uint16",
                "name": "auctionLength",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "blockTime",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "syncFee",
                "type": "uint16"
              },
              {
                "internalType": "uint16",
                "name": "fillFee",
                "type": "uint16"
              },
              {
                "internalType": "int16",
                "name": "minPositionWidth",
                "type": "int16"
              },
              {
                "internalType": "bool",
                "name": "minAmountLowerPriced",
                "type": "bool"
              }
            ],
            "internalType": "struct CoverPoolManagerStructs.VolatilityTier",
            "name": "config",
            "type": "tuple"
          },
          {
            "internalType": "address",
            "name": "twapSource",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "curveMath",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "inputPool",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "token0",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "token1",
            "type": "address"
          },
          {
            "internalType": "int16",
            "name": "tickSpread",
            "type": "int16"
          },
          {
            "internalType": "uint16",
            "name": "twapLength",
            "type": "uint16"
          }
        ],
        "internalType": "struct CoverPoolFactoryStructs.CoverPoolParams",
        "name": "params",
        "type": "tuple"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "CollectToZeroAddress",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "FactoryOnly",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidPosition",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidSwapFee",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidTick",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidTickSpread",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidToken",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidTokenDecimals",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LiquidityOverflow",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "Locked",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "LowerNotEvenTick",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "MaxTickLiquidity",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NotEnoughOutputLiquidity",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "Overflow",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "OwnerOnly",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "Token0Missing",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "Token1Missing",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "UpperNotOddTick",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "WaitUntilEnoughObservations",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "auctionLength",
    "outputs": [
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "blockTime",
    "outputs": [
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint128",
            "name": "burnPercent",
            "type": "uint128"
          },
          {
            "internalType": "int24",
            "name": "lower",
            "type": "int24"
          },
          {
            "internalType": "int24",
            "name": "claim",
            "type": "int24"
          },
          {
            "internalType": "int24",
            "name": "upper",
            "type": "int24"
          },
          {
            "internalType": "bool",
            "name": "zeroForOne",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "sync",
            "type": "bool"
          }
        ],
        "internalType": "struct ICoverPool.BurnParams",
        "name": "params",
        "type": "tuple"
      }
    ],
    "name": "burn",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "feeTo",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint16",
        "name": "syncFee",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "fillFee",
        "type": "uint16"
      },
      {
        "internalType": "bool",
        "name": "setFees",
        "type": "bool"
      }
    ],
    "name": "fees",
    "outputs": [
      {
        "internalType": "uint128",
        "name": "token0Fees",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "token1Fees",
        "type": "uint128"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "genesisTime",
    "outputs": [
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "globalState",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint128",
            "name": "token0",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "token1",
            "type": "uint128"
          }
        ],
        "internalType": "struct ICoverPoolStructs.ProtocolFees",
        "name": "protocolFees",
        "type": "tuple"
      },
      {
        "internalType": "uint160",
        "name": "latestPrice",
        "type": "uint160"
      },
      {
        "internalType": "uint128",
        "name": "liquidityGlobal",
        "type": "uint128"
      },
      {
        "internalType": "uint32",
        "name": "lastTime",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "auctionStart",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "accumEpoch",
        "type": "uint32"
      },
      {
        "internalType": "int24",
        "name": "latestTick",
        "type": "int24"
      },
      {
        "internalType": "uint16",
        "name": "syncFee",
        "type": "uint16"
      },
      {
        "internalType": "uint16",
        "name": "fillFee",
        "type": "uint16"
      },
      {
        "internalType": "uint8",
        "name": "unlocked",
        "type": "uint8"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "inputPool",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxPrice",
    "outputs": [
      {
        "internalType": "uint160",
        "name": "",
        "type": "uint160"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "minAmountLowerPriced",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "minAmountPerAuction",
    "outputs": [
      {
        "internalType": "uint128",
        "name": "",
        "type": "uint128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "minPositionWidth",
    "outputs": [
      {
        "internalType": "int16",
        "name": "",
        "type": "int16"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "minPrice",
    "outputs": [
      {
        "internalType": "uint160",
        "name": "",
        "type": "uint160"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "uint128",
            "name": "amount",
            "type": "uint128"
          },
          {
            "internalType": "int24",
            "name": "lower",
            "type": "int24"
          },
          {
            "internalType": "int24",
            "name": "upper",
            "type": "int24"
          },
          {
            "internalType": "bool",
            "name": "zeroForOne",
            "type": "bool"
          }
        ],
        "internalType": "struct ICoverPool.MintParams",
        "name": "params",
        "type": "tuple"
      }
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "owner",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pool0",
    "outputs": [
      {
        "internalType": "uint160",
        "name": "price",
        "type": "uint160"
      },
      {
        "internalType": "uint128",
        "name": "liquidity",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "amountInDelta",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "amountInDeltaMaxClaimed",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "amountOutDeltaMaxClaimed",
        "type": "uint128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "pool1",
    "outputs": [
      {
        "internalType": "uint160",
        "name": "price",
        "type": "uint160"
      },
      {
        "internalType": "uint128",
        "name": "liquidity",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "amountInDelta",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "amountInDeltaMaxClaimed",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "amountOutDeltaMaxClaimed",
        "type": "uint128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "int24",
        "name": "",
        "type": "int24"
      },
      {
        "internalType": "int24",
        "name": "",
        "type": "int24"
      }
    ],
    "name": "positions0",
    "outputs": [
      {
        "internalType": "uint160",
        "name": "claimPriceLast",
        "type": "uint160"
      },
      {
        "internalType": "uint128",
        "name": "liquidity",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "amountIn",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "amountOut",
        "type": "uint128"
      },
      {
        "internalType": "uint32",
        "name": "accumEpochLast",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "int24",
        "name": "",
        "type": "int24"
      },
      {
        "internalType": "int24",
        "name": "",
        "type": "int24"
      }
    ],
    "name": "positions1",
    "outputs": [
      {
        "internalType": "uint160",
        "name": "claimPriceLast",
        "type": "uint160"
      },
      {
        "internalType": "uint128",
        "name": "liquidity",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "amountIn",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "amountOut",
        "type": "uint128"
      },
      {
        "internalType": "uint32",
        "name": "accumEpochLast",
        "type": "uint32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint160",
            "name": "priceLimit",
            "type": "uint160"
          },
          {
            "internalType": "uint128",
            "name": "amountIn",
            "type": "uint128"
          },
          {
            "internalType": "bool",
            "name": "zeroForOne",
            "type": "bool"
          }
        ],
        "internalType": "struct ICoverPool.QuoteParams",
        "name": "params",
        "type": "tuple"
      }
    ],
    "name": "quote",
    "outputs": [
      {
        "internalType": "int256",
        "name": "inAmount",
        "type": "int256"
      },
      {
        "internalType": "uint256",
        "name": "outAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "priceAfter",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "owner",
            "type": "address"
          },
          {
            "internalType": "uint128",
            "name": "burnPercent",
            "type": "uint128"
          },
          {
            "internalType": "int24",
            "name": "lower",
            "type": "int24"
          },
          {
            "internalType": "int24",
            "name": "claim",
            "type": "int24"
          },
          {
            "internalType": "int24",
            "name": "upper",
            "type": "int24"
          },
          {
            "internalType": "bool",
            "name": "zeroForOne",
            "type": "bool"
          }
        ],
        "internalType": "struct ICoverPool.SnapshotParams",
        "name": "params",
        "type": "tuple"
      }
    ],
    "name": "snapshot",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint160",
            "name": "claimPriceLast",
            "type": "uint160"
          },
          {
            "internalType": "uint128",
            "name": "liquidity",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "amountIn",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "amountOut",
            "type": "uint128"
          },
          {
            "internalType": "uint32",
            "name": "accumEpochLast",
            "type": "uint32"
          }
        ],
        "internalType": "struct ICoverPoolStructs.Position",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "to",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "refundTo",
            "type": "address"
          },
          {
            "internalType": "uint160",
            "name": "priceLimit",
            "type": "uint160"
          },
          {
            "internalType": "uint128",
            "name": "amountIn",
            "type": "uint128"
          },
          {
            "internalType": "bool",
            "name": "zeroForOne",
            "type": "bool"
          }
        ],
        "internalType": "struct ICoverPool.SwapParams",
        "name": "params",
        "type": "tuple"
      }
    ],
    "name": "swap",
    "outputs": [
      {
        "internalType": "int256",
        "name": "inAmount",
        "type": "int256"
      },
      {
        "internalType": "uint256",
        "name": "outAmount",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "priceAfter",
        "type": "uint256"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tickMap",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "blocks",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "tickSpread",
    "outputs": [
      {
        "internalType": "int16",
        "name": "",
        "type": "int16"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "int24",
        "name": "",
        "type": "int24"
      }
    ],
    "name": "ticks0",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint128",
            "name": "amountInDelta",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "amountOutDelta",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "amountInDeltaMax",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "amountOutDeltaMax",
            "type": "uint128"
          }
        ],
        "internalType": "struct ICoverPoolStructs.Deltas",
        "name": "deltas",
        "type": "tuple"
      },
      {
        "internalType": "int128",
        "name": "liquidityDelta",
        "type": "int128"
      },
      {
        "internalType": "uint128",
        "name": "amountInDeltaMaxMinus",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "amountOutDeltaMaxMinus",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "amountInDeltaMaxStashed",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "amountOutDeltaMaxStashed",
        "type": "uint128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "int24",
        "name": "",
        "type": "int24"
      }
    ],
    "name": "ticks1",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint128",
            "name": "amountInDelta",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "amountOutDelta",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "amountInDeltaMax",
            "type": "uint128"
          },
          {
            "internalType": "uint128",
            "name": "amountOutDeltaMax",
            "type": "uint128"
          }
        ],
        "internalType": "struct ICoverPoolStructs.Deltas",
        "name": "deltas",
        "type": "tuple"
      },
      {
        "internalType": "int128",
        "name": "liquidityDelta",
        "type": "int128"
      },
      {
        "internalType": "uint128",
        "name": "amountInDeltaMaxMinus",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "amountOutDeltaMaxMinus",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "amountInDeltaMaxStashed",
        "type": "uint128"
      },
      {
        "internalType": "uint128",
        "name": "amountOutDeltaMaxStashed",
        "type": "uint128"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "token0",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "token1",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "twapLength",
    "outputs": [
      {
        "internalType": "uint16",
        "name": "",
        "type": "uint16"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "twapSource",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
]