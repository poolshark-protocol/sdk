import invariant from 'tiny-invariant'
import { WETH9 } from './weth9'
import { IToken } from './itoken'
import { NetworkToken } from './networkToken'

/**
 * Ether is the main usage of a 'native' currency, i.e. for Ethereum mainnet and all testnets
 */
export class Ether extends NetworkToken {
  protected constructor(chainId: number) {
    super(chainId, 18, 'ETH', 'Ether')
  }

  public get wrapped(): IToken {
    const weth9 = WETH9[this.chainId]
    invariant(!!weth9, 'WRAPPED')
    return weth9
  }

  private static _etherCache: { [chainId: number]: Ether } = {}

  public static onChain(chainId: number): Ether {
    return this._etherCache[chainId] ?? (this._etherCache[chainId] = new Ether(chainId))
  }

  public equals(other: IToken): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}