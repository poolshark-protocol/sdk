import { Contract, ethers } from 'ethers';
import { rangePoolABI } from '../abis/evm/range/rangePool';
import { MintParams } from '../../typescript-sdk/range/pool/liquidity/mint';
import { BurnParams } from '../../typescript-sdk/range/pool/liquidity/burn'
import { SwapParams } from '../../typescript-sdk/swap/swap';
import { QuoteParams } from '../../typescript-sdk/swap/quote';
// Define TypeScript types for structs used in the contract methods

// Define the RangePool class
class RangePool {
  private contract: Contract;

  constructor(contractAddress: string, provider: ethers.providers.Provider) {
    this.contract = new ethers.Contract(contractAddress, rangePoolABI, provider);
  }

  // Method for calling the mint function in the RangePool contract
  async mint(params: MintParams, provider: ethers.providers.JsonRpcProvider, signerAddress: string): Promise<ethers.ContractTransaction> {
    const signer = provider.getSigner(signerAddress);
    return await this.contract.connect(signer).mint(params);
  }

  // Method for calling the burn function in the RangePool contract
  async burn(params: BurnParams, provider: ethers.providers.JsonRpcProvider, signerAddress: string): Promise<ethers.ContractTransaction> {
    const signer = provider.getSigner(signerAddress);
    return await this.contract.connect(signer).burn(params);
  }

  // Method for calling the swap function in the RangePool contract
  async swap(
    params: SwapParams,
    provider: ethers.providers.JsonRpcProvider,
    signerAddress: string
  ): Promise<[number, number]> {
    const signer = provider.getSigner(signerAddress);
    return await this.contract.connect(signer).swap(params.recipient, params.zeroForOne, params.amountIn, params.priceLimit);
  }

  // Method for calling the quote function in the RangePool contract
  async quote(
    params: QuoteParams,
  ): Promise<[number, number]> {
    return await this.contract.quote(params.zeroForOne, params.amountIn, params.priceLimit);
  }

  // Method for calling the collectFees function in the RangePool contract
  async collectFees(
    provider: ethers.providers.JsonRpcProvider,
    signerAddress: string
  ): Promise<[number, number]> {
    const signer = provider.getSigner(signerAddress);
    return await this.contract.connect(signer).collectFees();
  }
}

// Export the RangePool class
export { RangePool };
