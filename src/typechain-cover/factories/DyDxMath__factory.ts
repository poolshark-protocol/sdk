/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { DyDxMath, DyDxMathInterface } from "../DyDxMath";

const _abi = [
  {
    inputs: [],
    name: "AmountsOutOfBounds",
    type: "error",
  },
  {
    inputs: [],
    name: "PriceOutsideBounds",
    type: "error",
  },
];

const _bytecode =
  "0x60566037600b82828239805160001a607314602a57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea2646970667358221220779633fdb0609ed19df76ac95b6ac21366d9aba59c8b6b1b521afb206938d37164736f6c634300080d0033";

export class DyDxMath__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DyDxMath> {
    return super.deploy(overrides || {}) as Promise<DyDxMath>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): DyDxMath {
    return super.attach(address) as DyDxMath;
  }
  connect(signer: Signer): DyDxMath__factory {
    return super.connect(signer) as DyDxMath__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DyDxMathInterface {
    return new utils.Interface(_abi) as DyDxMathInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DyDxMath {
    return new Contract(address, _abi, signerOrProvider) as DyDxMath;
  }
}
