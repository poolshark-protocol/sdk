import JSBI from "jsbi"
import invariant from "tiny-invariant"
import { BigintIsh, MaxUint256, Rounding } from "../../utils/constants"
import { Ratio } from "../math/ratio"
import _Big from "big.js"
import { IToken } from "./itoken"
import toFormat from 'toformat'

const Big = toFormat(_Big)

export class TokenAmount<T extends IToken> extends Ratio {
    public readonly token: T
    public readonly decimalScale: JSBI
  
    /**
     * Returns a new currency amount instance from the unitless amount of token, i.e. the raw amount
     * @param currency the currency in the amount
     * @param rawAmount the raw token or ether amount
     */
    public static fromRawAmount<T extends IToken>(token: T, rawAmount: BigintIsh): TokenAmount<T> {
      return new TokenAmount(token, rawAmount)
    }
  
    /**
     * Construct a currency amount with a denominator that is not equal to 1
     * @param token the currency
     * @param numerator the numerator of the fractional token amount
     * @param denominator the denominator of the fractional token amount
     */
    public static fromRatioAmount<T extends IToken>(
      token: T,
      numerator: BigintIsh,
      denominator: BigintIsh
    ): TokenAmount<T> {
      return new TokenAmount(token, numerator, denominator)
    }
  
    protected constructor(token: T, numerator: BigintIsh, denominator?: BigintIsh) {
      super(numerator, denominator)
      invariant(JSBI.lessThanOrEqual(this.quotient, MaxUint256), 'AMOUNT')
      this.token = token
      this.decimalScale = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(token.decimals))
    }
  
    public add(other: TokenAmount<T>): TokenAmount<T> {
      invariant(this.token.equals(other.token), 'SAME TOKEN')
      const added = super.add(other)
      return TokenAmount.fromRatioAmount(this.token, added.numerator, added.denominator)
    }
  
    public subtract(other: TokenAmount<T>): TokenAmount<T> {
      invariant(this.token.equals(other.token), 'CURRENCY')
      const subtracted = super.subtract(other)
      return TokenAmount.fromRatioAmount(this.token, subtracted.numerator, subtracted.denominator)
    }
  
    public multiply(other: Ratio | BigintIsh): TokenAmount<T> {
      const multiplied = super.multiply(other)
      return TokenAmount.fromRatioAmount(this.token, multiplied.numerator, multiplied.denominator)
    }
  
    public divide(other: Ratio | BigintIsh): TokenAmount<T> {
      const divided = super.divide(other)
      return TokenAmount.fromRatioAmount(this.token, divided.numerator, divided.denominator)
    }
  
    public toSignificant(
      significantDigits: number = 6,
      format?: object,
      rounding: Rounding = Rounding.DOWN
    ): string {
      return super.divide(this.decimalScale).toSignificant(significantDigits, format, rounding)
    }
  
    public toFixed(
      decimalPlaces: number = this.token.decimals,
      format?: object,
      rounding: Rounding = Rounding.DOWN
    ): string {
      invariant(decimalPlaces <= this.token.decimals, 'DECIMALS')
      return super.divide(this.decimalScale).toFixed(decimalPlaces, format, rounding)
    }
  
    public toExact(format: object = { groupSeparator: '' }): string {
      Big.DP = this.token.decimals
      return new Big(this.quotient.toString()).div(this.decimalScale.toString()).toFormat(format)
    }
  
    public get wrapped(): TokenAmount<IToken> {
      if (this.token.isToken) return this as TokenAmount<T>
      return TokenAmount.fromRatioAmount(this.token.wrapped, this.numerator, this.denominator)
    }
  }