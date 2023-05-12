import { BigintIsh } from "../../types/numbers"

export interface MintParams {
    /**
     * Recipient of the LP position. 
     * This must be set as your address if you wish to mint to yourself.
     */
    to: string

    /**
     * Amount of tokenIn to deposit as liquidity. 
     */
    amount0: BigintIsh

    /**
     * The lower tick of the LP position range.
     * Refer to math/tickMath.ts for price to tick conversion.
     */
    lower: number

    /**
     * The claim tick of the LP position range.
     * For new positions, this should be zeroForOne ? upper : lower.
     * For existing positions, refer to the subgraph-sdk to locate the claim tick off-chain.
     * For existing positions, the snapshot() function can be called to return the current valid claim tick.
     * Refer to math/tickMath.ts for price to tick conversion.
     */
    claim: string

    /**
     * The upper tick of the LP position range.
     * Refer to math/tickMath.ts for price to tick conversion.
     */
    upper: number


    /**
     * True if depositing token0. 
     * False if depositing token1.
     */
    zeroForOne: boolean
}

export interface MintOptions {
    /**
     * The percent beyond which the mint transaction will revert.
     * 100% = ethers.utils.parseUnits("1", 38)
    */
    slippageTolerance?: BigintIsh

    /**
   * The time at which the mint transaction should no longer succeed.
   */
    deadline?: BigintIsh

    /**
   * Whether to create a pool if one doesn't already exist for the pair.
   */
    createPool?: boolean

    /**
     * The percentage of position liquidity to increase by.
     * Will be ignored if a position doesn't already exist for the 'to' address.
     * 100% = ethers.utils.parseUnits("1", 38)
    */
    percentIncrease?: BigintIsh
}