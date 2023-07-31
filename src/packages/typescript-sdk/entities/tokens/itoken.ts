import invariant from 'tiny-invariant';
import { Token } from './token';
import { ZERO_ADDRESS } from '../../utils/constants';
import { Contract } from 'ethers';

export function sortAddresses(
  tokenIn: string,
  tokenOut: string,
): [string, string] {
  if (tokenIn.localeCompare(tokenOut) < 0) {
    return [tokenIn, tokenOut];
  }
  return [tokenOut, tokenIn];
}

export function zeroForOne(tokenIn: string, tokenOut: string): boolean {
  if (tokenIn.localeCompare(tokenOut) < 0) {
    return true;
  }
  return false;
}

/**
 * A IToken is any fungible asset including the native IToken
 */
export abstract class IToken {
  /**
   * Returns whether the IToken is native to the chain and must be wrapped (e.g. Ether)
   */
  public abstract readonly isNative: boolean;
  /**
   * Returns whether the IToken is a IToken that is usable without wrapping
   */
  public abstract readonly isToken: boolean;

  /**
   * The contract address for the token
   */
  public address: string;

  /**
   * The contract address for the token
   */
  public contract: Contract | undefined;

  /**
   * Constructs an instance of the base class `BaseCurrency`.
   * @param chainId the chain ID on which this currency resides
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(
    chainId: number,
    decimals?: number,
    symbol?: string,
    name?: string,
  ) {
    invariant(Number.isSafeInteger(chainId), 'CHAIN_ID');
    if (decimals)
      invariant(
        decimals >= 0 && decimals < 255 && Number.isInteger(decimals),
        'DECIMALS',
      );
    this.chainId = chainId;
    this.decimals = decimals ? decimals : 0;
    this.symbol = symbol ? symbol : '';
    this.name = name ? name : '';
    this.address = ZERO_ADDRESS;
    this.contract = undefined;
  }

  /**
   * The chain ID for the IToken
   */
  public readonly chainId: number;

  /**
   * The decimals used in representing IToken amounts
   */
  public readonly decimals: number;
  /**
   * The symbol of the IToken, i.e. a short textual non-unique identifier
   */
  public readonly symbol?: string;
  /**
   * The name of the IToken, i.e. a descriptive textual non-unique identifier
   */
  public readonly name?: string;

  public abstract sort(other: IToken): [IToken, IToken];

  public abstract zeroForOne(other: IToken): boolean;

  /**
   * Returns whether this IToken is functionally equivalent to the other IToken
   * @param other the other IToken
   */
  public abstract equals(other: IToken): boolean;

  /**
   * Return the wrapped version of this IToken that can be used with the Poolshark contracts.
   */
  public abstract get wrapped(): Token;
}
