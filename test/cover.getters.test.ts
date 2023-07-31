import { PoolsharkSubgraph } from "../src/subgraph";
import {describe, expect, test} from '@jest/globals';
import * as dotenv from "dotenv";
import { Network } from "../src/enums";
import * as fs from "fs";
dotenv.config();
import { CoverPool } from "../src";
import { ethers } from "ethers";
import { coverPoolAddressArbitrumGoerli } from "../src/constants";
const writeFolder = `./cover-responses`

const provider = new ethers.providers.JsonRpcProvider(process.env.ARBITRUM_GOERLI_URL || "");

const debug = process.env.DEBUG == "true";
const tokenZeroAddress = "0xC26906E10E8BDaDeb2cf297eb56DF59775eE52c4" // WETH
const  tokenOneAddress = "0x6774be1a283Faed7ED8e40463c40Fb33A8da3461"  // USDC


describe('Cover Getters', () => {
    const coverPool = new CoverPool({
        signerOrProvider: provider,
        poolAddress:coverPoolAddressArbitrumGoerli
    })

    test('Should Fail To Init Setters With Only A Provider', async () => {
        await expect(coverPool.initSetters()).rejects.toThrow("CoverPool.initSetters: signerOrProvider is not a signer");
    });
    test('Should Get Auction Length', async () => {
        await coverPool.getters.auctionLength();
    });

    test("Should Get Block Time", async() =>{
        await coverPool.getters.blockTime();
    })

    //feeTo, genesisTime, globalState, inputPool. maxPrice, minAmountLowerPriced
    test("Should Get Fee To", async() =>{
        await coverPool.getters.feeTo();
    }
    )
    test("Should Get Genesis Time", async() =>{
        await coverPool.getters.genesisTime();
    }
    )

    test("Should Get Global State", async() =>{
        await coverPool.getters.globalState();
    }
    )

    test("Should Get Input Pool", async() =>{
        await coverPool.getters.inputPool();
    })

    test("Should Get Max Price", async() =>{
        await coverPool.getters.maxPrice();
    })

    test("Should Get Min Amount Lower Priced", async() =>{
        await coverPool.getters.minAmountLowerPriced();
    });

    //minPrice,owner,pool0,pool1,
    
    test("Should Get Min Amount Per Auction", async() =>{
        await coverPool.getters.minAmountPerAuction();
    });

    test("Should Get Min Position Width", async() =>{
        await coverPool.getters.minPositionWidth();
    });

    test("Should Get Min Price", async() =>{
        await coverPool.getters.minPrice();
    });

    test("Should Get Owner", async() =>{
        await coverPool.getters.owner();
    });

    test("Should Get Pool 0", async() =>{
        await coverPool.getters.pool0();
    });

    test("Should Get Pool 1", async() =>{
        await coverPool.getters.pool1();
    });


    //tickMap
    test("Should Get Tick Map", async() =>{
        await coverPool.getters.tickMap();
    });

    //tickSpread
    test("Should Get Tick Spread", async() =>{
        await coverPool.getters.tickSpread();
    });


    test("Should get ticks0", async() =>{
        await coverPool.getters.ticks0(1);
    });

    test("Should get ticks1", async() =>{
        await coverPool.getters.ticks1(1);
    });

    //token0
    test("Should get token0", async() =>{
        await coverPool.getters.token0();
    }
    )

    //token1
    test("Should get token1", async() =>{
        await coverPool.getters.token1();
    }
    )

    //twapLength
    test("Should get twapLength", async() =>{
        await coverPool.getters.twapLength();
    });

    //twapSource
    test("Should get twapSource", async() =>{
        await coverPool.getters.twapSource();
    });

});
