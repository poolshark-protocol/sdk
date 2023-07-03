import { ethers } from 'ethers';
import { CoverPool } from '../packages/smart-contract-sdk/typechain/CoverPool'
import { coverPoolABI } from '../packages/smart-contract-sdk/abis/evm/cover/coverPool'
import { TickMath } from '../packages/typescript-sdk/libraries/math/tickMath'

// Provide the contract address and Ethereum provider
const coverPoolAddress = '0x7c745bc99b7c17de1666a54e9b551fc2933d83e1'; // Address of the deployed CoverPool contract
const provider = new ethers.providers.JsonRpcProvider(process.env.ARBITRUM_GOERLI_URL); // JSON-RPC provider

// Instantiate the CoverPool class
const coverPool = new CoverPool(coverPoolAddress, coverPoolABI, provider);

// TickMath
const lower = TickMath.getTickAtPriceString('1')
const upper = TickMath.getTickAtPriceString('10')

// Define parameters for the mint function
const mintParams: MintParams = {
  to: '0x...', //TODO: this should be the signer's address
  lower,
  upper,
  zeroForOne: true,
};

// Call the mint function
// TODO: needs a valid signer
coverPool.connect(signer).mint(mintParams)

// BONUS: write a small example for the 'burn' function
