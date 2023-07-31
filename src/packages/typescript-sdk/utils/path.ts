import { pack } from '@ethersproject/solidity';
import { Pool } from '../entities/pools/pool';
import { Route } from '../entities/trades/route';
import { Token } from '../entities/tokens/token';
import { IToken } from '../entities/tokens/itoken';

/**
 * Converts a route to a hex encoded path
 * @param route the path to convert to an encoded path
 * @param exactOutput whether the route should be encoded in reverse, for making exact output swaps
 */
export function addRouteToPath(
  route: Route<IToken, IToken>,
  exactOutput: boolean,
): string {
  const firstInputToken: Token = route.input.wrapped;

  const { path, types } = route.pools.reduce(
    (
      {
        inputToken,
        path,
        types,
      }: { inputToken: Token; path: (string | number)[]; types: string[] },
      pool: Pool,
      index,
    ): { inputToken: Token; path: (string | number)[]; types: string[] } => {
      const outputToken: Token = pool.token0.equals(inputToken)
        ? pool.token1
        : pool.token0;
      if (index === 0) {
        return {
          inputToken: outputToken,
          types: ['address', 'uint24', 'address'],
          path: [inputToken.address, pool.swapFee, outputToken.address],
        };
      } else {
        return {
          inputToken: outputToken,
          types: [...types, 'uint24', 'address'],
          path: [...path, pool.swapFee, outputToken.address],
        };
      }
    },
    { inputToken: firstInputToken, path: [], types: [] },
  );

  return exactOutput
    ? pack(types.reverse(), path.reverse())
    : pack(types, path);
}
