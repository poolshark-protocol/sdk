import { BigNumber } from "ethers"

export interface PoolState {
    unlocked: number
    protocolFee: number
    tickAtPrice: number
    tickSecondsAccum: BigNumber
    secondsPerLiquidityAccum: BigNumber
    price: BigNumber
    liquidity: BigNumber
    liquidityGlobal: BigNumber
    feeGrowthGlobal0: BigNumber
    feeGrowthGlobal1: BigNumber
    samples: SampleState
    protocolFees: ProtocolFees
}

export interface SampleState {
    index: number
    length: number
    lengthNext: number
}
  
export interface ProtocolFees {
    token0: BigNumber
    token1: BigNumber
}