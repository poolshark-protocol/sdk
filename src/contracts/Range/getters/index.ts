import { Network } from "../../../enums";
import { CoverPool__factory,CoverPool } from "../../../typechain-cover";
import { Signer } from "ethers";
import type {Provider} from '@ethersproject/providers';
import { SnapshotParamsArgs } from "../../types";
import { ContractConstructorArgs } from "../../types";
import {RangePool__factory,RangePool} from "../../../typechain-range";
import { QuoteParams,SampleParams } from "./types";
export class RangePoolGetters  {
    rangePool:RangePool;
    network:Network;
    signerOrProvider:Signer | Provider
    debugMode:boolean;
    poolAddress:`0x${string}`;
    constructor(args:ContractConstructorArgs) {
        this.network = args.network ? args.network : Network.ARBITRUM;
        this.poolAddress = args.poolAddress;
        this.rangePool = RangePool__factory.connect(this.poolAddress, args.signerOrProvider);
        this.signerOrProvider = args.signerOrProvider;
        this.debugMode = args.debugMode || false;
    }

   private async quote(args:QuoteParams) {
     return await this.rangePool.quote(args);
   }

    private async sample(args:SampleParams) {
        return await this.rangePool.sample(args);
    }

    private async snapshot(args:SnapshotParamsArgs) {
        return await this.rangePool.snapshot(args);
    }

}
