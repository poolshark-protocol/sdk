import { ethers, Contract } from 'ethers';

// Use the full ABI generated earlier
const dyDxMathAbi = [ /* Full ABI here */ ];

export class DyDxContractCalls {
  private contract: Contract;

  constructor(provider: ethers.providers.Provider, contractAddress: string) {
    this.contract = new ethers.Contract(contractAddress, dyDxMathAbi, provider);
  }

  async getDy(
    liquidity: ethers.BigNumberish,
    priceLower: ethers.BigNumberish,
    priceUpper: ethers.BigNumberish,
    roundUp: boolean
  ): Promise<ethers.BigNumber> {
    return this.contract.getDy(liquidity, priceLower, priceUpper, roundUp);
  }

  async getDx(
    liquidity: ethers.BigNumberish,
    priceLower: ethers.BigNumberish,
    priceUpper: ethers.BigNumberish,
    roundUp: boolean
  ): Promise<ethers.BigNumber> {
    return this.contract.getDx(liquidity, priceLower, priceUpper, roundUp);
  }

  async getLiquidityForAmounts(
    priceLower: ethers.BigNumberish,
    priceUpper: ethers.BigNumberish,
    currentPrice: ethers.BigNumberish,
    dy: ethers.BigNumberish,
    dx: ethers.BigNumberish
  ): Promise<ethers.BigNumber> {
    return this.contract.getLiquidityForAmounts(priceLower, priceUpper, currentPrice, dy, dx);
  }

  // Add any additional wrapper methods for other functions in the contract if needed
}
