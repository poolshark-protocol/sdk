/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Positions, PositionsInterface } from "../Positions";

const _abi = [
  {
    inputs: [],
    name: "InvalidClaimTick",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidLowerTick",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidPositionAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidPositionBoundsOrder",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidUpperTick",
    type: "error",
  },
  {
    inputs: [],
    name: "LiquidityOverflow",
    type: "error",
  },
  {
    inputs: [],
    name: "NoLiquidityBeingAdded",
    type: "error",
  },
  {
    inputs: [],
    name: "NotEnoughPositionLiquidity",
    type: "error",
  },
  {
    inputs: [],
    name: "NotImplementedYet",
    type: "error",
  },
  {
    inputs: [],
    name: "PositionNotUpdated",
    type: "error",
  },
  {
    inputs: [],
    name: "WrongTickClaimedAt",
    type: "error",
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
        internalType: "int24",
        name: "lower",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "int24",
        name: "upper",
        type: "int24",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "tokenBurned",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "liquidityBurned",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount0",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount1",
        type: "uint128",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "int24",
        name: "lower",
        type: "int24",
      },
      {
        indexed: true,
        internalType: "int24",
        name: "upper",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "liquidityCompounded",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "positionAmount0",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "positionAmount1",
        type: "uint128",
      },
    ],
    name: "Compound",
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
        internalType: "int24",
        name: "lower",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "int24",
        name: "upper",
        type: "int24",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "tokenMinted",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "liquidityMinted",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount0",
        type: "uint128",
      },
      {
        indexed: false,
        internalType: "uint128",
        name: "amount1",
        type: "uint128",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "int24",
        name: "lower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "upper",
        type: "int24",
      },
    ],
    name: "id",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "int24",
        name: "lower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "upper",
        type: "int24",
      },
    ],
    name: "rangeFeeGrowth",
    outputs: [
      {
        internalType: "uint256",
        name: "feeGrowthInside0",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "feeGrowthInside1",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "int24",
        name: "lower",
        type: "int24",
      },
      {
        internalType: "int24",
        name: "upper",
        type: "int24",
      },
    ],
    name: "snapshot",
    outputs: [
      {
        internalType: "int56",
        name: "tickSecondsAccum",
        type: "int56",
      },
      {
        internalType: "uint160",
        name: "secondsPerLiquidityAccum",
        type: "uint160",
      },
      {
        internalType: "uint128",
        name: "feesOwed0",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "feesOwed1",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x61244e61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c806371dbc4d614610050578063ba3efd82146100a4578063ddc2de3e146100cc575b600080fd5b61006361005e366004611b29565b6100ed565b6040805160069590950b85526001600160a01b0390931660208501526001600160801b03918216928401929092521660608201526080015b60405180910390f35b6100b76100b2366004611b85565b610731565b6040805192835260208301919091520161009b565b6100df6100da366004611bd0565b6109e3565b60405190815260200161009b565b60008060008061015f86868a6001600160a01b031663d0c93a7c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610136573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061015a9190611c19565b6109f8565b61021f6040805161020081018252600080825260208083018290528284018290526060808401839052608080850184905260a080860185905260c0860185905260e08601859052610100860185905261012086018590526101408601859052610160860185905261018086018590526101a0860185905286519081018752848152928301849052948201839052810182905292830152906101c0820190815260408051606081018252600080825260208281018290529282015291015290565b886001600160a01b031663641ad8a96040518163ffffffff1660e01b81526004016101e060405180830381865afa15801561025e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102829190611d7c565b506101e08c01525050506001600160801b03166101008801526001600160a01b03908116602088015260405163f30dba9360e01b815260028e900b6004820152908f16955063f30dba93945060240192506102db915050565b60a060405180830381865afa1580156102f8573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061031c9190611e62565b6001600160a01b0390811661014087015260069190910b60c086015260405163f30dba9360e01b815260028b900b6004820152908d16935063f30dba939250602401905060a060405180830381865afa15801561037d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103a19190611e62565b6001600160a01b0390811661016087015260069190910b60e0860152604051632aedb11360e21b815260028c810b60048301528b900b6024820152908d16935063abb6c44c9250604401905060a060405180830381865afa15801561040a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042e9190611ed3565b6101c0860151608081019190915260608101919091526001600160801b039182166040820152918116602083015291909116905261046e89898989610b97565b61018082015261047f898888610c28565b6101a08201526000806104938b8a8a610731565b915091506104c9836101c0015160600151836104af9190611f3f565b6101c0850151516001600160801b0316600160801b610cac565b836101c001516020018181516104df9190611f56565b6001600160801b03169052506101c083015160800151610503906104af9083611f3f565b836101c001516040018181516105199190611f56565b6001600160801b03169052506101a0830151156105bc57826101a00151836101800151846101c00151602001516001600160801b03166105599190611f81565b6105639190611fb6565b6101c0840180516001600160801b039283166020909101526101a0850151610180860151915160400151909261059a929116611f81565b6105a49190611fb6565b6101c08401516001600160801b039091166040909101525b6105c98360200151610d5e565b600290810b808552908a900b12610628578260e001518360c001516105ee9190611fca565b836101600151846101400151610604919061201a565b846101c0015160200151856101c00151604001519650965096509650505050610726565b826000015160020b8860020b126107225763ffffffff42166040848101829052805160c0810182526101e0860180515161ffff90811683529051602090810151909116818301528183019390935281516002808252606080830185526106c395309591850193929190830190803683375050508152865160020b60208201526101008701516001600160801b031660409091015260006110a9565b6001600160a01b031661012085015260060b60a0840181905260e084015160c085015190916106f29190611fca565b6106fc9190611fca565b836101600151846101400151856101200151610718919061201a565b610604919061201a565b5050505b945094509450949050565b6000806107778484876001600160a01b031663d0c93a7c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015610136573d6000803e3d6000fd5b6000806000876001600160a01b031663641ad8a96040518163ffffffff1660e01b81526004016101e060405180830381865afa1580156107bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107df9190611d7c565b50506001600160c81b031699506001600160c81b03169950505050505094505050600080896001600160a01b031663f30dba938a6040518263ffffffff1660e01b8152600401610838919060029190910b815260200190565b60a060405180830381865afa158015610855573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108799190611e62565b505060405163f30dba9360e01b815260028c900b600482015291945092506000915081906001600160a01b038d169063f30dba939060240160a060405180830381865afa1580156108ce573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108f29190611e62565b505092509250506000806000808a60020b8f60020b1361092957876001600160c81b03169350866001600160c81b03169250610954565b61093c6001600160c81b0389168b611f3f565b93506109516001600160c81b0388168a611f3f565b92505b8d60020b8b60020b12156109775750506001600160c81b038085169084166109a2565b61098a6001600160c81b0387168b611f3f565b915061099f6001600160c81b0386168a611f3f565b90505b816109ad858c611f3f565b6109b79190611f3f565b9c50806109c4848b611f3f565b6109ce9190611f3f565b9b505050505050505050505050935093915050565b60006109ef8383611256565b90505b92915050565b610a028184612042565b60020b15610a4c5760405162461bcd60e51b8152602060048201526012602482015271496e76616c69644c6f7765725469636b282960701b60448201526064015b60405180910390fd5b620d89e719600284900b13610a985760405162461bcd60e51b8152602060048201526012602482015271496e76616c69644c6f7765725469636b282960701b6044820152606401610a43565b610aa28183612042565b60020b15610ae75760405162461bcd60e51b8152602060048201526012602482015271496e76616c696455707065725469636b282960701b6044820152606401610a43565b610af4620d89e719612064565b60020b8260020b12610b3d5760405162461bcd60e51b8152602060048201526012602482015271496e76616c696455707065725469636b282960701b6044820152606401610a43565b8160020b8360020b12610b925760405162461bcd60e51b815260206004820152601760248201527f496e76616c6964506f736974696f6e426f756e647328290000000000000000006044820152606401610a43565b505050565b6000846001600160a01b031662fdd58e85610bb28686611256565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401602060405180830381865afa158015610bfb573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c1f9190612086565b95945050505050565b6000836001600160a01b031663bd85b039610c438585611256565b6040518263ffffffff1660e01b8152600401610c6191815260200190565b602060405180830381865afa158015610c7e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ca29190612086565b90505b9392505050565b6000808060001985870985870292508281108382030391505080600003610ce55760008411610cda57600080fd5b508290049050610ca5565b808411610cf157600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b60006401000276a36001600160a01b0383161080610d99575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b03831610155b15610ddb5760405162461bcd60e51b815260206004820152601260248201527150726963654f75744f66426f756e6473282960701b6044820152606401610a43565b640100000000600160c01b03602083901b166001600160801b03811160071b81811c67ffffffffffffffff811160061b90811c63ffffffff811160051b90811c61ffff811160041b90811c60ff8111600390811b91821c600f811160021b90811c918211600190811b92831c97908811961790941790921717909117171760808110610e7657610e6c607f82611f3f565b83901c9150610e87565b610e8181607f611f3f565b83901b91505b60006040610e9660808461209f565b901b9050828302607f1c92508260801c80603f1b8217915083811c935050828302607f1c92508260801c80603e1b8217915083811c935050828302607f1c92508260801c80603d1b8217915083811c935050828302607f1c92508260801c80603c1b8217915083811c935050828302607f1c92508260801c80603b1b8217915083811c935050828302607f1c92508260801c80603a1b8217915083811c935050828302607f1c92508260801c8060391b8217915083811c935050828302607f1c92508260801c8060381b8217915083811c935050828302607f1c92508260801c8060371b8217915083811c935050828302607f1c92508260801c8060361b8217915083811c935050828302607f1c92508260801c8060351b8217915083811c935050828302607f1c92508260801c8060341b8217915083811c935050828302607f1c92508260801c8060331b8217915083811c935050828302607f1c92508260801c8060321b8217915050600081693627a301d71055774c8561101991906120de565b9050600060806110396f028f6481ab7f045a5af012a19d003aaa8461209f565b901d90506000608061105b846fdb2df09e81959a81455e260799a0632f612163565b901d90508060020b8260020b1461109a57886001600160a01b031661107f82611299565b6001600160a01b03161115611094578161109c565b8061109c565b815b9998505050505050505050565b60008060006110c086866000015161ffff166115f2565b90508363ffffffff16600003611112574263ffffffff16816000015163ffffffff16146110fe576110fb814287608001518860a001516116ba565b90505b80602001518160400151925092505061124e565b600061111e85426121a4565b905060008061112f89858a8661178f565b91509150816000015163ffffffff168363ffffffff16036111615781602001518260400151955095505050505061124e565b806000015163ffffffff168363ffffffff160361118f5780602001518160400151955095505050505061124e565b8151815160009161119f916121a4565b83519091506000906111b190866121a4565b60030b9050808260030b856020015185602001516111cf9190611fca565b6111d991906121c1565b6111e391906121ff565b84602001516111f29190612294565b8263ffffffff168266ffffffffffffff1686604001518660400151611217919061201a565b6001600160a01b031661122a9190611f81565b6112349190611fb6565b856040015161124391906122e3565b975097505050505050505b935093915050565b6000828260405160200161127a929190600292830b8152910b602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b60008060008360020b126112b0578260020b6112bd565b8260020b6112bd90612305565b90506112cc620d89e719612064565b62ffffff168111156113145760405162461bcd60e51b81526020600482015260116024820152705469636b4f75744f66426f756e6473282960781b6044820152606401610a43565b60008160011660000361132b57600160801b61133d565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff1690506002821615611371576ffff97272373d413259a46990580e213a0260801c5b6004821615611390576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b60088216156113af576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b60108216156113ce576fffcb9843d60f6159c9db58835c9266440260801c5b60208216156113ed576fff973b41fa98c081472e6896dfb254c00260801c5b604082161561140c576fff2ea16466c96a3843ec78b326b528610260801c5b608082161561142b576ffe5dee046a99a2a811c461f1969c30530260801c5b61010082161561144b576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b61020082161561146b576ff987a7253ac413176f2b074cf7815e540260801c5b61040082161561148b576ff3392b0822b70005940c7a398e4b70f30260801c5b6108008216156114ab576fe7159475a2c29b7443b29c7fa6e889d90260801c5b6110008216156114cb576fd097f3bdfd2022b8845ad8f792aa58250260801c5b6120008216156114eb576fa9f746462d870fdf8a65dc1f90e061e50260801c5b61400082161561150b576f70d869a156d2a1b890bb3df62baf32f70260801c5b61800082161561152b576f31be135f97d08fd981231505542fcfa60260801c5b6201000082161561154c576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b6202000082161561156c576e5d6af8dedb81196699c329225ee6040260801c5b6204000082161561158b576d2216e584f5fa1ea926041bedfe980260801c5b620800008216156115a8576b048a170391f7dc42444e8fa20260801c5b60008460020b13156115c95780600019816115c5576115c5611fa0565b0490505b6401000000008106156115dd5760016115e0565b60005b60ff16602082901c0192505050919050565b60408051606081018252600080825260208201819052918101919091526000806000856001600160a01b03166307e72129866040518263ffffffff1660e01b815260040161164291815260200190565b606060405180830381865afa15801561165f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906116839190612321565b6040805160608101825263ffffffff909416845260069290920b60208401526001600160a01b031690820152935050505092915050565b604080516060810182526000808252602082018190529181019190915284516000906116e690866121a4565b63ffffffff16905060405180606001604052808663ffffffff1681526020018260030b8660020b61171791906121ff565b88602001516117269190612294565b60060b81526020016000856001600160801b031611611746576001611748565b845b61176b906001600160801b031666ffffffffffffff60801b608086901b16612368565b886040015161177a91906122e3565b6001600160a01b031690529695505050505050565b6040805160608101825260008082526020820181905291810191909152604080516060810182526000808252602082018190529181019190915284516117d590846118f4565b1561182f57845163ffffffff808516911603611811575050604080516060810182526000808252602082018190529181019190915283906118eb565b84611826868587608001518860a001516116ba565b915091506118eb565b6020840151845161185a91889161184790600161238e565b61185191906123ab565b61ffff166115f2565b805190955063ffffffff1660000361187a576118778660006115f2565b94505b845161188690846118f4565b6118d25760405162461bcd60e51b815260206004820152601a60248201527f53616d706c654c656e6774684e6f74417661696c61626c6528290000000000006044820152606401610a43565b6118e68684866000015187602001516119a9565b915091505b94509492505050565b60004263ffffffff8082169085161180159061191c57508063ffffffff168363ffffffff1611155b15611939578263ffffffff168463ffffffff1611159150506109f2565b63ffffffff80851690848116908316821161196d5761196363ffffffff87166401000000006123cc565b64ffffffffff1691505b8263ffffffff168563ffffffff161161199f5761199563ffffffff86166401000000006123cc565b64ffffffffff1690505b1015949350505050565b6040805160608082018352600080835260208084018290528385018290528451928301855281835282018190529281018390529091836119ea86600161238e565b6119f491906123ab565b61ffff169050600060018561ffff1683611a0e91906123ec565b611a189190611f3f565b905060005b6002611a2983856123ec565b611a339190611fb6565b9050611a4c89611a4761ffff891684612404565b6115f2565b805190955063ffffffff16600003611a7057611a698160016123ec565b9250611a1d565b611a8e8961ffff8816611a848460016123ec565b611a479190612404565b93506000611aa086600001518a6118f4565b90506000611ab28a87600001516118f4565b9050818015611abe5750805b15611aca575050611af6565b81611ae157611ada600184611f3f565b9350611aef565b611aec8360016123ec565b94505b5050611a1d565b50505094509492505050565b6001600160a01b0381168114611b1757600080fd5b50565b8060020b8114611b1757600080fd5b60008060008060808587031215611b3f57600080fd5b8435611b4a81611b02565b93506020850135611b5a81611b02565b92506040850135611b6a81611b1a565b91506060850135611b7a81611b1a565b939692955090935050565b600080600060608486031215611b9a57600080fd5b8335611ba581611b02565b92506020840135611bb581611b1a565b91506040840135611bc581611b1a565b809150509250925092565b60008060408385031215611be357600080fd5b8235611bee81611b1a565b91506020830135611bfe81611b1a565b809150509250929050565b8051611c1481611b1a565b919050565b600060208284031215611c2b57600080fd5b8151610ca581611b1a565b805161ffff81168114611c1457600080fd5b8051600681900b8114611c1457600080fd5b8051611c1481611b02565b80516001600160801b0381168114611c1457600080fd5b80516001600160c81b0381168114611c1457600080fd5b600060608284031215611ca557600080fd5b6040516060810181811067ffffffffffffffff82111715611cd657634e487b7160e01b600052604160045260246000fd5b604052905080611ce583611c36565b8152611cf360208401611c36565b6020820152611d0460408401611c36565b60408201525092915050565b600060408284031215611d2257600080fd5b6040516040810181811067ffffffffffffffff82111715611d5357634e487b7160e01b600052604160045260246000fd5b604052905080611d6283611c65565b8152611d7060208401611c65565b60208201525092915050565b6000806000806000806000806000806000806101e08d8f031215611d9f57600080fd5b8c5160ff81168114611db057600080fd5b9b50611dbe60208e01611c36565b9a50611dcc60408e01611c09565b9950611dda60608e01611c48565b9850611de860808e01611c5a565b9750611df660a08e01611c5a565b9650611e0460c08e01611c65565b9550611e1260e08e01611c65565b9450611e216101008e01611c7c565b9350611e306101208e01611c7c565b9250611e408e6101408f01611c93565b9150611e508e6101a08f01611d10565b90509295989b509295989b509295989b565b600080600080600060a08688031215611e7a57600080fd5b855180600f0b8114611e8b57600080fd5b9450611e9960208701611c7c565b9350611ea760408701611c7c565b9250611eb560608701611c48565b91506080860151611ec581611b02565b809150509295509295909350565b600080600080600060a08688031215611eeb57600080fd5b611ef486611c65565b9450611f0260208701611c65565b9350611f1060408701611c65565b6060870151608090970151959894975095949392505050565b634e487b7160e01b600052601160045260246000fd5b600082821015611f5157611f51611f29565b500390565b60006001600160801b03808316818516808303821115611f7857611f78611f29565b01949350505050565b6000816000190483118215151615611f9b57611f9b611f29565b500290565b634e487b7160e01b600052601260045260246000fd5b600082611fc557611fc5611fa0565b500490565b60008160060b8360060b6000811281667fffffffffffff1901831281151615611ff557611ff5611f29565b81667fffffffffffff01831381161561201057612010611f29565b5090039392505050565b60006001600160a01b038381169083168181101561203a5761203a611f29565b039392505050565b60008260020b8061205557612055611fa0565b808360020b0791505092915050565b60008160020b627fffff19810361207d5761207d611f29565b60000392915050565b60006020828403121561209857600080fd5b5051919050565b60008083128015600160ff1b8501841216156120bd576120bd611f29565b6001600160ff1b03840183138116156120d8576120d8611f29565b50500390565b60006001600160ff1b038184138284138082168684048611161561210457612104611f29565b600160ff1b600087128281168783058912161561212357612123611f29565b6000871292508782058712848416161561213f5761213f611f29565b8785058712818416161561215557612155611f29565b505050929093029392505050565b600080821280156001600160ff1b038490038513161561218557612185611f29565b600160ff1b839003841281161561219e5761219e611f29565b50500190565b600063ffffffff8381169083168181101561203a5761203a611f29565b60008160060b8360060b806121d8576121d8611fa0565b667fffffffffffff198214600019821416156121f6576121f6611f29565b90059392505050565b60008160060b8360060b667fffffffffffff60008213600084138383048511828216161561222f5761222f611f29565b667fffffffffffff19600085128281168783058712161561225257612252611f29565b6000871292508582058712848416161561226e5761226e611f29565b8585058712818416161561228457612284611f29565b5050509290910295945050505050565b60008160060b8360060b6000821282667fffffffffffff038213811516156122be576122be611f29565b82667fffffffffffff190382128116156122da576122da611f29565b50019392505050565b60006001600160a01b03828116848216808303821115611f7857611f78611f29565b6000600160ff1b820161231a5761231a611f29565b5060000390565b60008060006060848603121561233657600080fd5b835163ffffffff8116811461234a57600080fd5b925061235860208501611c48565b91506040840151611bc581611b02565b60006001600160a01b038381168061238257612382611fa0565b92169190910492915050565b600061ffff808316818516808303821115611f7857611f78611f29565b600061ffff808416806123c0576123c0611fa0565b92169190910692915050565b600064ffffffffff808316818516808303821115611f7857611f78611f29565b600082198211156123ff576123ff611f29565b500190565b60008261241357612413611fa0565b50069056fea2646970667358221220cacc7b1d52eb280696533af45b7d9fbd7afee747dd6ead894d519c402fdb05be64736f6c634300080d0033";

export class Positions__factory extends ContractFactory {
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
  ): Promise<Positions> {
    return super.deploy(overrides || {}) as Promise<Positions>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Positions {
    return super.attach(address) as Positions;
  }
  connect(signer: Signer): Positions__factory {
    return super.connect(signer) as Positions__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PositionsInterface {
    return new utils.Interface(_abi) as PositionsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Positions {
    return new Contract(address, _abi, signerOrProvider) as Positions;
  }
}