import {type BigNumber } from "ethers/lib/ethers"

type MintParams = {
    to:string,
    amount:BigNumber,
    lower:BigNumber,
    upper:BigNumber,
    zeroForOne:boolean,
}

type SwapParams = {
    to:string,
    refundTo:string,
    priceLimit:BigNumber,
    amountIn:BigNumber,
    zeroForOne:boolean,
}

type BurnParams = {
    to:string,
    burnPercent:BigNumber,
    lower:BigNumber,
    claim:BigNumber,
    upper:BigNumber,
    zeroForOne:boolean,
    sync:boolean,
}

export {
    MintParams,
    SwapParams,
    BurnParams
}