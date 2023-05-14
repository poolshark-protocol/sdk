import JSBI from 'jsbi'
import invariant from 'tiny-invariant'
import { BigintIsh } from '../../../libraries/math/constants'
import { TickMath } from '../../../libraries/math/tickMath'

export interface TickConstructorArgs {
  index: number
  liquidityDelta: BigintIsh
}

export class Tick {
  public readonly index: number
  public readonly liquidityDelta: JSBI

  constructor({ index, liquidityDelta }: TickConstructorArgs) {
    invariant(index >= TickMath.MIN_TICK && index <= TickMath.MAX_TICK, 'TICK')
    this.index = index
    this.liquidityDelta = JSBI.BigInt(liquidityDelta)
    this.liquidityDelta = JSBI.BigInt(liquidityDelta)
  }
}