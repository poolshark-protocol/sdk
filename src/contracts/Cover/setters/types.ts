import {type BigNumberish, type BigNumber } from "ethers/lib/ethers"

/**
 * @param to: Address for the receiver of the minted position
 * @param amount: Token amount to be deposited into the minted position
 * @param lower: The lower price tick for the new position range
 * @param upper: The upper price tick for the new position range
 * @param zeroForOne: The direction of the swap, true for token0 to token1, false for token1 to token0
 * True if depositing for token0, the first token address in lexographical order
 * False if depositing for token1, the second token address in lexographical order
  */
type MintParams = {
    to:`0x${string}`,
    amount:BigNumberish,
    lower:BigNumberish,
    upper:BigNumberish,
    zeroForOne:boolean,
}

/**
 * @param to: Address for the receiver of the swap output
 * @param refundTo: Address for the receiver of any fees or refunds
 * @param priceLimit: The Q64.96 square root price at which to stop swapping.
 * @param amountIn: The tokenIn amount being passed into the swap
 * @param zeroForOne: The direction of the swap, true for token0 to token1, false for token1 to token0
 * True if swapping in token0, the first token address in lexographical order
 * False if swapping in token1, the second token address in lexographical order 
 */
type SwapParams = {
    to:`0x${string}`,
    refundTo:`0x${string}`,
    priceLimit:BigNumberish,
    amountIn:BigNumberish,
    zeroForOne:boolean,
}

    /**
    * @param to: Address for the receiver of the collected position amounts
    * @param burnPercent: Percentage of the position to burn
    * 1e38 represents 100% of the position.
    * 5e37 represents 50% of the position.
    * 1e37 represents 10% of the position.
    * @param lower: The lower price tick for the existing position range
    * @param claim: The most recent tick crossed in this range
    * if `zeroForOne` is true, claim tick progresses from upper => lower
    * if `zeroForOne` is false, claim tick progresses from lower => upper
    * @param upper: The upper price tick for the existing position range
    * @param zeroForOne: The direction of the swap, true for token0 to token1, false for token1 to token0
    * True if deposited token0, the first token address in lexographical order
    * False if deposited token1, the second token address in lexographical order 
    */
type BurnParams = {
    to:`0x${string}`,
    burnPercent:BigNumberish,
    lower:BigNumberish,
    claim:BigNumberish,
    upper:BigNumberish,
    zeroForOne:boolean,
    sync:boolean,
}

export {
    MintParams,
    SwapParams,
    BurnParams
}