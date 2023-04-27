interface IRangePoolStructs {
  // Struct that represents the state of the pool
  PoolState: {
    liquidity: number; // uint128
    feeGrowthGlobal0: bigint; // uint200
    feeGrowthGlobal1: bigint; // uint200
    protocolFees: {
      token0: number; // uint128
      token1: number; // uint128
    };
  };

  // Struct that represents the swap cache
  SwapCache: {
    output: number; // uint256
    swapFee: number; // uint256
    protocolFee: number; // uint256
  };
}

// Example usage of the interface
const poolState: IRangePoolStructs['PoolState'] = {
  liquidity: 1000,
  feeGrowthGlobal0: BigInt(12345),
  feeGrowthGlobal1: BigInt(67890),
  protocolFees: { token0: 100, token1: 200 }
};

const swapCache: IRangePoolStructs['SwapCache'] = {
  output: 500,
  swapFee: 3000,
  protocolFee: 600
};
