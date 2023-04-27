// Poolshark ABI (DyDxMath (both range & cover... may want to extrapolate each api needed into its own file))
export const DyDxAbi = [
  {
    "inputs": [
      { "internalType": "uint256", "name": "liquidity", "type": "uint256" },
      { "internalType": "uint256", "name": "priceLower", "type": "uint256" },
      { "internalType": "uint256", "name": "priceUpper", "type": "uint256" },
      { "internalType": "bool", "name": "roundUp", "type": "bool" }
    ],
    "name": "getDy",
    "outputs": [{ "internalType": "uint256", "name": "dy", "type": "uint256" }],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "liquidity", "type": "uint256" },
      { "internalType": "uint256", "name": "priceLower", "type": "uint256" },
      { "internalType": "uint256", "name": "priceUpper", "type": "uint256" },
      { "internalType": "bool", "name": "roundUp", "type": "bool" }
    ],
    "name": "getDx",
    "outputs": [{ "internalType": "uint256", "name": "dx", "type": "uint256" }],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "priceLower", "type": "uint256" },
      { "internalType": "uint256", "name": "priceUpper", "type": "uint256" },
      { "internalType": "uint256", "name": "currentPrice", "type": "uint256" },
      { "internalType": "uint256", "name": "dy", "type": "uint256" },
      { "internalType": "uint256", "name": "dx", "type": "uint256" }
    ],
    "name": "getLiquidityForAmounts",
    "outputs": [{ "internalType": "uint256", "name": "liquidity", "type": "uint256" }],
    "stateMutability": "pure",
    "type": "function"
  }
]
