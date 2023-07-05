import { ethers } from 'ethers';
import { CoverPool } from 'packages/smart-contract-sdk/typechain/CoverPool'
import { coverPoolABI } from 'packages/smart-contract-sdk/abis/evm/cover/coverPool.ts'
import { TickMath } from 'packages/typescript-sdk/libraries/math/tickMath.ts'
require('dotenv').config();

console.log("hello world")
console.log(process.env.ARBITRUM_GOERLI_URL)