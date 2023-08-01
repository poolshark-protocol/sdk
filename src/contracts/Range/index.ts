import { RangePoolSetters } from './setters';
import { RangePoolGetters } from './getters';
import type { Provider } from '@ethersproject/providers';
import { Network } from '../../enums';
import { Signer } from 'ethers';
import { ContractConstructorArgs } from '../types';
import {
  isSignerOrIsProvider,
  IsSignerOrIsProvider,
} from '../../utils/isSignerOrIsProvider';
import { FromSignerArgs } from '../types';

type RangePoolConstructor = ContractConstructorArgs;
export class RangePool {
  public setters: RangePoolSetters | undefined;
  public getters: RangePoolGetters;
  public network: Network;
  public signerOrProvider: Signer | Provider;
  public debugMode: boolean;
  public poolAddress: `0x${string}`;

  constructor(args: RangePoolConstructor) {
    this.network = args.network ? args.network : Network.ARBITRUM;
    this.signerOrProvider = args.signerOrProvider;

    this.getters = new RangePoolGetters({
      network: this.network,
      signerOrProvider: this.signerOrProvider,
      debugMode: args.debugMode,
      poolAddress: args.poolAddress,
    });
    this.debugMode = args.debugMode || false;
    this.poolAddress = args.poolAddress;
  }

  async initSetters() {
    if (this.debugMode) console.log('Start CoverPool.initSetters');
    const isSignerOrIsProviderResult = await isSignerOrIsProvider(
      this.signerOrProvider,
    );
    if (isSignerOrIsProviderResult === IsSignerOrIsProvider.Signer) {
      this.setters = new RangePoolSetters({
        network: this.network,
        signerOrProvider: this.signerOrProvider as Signer,
        debugMode: false,
        poolAddress: this.poolAddress,
      });
    } else {
      throw new Error('Range.initSetters: signerOrProvider is not a signer');
    }
    if (this.debugMode) console.log('End CoverPool.initSetters');
  }

  static fromSigner(args: FromSignerArgs): RangePool {
    const pool = new RangePool({
      network: args.network,
      signerOrProvider: args.signer,
      debugMode: args.debugMode,
      poolAddress: args.poolAddress,
    });
    pool.setters = new RangePoolSetters({
      network: args.network,
      signerOrProvider: args.signer,
      debugMode: args.debugMode,
      poolAddress: args.poolAddress,
    });
    return pool;
  }
}
