import JSBI from 'jsbi'
import { BigintIsh, Rounding } from '../../math/constants'
import { Ratio } from './ratio'
import { ethers } from 'ethers'

const ONE_HUNDRED = new Ratio(ethers.utils.parseUnits('1', 38).toString())

/**
 * Converts a ratio to a percent
 * @param ratio the ratio to convert
 */
function toPercent(ratio: Ratio): Percent {
  return new Percent(ratio.numerator, ratio.denominator)
}

export class Percent extends Ratio {
  /**
   * This boolean prevents a ratio from being interpreted as a Percent
   */
  public readonly isPercent: true = true
  public readonly value: BigintIsh

  public constructor(numerator: BigintIsh, denominator: BigintIsh = JSBI.BigInt(1)) {
    super(numerator, denominator)
    const oneHundred = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(38))
    this.value = JSBI.multiply(JSBI.BigInt(numerator.toString()), oneHundred)
    this.value = JSBI.divide(this.value, JSBI.BigInt(denominator.toString()))
  }

  add(other: Ratio | BigintIsh): Percent {
    return toPercent(super.add(other))
  }

  subtract(other: Ratio | BigintIsh): Percent {
    return toPercent(super.subtract(other))
  }

  multiply(other: Ratio | BigintIsh): Percent {
    return toPercent(super.multiply(other))
  }

  divide(other: Ratio | BigintIsh): Percent {
    return toPercent(super.divide(other))
  }

  public toSignificant(significantDigits: number = 5, format?: object, rounding?: Rounding): string {
    return super.multiply(ONE_HUNDRED).toSignificant(significantDigits, format, rounding)
  }

  public toFixed(decimalPlaces: number = 2, format?: object, rounding?: Rounding): string {
    return super.multiply(ONE_HUNDRED).toFixed(decimalPlaces, format, rounding)
  }
}