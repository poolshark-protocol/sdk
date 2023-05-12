import { Contract, ethers } from 'ethers'
import { DEFAULT_CHAIN_ID, ZERO_ADDRESS } from '../../math/constants'
import { checkValidAddress, validateAndParseAddress } from '../addresses/checksum'
import { ERC20 } from '../../typechain/ERC20'
import { erc20ABI } from 'wagmi'
import { IToken } from './itoken'

export function sortAddresses(tokenIn: string, tokenOut: string): [string, string] {
  if (tokenIn.localeCompare(tokenOut) < 0) {
    return [tokenIn, tokenOut]
  }
  return [tokenOut, tokenIn]
}

export function zeroForOne(tokenIn: string, tokenOut: string): boolean {
    if (tokenIn.localeCompare(tokenOut) < 0) {
      return true
    }
    return false
}

/**
 * A token is any fungible asset excluding the native token (e.g. ETH)
 */
export class Token extends IToken {

    /**
   * Returns whether the token is native to the chain and must be wrapped (e.g. Ether)
   */
    public readonly isNative: false = false
    /**
     * Returns whether the token is a token that is usable without wrapping
     */
    public readonly isToken: true = true
    /**
   * Constructs an instance of the base class `Token`.
   * @param tokenAddress the address of the `Token` being created
   * @param provider the RPC provider via which to query `Token` info
   */
  public constructor(
    chainId: number,
    address: string,
    decimals?: number,
    symbol?: string,
    name?: string,
    bypassChecksum?: boolean,
    provider?: ethers.providers.Provider
  ) {
    super(chainId, decimals, symbol, name)
    this.isNative = false
    this.isToken = true
    this.address = address ? address : ZERO_ADDRESS
    this.decimals = decimals ? decimals : 0
    if (bypassChecksum) {
      this.address = checkValidAddress(address)
    } else {
      this.address = validateAndParseAddress(address)
    }
    // if user passes provider derive values from there
    if (provider) {
      this.contract = new ERC20(address, erc20ABI, provider)
      if (!decimals) this.decimals = this.contract.decimals()
      if (!symbol) this.symbol = this.contract.symbol()
      if (!name) this.name = this.contract.name()
    }
  }

  /**
   * The contract address for the token
   */
  public address: string

  /**
   * The contract address for the token
   */
  public contract: Contract | undefined
  /**
   * The decimals used in representing token amounts
   */
  public readonly decimals: number
  /**
   * The symbol of the token, i.e. a short textual non-unique identifier
   */
  public readonly symbol?: string
  /**
   * The name of the token, i.e. a descriptive textual non-unique identifier
   */
  public readonly name?: string

  /**
   * Returns whether this token is functionally equivalent to the other token
   * @param other the other token
   */
  public equals(other: Token): boolean {
    return other.isToken && this.chainId === other.chainId && this.address.toLowerCase() === other.address.toLowerCase()
  }
  
  public sort(other:Token): [Token, Token] {
    if (this.address.localeCompare(other.address) < 0) {
      return [this, other]
    }
    return [other, this]
  }

  public zeroForOne(other: Token): boolean {
    if (this.address.localeCompare(other.address) < 0) {
      return true
    }
    return false
  }

  public get wrapped(): Token {
    return this
  }
}