export const rangePoolFactoryABI = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "FeeTierNotSupported",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "InvalidTokenAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "PoolAlreadyExists",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "token0",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "token1",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint24",
          "name": "fee",
          "type": "uint24"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "pool",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint160",
          "name": "startPrice",
          "type": "uint160"
        }
      ],
      "name": "RangePoolCreated",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenIn",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenOut",
          "type": "address"
        },
        {
          "internalType": "uint16",
          "name": "swapFee",
          "type": "uint16"
        },
        {
          "internalType": "uint160",
          "name": "startPrice",
          "type": "uint160"
        }
      ],
      "name": "createRangePool",
      "outputs": [
        {
          "internalType": "address",
          "name": "pool",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "tokenIn",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "tokenOut",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "swapFee",
          "type": "uint256"
        }
      ],
      "name": "getRangePool",
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
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "name": "rangePools",
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