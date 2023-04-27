const ethers = require('ethers');

// Define the ABI of the TickMath library // @dev move this to the abi directory and make sure its valid
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
  }
];

// Define the contract address (replace with the actual deployed address)
const tickMathAddress = '0x1234567890123456789012345678901234567890';

// Create a function to get the square root price at a specific tick
async function getSqrtRatioAtTick(provider, tick) {
  // Create an instance of the TickMath library contract
  const tickMathContract = new ethers.Contract(tickMathAddress, tickMathAbi, provider);
  // Call the getSqrtRatioAtTick function
  const sqrtPriceX96 = await tickMathContract.getSqrtRatioAtTick(tick);
  return sqrtPriceX96;
}

// Create a function to get the tick at a specific square root price
async function getTickAtSqrtRatio(provider, sqrtPriceX96) {
  // Create an instance of the TickMath library contract
  const tickMathContract = new ethers.Contract(tickMathAddress, tickMathAbi, provider);
  // Call the getTickAtSqrtRatio function
  const tick = await tickMathContract.getTickAtSqrtRatio(sqrtPriceX96);
  return tick;
}

// Example usage
(async () => {
  // Create a provider (replace with the actual provider, e.g., Infura, Alchemy, etc.)
  const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/YOUR-PROJECT-ID');

  // Get the square root price at a specific tick
  const tick = -1000;
  const sqrtPriceX96 = await getSqrtRatioAtTick(provider, tick);
  console.log(`SqrtPriceX96 at tick ${tick}:`, sqrtPriceX96.toString());

  // Get the tick at a specific square root price
  const price = ethers.BigNumber.from('1000000000000');
  const resultTick = await getTickAtSqrtRatio(provider, price);
  console.log(`Tick at sqrtPriceX96 ${price}:`, resultTick.toString());
})();
