import { ethers } from 'ethers';

// In the FeeMath.ts file, import the IRangePoolStructs interface
import { IRangePoolStructs } from './path/to/IRangePoolStructs';

// ABI for the FeeMath library
const feeMathAbi = [
  {
    "inputs": [
      { "internalType": "struct IRangePoolStructs.PoolState", "name": "pool", "type": "tuple" },
      { "internalType": "struct IRangePoolStructs.SwapCache", "name": "cache", "type": "tuple" },
      { "internalType": "bool", "name": "zeroForOne", "type": "bool" }
    ],
    "name": "calculate",
    "outputs": [
      { "internalType": "struct IRangePoolStructs.PoolState", "type": "tuple" },
      { "internalType": "struct IRangePoolStructs.SwapCache", "type": "tuple" }
    ],
    "stateMutability": "pure",
    "type": "function"
  }
];

// Create an instance of the FeeMath library
const feeMathLibraryAddress = '0x...'; // Replace with the deployed address of the FeeMath library
const provider = new ethers.providers.JsonRpcProvider(); // Replace with the appropriate provider
const feeMathLibrary = new ethers.Contract(feeMathLibraryAddress, feeMathAbi, provider);

// Define PoolState and SwapCache (example values for demonstration purposes)
const poolState = {
  liquidity: 1000,
  feeGrowthGlobal0: 12345,
  feeGrowthGlobal1: 67890,
  protocolFees: { token0: 100, token1: 200 }
};
const swapCache = {
  output: 500,
  swapFee: 3000,
  protocolFee: 600
};
const zeroForOne = true;

// Interact with the calculate function in the FeeMath library
async function calculateFee() {
  const [newPoolState, newSwapCache] = await feeMathLibrary.calculate(poolState, swapCache, zeroForOne);
  console.log('New Pool State:', newPoolState);
  console.log('New Swap Cache:', newSwapCache);
}

// Call the function
calculateFee();
