/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { SwapCall, SwapCallInterface } from "../SwapCall";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amountIn",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amountOut",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint160",
        name: "priceLimit",
        type: "uint160",
      },
      {
        indexed: false,
        internalType: "uint160",
        name: "newPrice",
        type: "uint160",
      },
    ],
    name: "SwapPool0",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amountIn",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amountOut",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint160",
        name: "priceLimit",
        type: "uint160",
      },
      {
        indexed: false,
        internalType: "uint160",
        name: "newPrice",
        type: "uint160",
      },
    ],
    name: "SwapPool1",
    type: "event",
  },
];

const _bytecode =
  "0x611b2561003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c80635aa657e51461003a575b600080fd5b81801561004657600080fd5b5061005a6100553660046114b7565b610070565b604051610067919061188a565b60405180910390f35b610078610e4a565b6100af83608001516100925782604001516060015161009c565b8260400151604001515b84606001516001600160801b03166104d2565b50600083608001516100c55782606001516100cb565b82608001515b9050604051806101c00160405280846000015181526020018460200151815260200184604001518152602001846060015181526020018460800151815260200182600001516001600160a01b0316815260200182602001516001600160801b0316815260200185606001516001600160801b0316815260200185606001516001600160801b03168152602001600081526020016000815260200184600001516080015163ffffffff16856040015160c0015163ffffffff164261018e919061198c565b610198919061198c565b81526020016000815260200160008152509250506101c98360800151846040015184600001518586604001516106d9565b91508260800151156102175760a08201516080830180516001600160a01b039092169091526101a0830151905160400180516102069083906119a3565b6001600160801b0316905250610255565b60a08201516060830180516001600160a01b039092169091526101a0830151905160400180516102489083906119a3565b6001600160801b03169052505b8260800151156103995760008260200151600001516001600160801b031683610100015161028391906119ce565b11156102c1576102c183602001518360400151604001518460200151600001516001600160801b03168561010001516102bc91906119ce565b610a7b565b60008260200151602001516001600160801b03168361012001516102e591906119ce565b11156103945761031e83600001518360400151606001518460200151602001516001600160801b03168561012001516102bc91906119ce565b82600001516001600160a01b03167f57be8e3bc5664a55b825ee3b145e93a0f6757a732cdfb7d03edaadbcda66e6f283610100015185606001516001600160801b031661036b919061198c565b8461012001518560a00151876040015160405161038b94939291906119e6565b60405180910390a25b6104c9565b60008260200151602001516001600160801b03168361010001516103bd91906119ce565b11156103f6576103f683602001518360400151606001518460200151602001516001600160801b03168561010001516102bc91906119ce565b60008260200151600001516001600160801b031683610120015161041a91906119ce565b11156104c95761045383600001518360400151604001518460200151600001516001600160801b03168561012001516102bc91906119ce565b82600001516001600160a01b03167f53bfcae294eb006d1e9607aeab1cddecc1f4a479b6640923c158f90c272f648f83610100015185606001516001600160801b03166104a0919061198c565b8461012001518560a0015187604001516040516104c094939291906119e6565b60405180910390a25b50805b92915050565b60006001600160a01b038316610512578134101561050b5760405162461bcd60e51b815260040161050290611a1a565b60405180910390fd5b50806104cc565b81600003610522575060006104cc565b6040516370a0823160e01b815230600482015283906000906001600160a01b038316906370a0823190602401602060405180830381865afa15801561056b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061058f9190611a62565b6040516323b872dd60e01b8152336004820152306024820152604481018690529091506001600160a01b038316906323b872dd906064016020604051808303816000875af11580156105e5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106099190611a7b565b5060003d8015610624576020811461062d5760009150610639565b60019150610639565b60206000803e60005191505b50806106575760405162461bcd60e51b815260040161050290611a1a565b6040516370a0823160e01b81523060048201526000906001600160a01b038816906370a0823190602401602060405180830381865afa15801561069e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106c29190611a62565b90506106ce838261198c565b979650505050505050565b6106e1610e4a565b856106fc578260a00151856001600160a01b0316111561070e565b8260a00151856001600160a01b031610155b8061071b575060c0830151155b806107295750610100830151155b15610735575081610a72565b600084602001516001600160a01b0316905082610100015161ffff1683610140015161ffff1684610140015161ffff1686610160015111156107805784610140015161ffff16610787565b8561016001515b61079790655af3107a4000611a98565b6107a19190611acd565b6107ab9190611a98565b6101808501819052670de0b6b3a7640000906107c790826119ce565b8561010001516107d79190611a98565b6107e19190611acd565b610140850152861561092f5780866001600160a01b0316111561080a57506001600160a01b0385165b60006108218560c00151838760a001516000610c2e565b9050808561014001511161089357600061084a8660a001518760c001518861014001518c610c47565b90506108618660c00151828860a001516000610c93565b866101200181815161087391906119ce565b90525060a0860152600061010086015260e08501516101a0860152610929565b8015610929576108ae8560c00151838760a001516000610c93565b85610120018181516108c091906119ce565b90525060a08501829052610180850151670de0b6b3a7640000906108e4908261198c565b6108ee9083611a98565b6108f89190611acd565b856101000181815161090a919061198c565b90525061010085015160e0860151610922919061198c565b6101a08601525b50610a6d565b80866001600160a01b0316101561094c57506001600160a01b0385165b60006109638560c001518660a00151846000610c93565b905080856101400151116109d557600061098c8660a001518760c001518861014001518c610c47565b90506109a38660c001518760a00151836000610c2e565b86610120018181516109b591906119ce565b90525060a0860152600061010086015260e08501516101a0860152610a6b565b8015610a6b576109f08560c001518660a00151846000610c2e565b8561012001818151610a0291906119ce565b90525060a08501829052610180850151670de0b6b3a764000090610a26908261198c565b610a309083611a98565b610a3a9190611acd565b8561010001818151610a4c919061198c565b90525061010085015160e0860151610a64919061198c565b6101a08601525b505b839150505b95945050505050565b6001600160a01b038216610b155780471015610ad95760405162461bcd60e51b815260206004820181905260248201527f5472616e736665724661696c656428616464726573732874686973292c20746f6044820152606401610502565b6040516001600160a01b0384169082156108fc029083906000818181858888f19350505050158015610b0f573d6000803e3d6000fd5b50505050565b80600003610b2257505050565b60405163a9059cbb60e01b81526001600160a01b0384811660048301526024820183905283919082169063a9059cbb906044016020604051808303816000875af1158015610b74573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b989190611a7b565b5060003d8015610bb35760208114610bbc5760009150610bc8565b60019150610bc8565b60206000803e60005191505b5080610c275760405162461bcd60e51b815260206004820152602860248201527f5472616e736665724661696c656428616464726573732874686973292c206d73604482015267339739b2b73232b960c11b6064820152608401610502565b5050505050565b6000610c3c85858585610ca1565b90505b949350505050565b60008115610c7a57606084901b610c728187610c638782611a98565b610c6d90856119ce565b610cf9565b915050610c3f565b610c8983600160601b86610d6e565b610c3c90866119ce565b6000610c3c85858585610e20565b60008115610cd057610cc9610cbd606087901b86860386610cf9565b85808204910615150190565b9050610c3f565b83610ce2606087901b86860386610d6e565b81610cef57610cef611ab7565b0495945050505050565b6000610d06848484610d6e565b90508180610d1657610d16611ab7565b83850915610d67576000198110610d635760405162461bcd60e51b81526020600482015260116024820152704d617855696e744578636565646564282960781b6044820152606401610502565b6001015b9392505050565b6000808060001985870985870292508281108382030391505080600003610da75760008411610d9c57600080fd5b508290049050610d67565b808411610db357600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b60008115610e3957610cc985858503600160601b610cf9565b610c3c85858503600160601b610d6e565b60408051610340810182526000610300820181815261032083018290526101c083019081526101e08301829052610200830182905261022083018290526102408301829052610260830182905261028083018290526102a083018290526102c083018290526102e0830182905282528251808401845281815260208181019290925290820152908101610edb610f7c565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806101e0016040528060006001600160a01b03168152602001610fc7604051806040016040528060006001600160a01b0316815260200160006001600160a01b031681525090565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c0820181905260e08201819052610100820181905261012082018190526101408201819052610160820181905261018082018190526101a09091015290565b6040805190810167ffffffffffffffff8111828210171561105f57634e487b7160e01b600052604160045260246000fd5b60405290565b604051610140810167ffffffffffffffff8111828210171561105f57634e487b7160e01b600052604160045260246000fd5b6040516101e0810167ffffffffffffffff8111828210171561105f57634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff8111828210171561105f57634e487b7160e01b600052604160045260246000fd5b6040516101c0810167ffffffffffffffff8111828210171561105f57634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461114157600080fd5b50565b803561114f8161112c565b919050565b80356001600160801b038116811461114f57600080fd5b801515811461114157600080fd5b803561114f8161116b565b60006040828403121561119657600080fd5b61119e61102e565b90506111a982611154565b81526111b760208301611154565b602082015292915050565b803563ffffffff8116811461114f57600080fd5b8035600281900b811461114f57600080fd5b803561ffff8116811461114f57600080fd5b803560ff8116811461114f57600080fd5b6000610160828403121561121e57600080fd5b611226611065565b90506112328383611184565b815261124060408301611144565b602082015261125160608301611154565b6040820152611262608083016111c2565b606082015261127360a083016111c2565b608082015261128460c083016111c2565b60a082015261129560e083016111d6565b60c08201526101006112a88184016111e8565b60e08301526101206112bb8185016111e8565b828401526112cc61014085016111fa565b908301525092915050565b6000604082840312156112e957600080fd5b6112f161102e565b905081356112fe8161112c565b815260208201356111b78161112c565b8035600181900b811461114f57600080fd5b6000610200828403121561133357600080fd5b61133b611097565b905061134682611144565b815261135583602084016112d7565b602082015261136660608301611144565b604082015261137760808301611144565b606082015261138860a08301611144565b608082015260c082013560a08201526113a360e083016111c2565b60c08201526101006113b681840161130e565b60e08301526101206113c981850161130e565b8284015261014091506113dd8285016111e8565b908301526101606113ef8482016111e8565b8284015261018091506114038285016111e8565b908301526101a06114158482016111fa565b828401526101c091506114298285016111fa565b9083015261143a6101e08401611179565b9082015292915050565b600060a0828403121561145657600080fd5b61145e6110c9565b9050813561146b8161112c565b815261147960208301611154565b602082015261148a60408301611154565b604082015261149b60608301611154565b60608201526114ac60808301611154565b608082015292915050565b6000808284036106a08112156114cc57600080fd5b60a08112156114da57600080fd5b6114e26110c9565b84356114ed8161112c565b815260208501356114fd8161112c565b602082015260408501356115108161112c565b604082015261152160608601611154565b606082015260808501356115348161116b565b60808201529250610600609f19820181131561154f57600080fd5b6115576110fa565b91506115668660a0870161120b565b8252611576866102008701611184565b6020830152611589866102408701611320565b604083015261159c866104408701611444565b60608301526115af866104e08701611444565b608083015261058085013560a08301526105a085013560c08301526105c085013560e08301526105e0850135610100830152840135610120820152610620840135610140820152610640840135610160820152610660840135610180820152610680909301356101a08401525092909150565b61164382825180516001600160801b03908116835260209182015116910152565b60208101516001600160a01b03811660408401525060408101516001600160801b038116606084015250606081015163ffffffff8116608084015250608081015163ffffffff811660a08401525060a081015163ffffffff811660c08401525060c08101516116b760e084018260020b9052565b5060e08101516101006116cf8185018361ffff169052565b82015190506101206116e68482018361ffff169052565b82015160ff81166101408501529050505050565b80516001600160a01b03168252602081015161172f602084018280516001600160a01b03908116835260209182015116910152565b5060408101516001600160a01b03811660608401525060608101516001600160a01b03811660808401525060808101516001600160a01b03811660a08401525060a081015160c083015260c081015161179060e084018263ffffffff169052565b5060e08101516101006117a78185018360010b9052565b82015190506101206117bd8482018360010b9052565b82015190506101406117d48482018361ffff169052565b82015190506101606117eb8482018361ffff169052565b82015190506101806118028482018361ffff169052565b82015190506101a06118188482018360ff169052565b82015190506101c061182e8482018360ff169052565b8201518015156101e08501529050505050565b80516001600160a01b031682526020808201516001600160801b039081169184019190915260408083015182169084015260608083015182169084015260809182015116910152565b60006106008201905061189e828451611622565b60208301516101606118c88185018380516001600160801b03908116835260209182015116910152565b604085015191506101a06118de818601846116fa565b606086015192506118f36103a0860184611841565b60808601519250611908610440860184611841565b60a08601516104e086015260c086015161050086015260e0860151610520860152610100860151610540860152610120860151610560860152610140860151610580860152818601516105a08601526101808601516105c0860152808601516105e086015250505092915050565b634e487b7160e01b600052601160045260246000fd5b60008282101561199e5761199e611976565b500390565b60006001600160801b038083168185168083038211156119c5576119c5611976565b01949350505050565b600082198211156119e1576119e1611976565b500190565b6001600160801b0394851681529290931660208301526001600160a01b039081166040830152909116606082015260800190565b60208082526028908201527f5472616e736665724661696c6564286d73672e73656e6465722c206164647265604082015267737328746869732960c01b606082015260800190565b600060208284031215611a7457600080fd5b5051919050565b600060208284031215611a8d57600080fd5b8151610d678161116b565b6000816000190483118215151615611ab257611ab2611976565b500290565b634e487b7160e01b600052601260045260246000fd5b600082611aea57634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212208a40c32401e34ddaefe8f6dad84736e41d62a28654bc2d40f153585caf245eb264736f6c634300080d0033";

export class SwapCall__factory extends ContractFactory {
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
  ): Promise<SwapCall> {
    return super.deploy(overrides || {}) as Promise<SwapCall>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SwapCall {
    return super.attach(address) as SwapCall;
  }
  connect(signer: Signer): SwapCall__factory {
    return super.connect(signer) as SwapCall__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SwapCallInterface {
    return new utils.Interface(_abi) as SwapCallInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SwapCall {
    return new Contract(address, _abi, signerOrProvider) as SwapCall;
  }
}
