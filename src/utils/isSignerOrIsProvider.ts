import { Signer } from "ethers";
import {Provider} from '@ethersproject/providers';
export enum IsSignerOrIsProvider  {
    Signer,
    Provider
}
export const isSignerOrIsProvider = async (signerOrProvider: Signer | Provider):Promise<IsSignerOrIsProvider> => {
    let status: IsSignerOrIsProvider = IsSignerOrIsProvider.Provider;
    try{

        let trySignerCall = await (signerOrProvider as Signer).getAddress();
        status = IsSignerOrIsProvider.Signer;
    }
    catch(e){

    }
    return status;

}
