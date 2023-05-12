import { IToken } from "./itoken"

/**
 * Represents the native currency of the chain on which it resides, e.g.
 */
export abstract class NetworkToken extends IToken {
    public readonly isNative: true = true
    public readonly isToken: false = false
}