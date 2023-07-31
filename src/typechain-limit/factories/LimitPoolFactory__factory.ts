/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  LimitPoolFactory,
  LimitPoolFactoryInterface,
} from "../LimitPoolFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "FeeTierNotSupported",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidTokenAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnerOnly",
    type: "error",
  },
  {
    inputs: [],
    name: "PoolAlreadyExists",
    type: "error",
  },
  {
    inputs: [],
    name: "TickSpacingNotSupported",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        indexed: true,
        internalType: "int16",
        name: "tickSpacing",
        type: "int16",
      },
    ],
    name: "PoolCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "int16",
        name: "tickSpacing",
        type: "int16",
      },
      {
        internalType: "uint160",
        name: "startPrice",
        type: "uint160",
      },
    ],
    name: "createLimitPool",
    outputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenOut",
        type: "address",
      },
      {
        internalType: "int16",
        name: "tickSpacing",
        type: "int16",
      },
    ],
    name: "getLimitPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "limitPools",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610e52380380610e5283398101604081905261002f91610062565b6001600160a01b039182166080521660a052610095565b80516001600160a01b038116811461005d57600080fd5b919050565b6000806040838503121561007557600080fd5b61007e83610046565b915061008c60208401610046565b90509250929050565b60805160a051610d8c6100c6600039600081816061015261048501526000818160e001526103040152610d8c6000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80635c60da1b1461005c5780637bcde34e1461009f5780638bd712a1146100b25780638da5cb5b146100db578063eb74486414610102575b600080fd5b6100837f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b03909116815260200160405180910390f35b6100836100ad366004610b3b565b610115565b6100836100c0366004610b82565b6000602081905290815260409020546001600160a01b031681565b6100837f000000000000000000000000000000000000000000000000000000000000000081565b610083610110366004610b9b565b6101c6565b600080836001600160a01b0316856001600160a01b0316106101375783610139565b845b90506000846001600160a01b0316866001600160a01b03161061015c578561015e565b845b604080516001600160a01b038086166020830152831691810191909152600186900b606082015290915060009060800160408051808303601f1901815291815281516020928301206000908152918290529020546001600160a01b0316979650505050505050565b6040805160e081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c08101829052846001600160a01b0316866001600160a01b0316148061022557506001600160a01b038616155b8061023757506001600160a01b038516155b1561025557604051630f58058360e11b815260040160405180910390fd5b846001600160a01b0316866001600160a01b031610610275578486610278565b85855b6001600160a01b03908116604084810182905292909116602080850182905283519081019190915291820152600185900b606082015260009060800160408051601f1981840301815291815281516020928301206000818152928390529120549091506001600160a01b03161561030257604051630188c99160e11b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03168083526040516344cbd39560e11b8152600187900b6004820152638997a72a90602401602060405180830381865afa15801561036c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103909190610bf5565b6103ad576040516332f8bf5560e11b815260040160405180910390fd5b600185900b60c083018190526001600160a01b03851660a08401526103d1906105d1565b6001600160a01b0316606083015260c08201516103ed906105fe565b6001600160a01b0381166080840152825160208085015160408087015160608089015160c08a0151935196821b6bffffffffffffffffffffffff199081169688019690965293811b8516603487015290811b8416604886015291821b8316605c85015293901b16607082015260f09190911b60848201526104ac9060860160408051601f198184030181529190526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016908361061e565b60408051630c816ea560e21b815284516001600160a01b039081166004830152602086015181166024830152918501518216604482015260608501518216606482015260808501518216608482015260a0850151821660a482015260c085015160010b60c4820152919450841690633205ba949060e401600060405180830381600087803b15801561053d57600080fd5b505af1158015610551573d6000803e3d6000fd5b5050506000828152602081815260409182902080546001600160a01b0319166001600160a01b038881169182179092558684015187840151945191825260018b900b9550821693909116917f04d24808b6405d8fe8371a8dc21ad425574be9cd42eb0482c5f01639f7120881910160405180910390a45050949350505050565b60006105db610aa7565b600183900b60808201526105f76105f184610705565b8261072a565b9392505050565b6000610608610aa7565b600183900b60808201526105f76105f184610a88565b600060608303516040840351602085035185518060208801018051600283016c5af43d3d93803e606057fd5bf38a528a600d8b035278593da1005b363d3d373d3d3d3d610000806062363936013d738160481b1760218b03527f9e4ac34f21c619cefc926c8bd93b54bf5a39c7ab2127a895af1cc0691d7e3dff603a8b0352716100003d81600a3d39f336602c57343d527f6062820160781b17605a8b03528060f01b835288606c8201604c8c036000f5975050866106e55763301164256000526004601cfd5b90528652601f19860152603f19850152605f199093019290925250919050565b6000600182900b61071a81620d89e719610c43565b6107249190610c8b565b92915050565b60008060008460020b12610741578360020b61074e565b8360020b61074e90610d18565b905061075d8360800151610a88565b62ffffff168111156107a95760405162461bcd60e51b81526020600482015260116024820152705469636b4f75744f66426f756e6473282960781b604482015260640160405180910390fd5b6000816001166000036107c057600160801b6107d2565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff1690506002821615610806576ffff97272373d413259a46990580e213a0260801c5b6004821615610825576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b6008821615610844576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b6010821615610863576fffcb9843d60f6159c9db58835c9266440260801c5b6020821615610882576fff973b41fa98c081472e6896dfb254c00260801c5b60408216156108a1576fff2ea16466c96a3843ec78b326b528610260801c5b60808216156108c0576ffe5dee046a99a2a811c461f1969c30530260801c5b6101008216156108e0576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615610900576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615610920576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615610940576fe7159475a2c29b7443b29c7fa6e889d90260801c5b611000821615610960576fd097f3bdfd2022b8845ad8f792aa58250260801c5b612000821615610980576fa9f746462d870fdf8a65dc1f90e061e50260801c5b6140008216156109a0576f70d869a156d2a1b890bb3df62baf32f70260801c5b6180008216156109c0576f31be135f97d08fd981231505542fcfa60260801c5b620100008216156109e1576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615610a01576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615610a20576d2216e584f5fa1ea926041bedfe980260801c5b62080000821615610a3d576b048a170391f7dc42444e8fa20260801c5b60008560020b1315610a5e578060001981610a5a57610a5a610c17565b0490505b640100000000810615610a72576001610a75565b60005b60ff16602082901c019250505092915050565b6000600182900b80610a9d620d89e719610d34565b61071a9190610c43565b6040518060a0016040528060006001600160a01b03168152602001610af1604051806040016040528060006001600160a01b0316815260200160006001600160a01b031681525090565b81526000602082018190526040820181905260609091015290565b6001600160a01b0381168114610b2157600080fd5b50565b8035600181900b8114610b3657600080fd5b919050565b600080600060608486031215610b5057600080fd5b8335610b5b81610b0c565b92506020840135610b6b81610b0c565b9150610b7960408501610b24565b90509250925092565b600060208284031215610b9457600080fd5b5035919050565b60008060008060808587031215610bb157600080fd5b8435610bbc81610b0c565b93506020850135610bcc81610b0c565b9250610bda60408601610b24565b91506060850135610bea81610b0c565b939692955090935050565b600060208284031215610c0757600080fd5b815180151581146105f757600080fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60008160020b8360020b80610c6857634e487b7160e01b600052601260045260246000fd5b627fffff19821460001982141615610c8257610c82610c2d565b90059392505050565b60008160020b8360020b627fffff600082136000841383830485118282161615610cb757610cb7610c2d565b627fffff196000851282811687830587121615610cd657610cd6610c2d565b60008712925085820587128484161615610cf257610cf2610c2d565b85850587128184161615610d0857610d08610c2d565b5050509290910295945050505050565b6000600160ff1b8201610d2d57610d2d610c2d565b5060000390565b60008160020b627fffff198103610d4d57610d4d610c2d565b6000039291505056fea2646970667358221220ad103f5eb2a48a6a9cc77a24af6a65b1f24d7a7b97bfe0868b4abe9dbce257d864736f6c634300080d0033";

export class LimitPoolFactory__factory extends ContractFactory {
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
    owner_: string,
    implementation_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LimitPoolFactory> {
    return super.deploy(
      owner_,
      implementation_,
      overrides || {}
    ) as Promise<LimitPoolFactory>;
  }
  getDeployTransaction(
    owner_: string,
    implementation_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(owner_, implementation_, overrides || {});
  }
  attach(address: string): LimitPoolFactory {
    return super.attach(address) as LimitPoolFactory;
  }
  connect(signer: Signer): LimitPoolFactory__factory {
    return super.connect(signer) as LimitPoolFactory__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LimitPoolFactoryInterface {
    return new utils.Interface(_abi) as LimitPoolFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LimitPoolFactory {
    return new Contract(address, _abi, signerOrProvider) as LimitPoolFactory;
  }
}