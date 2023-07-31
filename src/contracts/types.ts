import { type BigNumber } from "ethers";
import type { Signer } from "ethers";
import type {Provider} from '@ethersproject/providers';
import { Network } from "../enums";
export * from "./Cover/types"
export * from "./Range/types"
export * from "./Limit/types"


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
export type SnapshotParamsArgs = {
    owner: `0x${string}`;
    burnPercent: BigNumber; //uint128
    lower: number; //int24
    upper: number; //int24
    claim: number; //int24
    zeroForOne: boolean;
}

/**
 * @param signerOrProvider: Signer or Provider
 * @param debugMode: Whether to print debug messages
 * @param poolAddress: Address of the pool
 * @param network: Network enum to use
 */
export type ContractConstructorArgs = {
    signerOrProvider: Signer | Provider;
    debugMode?: boolean;
    poolAddress: `0x${string}`;
    network?: Network | undefined;
}
