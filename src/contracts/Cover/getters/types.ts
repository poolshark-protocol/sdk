import { type BigNumberish } from 'ethers';

/**
 * @param priceLimit: The Q64.96 square root price at which to stop swapping.
 * @param amountIn: The tokenIn amount being passed into the swap
 * @param zeroForOne: The direction of the swap, true for token0 to token1, false for token1 to token0
 * True if swapping in token0, the first token address in lexographical order
 * False if swapping in token1, the second token address in lexographical order
 */
type CoverQuoteParams = {
  priceLimit: BigNumberish;
  amountIn: BigNumberish;
  zeroForOne: boolean;
};

/**
 * @param address: Address of the position
 * @param input0:
 * @param input1:
 *
 */
type CoverPositionArgs = {
  address: `0x${string}`;
  input0: BigNumberish;
  input1: BigNumberish;
};
export { CoverQuoteParams, CoverPositionArgs };
