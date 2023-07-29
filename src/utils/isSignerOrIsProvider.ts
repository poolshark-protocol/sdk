import { Signer } from "ethers";
import {Provider} from '@ethersproject/providers';
export enum IsSignerOrIsProvider  {
    Signer,
    Provider
}
export const isSignerOrIsProvider = async (signerOrProvider: Signer | Provider):Promise<IsSignerOrIsProvider> => {
    const isSigner =  await (signerOrProvider as Signer).getAddress !== undefined
    return isSigner ? IsSignerOrIsProvider.Signer : IsSignerOrIsProvider.Provider;

}
