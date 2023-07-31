import { PoolsharkSubgraph } from "../src/subgraph";
import {describe, expect, test} from '@jest/globals';
import * as dotenv from "dotenv";
import { Network } from "../src/enums";
import * as fs from "fs";
dotenv.config();

const writeFolder = `./subgraph-responses`
const debug = process.env.DEBUG == "true";
const tokenZeroAddress = "0xC26906E10E8BDaDeb2cf297eb56DF59775eE52c4" // WETH
const  tokenOneAddress = "0x6774be1a283Faed7ED8e40463c40Fb33A8da3461"  // USDC
describe('PoolsharkSubgraph', () => {
    const subgraph = new PoolsharkSubgraph(Network.ARBITRUM_GOERLI);

    test('init', async () => {
        expect(subgraph).toBeDefined();
    });

    test('Get Cover Pool From Factory', async () => {
        const pools = await subgraph.getCoverPoolFromFactory(tokenZeroAddress, tokenOneAddress);
        if(debug){
            fs.writeFileSync(`${writeFolder}/1-get-cover-pool.json`, JSON.stringify(pools,null,4));
            console.log(pools);
        }

    }
    );

    test('Get Range Pool From Factory', async () => {
        const pools = await subgraph.getRangePoolFromFactory(tokenZeroAddress, tokenOneAddress);
        if(debug){
            fs.writeFileSync(`${writeFolder}/2-range-pool.json`, JSON.stringify(pools,null,4));
            console.log(pools);
        }
    });

    test('fetch cover pools',async () => {
        
        const pools = await subgraph.fetchCoverPools();
        if(debug){
            fs.writeFileSync(`${writeFolder}/3-fetch-cover-pools.json`, JSON.stringify(pools,null,4));
            console.log(pools);
        }
    })

    test('fetch range pools',async () => {
        const pools = await subgraph.fetchRangePools();
        if(debug){
            fs.writeFileSync(`${writeFolder}/4-fetch-range-pools.json`, JSON.stringify(pools,null,4));
            console.log(pools);
        }
    }
    );

    test('fetch range metrics',async () => {
        const pools = await subgraph.fetchRangeMetrics();
        if(debug){
            fs.writeFileSync(`${writeFolder}/5-fetch-range-metrics.json`, JSON.stringify(pools,null,4));
            console.log(pools);
        }
    });

    test('fetch univ3 pools',async () => {

        const pools = await subgraph.fetchUniV3Pools();
        if(debug){
            fs.writeFileSync(`${writeFolder}/6-fetch-univ3-pools.json`, JSON.stringify(pools,null,4));
            console.log(pools);
        }
    })



});
