import { type BigNumber, type Signer } from "ethers";;

/**  
 * @param owner: Address of the owner of the position
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
type SnapshotParamsArgs = {
    owner: string;
    burnPercent: BigNumber; //uint128
    lower: number; //int24
    upper: number; //int24
    claim: number; //int24
    zeroForOne: boolean;
}
type QuoteParams = {
    priceLimit:BigNumber,
    amountIn:BigNumber,
    zeroForOne:boolean,
}

type PositionArgs = {
    address: string;
    input0: string;
    input1: string;
}
export {
    SnapshotParamsArgs,
    QuoteParams,
    PositionArgs
    
}