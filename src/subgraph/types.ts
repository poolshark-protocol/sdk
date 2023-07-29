export type GetRangePoolFromFactoryResponseFeeTierIdUndefined = {
    basePrices: {
        USD: number
    }[],
    rangePools: {
        id: string,
        price: number,
        tickAtPrice: number,
        token0: {
            usdPrice: number
        },
        token1: {
            usdPrice: number
        },
        feeTier: {
            id: number,
            feeAmount: number,
            tickSpacing: number
        }
    }[]
}

export type GetRangePoolFromFactoryResponseFeeTierIdDefined = {
    rangePools: {
        id: string,
        price: number,
        tickAtPrice: number,
        feeTier: {
            tickSpacing: number
        },
        token0: {
            usdPrice: number
        },
        token1: {
            usdPrice: number
        }
    }[]
}


export type GetCoverPoolFromFactoryResponse = {
    coverPools: {
        id: string,
        latestTick: number,
        volatilityTier: {
            tickSpread: number,
            auctionLength: number
        },
        token0: {
            usdPrice: number
        },
        token1: {
            usdPrice: number
        }
    }[]
}

export type GetTickIfZeroForOneResponse = {
    ticks: {
        index: number
    }[]
}

export type GetTickIfNotZeroForOneResponse = {
    ticks: {
        index: number
    }[]
}


export type FetchCoverPositionsResponse = {
    positions: {
        id: string,
        inAmount: string,
        inToken: {
            id: string,
            name: string,
            symbol: string,
            decimals: number
        },
        liquidity: string,
        zeroForOne: boolean,
        upper: string,
        lower: string,
        amountInDeltaMax: string,
        amountOutDeltaMax: string,
        epochLast: number,
        outAmount: string,
        outToken: {
            id: string,
            name: string,
            symbol: string,
            decimals: number
        },
        owner: string,
        pool: {
            id: string,
            token0: {
                id: string,
                name: string,
                symbol: string,
                decimals: number,
                usdPrice: number
            },
            token1: {
                id: string,
                name: string,
                symbol: string,
                decimals: number,
                usdPrice: number
            },
            liquidity: string,
            volatilityTier: {
                feeAmount: string,
                tickSpread: number,
                auctionLength: number
            },
            latestTick: number
        },
        txnHash: string
    }[]
}


export type FetchCoverPoolsResponse = {
    coverPools: {
        id: string,
        inputPool: string,
        token0: {
            id: string,
            name: string,
            symbol: string,
            decimals: number
        },
        token1: {
            id: string,
            name: string,
            symbol: string,
            decimals: number
        },
        liquidity: string,
        volatilityTier: {
            auctionLength: number,
            feeAmount: string,
            tickSpread: number
        },
        price0: string,
        price1: string,
        feesEth: string,
        feesUsd: string,
        volumeEth: string,
        volumeToken0: string,
        volumeToken1: string,
        volumeUsd: string,
        totalValueLockedEth: string,
        totalValueLocked0: string,
        totalValueLocked1: string,
        totalValueLockedUsd: string
    }[]
}

export type FetchCoverPoolMetricsResponse = {
    coverPoolFactories: {
        id: string,
        poolCount: number
    }[]
}

export type FetchRangePoolsResponse = {
    rangePools: {
        id: string,
        token0: {
            id: string,
            name: string,
            symbol: string,
            decimals: number
        },
        token1: {
            id: string,
            name: string,
            symbol: string,
            decimals: number
        },
        feesEth: string,
        feesUsd: string,
        feeTier: {
            tickSpacing: number,
            feeAmount: string
        },
        ticks: {
            price0: string,
            price1: string,
            liquidityDelta: string,
            liquidityDeltaMinus: string
        }[],
        price: string,
        price0: string,
        price1: string,
        liquidity: string,
        feeGrowthGlobal0: string,
        feeGrowthGlobal1: string,
        volumeEth: string,
        volumeToken0: string,
        volumeToken1: string,
        volumeUsd: string,
        totalValueLockedEth: string,
        totalValueLocked0: string,
        totalValueLocked1: string,
        totalValueLockedUsd: string
    }[]
}

export type FetchRangePositionsResponse = {
    positionFractions: {
        id: string,
        owner: string,
        amount: string,
        token: {
            totalSupply: string,
            position: {
                lower: string,
                upper: string,
                liquidity: string,
                pool: {
                    id: string,
                    token0: {
                        id: string,
                        name: string,
                        symbol: string,
                        decimals: number
                    },
                    token1: {
                        id: string,
                        name: string,
                        symbol: string,
                        decimals: number
                    },
                    ticks: {
                        price0: string,
                        price1: string,
                        liquidityDelta: string,
                        liquidityDeltaMinus: string
                    }[],
                    factory: {
                        id: string
                    },
                    price: string,
                    liquidity: string,
                    feeTier: {
                        feeAmount: string,
                        tickSpacing: number
                    },
                    feesEth: string,
                    feesUsd: string,
                    totalValueLockedEth: string,
                    totalValueLockedUsd: string,
                    totalValueLocked0: string,
                    totalValueLocked1: string,
                    volumeEth: string,
                    volumeToken0: string,
                    volumeToken1: string,
                    volumeUsd: string
                }
            }
        }
    }[]
}

export type FetchRangePoolMetricsResponse = {
    rangePoolFactories: {
        id: string,
        txnCount: string,
        feesEthTotal: string,
        feesUsdTotal: string,
        poolCount: string,
        totalValueLockedEth: string,
        totalValueLockedUsd: string,
        volumeEthTotal: string,
        volumeUsdTotal: string
    }[]
}

export type FetchUniV3PoolsResponse = {
    pools: {
        id: string,
        tick: string,
        liquidity: string,
        sqrtPrice: string,
        totalValueLockedETH: string,
        totalValueLockedToken0: string,
        totalValueLockedToken1: string,
        totalValueLockedUSD: string,
        token1: {
            id: string,
            name: string,
            symbol: string,
            decimals: number
        },
        token0: {
            id: string,
            name: string,
            symbol: string,
            decimals: number
        }
    }[]
}



export type FetchUniV3PositionsResponse = {
    positions: {
        id: string,
        liquidity: string,
        owner: string,
        token1: {
            id: string,
            name: string,
            symbol: string,
            decimals: number
        },
        token0: {
            id: string,
            name: string,
            symbol: string,
            decimals: number
        },
        pool: {
            tick: string
        },
        depositedToken0: string,
        depositedToken1: string,
        withdrawnToken0: string,
        withdrawnToken1: string
    }[]
}

export type FetchPriceResponse = {
    bundles: {
        id: string,
        ethPriceUSD: string
    }[]
}

