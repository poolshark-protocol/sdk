/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  RangePoolFactoryMock,
  RangePoolFactoryMockInterface,
} from "../RangePoolFactoryMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenA",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenB",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    name: "feeTierTickSpacing",
    outputs: [
      {
        internalType: "int24",
        name: "",
        type: "int24",
      },
    ],
    stateMutability: "view",
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
        internalType: "uint16",
        name: "feeTier",
        type: "uint16",
      },
    ],
    name: "getRangePool",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "",
        type: "uint24",
      },
    ],
    name: "rangePools",
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
  "0x608060405234801561001057600080fd5b50604051610f66380380610f6683398101604081905261002f916102b1565b600280546001600160a01b031916331790556001600160a01b03818116908316106100945760405162461bcd60e51b81526020600482015260116024820152703bb937b733903a37b5b2b71037b93232b960791b604482015260640160405180910390fd5b60036020527f5ed261ce397475c8f8ccd7526f550ae383248415591df3d1b32ee25c9ab0af2e805462ffffff19908116600a9081179092557fa81df8da5a49e0ca2395b3c1eb4d55b23a04eb0615a8bee310459ef8a1c6e29c80548216603c1790556127106000527fbed90d45c8c5fb2e8fcae0027c6e57da3d943cdb82d794c1080bce28e166f211805490911660c8179055604051839183916101f4919061013c90610288565b6001600160a01b03948516815293909216602084015262ffffff16604083015260020b6060820152608001604051809103906000f080158015610183573d6000803e3d6000fd5b50600080546001600160a01b039283166001600160a01b031991821681178355858416835260046020908152604080852095871685529481528484206101f48552905291839020805490911690911790555182908290610bb890603c906101e990610288565b6001600160a01b03948516815293909216602084015262ffffff16604083015260020b6060820152608001604051809103906000f080158015610230573d6000803e3d6000fd5b50600180546001600160a01b039283166001600160a01b031991821681179092559382166000908152600460209081526040808320959094168252938452828120610bb88252909352912080549092161790556102e4565b6109ed8061057983390190565b80516001600160a01b03811681146102ac57600080fd5b919050565b600080604083850312156102c457600080fd5b6102cd83610295565b91506102db60208401610295565b90509250929050565b610286806102f36000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c80637b12f27014610046578063ca15b5e014610081578063ca8a93bf146100ac575b600080fd5b610069610054366004610186565b60036020526000908152604090205460020b81565b60405160029190910b81526020015b60405180910390f35b61009461008f3660046101bf565b6100e6565b6040516001600160a01b039091168152602001610078565b6100946100ba36600461020d565b60046020908152600093845260408085208252928452828420905282529020546001600160a01b031681565b600080836001600160a01b0316856001600160a01b031610610108578361010a565b845b90506000846001600160a01b0316866001600160a01b03161061012d578561012f565b845b6001600160a01b039283166000908152600460209081526040808320938616835292815282822061ffff88168352905220549091169150509392505050565b803562ffffff8116811461018157600080fd5b919050565b60006020828403121561019857600080fd5b6101a18261016e565b9392505050565b80356001600160a01b038116811461018157600080fd5b6000806000606084860312156101d457600080fd5b6101dd846101a8565b92506101eb602085016101a8565b9150604084013561ffff8116811461020257600080fd5b809150509250925092565b60008060006060848603121561022257600080fd5b61022b846101a8565b9250610239602085016101a8565b91506102476040850161016e565b9050925092509256fea2646970667358221220259a2731a56e7e5a39f11e85b190cd9559d1210994c5c587bf442612c9cb409764736f6c634300080d0033608060405234801561001057600080fd5b506040516109ed3803806109ed83398101604081905261002f91610123565b826001600160a01b0316846001600160a01b0316106100885760405162461bcd60e51b81526020600482015260116024820152703bb937b733903a37b5b2b71037b93232b960791b604482015260640160405180910390fd5b60008054336001600160a01b031991821617909155600180549091166001600160a01b039586161790556002805462ffffff938416600355939094166001600160b81b031990931692909217600160a01b9290911691909102179055790500000000000006000000000000090000000000000a0004000460045561018b565b80516001600160a01b038116811461011e57600080fd5b919050565b6000806000806080858703121561013957600080fd5b61014285610107565b935061015060208601610107565b9250604085015162ffffff8116811461016857600080fd5b8092505060608501518060020b811461018057600080fd5b939692955090935050565b6108538061019a6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063d0c93a7c1161005b578063d0c93a7c14610242578063d118ee4e1461026a578063d21220a7146102a0578063f62167fc146102b357600080fd5b8063095edd821461008d5780630dfe168114610125578063641ad8a9146101555780639d5466b914610214575b600080fd5b61012361009b366004610604565b6004805471ffffffffffffffffffffffffffff00000000191664010000000066ffffffffffffff9687160266ffffffffffffff60581b191617600160581b948616949094029390931771ffffffffffffffffffffffffffffffffffff16600160901b928516929092026001600160c81b031691909117600160c81b9190931602919091179055565b005b600154610138906001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b61015d6102d7565b6040805160ff909d168d5261ffff9b8c166020808f019190915260029b909b0b8d82015260069990990b60608d01526001600160a01b0397881660808d01529690951660a08b01526001600160801b0393841660c08b015291831660e08a01526001600160c81b039081166101008a01521661012088015281518616610140880152848201518616610160880152920151909316610180850152825181166101a0850152910151166101c08201526101e00161014c565b61012361022236600461066a565b6004805461ffff909216620100000263ffff000019909216919091179055565b6002805461025791600160a01b909104900b81565b60405160029190910b815260200161014c565b61012361027836600461068c565b6004805461ffff928316620100000263ffffffff199091169290931691909117919091179055565b600254610138906001600160a01b031681565b6102c66102c13660046106bf565b61038a565b60405161014c959493929190610734565b6000806000806000806000806000806103166040518060600160405280600061ffff168152602001600061ffff168152602001600061ffff1681525090565b505060408051808201825260008082526020918201819052825160608101845260048082525461ffff80821683860152620100009091041681850152835180850190945281845291830181905260019c909b508b9a508a9950899850600160601b9750889650869550859450849350909190565b606080600080808567ffffffffffffffff8111156103aa576103aa6107f1565b6040519080825280602002602001820160405280156103d3578160200160208202803683370190505b50945060048054906101000a900460060b856000815181106103f7576103f7610807565b600692830b60209182029290920101526004548651600160581b90910490910b908690600190811061042b5761042b610807565b600692830b60209182029290920101526004548651600160901b90910490910b908690600290811061045f5761045f610807565b600692830b60209182029290920101526004548651600160c81b90910490910b908690600390811061049357610493610807565b60069290920b602092830291909101909101528567ffffffffffffffff8111156104bf576104bf6107f1565b6040519080825280602002602001820160405280156104e8578160200160208202803683370190505b50935069c91435798c9226a0e6d78460008151811061050957610509610807565b60200260200101906001600160a01b031690816001600160a01b03168152505069c91435798c9226a0e6d78460018151811061054757610547610807565b60200260200101906001600160a01b031690816001600160a01b03168152505069c914354b931643013aeb8460028151811061058557610585610807565b60200260200101906001600160a01b031690816001600160a01b03168152505069c914354b931643013aeb846003815181106105c3576105c3610807565b60200260200101906001600160a01b031690816001600160a01b0316815250509295509295909350565b8035600681900b81146105ff57600080fd5b919050565b6000806000806080858703121561061a57600080fd5b610623856105ed565b9350610631602086016105ed565b925061063f604086016105ed565b915061064d606086016105ed565b905092959194509250565b803561ffff811681146105ff57600080fd5b60006020828403121561067c57600080fd5b61068582610658565b9392505050565b6000806040838503121561069f57600080fd5b6106a883610658565b91506106b660208401610658565b90509250929050565b600080602083850312156106d257600080fd5b823567ffffffffffffffff808211156106ea57600080fd5b818501915085601f8301126106fe57600080fd5b81358181111561070d57600080fd5b8660208260051b850101111561072257600080fd5b60209290920196919550909350505050565b60a0808252865190820181905260009060209060c0840190828a01845b8281101561077057815160060b84529284019290840190600101610751565b5050508381038285015287518082528883019183019060005b818110156107ae5783516001600160a01b031683529284019291840191600101610789565b50506001600160a01b038816604086015292506107c9915050565b6001600160801b03841660608301526107e7608083018460020b9052565b9695505050505050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fdfea2646970667358221220a856dd9669afe75fd26523075e71dc1facd9e077d2077bd9aba4bb2c3da258ac64736f6c634300080d0033";

export class RangePoolFactoryMock__factory extends ContractFactory {
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
    tokenA: string,
    tokenB: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RangePoolFactoryMock> {
    return super.deploy(
      tokenA,
      tokenB,
      overrides || {}
    ) as Promise<RangePoolFactoryMock>;
  }
  getDeployTransaction(
    tokenA: string,
    tokenB: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(tokenA, tokenB, overrides || {});
  }
  attach(address: string): RangePoolFactoryMock {
    return super.attach(address) as RangePoolFactoryMock;
  }
  connect(signer: Signer): RangePoolFactoryMock__factory {
    return super.connect(signer) as RangePoolFactoryMock__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RangePoolFactoryMockInterface {
    return new utils.Interface(_abi) as RangePoolFactoryMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RangePoolFactoryMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as RangePoolFactoryMock;
  }
}
