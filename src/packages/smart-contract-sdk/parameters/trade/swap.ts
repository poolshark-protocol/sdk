import { BigNumber } from 'ethers';
import { BigintIsh } from '../../../typescript-sdk/utils/constants';
import JSBI from 'jsbi';
import { Percent } from '../../../typescript-sdk/entities/math/percent';

export interface SwapParams extends SwapOptions {
  /**
   * Recipient of the swap output.
   * This must be set as your address if you wish to mint to yourself.
   */
  recipient: string;

  /**
   * True if trading  token0 => token1.
   * False if trading token1 => token0.
   * Refer to tokens.ts for sorting addresses
   */
  zeroForOne: string;

  /**
   * Price limit after which to stop using input token.
   */
  priceLimit: string;

  /**
   * Amount of tokenIn to deposit as liquidity.
   * This must be set as your address if you wish to mint to yourself.
   */
  amountIn: BigintIsh;
}

export interface SwapOptions {
  /**
   * The percent beyond which the mint transaction will revert.
   * 100% = ethers.utils.parseUnits("1", 38)
   */
  slippageTolerance: Percent;

  /**
   * The time at which the mint transaction should no longer succeed.
   */
  deadline?: BigNumber;

  /**
   * The percent of the output that will be taken as a fee.
   */
  feePercent?: BigNumber;

  /**
   * The recipient of the fee.
   */
  feeRecipient?: string;
}
