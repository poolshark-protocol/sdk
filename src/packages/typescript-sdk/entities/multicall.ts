import { Interface } from '@ethersproject/abi';
import multiCall from '../../smart-contract-sdk/abis/evm/multiCall.json';

export abstract class Multicall {
  public static INTERFACE: Interface = new Interface(multiCall.abi);

  /**
   * Cannot be constructed.
   */
  private constructor() {}

  public static encodeMulticall(calldatas: string | string[]): string {
    if (!Array.isArray(calldatas)) {
      calldatas = [calldatas];
    }

    return calldatas.length === 1
      ? calldatas[0]
      : Multicall.INTERFACE.encodeFunctionData('multicall', [calldatas]);
  }
}
