import { type BigNumber, type Signer } from "ethers";
;

type SnapshotParamsArgs = {
    owner: string;
    burnPercent: BigNumber; //uint128
    lower: number; //int24
    upper: number; //int24
    claim: number; //int24
    zeroForOne: boolean;
}
type QuoteParams = {
    priceLimit:BigNumber,
    amountIn:BigNumber,
    zeroForOne:boolean,
}

type PositionArgs = {
    address: string;
    input0: string;
    input1: string;
}
export {
    SnapshotParamsArgs,
    QuoteParams,
    PositionArgs
    
}