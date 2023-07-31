import { Network } from '../../../enums';
import { BigNumber, BigNumberish, Signer } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import { SnapshotParamsArgs } from '../../types';
import { ContractConstructorArgs } from '../../types';
import { RangePool__factory, RangePool } from '../../../typechain-range';
import { PoolStateLimitResponse, QuoteParams, SampleParams } from './types';

export class RangePoolGetters {
  rangePool: RangePool;
  network: Network;
  signerOrProvider: Signer | Provider;
  debugMode: boolean;
  poolAddress: `0x${string}`;
  constructor(args: ContractConstructorArgs) {
    this.network = args.network ? args.network : Network.ARBITRUM;
    this.poolAddress = args.poolAddress;
    this.rangePool = RangePool__factory.connect(
      this.poolAddress,
      args.signerOrProvider,
    );
    this.signerOrProvider = args.signerOrProvider;
    this.debugMode = args.debugMode || false;
  }

  private async quote(
    args: QuoteParams,
  ): Promise<[BigNumber, BigNumber, BigNumber]> {
    return await this.rangePool.quote(args);
  }

  private async sample(args: SampleParams): Promise<
    [BigNumber[], BigNumber[], BigNumber, BigNumber, number] & {
      tickSecondsAccum: BigNumber[];
      secondsPerLiquidityAccum: BigNumber[];
      averagePrice: BigNumber;
      averageLiquidity: BigNumber;
      averageTick: number;
    }
  > {
    const sample = await this.rangePool.sample(args);
    return sample;
  }

  private async snapshot(args: SnapshotParamsArgs): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber] & {
      secondsPerLiquidityAccum: BigNumber;
      feesOwed0: BigNumber;
      feesOwed1: BigNumber;
      tickSecondsAccum: BigNumber;
    }
  > {
    return await this.rangePool.snapshot(args);
  }

  private async balanceOf({
    account,
    id,
  }: {
    account: string;
    id: BigNumberish;
  }): Promise<BigNumber> {
    return await this.rangePool.balanceOf(account, id);
  }

  private async balanceOfBatch({
    accounts,
    ids,
  }: {
    accounts: string[];
    ids: BigNumberish[];
  }): Promise<BigNumber[]> {
    return await this.rangePool.balanceOfBatch(accounts, ids);
  }

  private async name(): Promise<string> {
    return await this.rangePool.name();
  }

  //owner
  private async owner(): Promise<string> {
    return await this.rangePool.owner();
  }

  private async symbol(): Promise<string> {
    return await this.rangePool.symbol();
  }

  //pool state
  private async poolState(): Promise<PoolStateLimitResponse> {
    return await this.rangePool.poolState();
  }
}
