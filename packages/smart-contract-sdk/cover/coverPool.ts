import { Contract, ethers } from 'ethers';
import { coverPoolABI } from '../abis/evm/cover/coverPool';
import { MintParams } from '../../typescript-sdk/cover/liquidity/mint';
import { BurnParams } from '../../typescript-sdk/cover/liquidity/burn';
import { SwapParams } from '../../typescript-sdk/types/swap';
import { QuoteParams } from '../../typescript-sdk/types/quote';
// Define TypeScript types for structs used in the contract methods

// Define the CoverPool class
class CoverPool {
  private contract: Contract;

  constructor(contractAddress: string, provider: ethers.providers.Provider) {
    this.contract = new ethers.Contract(contractAddress, coverPoolABI, provider);
  }

  // Method for calling the mint function in the CoverPool contract
  async mint(params: MintParams, provider: ethers.providers.JsonRpcProvider, signerAddress: string): Promise<ethers.ContractTransaction> {
    const signer = provider.getSigner(signerAddress);
    return await this.contract.connect(signer).mint(params);
  }

  // Method for calling the burn function in the CoverPool contract
  async burn(params: BurnParams, provider: ethers.providers.JsonRpcProvider, signerAddress: string): Promise<ethers.ContractTransaction> {
    const signer = provider.getSigner(signerAddress);
    return await this.contract.connect(signer).burn(params);
  }

  // Method for calling the swap function in the CoverPool contract
  async swap(
    params: SwapParams,
    provider: ethers.providers.JsonRpcProvider,
    signerAddress: string
  ): Promise<[number, number]> {
    const signer = provider.getSigner(signerAddress);
    return await this.contract.connect(signer).swap(params.recipient, params.zeroForOne, params.amountIn, params.priceLimit);
  }

  // Method for calling the quote function in the CoverPool contract
  async quote(
    params: QuoteParams,
  ): Promise<[number, number]> {
    return await this.contract.quote(params.zeroForOne, params.amountIn, params.priceLimit);
  }

  // Method for calling the snapshot function in the CoverPool contract
  async snapshot(params: SnapshotParams): Promise<any> {
    return await this.contract.snapshot(params);
  }

  // Method for calling the collectFees function in the CoverPool contract
  async collectFees(
    provider: ethers.providers.JsonRpcProvider,
    signerAddress: string
  ): Promise<[number, number]> {
    const signer = provider.getSigner(signerAddress);
    return await this.contract.connect(signer).collectFees();
  }
}

// Export the CoverPool class
export { CoverPool };
