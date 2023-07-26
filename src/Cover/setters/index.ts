import { Network } from "../../enums";
import { CoverPool__factory,CoverPool } from "../../typechain";
import { coverPoolAddressArbitrum,coverPoolAddressArbitrumGoerli } from "../../constants";
import { Signer } from "ethers";
import type {Provider} from '@ethersproject/providers';
import { CoverPoolAddressConstructorArgs } from "../types";
import { MintParams,SwapParams,BurnParams } from "./types";

type CoverPoolSettersConstructorArgs = Omit<CoverPoolAddressConstructorArgs, "signerOrProvider"> & { signerOrProvider: Signer };

export class CoverPoolSetters  {
    coverPool:CoverPool;
    network:Network;
    signer:Signer
    debugMode:boolean;
    poolAddress:string;
    constructor(args:CoverPoolSettersConstructorArgs) {
        this.network = args.network;
        this.coverPool = CoverPool__factory.connect(args.poolAddress, args.signerOrProvider);
        this.signer = args.signerOrProvider;
        this.debugMode = args.debugMode;
        this.poolAddress = args.poolAddress;
    }

    async mint(args:MintParams) {
        const tx = await this.coverPool.mint(args);
        await tx.wait();
        return tx;
    }
    
    async swap(args:SwapParams) {
        const tx = await this.coverPool.swap(args);
        await tx.wait();
        return tx;
    }

    async burn(args:BurnParams) {
        const tx = await this.coverPool.burn(args);
        await tx.wait();
        return tx;
    }

   


}
