import { ethers } from 'ethers';
import { coverPoolABI } from '../packages/smart-contract-sdk/abis/evm/cover/coverPool'
import { TickMath } from '../packages/typescript-sdk/libraries/math/tickMath'
import {ERC20ABI} from "../packages/smart-contract-sdk/abis/evm/erc20/erc20";
import * as dotenv from 'dotenv'
dotenv.config()
//
//

// const coverPool = new CoverPool()


async function main() {

    // Provide the contract address and Ethereum provider
    const coverPoolAddress = '0x7c745bc99b7c17de1666a54e9b551fc2933d83e1'; // Address of the deployed CoverPool contract
    const zeroTokenAddress = '0x6774be1a283Faed7ED8e40463c40Fb33A8da3461'; // Address of token in the CoverPool that we are minting a position for
    const provider = new ethers.providers.JsonRpcProvider(process.env.ARBITRUM_GOERLI_URL); // JSON-RPC provider
    const signer = new ethers.Wallet(process.env.PRIVATE_KEY ?? "", provider);
    

    const tokenZero = new ethers.Contract(zeroTokenAddress, ERC20ABI, signer);
    const mintTokenZero = await tokenZero.mint(signer.address, ethers.utils.parseEther('1000'));
    await mintTokenZero.wait();
    console.log("minted token");
//     // TickMath
    const lower = TickMath.getTickAtPriceString('1')
    const upper = TickMath.getTickAtPriceString('10',20);
    console.log("lower", lower);
    
//     // Token amount conversion to proper units
    const amount =  await tokenZero.balanceOf(signer.address);
    
    const approveTx = await tokenZero.approve(coverPoolAddress, amount)
    await approveTx.wait();
    console.log("mint tx complete");


   const mintParams = {
    to: signer.address, 
    amount: amount,
    lower,
    upper,
    zeroForOne: true
};

const coverPool = new ethers.Contract(coverPoolAddress, coverPoolABI, signer)
const mintTx = await coverPool.mint(mintParams)
await mintTx.wait()

// console.log(`Position minted succesfully! https://goerli.arbiscan.io/tx/${mintTx.hash}`)

//---------------------------



const burnPercent = (1*10^38)/2 //1e38 represents 100% of the position. Let's only burn half
const burnParams = {
      to: signer.address,
      burnPercent,
      lower,
      upper,
      claim:upper,
      zeroForOne: true,
      sync: true
    }
    
    const burnTx = await coverPool.burn(burnParams)
    await burnTx.wait()
    console.log("burn tx complete")
    
    
}
main();   
    
    
    
    
    