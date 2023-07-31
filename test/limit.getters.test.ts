import { PoolsharkSubgraph } from "../src/subgraph";
import {describe, expect, test} from '@jest/globals';
import * as dotenv from "dotenv";
import { Network } from "../src/enums";
import * as fs from "fs";
dotenv.config();
import { LimitPool } from "../src";
import { ethers } from "ethers";
import { coverPoolAddressArbitrumGoerli } from "../src/constants";
const writeFolder = `./limit-responses`

const provider = new ethers.providers.JsonRpcProvider(process.env.ARBITRUM_GOERLI_URL || "");

const debug = process.env.DEBUG == "true";
const tokenZeroAddress = "0xC26906E10E8BDaDeb2cf297eb56DF59775eE52c4" // WETH
const  tokenOneAddress = "0x6774be1a283Faed7ED8e40463c40Fb33A8da3461"  // USDC


describe('Limit Getters Should All Correctly Fetch', () => {
    const limit = new LimitPool({
        signerOrProvider: provider,
        poolAddress:coverPoolAddressArbitrumGoerli
    })

    test('Should Fail To Init Setters With Only A Provider', async () => {
        await expect(limit.initSetters()).rejects.toThrow("Limit.initSetters: signerOrProvider is not a signer");
    }
    );

    //tick map, tickSpacing, ticks0, ticks1, token0, token1,
    test('Should Get Tick Map', async () => {
        await limit.getters.tickMap();
    });

    //@alphak3y TODO: Fix this test 
    //@alphak3y not sure why this is failing. It's in the typechain types.
    // test("Should Get Tick Spacing", async() =>{
    //     await limit.getters.tickSpacing();
    // });

    test("Should Get Ticks0", async() =>{
        await limit.getters.ticks0(1);
    });


    test("Should Get Ticks1", async() =>{
        await limit.getters.ticks1(1);
    }
    )

    test("Should Get Token0", async() =>{
        await limit.getters.token0();
    }
    )



});
