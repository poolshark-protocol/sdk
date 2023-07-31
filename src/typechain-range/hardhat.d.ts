/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Burnable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Burnable__factory>;
    getContractFactory(
      name: "IERC20Metadata",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Metadata__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC165",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC165__factory>;
    getContractFactory(
      name: "RangePoolERC1155Events",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RangePoolERC1155Events__factory>;
    getContractFactory(
      name: "RangePoolEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RangePoolEvents__factory>;
    getContractFactory(
      name: "RangePoolFactoryEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RangePoolFactoryEvents__factory>;
    getContractFactory(
      name: "RangePoolManagerEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RangePoolManagerEvents__factory>;
    getContractFactory(
      name: "RangePoolFactoryStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RangePoolFactoryStorage__factory>;
    getContractFactory(
      name: "RangePoolStorage",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RangePoolStorage__factory>;
    getContractFactory(
      name: "IPoolsharkSwapCallback",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPoolsharkSwapCallback__factory>;
    getContractFactory(
      name: "IERC20Minimal",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Minimal__factory>;
    getContractFactory(
      name: "IPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IPool__factory>;
    getContractFactory(
      name: "IRangePool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRangePool__factory>;
    getContractFactory(
      name: "IRangePoolERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRangePoolERC1155__factory>;
    getContractFactory(
      name: "IRangePoolFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRangePoolFactory__factory>;
    getContractFactory(
      name: "IRangePoolManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRangePoolManager__factory>;
    getContractFactory(
      name: "DyDxMath",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.DyDxMath__factory>;
    getContractFactory(
      name: "BurnCall",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BurnCall__factory>;
    getContractFactory(
      name: "MintCall",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MintCall__factory>;
    getContractFactory(
      name: "QuoteCall",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.QuoteCall__factory>;
    getContractFactory(
      name: "SampleCall",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SampleCall__factory>;
    getContractFactory(
      name: "SwapCall",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SwapCall__factory>;
    getContractFactory(
      name: "Positions",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Positions__factory>;
    getContractFactory(
      name: "PrecisionMath",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PrecisionMath__factory>;
    getContractFactory(
      name: "Samples",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Samples__factory>;
    getContractFactory(
      name: "TickMap",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TickMap__factory>;
    getContractFactory(
      name: "TickMath",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TickMath__factory>;
    getContractFactory(
      name: "Ticks",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Ticks__factory>;
    getContractFactory(
      name: "RangePool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RangePool__factory>;
    getContractFactory(
      name: "RangePoolERC1155",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RangePoolERC1155__factory>;
    getContractFactory(
      name: "RangePoolFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RangePoolFactory__factory>;
    getContractFactory(
      name: "Token20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Token20__factory>;
    getContractFactory(
      name: "PoolRouter",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PoolRouter__factory>;
    getContractFactory(
      name: "CoverTransferErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CoverTransferErrors__factory>;
    getContractFactory(
      name: "RangePoolERC1155Errors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RangePoolERC1155Errors__factory>;
    getContractFactory(
      name: "RangePoolErrors",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RangePoolErrors__factory>;
    getContractFactory(
      name: "RangePoolManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RangePoolManager__factory>;
    getContractFactory(
      name: "SafeTransfers",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SafeTransfers__factory>;

    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Burnable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Burnable>;
    getContractAt(
      name: "IERC20Metadata",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Metadata>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC165",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC165>;
    getContractAt(
      name: "RangePoolERC1155Events",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RangePoolERC1155Events>;
    getContractAt(
      name: "RangePoolEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RangePoolEvents>;
    getContractAt(
      name: "RangePoolFactoryEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RangePoolFactoryEvents>;
    getContractAt(
      name: "RangePoolManagerEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RangePoolManagerEvents>;
    getContractAt(
      name: "RangePoolFactoryStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RangePoolFactoryStorage>;
    getContractAt(
      name: "RangePoolStorage",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RangePoolStorage>;
    getContractAt(
      name: "IPoolsharkSwapCallback",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPoolsharkSwapCallback>;
    getContractAt(
      name: "IERC20Minimal",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Minimal>;
    getContractAt(
      name: "IPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IPool>;
    getContractAt(
      name: "IRangePool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRangePool>;
    getContractAt(
      name: "IRangePoolERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRangePoolERC1155>;
    getContractAt(
      name: "IRangePoolFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRangePoolFactory>;
    getContractAt(
      name: "IRangePoolManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRangePoolManager>;
    getContractAt(
      name: "DyDxMath",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.DyDxMath>;
    getContractAt(
      name: "BurnCall",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BurnCall>;
    getContractAt(
      name: "MintCall",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MintCall>;
    getContractAt(
      name: "QuoteCall",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.QuoteCall>;
    getContractAt(
      name: "SampleCall",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SampleCall>;
    getContractAt(
      name: "SwapCall",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SwapCall>;
    getContractAt(
      name: "Positions",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Positions>;
    getContractAt(
      name: "PrecisionMath",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PrecisionMath>;
    getContractAt(
      name: "Samples",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Samples>;
    getContractAt(
      name: "TickMap",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TickMap>;
    getContractAt(
      name: "TickMath",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TickMath>;
    getContractAt(
      name: "Ticks",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Ticks>;
    getContractAt(
      name: "RangePool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RangePool>;
    getContractAt(
      name: "RangePoolERC1155",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RangePoolERC1155>;
    getContractAt(
      name: "RangePoolFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RangePoolFactory>;
    getContractAt(
      name: "Token20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Token20>;
    getContractAt(
      name: "PoolRouter",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PoolRouter>;
    getContractAt(
      name: "CoverTransferErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CoverTransferErrors>;
    getContractAt(
      name: "RangePoolERC1155Errors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RangePoolERC1155Errors>;
    getContractAt(
      name: "RangePoolErrors",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RangePoolErrors>;
    getContractAt(
      name: "RangePoolManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RangePoolManager>;
    getContractAt(
      name: "SafeTransfers",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SafeTransfers>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}