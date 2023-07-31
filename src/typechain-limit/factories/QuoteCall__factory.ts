/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { QuoteCall, QuoteCallInterface } from "../QuoteCall";

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
        internalType: "bool",
        name: "zeroForOne",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint160",
        name: "price",
        type: "uint160",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "liquidity",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "int24",
        name: "tickAtPrice",
        type: "int24",
      },
    ],
    name: "Swap",
    type: "event",
  },
];

const _bytecode =
  "0x611dca61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c80635519a6831461003a575b600080fd5b61004d610048366004611a71565b610075565b6040805193845260208401929092526001600160a01b03169082015260600160405180910390f35b600080600061008b848689898a6040015161009b565b9250925092509450945094915050565b600080600060405180610180016040528086600001518152602001866020015181526020018660400151815260200185600001516001600160a01b0316815260200185602001516001600160801b0316815260200187602001516001600160801b03168152602001600081526020016000815260200160006001600160a01b03168152602001876060015161014657610141898760c00151896020015160800151610309565b61015f565b61015f898760c0015189602001516080015160016104c2565b60020b815260408089015115156020830152600191015294505b846101600151156102ec5761012085015160020b6000908152602089905260409020546001600160a01b0316156101d05761012085015160020b6000908152602089905260409020546001600160a01b03166101e3565b6101e3856101200151866020015161069b565b6001600160a01b03166101008601526060860151801561021d57508461010001516001600160a01b031684600001516001600160a01b0316145b156102ac5761023b878560c0015187602001516080015160006104c2565b60020b61012086018190526000908152602089905260409020546001600160a01b0316156102895761012085015160020b6000908152602089905260409020546001600160a01b031661029c565b61029c856101200151866020015161069b565b6001600160a01b03166101008601525b6102c08486886000015189606001516109fa565b610160810151909650909450156102e7576102e2888886888a60600151610f21565b955093505b610179565b50505060c082015160e08301516060840151955095509592505050565b600060028260010b8161031e5761031e611bcb565b0560010b8360020b8161033357610333611bcb565b0760020b156103925760008360020b12156103925760028260010b8161035b5761035b611bcb565b0560010b6103688361103a565b0160020b8360020b13156103925760028260010b8161038957610389611bcb565b0560010b830392505b60008060006103a4868660010b61105f565b92509250925060008360ff1660ff146103d957506000828152600288016020526040902054600019600160ff861681011b0119165b806000036104965760008260ff1660ff146104175760018460ff166001016001901b0319896001016000858152602001908152602001600020541690505b8060000361046857885460001960018581011b0119166000819003610444578896505050505050506104bb565b61044d816111da565b60ff16600081815260018c0160205260409020549094509150505b610471816111da565b60ff16600884901b179350886002016000858152602001908152602001600020549150505b6104b46104a2826111da565b60ff16600885901b178760010b6112c8565b9450505050505b9392505050565b600060028360010b816104d7576104d7611bcb565b0560010b8460020b816104ec576104ec611bcb565b0760020b1515806104fa5750815b156105925760008460020b1215806105435750818015610543575060028360010b8161052857610528611bcb565b0560010b8460020b8161053d5761053d611bcb565b0760020b155b156105925760028360010b8161055b5761055b611bcb565b0560010b6105688461135e565b0360020b8460020b12156105925760028360010b8161058957610589611bcb565b0560010b840193505b60008060006105a4878760010b61105f565b600082815260028c0160205260408120549396509194509250600160ff86161b600019019091169081900361066e57600082815260018a8101602052604082205460ff86169190911b6000190116908190036106405789546000196001851b0116600081900361061c57899650505050505050610693565b6106258161137d565b60ff16600081815260018d0160205260409020549094509150505b6106498161137d565b60ff16600884901b179350896002016000858152602001908152602001600020549150505b61068c61067a8261137d565b60ff16600885901b178860010b6112c8565b9450505050505b949350505050565b60008060008460020b126106b2578360020b6106bf565b8360020b6106bf90611bf7565b90506106ce836080015161135e565b62ffffff1681111561071b5760405162461bcd60e51b81526020600482015260116024820152705469636b4f75744f66426f756e6473282960781b60448201526064015b60405180910390fd5b60008160011660000361073257600160801b610744565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff1690506002821615610778576ffff97272373d413259a46990580e213a0260801c5b6004821615610797576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b60088216156107b6576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b60108216156107d5576fffcb9843d60f6159c9db58835c9266440260801c5b60208216156107f4576fff973b41fa98c081472e6896dfb254c00260801c5b6040821615610813576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615610832576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615610852576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615610872576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615610892576ff3392b0822b70005940c7a398e4b70f30260801c5b6108008216156108b2576fe7159475a2c29b7443b29c7fa6e889d90260801c5b6110008216156108d2576fd097f3bdfd2022b8845ad8f792aa58250260801c5b6120008216156108f2576fa9f746462d870fdf8a65dc1f90e061e50260801c5b614000821615610912576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615610932576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615610953576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615610973576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615610992576d2216e584f5fa1ea926041bedfe980260801c5b620800008216156109af576b048a170391f7dc42444e8fa20260801c5b60008560020b13156109d05780600019816109cc576109cc611bcb565b0490505b6401000000008106156109e45760016109e7565b60005b60ff16602082901c019250505092915050565b610a02611624565b610a0a611660565b82610a25578460600151846001600160a01b03161115610a37565b8460600151846001600160a01b031610155b80610a625750828015610a625750846020015160200151600001516001600160a01b03168560600151145b80610a8e575082158015610a8e5750846020015160200151602001516001600160a01b03168560600151145b80610a9b575060a0850151155b15610ab157505060006101608401528383610f18565b6101008501516001600160a01b031660008415610ce957856001600160a01b0316821015610ae657856001600160a01b031691505b6000876101400151610b0c57610b078860800151848a606001516000611420565b610b21565b610b218860800151848a606001516001611437565b9050808860a001511015610c2a57600060608960800151901b9050600089610140015115610ba95760608a015160a08b0151610b72918491610b639082611c13565b610b6d9086611c32565b611445565b9050610b898a60800151828c606001516000611420565b93508960a001518a60c001818151610ba19190611c32565b905250610c07565b610bc560608b60a00151901b8b60800151808204910615150190565b8a60600151610bd49190611c4a565b90508960a001519350610bf28a60800151828c606001516001611437565b8a60c001818151610c039190611c32565b9052505b600060a08b018190526101608b01526001600160a01b031660608a015250610ce3565b87610140015115610c6657610c4a8860800151848a606001516000611420565b9150808860c001818151610c5e9190611c32565b905250610c93565b809150610c7e8860800151848a606001516001611437565b8860c001818151610c8f9190611c32565b9052505b808860a001818151610ca59190611c4a565b9052506101008801516001600160a01b03168303610cca576001610160890152610cd3565b60006101608901525b6001600160a01b03831660608901525b50610efa565b856001600160a01b0316821115610d0757856001600160a01b031691505b6000876101400151610d2d57610d2888608001518960600151856000611437565b610d42565b610d4288608001518960600151856001611420565b9050808860a001511015610e3f57600088610140015115610dba57610d748960a00151600160601b8b608001516114b9565b8960600151610d839190611c32565b9050610d9a89608001518a60600151836000611437565b92508860a001518960c001818151610db29190611c32565b905250610e1d565b608089015160608a81015160a08c01519290911b91610de9918391610ddf9082611c13565b610b6d9085611c4a565b91508960a001519350610e078a608001518b60600151846001611420565b8a60c001818151610e189190611c32565b905250505b600060a08a018190526101608a01526001600160a01b03166060890152610ef8565b87610140015115610e7b57610e5f88608001518960600151856000611437565b9150808860c001818151610e739190611c32565b905250610ea8565b809150610e9388608001518960600151856001611420565b8860c001818151610ea49190611c32565b9052505b808860a001818151610eba9190611c4a565b9052506101008801516001600160a01b03168303610edf576001610160890152610ee8565b60006101608901525b6001600160a01b03831660608901525b505b808760e001818151610f0c9190611c32565b90525087935086925050505b94509492505050565b610f29611624565b610f31611660565b61012084015160020b600090815260208890526040812060010154600f0b90811315610f975761012085015160020b6000908152602089905260409020600101546080860180516001600160801b0390921691610f8f908390611c32565b905250610fdc565b61012085015160020b600090815260208990526040902060010154610fbe90600f0b611c61565b6001600160801b031685608001818151610fd89190611c4a565b9052505b831561100a57610ffc8786610120015187602001516080015160006104c2565b60020b61012086015261102c565b61102287866101200151876020015160800151610309565b60020b6101208601525b509396929550919350505050565b6000600182900b61104f81620d89e719611c90565b6110599190611cd8565b92915050565b60008080620d89e8600286900b13156110b15760405162461bcd60e51b8152602060048201526014602482015273205469636b496e6465784f766572666c6f77282960601b6044820152606401610712565b620d89e719600286900b12156111005760405162461bcd60e51b81526020600482015260146024820152735469636b496e646578556e646572666c6f77282960601b6044820152606401610712565b600284810b0560020b8560020b8161111a5761111a611bcb565b0760020b156111365761113385600286810b5b0561156b565b94505b600284810b0560020b61115a620d89e71960028760020b8161112d5761112d611bcb565b61116887600288810b61112d565b0360020b8161117957611179611bcb565b0560020b92505050600881901c601082901c60ff8111156111d35760405162461bcd60e51b8152602060048201526014602482015273426c6f636b496e6465784f766572666c6f77282960601b6044820152606401610712565b9250925092565b60008082116111eb576111eb611d65565b5060ff6001600160801b0382161561120657607f190161120e565b608082901c91505b67ffffffffffffffff82161561122757603f190161122f565b604082901c91505b63ffffffff82161561124457601f190161124c565b602082901c91505b61ffff82161561125f57600f1901611267565b601082901c91505b60ff8216156112795760071901611281565b600882901c91505b600f821615611293576003190161129b565b600482901c91505b60038216156112ad57600119016112b5565b600282901c91505b60018216156112c357600019015b919050565b60006112d7620d89e88361156b565b60020260020262ffffff168311156113275760405162461bcd60e51b81526020600482015260136024820152725469636b496e6465784f766572666c6f77282960681b6044820152606401610712565b611339620d89e719600284810b61112d565b60020b60028360020b8161134f5761134f611bcb565b0560020b840201905092915050565b6000600182900b80611373620d89e719611d7b565b61104f9190611c90565b600080821161138e5761138e611d65565b600160801b82106113a157608091821c91015b6801000000000000000082106113b957604091821c91015b64010000000082106113cd57602091821c91015b6201000082106113df57601091821c91015b61010082106113f057600891821c91015b6010821061140057600491821c91015b6004821061141057600291821c91015b600282106112c357600101919050565b600061142e85858585611582565b95945050505050565b600061142e858585856115c3565b60006114528484846114b9565b9050818061146257611462611bcb565b838509156104bb5760001981106114af5760405162461bcd60e51b81526020600482015260116024820152704d617855696e744578636565646564282960781b6044820152606401610712565b6001019392505050565b60008080600019858709858702925082811083820303915050806000036114f257600084116114e757600080fd5b5082900490506104bb565b8084116114fe57600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b6000816115788185611c90565b6104bb9190611cd8565b60008460000361159457506000610693565b81156115b2576115ab85858503600160601b611445565b9050610693565b61142e85858503600160601b6114b9565b6000846000036115d557506000610693565b81156115fb576115ab6115ef606087901b86860386611445565b85808204910615150190565b8361160d606087901b868603866114b9565b8161161a5761161a611bcb565b0495945050505050565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c081019190915290565b604080516101a08101909152600061018082019081528152602081016116846116e6565b8152602001611691611624565b8152602001600081526020016000815260200160008152602001600081526020016000815260200160006001600160a01b03168152602001600060020b81526020016000151581526020016000151581525090565b6040518060a0016040528060006001600160a01b03168152602001611730604051806040016040528060006001600160a01b0316815260200160006001600160a01b031681525090565b81526000602082018190526040820181905260609091015290565b6040805190810167ffffffffffffffff8111828210171561177c57634e487b7160e01b600052604160045260246000fd5b60405290565b60405160e0810167ffffffffffffffff8111828210171561177c57634e487b7160e01b600052604160045260246000fd5b6040516080810167ffffffffffffffff8111828210171561177c57634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff8111828210171561177c57634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461182b57600080fd5b50565b80356112c381611816565b80356001600160801b03811681146112c357600080fd5b803580151581146112c357600080fd5b60006020828403121561187257600080fd5b6040516020810181811067ffffffffffffffff821117156118a357634e487b7160e01b600052604160045260246000fd5b604052905080823560ff811681146118ba57600080fd5b905292915050565b8035600181900b81146112c357600080fd5b600081830360c08112156118e757600080fd5b60405160a0810181811067ffffffffffffffff8211171561191857634e487b7160e01b600052604160045260246000fd5b604052915081833561192981611816565b81526040601f198301121561193d57600080fd5b61194561174b565b9150602084013561195581611816565b8252604084013561196581611816565b8060208401525081602082015261197e6060850161182e565b604082015261198f6080850161182e565b60608201526119a060a085016118c2565b6080820152505092915050565b803561ffff811681146112c357600080fd5b8035600281900b81146112c357600080fd5b600060e082840312156119e357600080fd5b6119eb611782565b905081356119f881611816565b8152611a0660208301611839565b6020820152611a1760408301611839565b6040820152611a2860608301611839565b6060820152608082013563ffffffff81168114611a4457600080fd5b6080820152611a5560a083016119ad565b60a0820152611a6660c083016119bf565b60c082015292915050565b6000806000808486036103a0811215611a8957600080fd5b6080811215611a9757600080fd5b611a9f6117b3565b8635611aaa81611816565b8152611ab860208801611839565b6020820152611ac960408801611850565b6040820152611ada60608801611850565b606082015294506102e0607f198201811315611af557600080fd5b611afd6117e4565b9150611b0c8860808901611860565b8252611b1b8860a089016118d4565b6020830152610160611b2f89828a016119d1565b60408401526102408801356060840152610260880135608084015261028088013560a08401526102a088013560c08401526102c088013560e0840152611b7682890161182e565b610100840152611b8961030089016119bf565b610120840152611b9c6103208901611850565b610140840152611baf6103408901611850565b9083015250939693955050505061036082013591610380013590565b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600160ff1b8201611c0c57611c0c611be1565b5060000390565b6000816000190483118215151615611c2d57611c2d611be1565b500290565b60008219821115611c4557611c45611be1565b500190565b600082821015611c5c57611c5c611be1565b500390565b600081600f0b6f7fffffffffffffffffffffffffffffff198103611c8757611c87611be1565b60000392915050565b60008160020b8360020b80611cb557634e487b7160e01b600052601260045260246000fd5b627fffff19821460001982141615611ccf57611ccf611be1565b90059392505050565b60008160020b8360020b627fffff600082136000841383830485118282161615611d0457611d04611be1565b627fffff196000851282811687830587121615611d2357611d23611be1565b60008712925085820587128484161615611d3f57611d3f611be1565b85850587128184161615611d5557611d55611be1565b5050509290910295945050505050565b634e487b7160e01b600052600160045260246000fd5b60008160020b627fffff198103611c8757611c87611be156fea26469706673582212206eb94926313f6ed96ee100b2dbab37e3fb3aaedbb7754243bb57f9825016308664736f6c634300080d0033";

export class QuoteCall__factory extends ContractFactory {
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
  ): Promise<QuoteCall> {
    return super.deploy(overrides || {}) as Promise<QuoteCall>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): QuoteCall {
    return super.attach(address) as QuoteCall;
  }
  connect(signer: Signer): QuoteCall__factory {
    return super.connect(signer) as QuoteCall__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): QuoteCallInterface {
    return new utils.Interface(_abi) as QuoteCallInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): QuoteCall {
    return new Contract(address, _abi, signerOrProvider) as QuoteCall;
  }
}