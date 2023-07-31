import type { BigNumber } from "ethers";
export type QuoteParams = {
    priceLimit: BigNumber;
    amount: BigNumber;
    exactIn: boolean;
    zeroForOne: boolean;
}
export type SampleParams = number[] | BigNumber[];
