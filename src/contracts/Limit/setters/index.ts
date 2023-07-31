import { Network } from '../../../enums';
import { Signer } from 'ethers';
import { ContractConstructorArgs } from '../../types';
import { LimitBurnParams, LimitMintParams, LimitSwapParams } from './types';
type LimitPoolSettersConstructorArgs = Omit<
  ContractConstructorArgs,
  'signerOrProvider'
> & { signerOrProvider: Signer };
import { LimitPool, LimitPool__factory } from '../../../typechain-limit';
export class LimitPoolSetters {
  rangePool: LimitPool;
  network: Network;
  signer: Signer;
  debugMode: boolean;
  poolAddress: `0x${string}`;
  constructor(args: LimitPoolSettersConstructorArgs) {
    this.network = args.network ? args.network : Network.ARBITRUM;
    this.rangePool = LimitPool__factory.connect(
      args.poolAddress,
      args.signerOrProvider,
    );
    this.signer = args.signerOrProvider;
    this.debugMode = args.debugMode || false;
    this.poolAddress = args.poolAddress;
  }

  async mint(args: LimitMintParams) {
    const tx = await this.rangePool.mint(args);
    await tx.wait();
    return tx;
  }

  async swap(args: LimitSwapParams) {
    const tx = await this.rangePool.swap(args);
    await tx.wait();
    return tx;
  }

  async burn(args: LimitBurnParams) {
    const tx = await this.rangePool.burn(args);
    await tx.wait();
    return tx;
  }
}
