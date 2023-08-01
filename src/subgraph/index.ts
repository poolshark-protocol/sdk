import { gql } from '@apollo/client/core';
import { BigNumber } from 'ethers';
import { SubgraphVersion, getClient, getClientFromCustomUrl } from './client';
import {
  GetRangePoolFromFactoryResponseFeeTierIdDefined,
  GetRangePoolFromFactoryResponseFeeTierIdUndefined,
  GetCoverPoolFromFactoryResponse,
  GetTickIfNotZeroForOneResponse,
  GetTickIfZeroForOneResponse,
  FetchCoverPoolMetricsResponse,
  FetchCoverPoolsResponse,
  FetchCoverPositionsResponse,
  FetchPriceResponse,
  FetchRangePoolMetricsResponse,
  FetchRangePoolsResponse,
  FetchRangePositionsResponse,
  FetchUniV3PoolsResponse,
  FetchUniV3PositionsResponse,
} from './types';
import { Network } from '../enums';
export interface PoolState {
  unlocked: number;
  protocolFee: number;
  tickAtPrice: number;
  tickSecondsAccum: BigNumber;
  secondsPerLiquidityAccum: BigNumber;
  price: BigNumber;
  liquidity: BigNumber;
  liquidityGlobal: BigNumber;
  feeGrowthGlobal0: BigNumber;
  feeGrowthGlobal1: BigNumber;
  samples: SampleState;
  protocolFees: ProtocolFees;
}

interface SampleState {
  index: number;
  length: number;
  lengthNext: number;
}

interface ProtocolFees {
  token0: BigNumber;
  token1: BigNumber;
}

export const cleanInputValue = (arg: string) => {
  const re = /^[+-]?\d*(?:[.,]\d*)?$/;
  let inputVal = arg;
  if (re.test(inputVal)) {
    return inputVal.replace(',', '.');
  }
};

export const countDecimals = (value: number, tokenDecimals: number) => {
  if (value % 1 != 0) {
    let valueDecimals = value.toString().split('.')[1].length;
    return valueDecimals > tokenDecimals || valueDecimals == tokenDecimals;
  }
  return false;
};

export class PoolsharkSubgraph {
  public network: Network;
  constructor(network?: Network) {
    this.network = network ? network : Network.ARBITRUM;
  }
  /**
   *
   * @param tokenA : token0 address
   * @param tokenB : token1 address
   * @param feeTierId : fee tier id
   */
  async getRangePoolFromFactory(
    tokenA: `0x${string}`,
    tokenB: `0x${string}`,
    feeTierId?: number,
  ): Promise<
    | GetRangePoolFromFactoryResponseFeeTierIdUndefined
    | GetRangePoolFromFactoryResponseFeeTierIdDefined
  > {
    const token0 = tokenA.localeCompare(tokenB) < 0 ? tokenA : tokenB;
    const token1 = tokenA.localeCompare(tokenB) < 0 ? tokenB : tokenA;

    const getPoolQuery =
      feeTierId == undefined
        ? `
          {
            basePrices(where:{id: "eth"}){
              USD
            }
            rangePools(where: {token0_: {id:"${token0.toLocaleLowerCase()}"}, token1_:{id:"${token1.toLocaleLowerCase()}"}}) {
              id
              price
              tickAtPrice
              token0{
                usdPrice
              }
              token1{
                usdPrice
              }
              feeTier {
                id
                feeAmount
                tickSpacing
              }
            }
          }
          `
        : `
          {
            rangePools(where: {token0_: {id:"${token0.toLocaleLowerCase()}"}, token1_:{id:"${token1.toLocaleLowerCase()}"}, feeTier_: {id: "${feeTierId}"}}) {
              id
              price
              tickAtPrice
              feeTier {
                tickSpacing
              }
              token0 {
                usdPrice
              }
              token1 {
                usdPrice
              }
            }
          }
          `;
    const { data } = await getClient(
      this.network === Network.ARBITRUM_GOERLI
        ? SubgraphVersion.t_v_0_0_7
        : SubgraphVersion.none,
    ).query<
      | GetRangePoolFromFactoryResponseFeeTierIdUndefined
      | GetRangePoolFromFactoryResponseFeeTierIdDefined
    >({ query: gql(getPoolQuery) });
    return data;
  }

  async getCoverPoolFromFactory(tokenA: string, tokenB: string) {
    const token0 = tokenA.localeCompare(tokenB) < 0 ? tokenA : tokenB;
    const token1 = tokenA.localeCompare(tokenB) < 0 ? tokenB : tokenA;

    const query = `
          {
              coverPools(where: {token0_: {id:"${token0.toLocaleLowerCase()}"}, token1_:{id:"${token1.toLocaleLowerCase()}"}}) {
                id
                latestTick
                volatilityTier {
                  tickSpread
                  auctionLength
                }
                token0 {
                  usdPrice
                }
                token1 {
                  usdPrice
                }
              }
            }
           `;

    const { data } = await getClient(
      this.network === Network.ARBITRUM_GOERLI
        ? SubgraphVersion.t_v_0_0_3
        : SubgraphVersion.none,
    ).query<GetCoverPoolFromFactoryResponse>({ query: gql(query) });
    return data;
  }

  async getTickIfZeroForOne(
    upper: number,
    poolAddress: string,
    epochLast: number,
  ): Promise<GetTickIfZeroForOneResponse> {
    const query = `
         { 
           ticks(
              first: 1
              where: {index_lte:"${upper}", pool_:{id:"${poolAddress}"},epochLast_gt:"${epochLast}"}
            ) {
              index
            }
          }
          `;

    const { data } = await getClient(
      this.network === Network.ARBITRUM_GOERLI
        ? SubgraphVersion.t_v_0_0_3
        : SubgraphVersion.none,
    ).query<GetTickIfZeroForOneResponse>({ query: gql(query) });
    return data;
  }

  async getTickIfNotZeroForOne(
    lower: number,
    poolAddress: string,
    epochLast: number,
  ): Promise<GetTickIfNotZeroForOneResponse> {
    const query = `
         { 
           ticks(
              first: 1
              where: {index_gte:"${lower}", pool_:{id:"${poolAddress}"},epochLast_gt:"${epochLast}"}
            ) {
              index
            }
          }
          `;
    const { data } = await getClient(
      this.network === Network.ARBITRUM_GOERLI
        ? SubgraphVersion.t_v_0_0_3
        : SubgraphVersion.none,
    ).query<GetTickIfNotZeroForOneResponse>({ query: gql(query) });
    return data;
  }

  async fetchCoverPositions(
    address: `0x${string}`,
    skip?: number,
    limit?: number,
  ): Promise<FetchCoverPositionsResponse> {
    const positionsQuery = `
      query($owner: String) {
          positions(where: {owner:"${address.toLowerCase()}"},skip:${skip||0},limit:${limit || 100}) {
                id
                inAmount
                inToken{
                    id
                    name
                    symbol
                    decimals
                }
                liquidity
                zeroForOne
                upper
                lower
                amountInDeltaMax
                amountOutDeltaMax
                epochLast
                outAmount
                outToken{
                    id
                    name
                    symbol
                    decimals
                }
                owner
                pool{
                    id
                    token0{
                        id
                        name
                        symbol
                        decimals
                        usdPrice
                    }
                    token1{
                        id
                        name
                        symbol
                        decimals
                        usdPrice
                    }
                    liquidity
                    volatilityTier{
                        feeAmount
                        tickSpread
                        auctionLength
                    }
                    latestTick
                }
                txnHash
            }
        }
    `;

    const { data } = await getClient(
      this.network === Network.ARBITRUM_GOERLI
        ? SubgraphVersion.t_v_0_0_3
        : SubgraphVersion.none,
    ).query<FetchCoverPositionsResponse>({ query: gql(positionsQuery) });
    return data;
  }

  async fetchCoverPools(
    skip?: number,
    limit?: number,
  ): Promise<FetchCoverPoolsResponse> {
    const poolsQuery = `
            query($id: String) {
                coverPools(id: $id,skip:${skip || 0},first:${limit || 100}) {
                    id
                    inputPool
                    token0{
                        id
                        name
                        symbol
                        decimals
                    }
                    token1{
                        id
                        name
                        symbol
                        decimals
                    }
                    liquidity
                    volatilityTier{
                        auctionLength
                        feeAmount
                        tickSpread
                    }
                    price0
                    price1
                    feesEth
                    feesUsd
                    volumeEth
                    volumeToken0
                    volumeToken1
                    volumeUsd
                    totalValueLockedEth
                    totalValueLocked0
                    totalValueLocked1
                    totalValueLockedUsd
                }
            }
        `;

    const { data } = await getClient(
      this.network === Network.ARBITRUM_GOERLI
        ? SubgraphVersion.t_v_0_0_3
        : SubgraphVersion.none,
    ).query<FetchCoverPoolsResponse>({ query: gql(poolsQuery) });
    return data;
  }

  async fetchCoverPoolMetrics(
    limit?: number,
    offset?: number,
  ): Promise<FetchCoverPoolMetricsResponse> {
    const poolsMetricsQuery = `
            query($id: String) {
                coverPoolFactories(id: $id,skip:${offset},first:${limit}) {
                    id
                    poolCount
                }
            }
        `;

    const { data } = await getClient(
      this.network === Network.ARBITRUM_GOERLI
        ? SubgraphVersion.t_v_0_0_3
        : SubgraphVersion.none,
    ).query<FetchCoverPoolMetricsResponse>({ query: gql(poolsMetricsQuery) });
    return data;
  }

  async fetchRangePools(
    skip?: number,
    limit?: number,
  ): Promise<FetchRangePoolsResponse> {
    const poolsQuery = `
            query($id: String) {
                rangePools(id: $id,skip:${skip || 0},first:${limit || 100}) {
                    id
                    token0{
                        id
                        name
                        symbol
                        decimals
                    }
                    token1{
                        id
                        name
                        symbol
                        decimals
                    }
                    feesEth
                    feesUsd
                    feeTier{
                        tickSpacing
                        feeAmount
                    }
                    ticks{
                        price0
                        price1
                        liquidityDelta
                        liquidityDeltaMinus
                    }
                    price
                    price0
                    price1
                    price
                    liquidity
                    feesEth
                    feesUsd
                    feeGrowthGlobal0
                    feeGrowthGlobal1
                    volumeEth
                    volumeToken0
                    volumeToken1
                    volumeUsd
                    totalValueLockedEth
                    totalValueLocked0
                    totalValueLocked1
                    totalValueLockedUsd
                    txnCount
                }
            }
        `;

    const { data } = await getClient(
      this.network === Network.ARBITRUM_GOERLI
        ? SubgraphVersion.t_v_0_0_7
        : SubgraphVersion.none,
    ).query<FetchRangePoolsResponse>({ query: gql(poolsQuery) });
    return data;
  }

  async fetchRangePositions(
    address: string,
    skip?: number,
    limit?: number,
  ): Promise<FetchRangePositionsResponse> {
    const positionsQuery = `
    {
      positionFractions(where: {owner:"${address}"},skip:${skip || 0},first:${
        limit || 100
      } ) {
        id
        owner
        amount
        token{
          totalSupply
          position{
            lower
            upper
            liquidity
            pool {
              id
              token0{
                  id
                  name
                  symbol
                  decimals
              }
              token1{
                  id
                  name
                  symbol
                  decimals
              }
              ticks{
                  price0
                  price1
                  liquidityDelta
                  liquidityDeltaMinus
              }
              factory{
                  id
              }
              price
              liquidity
              feeTier{
                  feeAmount
                  tickSpacing
              }
              feesEth
              feesUsd
              totalValueLockedEth
              totalValueLockedUsd
              totalValueLocked0
              totalValueLocked1
              volumeEth
              volumeToken0
              volumeToken1
              volumeUsd
            }
          }
        }
      }  
  }
    `;

    const { data } = await getClient(
      this.network === Network.ARBITRUM_GOERLI
        ? SubgraphVersion.t_v_0_0_7
        : SubgraphVersion.none,
    ).query<FetchRangePositionsResponse>({ query: gql(positionsQuery) });
    return data;
  }
  async fetchRangeMetrics(
    skip?: number,
    limit?: number,
  ): Promise<FetchRangePoolMetricsResponse> {
    const positionsQuery = `
        query($id: String) {
            rangePoolFactories(id: $id,skip:${skip || 0},first:${
              limit || 100
            }) {
                id
                txnCount
                feesEthTotal
                feesUsdTotal
                poolCount
                totalValueLockedEth
                totalValueLockedUsd
                volumeEthTotal
                volumeUsdTotal
            }  
        }
    `;

    const { data } = await getClient(
      this.network === Network.ARBITRUM_GOERLI
        ? SubgraphVersion.t_v_0_0_7
        : SubgraphVersion.none,
    ).query<FetchRangePoolMetricsResponse>({ query: gql(positionsQuery) });
    return data;
  }
  async fetchUniV3Pools(
    skip?: number,
    limit?: number,
  ): Promise<FetchUniV3PoolsResponse> {
    const univ3PoolsQuery = `
            query($id: String) {
                pools(id: $id,skip:${skip || 0},first:${limit || 100}) {
                    id
                    tick
                    liquidity
                    sqrtPrice
                    totalValueLockedETH
                    totalValueLockedToken0
                    totalValueLockedToken1
                    totalValueLockedUSD
                    token1{
                        id
                        name
                        symbol
                        decimals
                    }
                    token0{
                        id
                        name
                        symbol
                        decimals
                    }
                }
            }
        `;

    const { data } = await getClientFromCustomUrl(
      'https://api.thegraph.com/subgraphs/name/liqwiz/uniswap-v3-goerli',
    ).query<FetchUniV3PoolsResponse>({ query: gql(univ3PoolsQuery) });
    return data;
  }

  async fetchUniV3Positions(
    address: string,
    skip?: number,
    limit?: number,
  ): Promise<FetchUniV3PositionsResponse> {
    const univ3PositionsQuery = `
            query($owner: String) {
                positions(owner: $owner,skip:${skip || 0},first:${
                  limit || 100
                }) {
                    id
                    liquidity
                    owner
                    token1{
                        id
                        name
                        symbol
                        decimals
                    }
                    token0{
                        id
                        name
                        symbol
                        decimals
                    }
                    pool {
                      tick
                    }
                    depositedToken0
                    depositedToken1
                    withdrawnToken0
                    withdrawnToken1
                }
            }
        `;

    const { data } = await getClientFromCustomUrl(
      'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
    ).query<FetchUniV3PositionsResponse>({
      query: gql(univ3PositionsQuery),
      variables: { owner: address },
    });
    return data;
  }

  async fetchPrice(
    address: string,
    skip?: number,
    limit?: number,
  ): Promise<FetchPriceResponse> {
    const univ3Price = `
            {
                bundles(skip:${skip || 0},first:${limit || 100}) {
                  id
                  ethPriceUSD
                }
            }
            `;

    const { data } = await getClientFromCustomUrl(
      'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3',
    ).query<FetchPriceResponse>({ query: gql(univ3Price) });
    return data;
  }
}
