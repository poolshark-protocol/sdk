import { Network } from "../../../enums";
import { Signer } from "ethers";
import { RangeMintParams,RangeSwapParams,RangeBurnParams } from "./types";
import { RangePool,RangePool__factory } from "../../../typechain-range";
import { ContractConstructorArgs } from "../../types";
type RangePoolSettersConstructorArgs = Omit<ContractConstructorArgs, "signerOrProvider"> & { signerOrProvider: Signer };

export class RangePoolSetters  {
    rangePool:RangePool;
    network:Network;
    signer:Signer
    debugMode:boolean;
    poolAddress:`0x${string}`;
    constructor(args:RangePoolSettersConstructorArgs) {
        this.network = args.network ? args.network : Network.ARBITRUM;
        this.rangePool = RangePool__factory.connect(args.poolAddress, args.signerOrProvider);
        this.signer = args.signerOrProvider;
        this.debugMode = args.debugMode || false;
        this.poolAddress = args.poolAddress;
    }

    async mint(args:RangeMintParams) {
        const tx = await this.rangePool.mint(args);
        await tx.wait();
        return tx;
    }

    async swap(args:RangeSwapParams) {
        const tx = await this.rangePool.swap(args);
        await tx.wait();
        return tx;
    }

    async burn(args:RangeBurnParams) {
        const tx = await this.rangePool.burn(args);
        await tx.wait();
        return tx;
    }

   


}
