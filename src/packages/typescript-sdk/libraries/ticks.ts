import JSBI from 'jsbi'
import { Pool, SwapCache } from '../entities/pools/pool'
import { TickMath } from './math/tickMath'
import { ConstantProduct } from './math/constantProduct';
import { ZERO } from '../utils/constants';
import { FeeMath } from './math/feeMath';

export class Ticks {
  public static async swap(
    pool: Pool,
    cache: SwapCache,
    priceLimit: JSBI,
    zeroForOne: boolean
  ): Promise<SwapCache> {
    while(cache.cross) {
        cache.crossPrice = TickMath.getSqrtRatioAtTick(cache.crossTick);
        cache = this._quoteSingle(zeroForOne, priceLimit, pool, cache)
        if (cache.cross) {
            cache = await this._cross(pool, cache, zeroForOne)
        }
    }
    return cache
  }

  private static _quoteSingle(
    zeroForOne: boolean,
    priceLimit: JSBI,
    pool: Pool,
    cache: SwapCache
  ): SwapCache {
    if (zeroForOne ? priceLimit >= cache.sqrtPrice
                   : priceLimit <= cache.sqrtPrice)
    {
        cache.cross = false;
        return cache
    }
    let nextPrice = cache.crossPrice
    let amountOut = ZERO
    if (zeroForOne) {
        if (cache.crossPrice < priceLimit) {
            nextPrice = priceLimit
        }
        let maxDx = ConstantProduct.getDx(cache.liquidity, nextPrice, cache.sqrtPrice, true)
        if (cache.amountInLeft <= maxDx) {
            let newPrice = ConstantProduct.getNextPrice(cache.sqrtPrice, nextPrice, cache.liquidity, cache.amountInLeft, zeroForOne)
            amountOut = ConstantProduct.getDy(pool.liquidity, newPrice, cache.sqrtPrice, false)
            cache.amountInLeft = ZERO
            cache.cross = false
            cache.sqrtPrice = newPrice
        } else {
            amountOut = ConstantProduct.getDy(cache.liquidity, nextPrice, cache.sqrtPrice, false)
            cache.amountInLeft = JSBI.subtract(cache.amountInLeft, maxDx)
            if (nextPrice == cache.crossPrice && nextPrice == cache.crossPrice)
                cache.cross = true
            else cache.cross = false
            cache.sqrtPrice = nextPrice
        }
    } else {
        if (nextPrice > priceLimit)
            nextPrice = priceLimit
        let maxDy = ConstantProduct.getDy(cache.liquidity, cache.sqrtPrice, nextPrice, true)
        if (cache.amountInLeft <= maxDy) {
            let newPrice = ConstantProduct.getNextPrice(cache.sqrtPrice, nextPrice, cache.liquidity, cache.amountInLeft, zeroForOne)
            amountOut = ConstantProduct.getDx(cache.liquidity, cache.sqrtPrice, newPrice, false)
            cache.amountInLeft = ZERO
            cache.cross = false
            cache.sqrtPrice = newPrice
        } else {
            amountOut = ConstantProduct.getDx(cache.liquidity, cache.sqrtPrice, nextPrice, false)
            cache.amountInLeft = JSBI.subtract(cache.amountInLeft, maxDy)
            if (nextPrice == cache.crossPrice && nextPrice != cache.sqrtPrice)
                cache.cross = true
            else cache.cross = false
            cache.sqrtPrice = nextPrice
        }
    }
    cache = FeeMath.calculate(cache, amountOut)
    return cache
  }

  private static async _cross(
    pool: Pool,
    cache: SwapCache,
    zeroForOne: boolean
  ): Promise<SwapCache> {
    const liquidityDelta = JSBI.BigInt((await pool.tickProvider.getTick(cache.crossTick)).liquidityDelta.toString())
    if (zeroForOne) {
        cache.liquidity = JSBI.subtract(cache.liquidity, liquidityDelta)
        cache.tick =  cache.crossTick
        cache.crossTick = await pool.tickProvider.nextCloseTick(cache.tick, zeroForOne
            , pool.tickSpacing)
    } else {
        cache.liquidity = JSBI.add(cache.liquidity, liquidityDelta)
        cache.tick = cache.crossTick
        cache.crossTick = await pool.tickProvider.nextCloseTick(cache.tick, zeroForOne, pool.tickSpacing)
    }
    return cache
  }
}