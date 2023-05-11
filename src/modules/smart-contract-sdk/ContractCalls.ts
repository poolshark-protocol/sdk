import { Contract, ethers } from 'ethers';
import { coverPoolABI } from './abis/evm/cover/coverPool';

// Define TypeScript types for structs used in the contract methods

interface MintParams {
  to: string;
  lower: number;
  upper: number;
  amount: number;
  claim: number;
  zeroForOne: boolean;
}

interface BurnParams {
  to: string;
  lower: number;
  upper: number;
  amount: number;
  claim: number;
  zeroForOne: boolean;
  sync: boolean;
}

interface SwapCache {
  state: any;
  syncFees: any;
  constants: any;
  price: any;
  liquidity: any;
  amountIn: any;
  auctionDepth: any;
  auctionBoost: any;
  input: any;
  output: any;
  inputBoosted: any;
  amountInDelta: any;
}

// Define the CoverPool class
class CoverPool {
  private contract: Contract;

  constructor(contractAddress: string, provider: ethers.providers.Provider) {
    // ABI of the CoverPool contract
    const coverPoolAbi = coverPoolABI;

    this.contract = new ethers.Contract(contractAddress, coverPoolAbi, provider);
  }

  // Method for calling the mint function in the CoverPool contract
  async mint(params: MintParams): Promise<ethers.ContractTransaction> {
    return await this.contract.mint(params);
  }

  // Method for calling the burn function in the CoverPool contract
  async burn(params: BurnParams): Promise<ethers.ContractTransaction> {
    return await this.contract.burn(params);
  }

  // Method for calling the swap function in the CoverPool contract
  async swap(
    recipient: string,
    zeroForOne: boolean,
    amountIn: number,
    priceLimit: number
  ): Promise<[number, number]> {
    return await this.contract.swap(recipient, zeroForOne, amountIn, priceLimit);
  }

  // Method for calling the quote function in the CoverPool contract
  async quote(
    zeroForOne: boolean,
    amountIn: number,
    priceLimit: number
  ): Promise<[number, number]> {
    return await this.contract.quote(zeroForOne, amountIn, priceLimit);
  }

  // Method for calling the snapshot function in the CoverPool contract
  async snapshot(params: SnapshotParams): Promise<any> {
    return await this.contract.snapshot(params);
  }

  // Method for calling the collectFees function in the CoverPool contract
  async collectFees(): Promise<[number, number]> {
    return await this.contract.collectFees();
  }
}

// Export the CoverPool class
export { CoverPool };
