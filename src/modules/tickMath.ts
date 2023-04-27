import { ethers } from 'ethers';

// Define the ABI (Application Binary Interface) for the TickMath library   // @dev move this to the abi directory and make sure its valid
const tickMathAbi = [
  {
    "inputs": [
      {
        "internalType": "int24",
        "name": "tick",
        "type": "int24"
      }
    ],
    "name": "getSqrtRatioAtTick",
    "outputs": [
      {
        "internalType": "uint160",
        "name": "getSqrtPriceX96",
        "type": "uint160"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint160",
        "name": "sqrtPriceX96",
        "type": "uint160"
      }
    ],
    "name": "getTickAtSqrtRatio",
    "outputs": [
      {
        "internalType": "int24",
        "name": "tick",
        "type": "int24"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint160",
        "name": "price",
        "type": "uint160"
      }
    ],
    "name": "validatePrice",
    "outputs": [],
    "stateMutability": "pure",
    "type": "function"
  }
];

// Define the address of the TickMath library (replace with the actual deployed address)
const tickMathAddress = '0x...';

// Create functions to interact with the TickMath library
class TickMathWrapper {
  provider: ethers.providers.Provider;

  constructor(provider: ethers.providers.Provider) {
    this.provider = provider;
  }

  async getSqrtRatioAtTick(tick: number) {
    const tickMathContract = new ethers.Contract(tickMathAddress, tickMathAbi, this.provider);
    return await tickMathContract.getSqrtRatioAtTick(tick);
  }

  async getTickAtSqrtRatio(sqrtPriceX96: ethers.BigNumber) {
    const tickMathContract = new ethers.Contract(tickMathAddress, tickMathAbi, this.provider);
    return await tickMathContract.getTickAtSqrtRatio(sqrtPriceX96);
  }

  async validatePrice(price: ethers.BigNumber) {
    const tickMathContract = new ethers.Contract(tickMathAddress, tickMathAbi, this.provider);
    await tickMathContract.validatePrice(price);
  }
}

// Example usage
(async () => {
  // Create a provider (replace with the actual provider, e.g., Infura, Alchemy, etc.)
  const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR-PROJECT-ID');

  // Initialize the TickMathWrapper
  const tickMath = new TickMathWrapper(provider);

  // Use the functions
  const tick = -1000;
  const sqrtPriceX96 = ethers.BigNumber.from('1000000000000');

  const result = await tickMath.getSqrtRatioAtTick(tick);
  console.log('Result of getSqrtRatioAtTick:', result.toString());

  const resultTick = await tickMath.getTickAtSqrtRatio(sqrtPriceX96);
  console.log('Result of getTickAtSqrtRatio:', resultTick.toString());

  try {
    await tickMath.validatePrice(sqrtPriceX96);
    console.log(Price ${sqrtPriceX96} is valid.);
    } 
    catch (error) {
    console.error(Price ${sqrtPriceX96} is invalid., error);
  }
})();
