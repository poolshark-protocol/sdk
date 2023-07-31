import JSBI from 'jsbi';
import { FeeAmount, ZERO } from '../../utils/constants';
import { SwapCache } from '../../entities/pools/pool';
import { PrecisionMath } from './precisionMath';

export abstract class FeeMath {
  /**
   * Cannot be constructed.
   */
  private constructor() {}

  public static calculate(cache: SwapCache, amountOut: JSBI): SwapCache {
    if (cache.liquidity == ZERO) return cache;
    let swapFee = JSBI.BigInt(FeeAmount[cache.swapFee]);
    let feeAmount = PrecisionMath.mulDivRoundingUp(
      amountOut,
      swapFee,
      JSBI.BigInt(1_000_000),
    );
    amountOut = JSBI.subtract(amountOut, feeAmount);
    cache.amountOut = JSBI.add(cache.amountOut, amountOut);
    return cache;
  }
}
