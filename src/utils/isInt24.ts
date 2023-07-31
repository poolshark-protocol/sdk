import { BigNumber } from 'ethers';

export function isInt24(n: BigNumber): boolean {
  const min = BigNumber.from(-1).shl(23);
  const max = BigNumber.from(1).shl(23).sub(1);
  return n.gte(min) && n.lte(max);
}
