import { type Signer } from "ethers";
import { Network } from "../enums";
import type {Provider} from '@ethersproject/providers';

type CoverPoolAddressConstructorArgs = {
    network: Network;
    signerOrProvider: Signer | Provider;
    debugMode: boolean;
}

export {
    CoverPoolAddressConstructorArgs
}