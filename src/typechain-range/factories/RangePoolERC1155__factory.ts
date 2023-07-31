/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type {
  RangePoolERC1155,
  RangePoolERC1155Interface,
} from '../RangePoolERC1155';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'BurnExceedsBalance',
    type: 'error',
  },
  {
    inputs: [],
    name: 'BurnFromAddress0',
    type: 'error',
  },
  {
    inputs: [],
    name: 'ERC1155NotSupported',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'accountsLength',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'idsLength',
        type: 'uint256',
      },
    ],
    name: 'LengthMismatch',
    type: 'error',
  },
  {
    inputs: [],
    name: 'MintToAddress0',
    type: 'error',
  },
  {
    inputs: [],
    name: 'OwnerOnly',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
    ],
    name: 'SelfApproval',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
    ],
    name: 'SpenderNotApproved',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'TransferExceedsBalance',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TransferFromOrToAddress0',
    type: 'error',
  },
  {
    inputs: [],
    name: 'TransferToSelf',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approve',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'amounts',
        type: 'uint256[]',
      },
    ],
    name: 'TransferBatch',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'TransferSingle',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: '_accounts',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: '_ids',
        type: 'uint256[]',
      },
    ],
    name: 'balanceOfBatch',
    outputs: [
      {
        internalType: 'uint256[]',
        name: 'batchBalances',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'burnFungible',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_owner',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_spender',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'mintFungible',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'name',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: '_ids',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '_amounts',
        type: 'uint256[]',
      },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_amount',
        type: 'uint256',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_spender',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: '_approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceID',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'symbol',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_id',
        type: 'uint256',
      },
    ],
    name: 'totalSupply',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b50610fe7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b35760003560e01c806395d89b411161007157806395d89b41146101a057806396f45e8b146101cb578063a22cb465146101de578063bd85b039146101f1578063e985e9c514610211578063fba0ee641461022457600080fd5b8062fdd58e146100b857806301ffc9a7146100fe57806306fdde03146101215780630febdd49146101585780634e1273f41461016d57806358ea82e61461018d575b600080fd5b6100eb6100c6366004610b5a565b6000908152602081815260408083206001600160a01b03949094168352929052205490565b6040519081526020015b60405180910390f35b61011161010c366004610b84565b610237565b60405190151581526020016100f5565b6040805180820190915260128152710506f6f6c736861726b2052616e6765204c560741b60208201525b6040516100f59190610bda565b61016b610166366004610c0d565b61026e565b005b61018061017b366004610c9b565b6103be565b6040516100f59190610d07565b61016b61019b366004610d4b565b6104d4565b60408051808201909152600f81526e050534841524b2d52414e47452d4c5608c1b602082015261014b565b61016b6101d9366004610d4b565b610504565b61016b6101ec366004610d8f565b61052f565b6100eb6101ff366004610dc6565b60009081526002602052604090205490565b61011161021f366004610ddf565b61053e565b61016b610232366004610e12565b610551565b60006301ffc9a760e01b6001600160e01b0319831614806102685750636cdb3d1360e11b6001600160e01b03198316145b92915050565b83836001600160a01b038216158061028d57506001600160a01b038116155b156102ab5760405163ace7635d60e01b815260040160405180910390fd5b806001600160a01b0316826001600160a01b0316036102dd5760405163bf2f44f560e01b815260040160405180910390fd5b85336102e98282610709565b61031e57604051632e088ed960e21b81526001600160a01b038084166004830152821660248201526044015b60405180910390fd5b8661032881610755565b61034557604051630773137b60e11b815260040160405180910390fd5b336103528a8a8a8a610852565b886001600160a01b03168a6001600160a01b0316826001600160a01b03167fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f628b8b6040516103aa929190918252602082015260400190565b60405180910390a450505050505050505050565b606083828082146103ec576040516355c5b3e360e11b81526004810183905260248101829052604401610315565b8567ffffffffffffffff81111561040557610405610ea3565b60405190808252806020026020018201604052801561042e578160200160208202803683370190505b50925060005b868110156104c9576104a488888381811061045157610451610eb9565b90506020020160208101906104669190610ecf565b87878481811061047857610478610eb9565b905060200201356000908152602081815260408083206001600160a01b03949094168352929052205490565b8482815181106104b6576104b6610eb9565b6020908102919091010152600101610434565b505050949350505050565b3033146104f457604051630b2db9b760e31b815260040160405180910390fd5b6104ff8383836108e6565b505050565b30331461052457604051630b2db9b760e31b815260040160405180910390fd5b6104ff83838361099e565b61053a338383610a8e565b5050565b600061054a8383610709565b9392505050565b828180821461057d576040516355c5b3e360e11b81526004810183905260248101829052604401610315565b87876001600160a01b038216158061059c57506001600160a01b038116155b156105ba5760405163ace7635d60e01b815260040160405180910390fd5b806001600160a01b0316826001600160a01b0316036105ec5760405163bf2f44f560e01b815260040160405180910390fd5b89336105f88282610709565b61062857604051632e088ed960e21b81526001600160a01b03808416600483015282166024820152604401610315565b8a61063281610755565b61064f57604051630773137b60e11b815260040160405180910390fd5b60005b8a81101561069e576106968e8e8e8e8581811061067157610671610eb9565b905060200201358d8d8681811061068a5761068a610eb9565b90506020020135610852565b600101610652565b508b6001600160a01b03168d6001600160a01b0316336001600160a01b03167f4a39dc06d4c0dbc64b70af90fd698a233a518aa5d07e595d983b8c0526c8f7fb8e8e8e8e6040516106f29493929190610f20565b60405180910390a450505050505050505050505050565b6000816001600160a01b0316836001600160a01b0316148061054a5750506001600160a01b03918216600090815260016020908152604080832093909416825291909152205460ff1690565b6000816001600160a01b03163b60000361077157506001919050565b604080516311b3e1e160e01b60248083019190915282518083039091018152604490910182526020810180516001600160e01b03166301ffc9a760e01b179052905160009081906001600160a01b03861690617530906107d2908690610f52565b6000604051808303818686fa925050503d806000811461080e576040519150601f19603f3d011682016040523d82523d6000602084013e610813565b606091505b509150915060208151101561082d57506000949350505050565b8180156108495750808060200190518101906108499190610f6e565b95945050505050565b6000828152602081815260408083206001600160a01b0388168452909152902054818110156108ad576040516308219d1f60e11b81526001600160a01b03861660048201526024810184905260448101839052606401610315565b6000928352602083815260408085206001600160a01b039788168652909152808420918390039091559290931681522080549091019055565b6001600160a01b03831661090d57604051630741c36560e51b815260040160405180910390fd5b6000828152600260205260408120805483929061092b908490610f8b565b90915550506000828152602081815260408083206001600160a01b03871680855290835281842080548681019091558251878152938401869052939092909133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f6291015b60405180910390a450505050565b6001600160a01b0383166109c557604051630de7554160e21b815260040160405180910390fd5b6000828152602081815260408083206001600160a01b038716845290915290205481811015610a20576040516364f36cfd60e11b81526001600160a01b03851660048201526024810184905260448101839052606401610315565b6000838152602081815260408083206001600160a01b0388168085529083528184208686039055868452600283528184208054879003905581518781529283018690529133917fc3d58168c5ae7397731d063d5bbf3d657854427343f4c083240f7aacaa2d0f629101610990565b816001600160a01b0316836001600160a01b031603610acb57604051631d12950160e11b81526001600160a01b0384166004820152602401610315565b6001600160a01b03838116600081815260016020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b50505050565b80356001600160a01b0381168114610b5557600080fd5b919050565b60008060408385031215610b6d57600080fd5b610b7683610b3e565b946020939093013593505050565b600060208284031215610b9657600080fd5b81356001600160e01b03198116811461054a57600080fd5b60005b83811015610bc9578181015183820152602001610bb1565b83811115610b385750506000910152565b6020815260008251806020840152610bf9816040850160208701610bae565b601f01601f19169190910160400192915050565b60008060008060808587031215610c2357600080fd5b610c2c85610b3e565b9350610c3a60208601610b3e565b93969395505050506040820135916060013590565b60008083601f840112610c6157600080fd5b50813567ffffffffffffffff811115610c7957600080fd5b6020830191508360208260051b8501011115610c9457600080fd5b9250929050565b60008060008060408587031215610cb157600080fd5b843567ffffffffffffffff80821115610cc957600080fd5b610cd588838901610c4f565b90965094506020870135915080821115610cee57600080fd5b50610cfb87828801610c4f565b95989497509550505050565b6020808252825182820181905260009190848201906040850190845b81811015610d3f57835183529284019291840191600101610d23565b50909695505050505050565b600080600060608486031215610d6057600080fd5b610d6984610b3e565b95602085013595506040909401359392505050565b8015158114610d8c57600080fd5b50565b60008060408385031215610da257600080fd5b610dab83610b3e565b91506020830135610dbb81610d7e565b809150509250929050565b600060208284031215610dd857600080fd5b5035919050565b60008060408385031215610df257600080fd5b610dfb83610b3e565b9150610e0960208401610b3e565b90509250929050565b60008060008060008060808789031215610e2b57600080fd5b610e3487610b3e565b9550610e4260208801610b3e565b9450604087013567ffffffffffffffff80821115610e5f57600080fd5b610e6b8a838b01610c4f565b90965094506060890135915080821115610e8457600080fd5b50610e9189828a01610c4f565b979a9699509497509295939492505050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600060208284031215610ee157600080fd5b61054a82610b3e565b81835260006001600160fb1b03831115610f0357600080fd5b8260051b8083602087013760009401602001938452509192915050565b604081526000610f34604083018688610eea565b8281036020840152610f47818587610eea565b979650505050505050565b60008251610f64818460208701610bae565b9190910192915050565b600060208284031215610f8057600080fd5b815161054a81610d7e565b60008219821115610fac57634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220674cdd4f6bc41d306dc4c2596088cff6ad2cae08e7dfbdf4655ef748ddda3acd64736f6c634300080d0033';

export class RangePoolERC1155__factory extends ContractFactory {
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
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<RangePoolERC1155> {
    return super.deploy(overrides || {}) as Promise<RangePoolERC1155>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RangePoolERC1155 {
    return super.attach(address) as RangePoolERC1155;
  }
  connect(signer: Signer): RangePoolERC1155__factory {
    return super.connect(signer) as RangePoolERC1155__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RangePoolERC1155Interface {
    return new utils.Interface(_abi) as RangePoolERC1155Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): RangePoolERC1155 {
    return new Contract(address, _abi, signerOrProvider) as RangePoolERC1155;
  }
}
