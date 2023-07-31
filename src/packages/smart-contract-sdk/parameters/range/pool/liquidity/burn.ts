import { BigintIsh } from '../../../../math/constants';

export interface BurnParams {
  /**
   * Recipient of the LP position.
   * This must be set as your address unless you want to forward the removed tokens to another address.
   */
  to: string;

  /**
   * The lower tick of the LP position range.
   * Refer to math/tickMath.ts for price to tick conversion.
   */
  lower: string;

  /**
   * The upper tick of the LP position range.
   * Refer to math/tickMath.ts for price to tick conversion.
   */
  upper: string;

  /**
   * Percent of the user's position liquidity to remove from the pool.
   */
  burnPercent: BigintIsh;

  /**
   * Whether to create a fungible position or not.
   */
  fungible: boolean;

  /**
   * Whether to collect the burned liquidity or not
   */
  collect: boolean;
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
