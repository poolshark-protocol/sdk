
interface CoverPoolParams {
    /**
     * The source of the TWAP used for the cover pool
     * Valid values: 'UNI-V3'
    */
    twapSource: string;

    /**
     * The fee tier of the TWAP reference pool
     * Valid values: 500, 3000, 10000
    */
    swapFee: number;


    tokenIn: string;
    token1: string;
    tickSpread: number;
}