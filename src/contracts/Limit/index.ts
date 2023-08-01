import { LimitPoolSetters } from './setters';
import { limitPoolGetters } from './getters';
import type { Provider } from '@ethersproject/providers';
import { Network } from '../../enums';
import { Signer } from 'ethers';
import { ContractConstructorArgs, FromWalletArgs } from '../types';
import {
  isSignerOrIsProvider,
  IsSignerOrIsProvider,
} from '../../utils/isSignerOrIsProvider';
import { FromSignerArgs } from '../types';

type LimitPoolConstructor = ContractConstructorArgs;
export class LimitPool {
  public setters: LimitPoolSetters | undefined;
  public getters: limitPoolGetters;
  public network: Network;
  public signerOrProvider: Signer | Provider;
  public debugMode: boolean;
  public poolAddress: `0x${string}`;

  constructor(args: LimitPoolConstructor) {
    this.network = args.network ? args.network : Network.ARBITRUM;
    this.signerOrProvider = args.signerOrProvider;

    this.getters = new limitPoolGetters({
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
      this.setters = new LimitPoolSetters({
        network: this.network,
        signerOrProvider: this.signerOrProvider as Signer,
        debugMode: false,
        poolAddress: this.poolAddress,
      });
    } else {
      throw new Error('Limit.initSetters: signerOrProvider is not a signer');
    }
    if (this.debugMode) console.log('End CoverPool.initSetters');
  }

  static fromSigner(args: FromSignerArgs): LimitPool {
    const pool =  new LimitPool({
      network: args.network,
      signerOrProvider: args.signer,
      debugMode: args.debugMode,
      poolAddress: args.poolAddress,
    });

    pool.setters = new LimitPoolSetters({
      network: args.network,
      signerOrProvider: args.signer,
      debugMode: args.debugMode,
      poolAddress: args.poolAddress,
    });
    return pool;
  }


  static fromWallet(args:FromWalletArgs): LimitPool {
    const pool = new LimitPool({
      network: args.network,
      signerOrProvider: args.wallet,
      debugMode: args.debugMode,
      poolAddress: args.poolAddress,
    });

    pool.setters = new LimitPoolSetters({
      network: args.network,
      signerOrProvider: args.wallet,
      debugMode: args.debugMode,
      poolAddress: args.poolAddress,
    });
    return pool;
  }
}
