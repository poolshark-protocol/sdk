import { BigNumber } from "ethers"
import { BigintIsh } from "../../../typescript-sdk/utils/constants"

export interface QuoteParams {
    /**
     * True if trading  token0 => token1.
     * False if trading token1 => token0.
     * Refer to tokens.ts for sorting addresses
     */
    zeroForOne: string

    /**
     * Price limit after which to stop using input token.
     */
    priceLimit: string

    /**
     * Amount of tokenIn to deposit as liquidity. 
     * This must be set as your address if you wish to mint to yourself.
     */
    amountIn: BigintIsh
}

export interface QuoteOutputs {
    /**
     * Amount of tokenIn to deposit as liquidity. 
     * This must be set as your address if you wish to mint to yourself.
     */
    inAmount: BigintIsh

    /**
     * Amount of tokenIn to deposit as liquidity. 
     * This must be set as your address if you wish to mint to yourself.
     */
    outAmount: BigintIsh

    /**
     * The pool price after if the quoted swap took place in Q64.96 format.
     */
    priceAfter: BigintIsh
}

export interface QuoteOptions {
    /**
     * The percent beyond which the mint transaction will revert.
     * 100% = ethers.utils.parseUnits("1", 38)
    */
    slippageTolerance?: BigNumber

    /**
   * The time at which the mint transaction should no longer succeed.
   */
    deadline?: BigNumber

    /**
   * Whether to create a pool if one doesn't already exist for the pair.
   */
    createPool?: boolean

    /**
     * The percentage of position liquidity to increase by.
     * Will be ignored if a position doesn't already exist for the 'to' address.
     * 100% = ethers.utils.parseUnits("1", 38)
    */
    percentIncrease?: BigNumber

    /**
     * The percent of the output that will be taken as a fee.
     */
    feePercent: BigNumber
      
    /**
     * The recipient of the fee.
     */
    feeRecipient: string
}