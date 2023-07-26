import { Network } from "../../enums";
import { CoverPool__factory,CoverPool } from "../../typechain";
import { coverPoolAddressArbitrum,coverPoolAddressArbitrumGoerli } from "../../constants";
import { BigNumber, Signer } from "ethers";
import type {Provider} from '@ethersproject/providers';
import { CoverPoolAddressConstructorArgs } from "../types";

export class CoverPoolSetters  {
    coverPool:CoverPool;
    network:Network;
    signerOrProvider:Signer | Provider
    debugMode:boolean;
    constructor(args:CoverPoolAddressConstructorArgs) {
        this.network = args.network;
        const coverPoolAddress = this.network === Network.ARBITRUM ? coverPoolAddressArbitrum : coverPoolAddressArbitrumGoerli;
        this.coverPool = CoverPool__factory.connect(coverPoolAddress, args.signerOrProvider);
        this.signerOrProvider = args.signerOrProvider;
        this.debugMode = args.debugMode;
    }

   


}
