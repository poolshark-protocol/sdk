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
    constructor(args:CoverPoolAddressConstructorArgs) {
        this.network = args.network;
        const coverPoolAddress = this.network === Network.ARBITRUM ? coverPoolAddressArbitrum : coverPoolAddressArbitrumGoerli;
        this.coverPool = CoverPool__factory.connect(coverPoolAddress, args.signerOrProvider);
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

    async positions0(args:PositionArgs) {
        // if(!isInt24(BigNumber.from(args.input0))) throw new Error("input0 is not int24")
        // if(!isInt24(BigNumber.from(args.input1))) throw new Error("input1 is not int24")
        const positions0 = await this.coverPool.positions0(args.address, args.input0, args.input1);
        return positions0;
    }

    async positions1(args:PositionArgs) {
        const positions1 = await this.coverPool.positions1(args.address, args.input0, args.input1);
        return positions1;
    }

    async quote(args:QuoteParams) {
        return await this.coverPool.quote(args);
    }

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

    async ticks0(tick:number) {
        const ticks0 = await this.coverPool.ticks0(tick);
        return ticks0;
    }

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
