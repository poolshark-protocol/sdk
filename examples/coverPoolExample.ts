import { ethers } from 'ethers';
import { CoverPool, CoverPoolParams, MintParams } from '../modules/smart-contract-sdk/cover/coverPool';

// Provide the contract address and Ethereum provider
const coverPoolAddress = '0x...'; // Address of the deployed CoverPool contract
const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545'); // JSON-RPC provider

// Grab CoverPool from factory

// Instantiate the CoverPool class
const coverPool = new CoverPool(coverPoolAddress, provider);

// 
TickMath.priceStringToTick('3000.00')

// Define parameters for the mint function
const mintParams: MintParams = {
  to: '0x...',
  lower: 10,
  upper: 20,
  claim: 15,
  zeroForOne: Token.zeroForOne(),
};

// Call the mint function
//TOOD: needs a signer
//put pkey in .env file and load that as a signer
coverPool.mint(mintParams).then((transaction) => {
  console.log('Mint transaction:', transaction);
}).catch((error) => {
  console.error('Error calling mint:', error);
});

// ... Similarly, you can interact with other functions in the CoverPool contract
