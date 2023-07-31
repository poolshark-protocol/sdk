import type { BigNumber } from 'ethers';
export type QuoteParams = {
  priceLimit: BigNumber;
  amount: BigNumber;
  exactIn: boolean;
  zeroForOne: boolean;
};
export type SampleParams = number[] | BigNumber[];

export type PoolStateLimitResponse = {
  unlocked: number;
  protocolFee: number;
  tickAtPrice: number;
  tickSecondsAccum: BigNumber;
  price: BigNumber;
  liquidity: BigNumber;
  liquidityGlobal: BigNumber;
  feeGrowthGlobal0: BigNumber;
  feeGrowthGlobal1: BigNumber;
  samples: [number, number, number] & {
    index: number;
    length: number;
    lengthNext: number;
  };
  protocolFees: [BigNumber, BigNumber] & {
    token0: BigNumber;
    token1: BigNumber;
  };
};
