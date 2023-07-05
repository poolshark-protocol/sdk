import { ethers } from 'ethers';
// import { CoverPool } from '../packages/smart-contract-sdk/typechain/CoverPool'
// import { coverPoolABI } from '../packages/smart-contract-sdk/abis/evm/cover/coverPool'
// import { TickMath } from '../packages/typescript-sdk/libraries/math/tickMath'
// import {ERC20ABI} from "../packages/smart-contract-sdk/abis/evm/erc20/erc20";
// require('dotenv').config();
//
//
// // Provide the contract address and Ethereum provider
// const coverPoolAddress = '0x7c745bc99b7c17de1666a54e9b551fc2933d83e1'; // Address of the deployed CoverPool contract
// const zeroTokenAddress = '0x6774be1a283Faed7ED8e40463c40Fb33A8da3461'; // Address of token in the CoverPool that we are minting a position for
// const provider = new ethers.providers.JsonRpcProvider(process.env.ARBITRUM_GOERLI_URL); // JSON-RPC provider
// const signer = new ethers.Wallet(process.env.PRIVATE_KEY ?? "", provider);
//
// // Instantiate the CoverPool class
// const coverPool = new CoverPool(coverPoolAddress, coverPoolABI, provider);
// const tokenZero = new ethers.Contract(zeroTokenAddress, ERC20ABI, provider);
//
// // TickMath
// const lower = TickMath.getTickAtPriceString('1')
// const upper = TickMath.getTickAtPriceString('10')
//
// // Token amount conversion to proper units
// const amount = ethers.BigNumber.from(50)
// const decimals = 18
// const amountWithDecimals = ethers.utils.parseUnits(amount.toString(), decimals);
//
// // Approve the CoverPool for the amount we want to mint
// const approveTx = tokenZero.connect(signer).approve(coverPoolAddress, amountWithDecimals)
// await approveTx.wait()
//
// console.log("CoverPool approved to spend " + amountWithDecimals.toString())
//
// // Define parameters for the mint function
// const mintParams = {
//   to: signer.address, //TODO: this should be the signer's address
//   amount: amountWithDecimals,
//   lower,
//   upper,
//   zeroForOne: true
// };
//
// // Call the mint function
// // TODO: needs a valid signer
// const mintTx = await coverPool.connect(signer).mint(mintParams)
// await mintTx.wait()
//
// console.log("Position minted succesfully! https://goerli.arbiscan.io/tx/${mintTx.hash}")
//
// // // BONUS: write a small example for the 'burn' function
// //
// // const claim; // I think I need a bit more clarification on this, but will get back to it
// //
// // const burnPercent = (1*10^38)/2 //1e38 represents 100% of the position. Let's only burn half
// // const burnParams = {
// //   to: signer.address,
// //   burnPercent,
// //   lower,
// //   claim,
// //   upper,
// //   zeroForOne: true,
// //   sync: true
// // }
// //
// // const burnTx = await coverPool.connect(signer).burn(burnParams)
// // await burnTx.wait()
// //
// // console.log('Position burned successfully! https://goerli.arbiscan.io/tx/${burnTx.hash}')
//
//
//
//
//
//
