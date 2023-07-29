import { Network } from "../../enums";
import { CoverPool__factory,CoverPool } from "../../typechain";
import { coverPoolAddressArbitrum,coverPoolAddressArbitrumGoerli } from "../../constants";
import { Signer } from "ethers";
import type {Provider} from '@ethersproject/providers';
import { CoverPoolAddressConstructorArgs } from "../types";
import { MintParams,SwapParams,BurnParams } from "./types";

type CoverPoolSettersConstructorArgs = Omit<CoverPoolAddressConstructorArgs, "signerOrProvider"> & { signerOrProvider: Signer };

export class CoverPoolSetters  {
    coverPool:CoverPool;
    network:Network;
    signer:Signer
    debugMode:boolean;
    poolAddress:`0x${string}`;
    constructor(args:CoverPoolSettersConstructorArgs) {
        this.network = args.network;
        this.coverPool = CoverPool__factory.connect(args.poolAddress, args.signerOrProvider);
        this.signer = args.signerOrProvider;
        this.debugMode = args.debugMode;
        this.poolAddress = args.poolAddress;
    }
    
    /**
     * @notice Deposits `amountIn` of asset to be auctioned off each time price range is crossed further into.
     * - E.g. User supplies 1 WETH in the range 1500 USDC per WETH to 1400 USDC per WETH
              As latestTick crosses from 1500 USDC per WETH to 1400 USDC per WETH,
              the user's liquidity within each tick spacing is auctioned off.
     * @dev The position will be shrunk onto the correct side of latestTick.
     * @dev The position will be minted with the `to` address as the owner.
     * @param params see MintParams type for details
     */
    async mint(args:MintParams) {
        const tx = await this.coverPool.mint(args);
        await tx.wait();
        return tx;
    }
    
        /**
     * @notice Swaps `tokenIn` for `tokenOut`. 
               `tokenIn` will be `token0` if `zeroForOne` is true.
               `tokenIn` will be `token1` if `zeroForOne` is false.
               The pool price represents token1 per token0.
               The pool price will decrease if `zeroForOne` is true.
               The pool price will increase if `zeroForOne` is false. 
     * @param params The parameters for the function. See SwapParams above.
     * @return inAmount The amount of tokenIn to be spent
     * @return outAmount The amount of tokenOut to be received
     * @return priceAfter The Q64.96 square root price after the swap
     */
    async swap(args:SwapParams) {
        const tx = await this.coverPool.swap(args);
        await tx.wait();
        return tx;
    }

        /**
     * @notice Withdraws the input token and returns any filled and/or unfilled amounts to the 'to' address specified. 
     * - E.g. User supplies 1 WETH in the range 1500 USDC per WETH to 1400 USDC per WETH
              As latestTick crosses from 1500 USDC per WETH to 1400 USDC per WETH,
              the user's liquidity within each tick spacing is auctioned off.
     * @dev The position will be shrunk based on the claim tick passed.
     * @dev The position amounts will be returned to the `to` address specified.
     * @dev The `sync` flag can be set to false so users can exit safely without syncing latestTick.
     * @param params See BurnParams type for details
     */
    async burn(args:BurnParams) {
        const tx = await this.coverPool.burn(args);
        await tx.wait();
        return tx;
    }

   


}
