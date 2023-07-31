import { CoverPoolSetters } from './setters';
import { CoverPoolGetters } from './getters';
import type { ContractConstructorArgs } from '../types';
import type { Provider } from '@ethersproject/providers';
import { Network } from '../../enums';
import { Signer } from 'ethers';
import {
  isSignerOrIsProvider,
  IsSignerOrIsProvider,
} from '../../utils/isSignerOrIsProvider';

type CoverPoolConstructor = ContractConstructorArgs;
export class CoverPool {
  public setters: CoverPoolSetters | undefined;
  public getters: CoverPoolGetters;
  public network: Network;
  public signerOrProvider: Signer | Provider;
  public debugMode: boolean;
  public poolAddress: `0x${string}`;

  constructor(args: CoverPoolConstructor) {
    this.network = args.network ? args.network : Network.ARBITRUM;
    this.signerOrProvider = args.signerOrProvider;

    this.getters = new CoverPoolGetters({
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
      this.setters = new CoverPoolSetters({
        network: this.network,
        signerOrProvider: this.signerOrProvider as Signer,
        debugMode: false,
        poolAddress: this.poolAddress,
      });
    } else {
      throw new Error(
        'CoverPool.initSetters: signerOrProvider is not a signer',
      );
    }
    if (this.debugMode) console.log('End CoverPool.initSetters');
  }
}
