import { BytesLike, type BigNumber, type BigNumberish } from "ethers";

export type LimitMintParams = {
    to: `0x${string}`;
    refundTo: `0x${string}`;
    amount: BigNumber | number;
    mintPercent: BigNumberish;
    lower: BigNumberish;
    upper: BigNumberish;
    zeroForOne: boolean;
}
    
export type LimitSwapParams = {
    to: `0x${string}`;
    priceLimit: BigNumberish;
    amount: BigNumberish;
    exactIn: boolean;
    zeroForOne: boolean;
    callbackData: BytesLike;
}

export type LimitBurnParams = {
    to: `0x${string}`;
    burnPercent: BigNumberish;
    lower: BigNumberish
    upper:  BigNumberish
    claim:  BigNumberish
    zeroForOne: boolean;
}
