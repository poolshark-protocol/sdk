export type GetRangePoolFromFactoryResponseFeeTierIdUndefined = {
    basePrices: {
        USD: string,
    }[],
    rangePools: {
        id: `0x${string}`,
        price: string,
        tickAtPrice: string,
        token0: {
            usdPrice: string,
        },
        token1: {
            usdPrice: string,
        },
        feeTier: {
            id: `0x${string}`,
            feeAmount: string,
            tickSpacing: string,
        }
    }[]
}

export type GetRangePoolFromFactoryResponseFeeTierIdDefined = {
    rangePools: {
        id: `0x${string}`,
        price: string,
        tickAtPrice: string,
        feeTier: {
            tickSpacing: string
        },
        token0: {
            usdPrice: string
        },
        token1: {
            usdPrice: string
        }
    }[]
}


export type GetCoverPoolFromFactoryResponse = {
    coverPools: {
        id: `0x${string}`,
        latestTick: string,
        volatilityTier: {
            tickSpread: string,
            auctionLength: string,
        },
        token0: {
            usdPrice: string
        },
        token1: {
            usdPrice: string,
        }
    }[]
}

export type GetTickIfZeroForOneResponse = {
    ticks: {
        index: string
    }[]
}

export type GetTickIfNotZeroForOneResponse = {
    ticks: {
        index: string
    }[]
}


export type FetchCoverPositionsResponse = {
    positions: {
        id: `0x${string}`,
        inAmount: string,
        inToken: {
            id: `0x${string}`,
            name: string,
            symbol: string,
            decimals: string
        },
        liquidity: string,
        zeroForOne: boolean,
        upper: string,
        lower: string,
        amountInDeltaMax: string,
        amountOutDeltaMax: string,
        epochLast: string,
        outAmount: string,
        outToken: {
            id: `0x${string}`,
            name: string,
            symbol: string,
            decimals: string
        },
        owner: string,
        pool: {
            id: `0x${string}`,
            token0: {
                id: `0x${string}`,
                name: string,
                symbol: string,
                decimals: string,
                usdPrice: string
            },
            token1: {
                id: `0x${string}`,
                name: string,
                symbol: string,
                decimals: string,
                usdPrice: string
            },
            liquidity: string,
            volatilityTier: {
                feeAmount: string,
                tickSpread: string,
                auctionLength: string
            },
            latestTick: string
        },
        txnHash: string
    }[]
}


export type FetchCoverPoolsResponse = {
    coverPools: {
        id: `0x${string}`,
        inputPool: `0x${string}`,
        token0: {
            id: `0x${string}`,
            name: string,
            symbol: string,
            decimals: string
        },
        token1: {
            id: `0x${string}`,
            name: string,
            symbol: string,
            decimals: string
        },
        liquidity: string,
        volatilityTier: {
            auctionLength: string,
            feeAmount: string,
            tickSpread: string
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
        id: `0x${string}`,
        poolCount: string
    }[]
}

export type FetchRangePoolsResponse = {
    rangePools: {
        id: `0x${string}`,
        token0: {
            id: `0x${string}`,
            name: string,
            symbol: string,
            decimals: string
        },
        token1: {
            id: `0x${string}`,
            name: string,
            symbol: string,
            decimals: string
        },
        feesEth: string,
        feesUsd: string,
        feeTier: {
            tickSpacing: string,
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
        id: `0x${string}`,
        owner: string,
        amount: string,
        token: {
            totalSupply: string,
            position: {
                lower: string,
                upper: string,
                liquidity: string,
                pool: {
                    id: `0x${string}`,
                    token0: {
                        id: `0x${string}`,
                        name: string,
                        symbol: string,
                        decimals: string
                    },
                    token1: {
                        id: `0x${string}`,
                        name: string,
                        symbol: string,
                        decimals: string
                    },
                    ticks: {
                        price0: string,
                        price1: string,
                        liquidityDelta: string,
                        liquidityDeltaMinus: string
                    }[],
                    factory: {
                        id: `0x${string}`
                    },
                    price: string,
                    liquidity: string,
                    feeTier: {
                        feeAmount: string,
                        tickSpacing: string
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
        id: `0x${string}`,
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
        id: `0x${string}`,
        tick: string,
        liquidity: string,
        sqrtPrice: string,
        totalValueLockedETH: string,
        totalValueLockedToken0: string,
        totalValueLockedToken1: string,
        totalValueLockedUSD: string,
        token1: {
            id: `0x${string}`,
            name: string,
            symbol: string,
            decimals: string
        },
        token0: {
            id: `0x${string}`,
            name: string,
            symbol: string,
            decimals: string
        }
    }[]
}



export type FetchUniV3PositionsResponse = {
    positions: {
        id: `0x${string}`,
        liquidity: string,
        owner: string,
        token1: {
            id: `0x${string}`,
            name: string,
            symbol: string,
            decimals: string
        },
        token0: {
            id: `0x${string}`,
            name: string,
            symbol: string,
            decimals: string
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
        id: `0x${string}`,
        ethPriceUSD: string
    }[]
}

