import { BigintIsh } from '../../types/numbers';

export interface BurnParams {
  /**
   * Recipient of the LP position.
   * This must be set as your address unless you want to forward the removed tokens to another address.
   */
  to: string;

  /**
   * Percent of the user's position liquidity to remove from the pool.
   */
  burnPercent: BigintIsh;

  /**
   * The lower tick of the LP position range.
   * Refer to math/tickMath.ts for price to tick conversion.
   */
  lower: number;

  /**
   * The claim tick of the LP position range.
   * For new positions, this should be zeroForOne ? upper : lower.
   * For existing positions, refer to the subgraph-sdk to locate the claim tick off-chain.
   * For existing positions, the snapshot() function can be called to return the current valid claim tick.
   * Refer to math/tickMath.ts for price to tick conversion.
   */
  claim: string;

  /**
   * The upper tick of the LP position range.
   * Refer to math/tickMath.ts for price to tick conversion.
   */
  upper: number;

  /**
   * True if deposited token0.
   * False if deposited token1.
   * Refer to Token.zeroForOne to get the correct boolean.
   */
  zeroForOne: boolean;

  /**
   * True to sync the pool and receive sync fees.
   * False to skip syncing the pool.
   */
  sync: boolean;
}

export interface BurnOptions {
  /**
   * The percent beyond which the Burn transaction will revert.
   * 100% = ethers.utils.parseUnits("1", 38)
   */
  slippageTolerance?: BigintIsh;

  /**
   * The time at which the Burn transaction should no longer succeed.
   */
  deadline?: BigintIsh;
}
