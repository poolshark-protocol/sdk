import { BigintIsh } from '../../../../math/constants';

export interface MintParams {
  /**
   * Recipient of the LP position.
   * This must be set as your address if you wish to mint to yourself.
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
   * Amount of token0 to deposit as liquidity.
   * This must be set as your address if you wish to mint to yourself.
   */
  amount0: BigintIsh;

  /**
   * Amount of token1 to deposit as liquidity.
   * This must be set as your address if you wish to mint to yourself.
   */
  amount1: BigintIsh;

  /**
   * Whether to create a fungible position or not.
   */
  fungible: boolean;
}

export interface MintOptions {
  /**
   * The percent beyond which the mint transaction will revert.
   * 100% = ethers.utils.parseUnits("1", 38)
   */
  slippageTolerance?: BigintIsh;

  /**
   * The time at which the mint transaction should no longer succeed.
   */
  deadline?: BigintIsh;

  /**
   * Whether to create a pool if one doesn't already exist for the pair.
   */
  createPool?: boolean;

  /**
   * The percentage of position liquidity to increase by.
   * Will be ignored if a position doesn't already exist for the 'to' address.
   * 100% = ethers.utils.parseUnits("1", 38)
   */
  percentIncrease?: BigintIsh;
}
