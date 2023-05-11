import { BigintIsh } from "../../numbers"

export interface CreatePoolParams {
    /**
     * The first token address in the pool.
     */
    tokenIn: string

    /**
     * The second token address in the pool.
     */
    tokenOut: string

    /**
     * The starting price for the pool in Q64.96 format.
     */
    startPrice: BigintIsh

    /**
     * The swap fee for the pool.
     * 100 = 0.01% fee 
     */
    swapFee: number
}

export interface CreatePoolOptions {
    /**
   * The time at which the Burn transaction should no longer succeed.
   */
    deadline?: BigintIsh
}