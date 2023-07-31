import { BigNumberish, type BigNumber } from 'ethers';

export type LimitQuoteParams = {
  priceLimit: BigNumberish;
  amount: BigNumberish;
  exactIn: boolean;
  zeroForOne: boolean;
};
