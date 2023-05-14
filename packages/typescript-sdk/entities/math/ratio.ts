import JSBI from "jsbi"
import { BigintIsh, Rounding } from "../../libraries/math/constants"
import _Decimal from 'decimal.js-light'
import _Big from 'big.js'
import toFormat from 'toformat'
import invariant from "tiny-invariant"

const Decimal = toFormat(_Decimal)
const Big = toFormat(_Big)



const toSignificantRounding = {
  [Rounding.DOWN]: Decimal.ROUND_DOWN,
  [Rounding.HALF_UP]: Decimal.ROUND_HALF_UP,
  [Rounding.UP]: Decimal.ROUND_UP
}

const toFixedRounding = {
  [Rounding.DOWN]: Big.roundDown,
  [Rounding.HALF_UP]: Big.roundHalfUp,
  [Rounding.UP]: Big.roundUp
}

export class Ratio {
  public readonly numerator: JSBI
  public readonly denominator: JSBI

  public constructor(numerator: BigintIsh, denominator: BigintIsh = JSBI.BigInt(1)) {
    this.numerator = JSBI.BigInt(numerator)
    this.denominator = JSBI.BigInt(denominator)
  }

  private static tryParseRatio(ratioish: BigintIsh | Ratio): Ratio {
    if (ratioish instanceof JSBI || typeof ratioish === 'number' || typeof ratioish === 'string')
      return new Ratio(ratioish)

    if ('numerator' in ratioish && 'denominator' in ratioish) return ratioish
    throw new Error('Could not parse ratio')
  }

  // performs floor division
  public get quotient(): JSBI {
    return JSBI.divide(this.numerator, this.denominator)
  }

  // remainder after floor division
  public get remainder(): Ratio {
    return new Ratio(JSBI.remainder(this.numerator, this.denominator), this.denominator)
  }

  public invert(): Ratio {
    return new Ratio(this.denominator, this.numerator)
  }

  public add(other: Ratio | BigintIsh): Ratio {
    const otherParsed = Ratio.tryParseRatio(other)
    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Ratio(JSBI.add(this.numerator, otherParsed.numerator), this.denominator)
    }
    return new Ratio(
      JSBI.add(
        JSBI.multiply(this.numerator, otherParsed.denominator),
        JSBI.multiply(otherParsed.numerator, this.denominator)
      ),
      JSBI.multiply(this.denominator, otherParsed.denominator)
    )
  }

  public subtract(other: Ratio | BigintIsh): Ratio {
    const otherParsed = Ratio.tryParseRatio(other)
    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Ratio(JSBI.subtract(this.numerator, otherParsed.numerator), this.denominator)
    }
    return new Ratio(
      JSBI.subtract(
        JSBI.multiply(this.numerator, otherParsed.denominator),
        JSBI.multiply(otherParsed.numerator, this.denominator)
      ),
      JSBI.multiply(this.denominator, otherParsed.denominator)
    )
  }

  public lessThan(other: Ratio | BigintIsh): boolean {
    const otherParsed = Ratio.tryParseRatio(other)
    return JSBI.lessThan(
      JSBI.multiply(this.numerator, otherParsed.denominator),
      JSBI.multiply(otherParsed.numerator, this.denominator)
    )
  }

  public equalTo(other: Ratio | BigintIsh): boolean {
    const otherParsed = Ratio.tryParseRatio(other)
    return JSBI.equal(
      JSBI.multiply(this.numerator, otherParsed.denominator),
      JSBI.multiply(otherParsed.numerator, this.denominator)
    )
  }

  public greaterThan(other: Ratio | BigintIsh): boolean {
    const otherParsed = Ratio.tryParseRatio(other)
    return JSBI.greaterThan(
      JSBI.multiply(this.numerator, otherParsed.denominator),
      JSBI.multiply(otherParsed.numerator, this.denominator)
    )
  }

  public multiply(other: Ratio | BigintIsh): Ratio {
    const otherParsed = Ratio.tryParseRatio(other)
    return new Ratio(
      JSBI.multiply(this.numerator, otherParsed.numerator),
      JSBI.multiply(this.denominator, otherParsed.denominator)
    )
  }

  public divide(other: Ratio | BigintIsh): Ratio {
    const otherParsed = Ratio.tryParseRatio(other)
    return new Ratio(
      JSBI.multiply(this.numerator, otherParsed.denominator),
      JSBI.multiply(this.denominator, otherParsed.numerator)
    )
  }

  public toSignificant(
    significantDigits: number,
    format: object = { groupSeparator: '' },
    rounding: Rounding = Rounding.HALF_UP
  ): string {
    invariant(Number.isInteger(significantDigits), `${significantDigits} is not an integer.`)
    invariant(significantDigits > 0, `${significantDigits} is not positive.`)

    Decimal.set({ precision: significantDigits + 1, rounding: toSignificantRounding[rounding] })
    const quotient = new Decimal(this.numerator.toString())
      .div(this.denominator.toString())
      .toSignificantDigits(significantDigits)
    return quotient.toFormat(quotient.decimalPlaces(), format)
  }

  public toFixed(
    decimalPlaces: number,
    format: object = { groupSeparator: '' },
    rounding: Rounding = Rounding.HALF_UP
  ): string {
    invariant(Number.isInteger(decimalPlaces), `${decimalPlaces} is not an integer.`)
    invariant(decimalPlaces >= 0, `${decimalPlaces} is negative.`)

    Big.DP = decimalPlaces
    Big.RM = toFixedRounding[rounding]
    return new Big(this.numerator.toString()).div(this.denominator.toString()).toFormat(decimalPlaces, format)
  }

  /**
   * Helper method for converting any super class back to a ratio
   */
  public get asRatio(): Ratio {
    return new Ratio(this.numerator, this.denominator)
  }
}