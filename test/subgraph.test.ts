import { PoolsharkSubgraph } from "../src/subgraph/queries";
import {describe, expect, test} from '@jest/globals';

const tokenZeroAddress = "0xC26906E10E8BDaDeb2cf297eb56DF59775eE52c4" // WETH
const  tokenOneAddress = "0x6774be1a283Faed7ED8e40463c40Fb33A8da3461"  // USDC
describe('PoolsharkSubgraph', () => {
    const subgraph = new PoolsharkSubgraph();

    test('init', async () => {
        expect(subgraph).toBeDefined();
    });

    test('Get Cover Pool From Factory', async () => {
        const pools = await subgraph.getCoverPoolFromFactory(tokenZeroAddress, tokenOneAddress);
        console.log(pools);
    }
    );

    test('Get Range Pool From Factory', async () => {
        const pools = await subgraph.getRangePoolFromFactory(tokenZeroAddress, tokenOneAddress);
        console.log(pools);
    });

});
//export const tokenZeroAddress   = "0xC26906E10E8BDaDeb2cf297eb56DF59775eE52c4" // WETH
// export const tokenOneAddress    = "0x6774be1a283Faed7ED8e40463c40Fb33A8da3461"  // USDC