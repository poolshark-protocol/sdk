import { BigNumber, BytesLike } from 'ethers';

export type RangeBurnParams = {
  to: `0x${string}`;
  lower: number | BigNumber;
  upper: number | BigNumber;
  burnPercent: BigNumber;
};

export type RangeMintParams = {
  to: `0x${string}`;
  lower: number | BigNumber;
  upper: number | BigNumber;
  amount0: BigNumber;
  amount1: BigNumber;
};

export type RangeSwapParams = {
  to: `0x${string}`;
  priceLimit: BigNumber;
  amount: BigNumber;
  exactIn: boolean;
  zeroForOne: boolean;
  callbackData: BytesLike;
};
