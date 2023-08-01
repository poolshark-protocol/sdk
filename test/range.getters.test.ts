import { PoolsharkSubgraph } from "../src/subgraph";
import {describe, expect, test} from '@jest/globals';
import * as dotenv from "dotenv";
import { Network } from "../src/enums";
import * as fs from "fs";
dotenv.config();
import { RangePool } from "../src";
import { ethers } from "ethers";
import { coverPoolAddressArbitrumGoerli } from "../src/constants";
const writeFolder = `./range-responses`

const provider = new ethers.providers.JsonRpcProvider(process.env.ARBITRUM_GOERLI_URL || "");

const debug = process.env.DEBUG == "true";
const tokenZeroAddress = "0xC26906E10E8BDaDeb2cf297eb56DF59775eE52c4" // WETH
const  tokenOneAddress = "0x6774be1a283Faed7ED8e40463c40Fb33A8da3461"  // USDC


describe('Range Getters Should All Correctly Fetch', () => {
    const rangePool = new RangePool({
        signerOrProvider: provider,
        poolAddress:coverPoolAddressArbitrumGoerli
    })

    test('Should Fail To Init Setters With Only A Provider', async () => {
        await expect(rangePool.initSetters()).rejects.toThrow("Range.initSetters: signerOrProvider is not a signer");
    });

    



});
