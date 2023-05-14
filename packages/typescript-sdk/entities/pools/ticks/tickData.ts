import { BigintIsh } from "../../../libraries/math/constants"
import { Tick, TickConstructorArgs } from "./tick"
import { TickList } from "./tickList"

/**
 * Provides information about ticks
 */
export interface TickDataProvider {
    /**
     * Return information corresponding to a specific tick
     * @param tick the tick to load
     */
    getTick(tick: number): Promise<{ liquidityDelta: BigintIsh }>
  
    /**
     * Return the next tick that is initialized within a single word
     * @param tick The current tick
     * @param lte Whether the next tick should be lte the current tick
     * @param tickSpacing The tick spacing of the pool
     */
    nextCloseTick(tick: number, lte: boolean, tickSpacing: number): Promise<number>
}
  
  /**
   * This tick data provider does not know how to fetch any tick data. It throws whenever it is required. Useful if you
   * do not need to load tick data for your use case.
   */
  export class NoTickDataProvider implements TickDataProvider {
    private static ERROR_MESSAGE = 'No tick data provider was given'
    async getTick(_tick: number): Promise<{ liquidityDelta: BigintIsh }> {
      throw new Error(NoTickDataProvider.ERROR_MESSAGE)
    }
  
    async nextCloseTick(
      _tick: number,
      _lte: boolean,
      _tickSpacing: number
    ): Promise<number> {
      throw new Error(NoTickDataProvider.ERROR_MESSAGE)
    }
  }

  /**
 * A data provider for ticks that is backed by an in-memory array of ticks.
 */
export class TickListDataProvider implements TickDataProvider {
    private ticks: readonly Tick[]
  
    constructor(ticks: (Tick | TickConstructorArgs)[], tickSpacing: number) {
      const ticksMapped: Tick[] = ticks.map(t => (t instanceof Tick ? t : new Tick(t)))
      TickList.validateList(ticksMapped, tickSpacing)
      this.ticks = ticksMapped
    }
  
    async getTick(tick: number): Promise<{ liquidityDelta: BigintIsh }> {
      return TickList.getTick(this.ticks, tick)
    }
  
    async nextCloseTick(tick: number, lte: boolean, tickSpacing: number): Promise<number> {
      return TickList.nextCloseTick(this.ticks, tick, lte, tickSpacing)
    }
}

/**
 * By default, pools will not allow operations that require ticks.
 */
export const EMPTY_TICK_DATA_PROVIDER = new NoTickDataProvider()