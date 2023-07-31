/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { Token20, Token20Interface } from '../Token20';

const _abi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'tokenName',
        type: 'string',
      },
      {
        internalType: 'string',
        name: 'tokenSymbol',
        type: 'string',
      },
      {
        internalType: 'uint8',
        name: 'decimals_',
        type: 'uint8',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'owner',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Approval',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
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
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'Transfer',
    type: 'event',
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
    name: 'allowance',
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
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'approve',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
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
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'burnFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'decimals',
    outputs: [
      {
        internalType: 'uint8',
        name: '',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subtractedValue',
        type: 'uint256',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'spender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'addedValue',
        type: 'uint256',
      },
    ],
    name: 'increaseAllowance',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'mint',
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
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'decimals_',
        type: 'uint8',
      },
    ],
    name: 'setDecimals',
    outputs: [],
    stateMutability: 'nonpayable',
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
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
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
  {
    inputs: [
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transfer',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'transferFrom',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const _bytecode =
  '0x60806040523480156200001157600080fd5b5060405162000e2b38038062000e2b8339810160408190526200003491620001f7565b8251839083906200004d90600390602085019062000084565b5080516200006390600490602084019062000084565b50506005805460ff191660ff939093169290921790915550620002b8915050565b82805462000092906200027c565b90600052602060002090601f016020900481019282620000b6576000855562000101565b82601f10620000d157805160ff191683800117855562000101565b8280016001018555821562000101579182015b8281111562000101578251825591602001919060010190620000e4565b506200010f92915062000113565b5090565b5b808211156200010f576000815560010162000114565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200015257600080fd5b81516001600160401b03808211156200016f576200016f6200012a565b604051601f8301601f19908116603f011681019082821181831017156200019a576200019a6200012a565b81604052838152602092508683858801011115620001b757600080fd5b600091505b83821015620001db5785820183015181830184015290820190620001bc565b83821115620001ed5760008385830101525b9695505050505050565b6000806000606084860312156200020d57600080fd5b83516001600160401b03808211156200022557600080fd5b620002338783880162000140565b945060208601519150808211156200024a57600080fd5b50620002598682870162000140565b925050604084015160ff811681146200027157600080fd5b809150509250925092565b600181811c908216806200029157607f821691505b602082108103620002b257634e487b7160e01b600052602260045260246000fd5b50919050565b610b6380620002c86000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b4114610210578063a457c2d714610218578063a9059cbb1461022b578063dd62ed3e1461023e57600080fd5b806342966c681461019d57806370a08231146101b057806379cc6790146101d95780637a1395aa146101ec57600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063395093511461017557806340c10f191461018857600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610251565b60405161010f9190610965565b60405180910390f35b61012b6101263660046109d6565b6102e3565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610a00565b6102fb565b60055460405160ff909116815260200161010f565b61012b6101833660046109d6565b61031f565b61019b6101963660046109d6565b610341565b005b61019b6101ab366004610a3c565b61034f565b61013f6101be366004610a55565b6001600160a01b031660009081526020819052604090205490565b61019b6101e73660046109d6565b61035c565b61019b6101fa366004610a77565b6005805460ff191660ff92909216919091179055565b610102610371565b61012b6102263660046109d6565b610380565b61012b6102393660046109d6565b610400565b61013f61024c366004610a9a565b61040e565b60606003805461026090610acd565b80601f016020809104026020016040519081016040528092919081815260200182805461028c90610acd565b80156102d95780601f106102ae576101008083540402835291602001916102d9565b820191906000526020600020905b8154815290600101906020018083116102bc57829003601f168201915b5050505050905090565b6000336102f1818585610439565b5060019392505050565b60003361030985828561055e565b6103148585856105d8565b506001949350505050565b6000336102f1818585610332838361040e565b61033c9190610b07565b610439565b61034b828261077c565b5050565b610359338261083b565b50565b61036782338361055e565b61034b828261083b565b60606004805461026090610acd565b6000338161038e828661040e565b9050838110156103f35760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084015b60405180910390fd5b6103148286868403610439565b6000336102f18185856105d8565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6001600160a01b03831661049b5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103ea565b6001600160a01b0382166104fc5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103ea565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b600061056a848461040e565b905060001981146105d257818110156105c55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103ea565b6105d28484848403610439565b50505050565b6001600160a01b03831661063c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103ea565b6001600160a01b03821661069e5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103ea565b6001600160a01b038316600090815260208190526040902054818110156107165760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103ea565b6001600160a01b03848116600081815260208181526040808320878703905593871680835291849020805487019055925185815290927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a36105d2565b6001600160a01b0382166107d25760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016103ea565b80600260008282546107e49190610b07565b90915550506001600160a01b038216600081815260208181526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b6001600160a01b03821661089b5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103ea565b6001600160a01b0382166000908152602081905260409020548181101561090f5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103ea565b6001600160a01b0383166000818152602081815260408083208686039055600280548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9101610551565b600060208083528351808285015260005b8181101561099257858101830151858201604001528201610976565b818111156109a4576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146109d157600080fd5b919050565b600080604083850312156109e957600080fd5b6109f2836109ba565b946020939093013593505050565b600080600060608486031215610a1557600080fd5b610a1e846109ba565b9250610a2c602085016109ba565b9150604084013590509250925092565b600060208284031215610a4e57600080fd5b5035919050565b600060208284031215610a6757600080fd5b610a70826109ba565b9392505050565b600060208284031215610a8957600080fd5b813560ff81168114610a7057600080fd5b60008060408385031215610aad57600080fd5b610ab6836109ba565b9150610ac4602084016109ba565b90509250929050565b600181811c90821680610ae157607f821691505b602082108103610b0157634e487b7160e01b600052602260045260246000fd5b50919050565b60008219821115610b2857634e487b7160e01b600052601160045260246000fd5b50019056fea2646970667358221220d836eec9764871162796fd485dde58c624cc2255c91e5f6c46f8990b9ea8f3ce64736f6c634300080d0033';

export class Token20__factory extends ContractFactory {
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
    tokenName: string,
    tokenSymbol: string,
    decimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<Token20> {
    return super.deploy(
      tokenName,
      tokenSymbol,
      decimals_,
      overrides || {},
    ) as Promise<Token20>;
  }
  getDeployTransaction(
    tokenName: string,
    tokenSymbol: string,
    decimals_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(
      tokenName,
      tokenSymbol,
      decimals_,
      overrides || {},
    );
  }
  attach(address: string): Token20 {
    return super.attach(address) as Token20;
  }
  connect(signer: Signer): Token20__factory {
    return super.connect(signer) as Token20__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): Token20Interface {
    return new utils.Interface(_abi) as Token20Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): Token20 {
    return new Contract(address, _abi, signerOrProvider) as Token20;
  }
}
