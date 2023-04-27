import { ethers } from 'ethers';

// Define the ABI (Application Binary Interface) for the FullPrecisionMath library
const fullPrecisionMathAbi = [
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "a",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "b",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "denominator",
        "type": "uint256"
      }
    ],
    "name": "mulDiv",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "result",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "x",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "y",
        "type": "uint256"
      }
    ],
    "name": "divRoundingUp",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "z",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "a",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "b",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "denominator",
        "type": "uint256"
      }
    ],
    "name": "mulDivRoundingUp",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "result",
        "type": "uint256"
      }
    ],
    "stateMutability": "pure",
    "type": "function"
  }
];

// Define the address of the FullPrecisionMath library (replace with the actual deployed address)
const fullPrecisionMathAddress = '0x...';

// Define the address of the PrecisionMath library (replace with the actual deployed address)
const precisionMathAddress = '0x...';

// Create functions to interact with the FullPrecisionMath library
class FullPrecisionMathWrapper {
  provider: ethers.providers.Provider;

  constructor(provider: ethers.providers.Provider) {
    this.provider = provider;
  }

  async mulDiv(a: ethers.BigNumber, b: ethers.BigNumber, denominator: ethers.BigNumber) {
    const fullPrecisionMathContract = new ethers.Contract(fullPrecisionMathAddress, fullPrecisionMathAbi, this.provider);
    return await fullPrecisionMathContract.mulDiv(a, b, denominator);
  }

  async divRoundingUp(x: ethers.BigNumber, y: ethers.BigNumber) {
    const fullPrecisionMathContract = new ethers.Contract(fullPrecisionMathAddress, fullPrecisionMathAbi, this.provider);
    return await fullPrecisionMathContract.divRoundingUp(x, y);
  }

  async mulDivRoundingUp(a: ethers.BigNumber, b: ethers.BigNumber, denominator: ethers.BigNumber) {
    const fullPrecisionMathContract = new ethers.Contract(fullPrecisionMathAddress, fullPrecisionMathAbi, this.provider);
return await fullPrecisionMathContract.mulDivRoundingUp(a, b, denominator);
}
}

// Create functions to interact with the PrecisionMath library
class PrecisionMathWrapper {
provider: ethers.providers.Provider;

constructor(provider: ethers.providers.Provider) {
this.provider = provider;
}

async mulDiv(a: ethers.BigNumber, b: ethers.BigNumber, denominator: ethers.BigNumber) {
const precisionMathContract = new ethers.Contract(precisionMathAddress, fullPrecisionMathAbi, this.provider);
return await precisionMathContract.mulDiv(a, b, denominator);
}

async divRoundingUp(x: ethers.BigNumber, y: ethers.BigNumber) {
const precisionMathContract = new ethers.Contract(precisionMathAddress, fullPrecisionMathAbi, this.provider);
return await precisionMathContract.divRoundingUp(x, y);
}

async mulDivRoundingUp(a: ethers.BigNumber, b: ethers.BigNumber, denominator: ethers.BigNumber) {
const precisionMathContract = new ethers.Contract(precisionMathAddress, fullPrecisionMathAbi, this.provider);
return await precisionMathContract.mulDivRoundingUp(a, b, denominator);
}
}

// Usage example
const provider = new ethers.providers.JsonRpcProvider('YOUR_RPC_URL');

const fullPrecisionMathWrapper = new FullPrecisionMathWrapper(provider);
const precisionMathWrapper = new PrecisionMathWrapper(provider);

// Call the functions using BigNumber values for the parameters
const a = ethers.BigNumber.from('123');
const b = ethers.BigNumber.from('456');
const denominator = ethers.BigNumber.from('789');

(async () => {
const mulDivResult = await fullPrecisionMathWrapper.mulDiv(a, b, denominator);
const divRoundingUpResult = await fullPrecisionMathWrapper.divRoundingUp(a, b);
const mulDivRoundingUpResult = await fullPrecisionMathWrapper.mulDivRoundingUp(a, b, denominator);

const precisionMulDivResult = await precisionMathWrapper.mulDiv(a, b, denominator);
const precisionDivRoundingUpResult = await precisionMathWrapper.divRoundingUp(a, b);
const precisionMulDivRoundingUpResult = await precisionMathWrapper.mulDivRoundingUp(a, b, denominator);

// Log the results
console.log('FullPrecisionMath Results:');
console.log('mulDiv:', mulDivResult.toString());
console.log('divRoundingUp:', divRoundingUpResult.toString());
console.log('mulDivRoundingUp:', mulDivRoundingUpResult.toString());

console.log('PrecisionMath Results:');
console.log('mulDiv:', precisionMulDivResult.toString());
console.log('divRoundingUp:', precisionDivRoundingUpResult.toString());
console.log('mulDivRoundingUp:', precisionMulDivRoundingUpResult.toString());
})();

// Note: Replace 'YOUR_RPC_URL' with the URL of your Ethereum node provider.
// The BigNumber values 'a', 'b', and 'denominator' are used for demonstration purposes and can be replaced with actual values.
// Make sure to replace '0x...' with the actual deployed addresses of the FullPrecisionMath and PrecisionMath libraries.
