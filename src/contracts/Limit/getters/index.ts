import { Network } from '../../../enums';
import { BigNumber, Signer } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import { LimitQuoteParams } from './types';
import { ContractConstructorArgs } from '../../types';
import { SnapshotParamsArgs } from '../../types';
import { LimitPool, LimitPool__factory } from '../../../typechain-limit';
export class limitPoolGetters {
  limitPool: LimitPool;
  network: Network;
  signerOrProvider: Signer | Provider;
  debugMode: boolean;
  poolAddress: `0x${string}`;
  constructor(args: ContractConstructorArgs) {
    this.network = args.network ? args.network : Network.ARBITRUM;
    this.poolAddress = args.poolAddress;
    this.limitPool = LimitPool__factory.connect(
      this.poolAddress,
      args.signerOrProvider,
    );
    this.signerOrProvider = args.signerOrProvider;
    this.debugMode = args.debugMode || false;
  }

  async quote(args: LimitQuoteParams) {
    return await this.limitPool.quote(args);
  }

  /**
   * @notice Snapshots the current state of an existing position.
   * @param {SwapParams} params The parameters for the function. See SwapParams type.
   * @return position The updated position containing `amountIn` and `amountOut`
   * @dev positions amounts reflected will be collected by the user if `burn` is called
   */
  async snapshot(args: SnapshotParamsArgs) {
    return await this.limitPool.snapshot(args);
  }

  async tickMap() {
    const tickMap = await this.limitPool.tickMap();
    return tickMap;
  }

  async tickSpacing() {
    const tickSpread = await this.limitPool.tickSpacing();
    return tickSpread;
  }

  /**
   * @param {number} tick The tick to get the token0 for
   * @returns the tick containing token0 as output
   */
  async ticks0(tick: number) {
    const ticks0 = await this.limitPool.ticks0(tick);
    return ticks0;
  }

  /**
   * @param {number} tick The tick to get the token1 for
   * @returns the tick containing token1 as output
   */
  async ticks1(tick: number) {
    const ticks1 = await this.limitPool.ticks1(tick);
    return ticks1;
  }

  /**
   * @returns The address of token0
   */
  async token0() {
    const token0 = await this.limitPool.token0();
    return token0;
  }

  /**
   * @returns The address of token1
   */
  async token1() {
    const token1 = await this.limitPool.token1();
    return token1;
  }
}
