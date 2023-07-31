interface SnapshotParams {
  /**
   * The owner address of the LP position.
   */
  owner: string;

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
   * The percent of the position liquidity to remove.
   */
  burnPercent: number;

  /**
   * True if deposited token0.
   * False if deposited token1.
   */
  zeroForOne: boolean;
}
