import { Network } from "../../enums";
import { CoverPool__factory,CoverPool } from "../../typechain";
import { coverPoolAddressArbitrum,coverPoolAddressArbitrumGoerli } from "../../constants";
import { BigNumber, Signer } from "ethers";
import type {Provider} from '@ethersproject/providers';
import { isInt24 } from "../../utils";
import { SnapshotParamsArgs,QuoteParams,PositionArgs } from "./types";
import { CoverPoolAddressConstructorArgs } from "../types";

export class CoverPoolGetters  {
    coverPool:CoverPool;
    network:Network;
    signerOrProvider:Signer | Provider
    debugMode:boolean;
    poolAddress:string;
    constructor(args:CoverPoolAddressConstructorArgs) {
        this.network = args.network;
        this.poolAddress = args.poolAddress;
        this.coverPool = CoverPool__factory.connect(this.poolAddress, args.signerOrProvider);
        this.signerOrProvider = args.signerOrProvider;
        this.debugMode = args.debugMode;
    }

    /**
       * Returns the length of the auction in seconds
       * @returns The length of the auction in seconds
    */
    async auctionLength():Promise<number> {
        return await this.coverPool.auctionLength();
    }

    /**
     * 
     * @returns The block time in seconds
     */
    async blockTime():Promise<number> {
        return await this.coverPool.blockTime();
    }

    /**
     * @returns The address to pay fees to
    */
    async feeTo():Promise<string> {
        return await this.coverPool.feeTo();
    }

    async genesisTime():Promise<number> {
        return await this.coverPool.genesisTime();
    }

    async globalState() {
        const globalState = await this.coverPool.globalState();
        return globalState;
    }

    async inputPool() {
        const inputPool = await this.coverPool.inputPool();
        return inputPool;
    }

    async maxPrice():Promise<BigNumber> {
        return await this.coverPool.maxPrice();
    }

    async minAmountLowerPriced():Promise<boolean> {
        return await this.coverPool.minAmountLowerPriced();
    }

    async minAmountPerAuction():Promise<BigNumber> {
        return await this.coverPool.minAmountPerAuction();
    }

    async minPositionWidth():Promise<number> {
        return await this.coverPool.minPositionWidth();
    }


    async minPrice():Promise<BigNumber> {
        return await this.coverPool.minPrice();
    }

    /**
     * @returns The name of the pool
    */
    async owner():Promise<string> {
        return await this.coverPool.owner();
    }

    /**
     * @returns The address of the pool for token0
    */
    async pool0() {
        const pool0 = await this.coverPool.pool0();
        return pool0;
    }

    /**
     * @returns The address of the pool for token1
    */
    async pool1() {
        const pool1 = await this.coverPool.pool1();
        return pool1;
    }

    /**
    * @param {PositionArgs} args - The arguments for fetching positions.
     */
    async positions0(args:PositionArgs) {
        const positions0 = await this.coverPool.positions0(args.address, args.input0, args.input1);
        return positions0;
    }


    async positions1(args:PositionArgs) {
        const positions1 = await this.coverPool.positions1(args.address, args.input0, args.input1);
        return positions1;
    }

    /**
     * @notice Quotes the amount of `tokenIn` for `tokenOut`. 
               `tokenIn` will be `token0` if `zeroForOne` is true.
               `tokenIn` will be `token1` if `zeroForOne` is false.
               The pool price represents token1 per token0.
               The pool price will decrease if `zeroForOne` is true.
               The pool price will increase if `zeroForOne` is false. 
     * @param {QuoteParams} params The parameters for the function. See QuoteParams type
     * @return inAmount The amount of tokenIn to be spent
     * @return outAmount The amount of tokenOut to be received
     * @return priceAfter The Q64.96 square root price after the swap
     */
    async quote(args:QuoteParams) {
        return await this.coverPool.quote(args);
    }
    
    /**
     * @notice Snapshots the current state of an existing position. 
     * @param {SwapParams} params The parameters for the function. See SwapParams type.
     * @return position The updated position containing `amountIn` and `amountOut`
     * @dev positions amounts reflected will be collected by the user if `burn` is called
     */
    async snapshot(args:SnapshotParamsArgs) {
        return await this.coverPool.snapshot(args);
    }

    async tickMap() {
        const tickMap = await this.coverPool.tickMap();
        return tickMap;
    }
    
    async tickSpread() {
        const tickSpread = await this.coverPool.tickSpread();
        return tickSpread;
    }

    /**  
     * @param {number} tick The tick to get the token0 for
     * @returns the tick containing token0 as output
    */
    async ticks0(tick:number) {
        const ticks0 = await this.coverPool.ticks0(tick);
        return ticks0;
    }

    /**
     * @param {number} tick The tick to get the token1 for
     * @returns the tick containing token1 as output
    */
    async ticks1(tick:number) {
        const ticks1 = await this.coverPool.ticks1(tick);
        return ticks1;
    }

    /**
     * @returns The address of token0  
     */
    async token0() {
        const token0 = await this.coverPool.token0();
        return token0;
    }

    /**
     * @returns The address of token1
        */
    async token1() {
        const token1 = await this.coverPool.token1();
        return token1;
    }

   
    async twapLength() {
        const twapLength = await this.coverPool.twapLength();
        return twapLength;
    }

    async twapSource() {
        const twapSource = await this.coverPool.twapSource();
        return twapSource;
    }



  
    






}
