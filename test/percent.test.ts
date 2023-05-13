import JSBI from 'jsbi';
import { Percent } from '../packages/typescript-sdk/entities/math/percent'
import { ethers } from 'ethers';

describe('Percent tests', () => {
  test('percent of (1,2) = 50% or 5e37', () => {
    expect((new Percent(1, 2)).value).toStrictEqual(JSBI.BigInt(ethers.utils.parseUnits('5', 37).toString()));
  });
});