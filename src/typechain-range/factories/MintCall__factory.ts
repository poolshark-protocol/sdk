/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { MintCall, MintCallInterface } from '../MintCall';

const _abi = [
  {
    inputs: [],
    name: 'MaxUintExceeded',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'int24',
        name: 'lower',
        type: 'int24',
      },
      {
        indexed: false,
        internalType: 'int24',
        name: 'upper',
        type: 'int24',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'tokenId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'tokenMinted',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'liquidityMinted',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'amount0',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'amount1',
        type: 'uint128',
      },
    ],
    name: 'Mint',
    type: 'event',
  },
];

const _bytecode =
  '0x613d3261003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063e38db0791461003a575b600080fd5b81801561004657600080fd5b5061005a61005536600461342b565b610070565b60405161006791906134e1565b60405180910390f35b610078612ed5565b6100be838660200151876000015160405180606001604052808b6020015160020b81526020018b6040015160020b815260200160006001600160801b0316815250610230565b5050506020860152845160408601516100d8918891610692565b6060808801919091528101519096506001600160801b0316156101165761011485604001516000015187606001516001600160801b03166107fb565b505b60808601516001600160801b03161561014a5761014885604001516020015187608001516001600160801b03166107fb565b505b60008560200151602001516001600160801b0316118061017b575060008560200151604001516001600160801b0316115b156101c0576101b88560200151848487896000015160405180604001604052808d6020015160020b81526020018d6040015160020b8152506109eb565b865260208601525b61020f856020015184848760405180608001604052808b6000015181526020018c81526020018b606001516001600160801b031681526020018b606001516001600160801b0316815250610c36565b6001600160801b031660608801526020870152855250835b95945050505050565b610238612f29565b6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081018290528190819061028f30876000015188602001516111ee565b815260408601516001600160801b0316156103695760006102b887600001518860200151611272565b90506f4b3b4ca85a86c47a098a2240000000006102df30338a600001518b602001516112b5565b88604001516001600160801b03166102f791906136d0565b6103019190613705565b602083018190526040516396f45e8b60e01b815233600482015260248101839052604481019190915230906396f45e8b90606401600060405180830381600087803b15801561034f57600080fd5b505af1158015610363573d6000803e3d6000fd5b50505050505b60008061055b8b60008a6000015160020b60020b81526020019081526020016000206040518060a00160405290816000820160009054906101000a9004600f0b600f0b600f0b81526020016001820160009054906101000a90046001600160c81b03166001600160c81b03166001600160c81b031681526020016002820160009054906101000a90046001600160c81b03166001600160c81b03166001600160c81b031681526020016002820160199054906101000a900460060b60060b60060b81526020016003820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b0316815250508c60008b6020015160020b60020b81526020019081526020016000206040518060a00160405290816000820160009054906101000a9004600f0b600f0b600f0b81526020016001820160009054906101000a90046001600160c81b03166001600160c81b03166001600160c81b031681526020016002820160009054906101000a90046001600160c81b03166001600160c81b03166001600160c81b031681526020016002820160199054906101000a900460060b60060b60060b81526020016003820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b0316815250508b8b600001518c60200151611348565b9150915060006105898b60600151846105749190613719565b8c516001600160801b0316600160801b61148e565b905060006105b58c60800151846105a09190613719565b8d516001600160801b0316600160801b61148e565b60608d0185905260808d0184905260208d01805191925083916105d9908390613730565b6001600160801b031690525060408c0180518291906105f9908390613730565b6001600160801b0390811690915260408c0151600092508291161561067557866000015187602001518f602001516001600160801b031661063a91906136d0565b6106449190613705565b9150866000015187602001518f604001516001600160801b031661066891906136d0565b6106729190613705565b90505b602096909601519c9e909d50949b9a509398505050505050505050565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915260006106d6856020015186604001518560600151611540565b60006106e586602001516116da565b6001600160a01b0316905060006106ff87604001516116da565b6001600160a01b0316905061073e82828860a001516001600160a01b03168a608001516001600160801b03168b606001516001600160801b0316611a33565b9250826000036107955760405162461bcd60e51b815260206004820152601760248201527f4e6f4c69717569646974794265696e674164646564282900000000000000000060448201526064015b60405180910390fd5b6107b082828860a001516001600160a01b0316866001611ac5565b6001600160801b0390811660808a015216606088015260016001607f1b038311156107ed5760405162461bcd60e51b815260040161078c9061375b565b86935050505b935093915050565b60006001600160a01b038316610832578134101561082b5760405162461bcd60e51b815260040161078c90613788565b50806109e5565b6040516370a0823160e01b815230600482015283906000906001600160a01b038316906370a0823190602401602060405180830381865afa15801561087b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061089f91906137d0565b6040516323b872dd60e01b8152336004820152306024820152604481018690529091506001600160a01b038316906323b872dd906064016020604051808303816000875af11580156108f5573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061091991906137e9565b5060003d8015610934576020811461093d5760009150610949565b60019150610949565b60206000803e60005191505b50806109675760405162461bcd60e51b815260040161078c90613788565b6040516370a0823160e01b81523060048201526000906001600160a01b038816906370a0823190602401602060405180830381865afa1580156109ae573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109d291906137d0565b90506109de8382613719565b9450505050505b92915050565b6109f3612f29565b6109fb612f57565b60006040518060c00160405280610a1586600001516116da565b6001600160a01b03168152602001610a3086602001516116da565b6001600160a01b0316815260200160008152602001600081526020016000815260200160008152509050610aa881600001516001600160a01b031682602001516001600160a01b03168760a001516001600160a01b03168c604001516001600160801b03168d602001516001600160801b0316611a33565b6060820181905215610bb257610acf88888888886000015189602001518760600151611bc6565b9450600080610b0d83600001516001600160a01b031684602001516001600160a01b03168960a001516001600160a01b031686606001516001611ac5565b60208d01516001600160801b039283169450908216925016821115610b36578a60200151610b38565b815b8b602001818151610b49919061380b565b6001600160801b0390811690915260408d0151168211159050610b70578a60400151610b72565b805b8b604001818151610b83919061380b565b6001600160801b031690525060608301518b518c90610ba3908390613730565b6001600160801b031690525050505b836020015160020b846000015160020b7f7b1dbe51eb901294348796c8817474603d849a12eca0fd2af2434d38b1b93da483606001518c602001518d60400151604051610c1f939291906001600160801b0393841681529183166020830152909116604082015260600190565b60405180910390a350969792965091945050505050565b610c3e612f57565b610c46612f29565b60008360200151606001516001600160801b03166000148015610c7857506020840151608001516001600160801b0316155b15610c8b575050815190508560006111e3565b60006040518060c00160405280610ca98760200151602001516116da565b6001600160a01b03168152602001610cc88760200151604001516116da565b6001600160a01b031681526020016000815260200160008152602001610cff308860200151602001518960200151604001516111ee565b8152602001610d1e876020015160200151886020015160400151611272565b8152509050610d4a88888888600001518960200151602001518a60200151604001518b60400151611bc6565b8560000181905250610f5588600087602001516020015160020b60020b81526020019081526020016000206040518060a00160405290816000820160009054906101000a9004600f0b600f0b600f0b81526020016001820160009054906101000a90046001600160c81b03166001600160c81b03166001600160c81b031681526020016002820160009054906101000a90046001600160c81b03166001600160c81b03166001600160c81b031681526020016002820160199054906101000a900460060b60060b60060b81526020016003820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152505089600088602001516040015160020b60020b81526020019081526020016000206040518060a00160405290816000820160009054906101000a9004600f0b600f0b600f0b81526020016001820160009054906101000a90046001600160c81b03166001600160c81b03166001600160c81b031681526020016002820160009054906101000a90046001600160c81b03166001600160c81b03166001600160c81b031681526020016002820160199054906101000a900460060b60060b60060b81526020016003820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b0316815250508760000151886020015160200151896020015160400151611348565b60808b015260608a0152604085015189518a90610f73908390613730565b6001600160801b0390811690915260208b0151161515905080610fa35750600089604001516001600160801b0316115b80610fca5750608081015160408601518a51610fbf919061380b565b6001600160801b0316115b156110a4576080810151156110a45761104481600001516001600160a01b031682602001516001600160a01b031660008c602001516001600160801b03161161101757836020015161101a565b83515b6001600160a01b03168c604001516001600160801b03168d602001516001600160801b0316611a33565b60408083018290528601518a5161105b919061380b565b6001600160801b031661106e9190613833565b816080015186604001516001600160801b031661108b91906136d0565b6110959190613705565b6001600160801b031660408601525b60208501515160a08201516040808801519051632c75417360e11b81526001600160a01b03909316600484015260248301919091526001600160801b0316604482015230906358ea82e690606401600060405180830381600087803b15801561110c57600080fd5b505af1158015611120573d6000803e3d6000fd5b50505060a0820151602080880151805191810151604080830151818c01516060808e01519086015160809096015193519798506001600160a01b03909616967f7525f0906316c7aeae624232f89575130024a63067fcf42cb74e30d9867c4d3b966111cb969394929390929091600296870b81529490950b60208501526001600160801b0392831660408501529082166060840152811660808301529190911660a082015260c00190565b60405180910390a35050825160408401519092508791505b955095509592505050565b6000836001600160a01b031663bd85b0396112098585611272565b6040518263ffffffff1660e01b815260040161122791815260200190565b602060405180830381865afa158015611244573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061126891906137d0565b90505b9392505050565b60008282604051602001611296929190600292830b8152910b602082015260400190565b60408051601f1981840301815291905280516020909101209392505050565b6000846001600160a01b031662fdd58e856112d08686611272565b6040516001600160e01b031960e085901b1681526001600160a01b0390921660048301526024820152604401602060405180830381865afa158015611319573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061133d91906137d0565b90505b949350505050565b60008060008561010001516001600160c81b0316905060008661012001516001600160c81b031690506000808760020b896040015160020b126113aa578a602001516001600160c81b031691508a604001516001600160c81b031690506113e0565b60208b01516113c2906001600160c81b031685613719565b91508a604001516001600160c81b0316836113dd9190613719565b90505b6000808860020b8b6040015160020b121561141a578b602001516001600160c81b031691508b604001516001600160c81b03169050611450565b60208c0151611432906001600160c81b031687613719565b91508b604001516001600160c81b03168561144d9190613719565b90505b8161145b8588613719565b6114659190613719565b9750806114728487613719565b61147c9190613719565b96505050505050509550959350505050565b60008080600019858709858702925082811083820303915050806000036114c757600084116114bc57600080fd5b50829004905061126b565b8084116114d357600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b61154a818461384b565b60020b1561158f5760405162461bcd60e51b8152602060048201526012602482015271496e76616c69644c6f7765725469636b282960701b604482015260640161078c565b620d89e719600284900b136115db5760405162461bcd60e51b8152602060048201526012602482015271496e76616c69644c6f7765725469636b282960701b604482015260640161078c565b6115e5818361384b565b60020b1561162a5760405162461bcd60e51b8152602060048201526012602482015271496e76616c696455707065725469636b282960701b604482015260640161078c565b611637620d89e71961386d565b60020b8260020b126116805760405162461bcd60e51b8152602060048201526012602482015271496e76616c696455707065725469636b282960701b604482015260640161078c565b8160020b8360020b126116d55760405162461bcd60e51b815260206004820152601760248201527f496e76616c6964506f736974696f6e426f756e64732829000000000000000000604482015260640161078c565b505050565b60008060008360020b126116f1578260020b6116fe565b8260020b6116fe9061388f565b905061170d620d89e71961386d565b62ffffff168111156117555760405162461bcd60e51b81526020600482015260116024820152705469636b4f75744f66426f756e6473282960781b604482015260640161078c565b60008160011660000361176c57600160801b61177e565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff16905060028216156117b2576ffff97272373d413259a46990580e213a0260801c5b60048216156117d1576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b60088216156117f0576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b601082161561180f576fffcb9843d60f6159c9db58835c9266440260801c5b602082161561182e576fff973b41fa98c081472e6896dfb254c00260801c5b604082161561184d576fff2ea16466c96a3843ec78b326b528610260801c5b608082161561186c576ffe5dee046a99a2a811c461f1969c30530260801c5b61010082161561188c576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b6102008216156118ac576ff987a7253ac413176f2b074cf7815e540260801c5b6104008216156118cc576ff3392b0822b70005940c7a398e4b70f30260801c5b6108008216156118ec576fe7159475a2c29b7443b29c7fa6e889d90260801c5b61100082161561190c576fd097f3bdfd2022b8845ad8f792aa58250260801c5b61200082161561192c576fa9f746462d870fdf8a65dc1f90e061e50260801c5b61400082161561194c576f70d869a156d2a1b890bb3df62baf32f70260801c5b61800082161561196c576f31be135f97d08fd981231505542fcfa60260801c5b6201000082161561198d576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b620200008216156119ad576e5d6af8dedb81196699c329225ee6040260801c5b620400008216156119cc576d2216e584f5fa1ea926041bedfe980260801c5b620800008216156119e9576b048a170391f7dc42444e8fa20260801c5b60008460020b1315611a0a578060001981611a0657611a066136ef565b0490505b640100000000810615611a1e576001611a21565b60005b60ff16602082901c0192505050919050565b6000838511611a5457611a4d83600160601b88880361148e565b9050610227565b858411611a7657611a4d82611a6e8888600160601b61148e565b88880361148e565b6000611a9383611a8b8888600160601b61148e565b87890361148e565b90506000611aa885600160601b8a890361148e565b9050808210611ab75780611ab9565b815b98975050505050505050565b600080600080888711611ae557611ade868a8a8861227b565b9150611b1c565b868811611aff57611af8868a8a886122d4565b9050611b1c565b611b0b86888a8861227b565b9150611b19868a89886122d4565b90505b60016001607f1b03821115611b6a5760405162461bcd60e51b8152602060048201526014602482015273416d6f756e74734f75744f66426f756e6473282960601b604482015260640161078c565b60016001607f1b03811115611bb85760405162461bcd60e51b8152602060048201526014602482015273416d6f756e74734f75744f66426f756e6473282960601b604482015260640161078c565b909890975095505050505050565b611bce612f57565b611c3a8484306001600160a01b031663d0c93a7c6040518163ffffffff1660e01b8152600401602060405180830381865afa158015611c11573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c3591906138ab565b611540565b816001600160801b0316600003611c52575083612270565b60016001607f1b036001600160801b0383161115611c825760405162461bcd60e51b815260040161078c9061375b565b816001600160801b03168560e001516001600160801b03611ca3919061380b565b6001600160801b03161015611cca5760405162461bcd60e51b815260040161078c9061375b565b6040850151611cd987866122fe565b15611d3057600285900b600090815260208a9052604081208054859290611d04908490600f0b6138c8565b92506101000a8154816001600160801b030219169083600f0b6001600160801b03160217905550611f79565b8060020b8560020b13611f4c57600080611ded306040518060c001604052808b61014001516000015161ffff1681526020018b61014001516020015161ffff1681526020014263ffffffff168152602001600267ffffffffffffffff811115611d9b57611d9b612fdd565b604051908082528060200260200182016040528015611dc4578160200160208202803683370190505b5081526040808d015160020b602083015260c08d01516001600160801b03169101526000612370565b915091506040518060a0016040528086600f0b81526020018961010001516001600160c81b031681526020018961012001516001600160c81b031681526020018360060b8152602001826001600160a01b03168152508b60008960020b60020b815260200190815260200160002060008201518160000160006101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555060208201518160010160006101000a8154816001600160c81b0302191690836001600160c81b0316021790555060408201518160020160006101000a8154816001600160c81b0302191690836001600160c81b0316021790555060608201518160020160196101000a81548166ffffffffffffff021916908360060b66ffffffffffffff16021790555060808201518160030160006101000a8154816001600160a01b0302191690836001600160a01b031602179055509050505050611f79565b600285900b600090815260208a90526040902080546001600160801b0319166001600160801b0385161790555b611f8387856122fe565b15611fda57600284900b600090815260208a9052604081208054859290611fae908490600f0b613917565b92506101000a8154816001600160801b030219169083600f0b6001600160801b031602179055506121e8565b8060020b8460020b136121ad57600080612045306040518060c001604052808b61014001516000015161ffff1681526020018b61014001516020015161ffff1681526020014263ffffffff168152602001600267ffffffffffffffff811115611d9b57611d9b612fdd565b915091506040518060a001604052808661205e90613967565b600f0b81526020018961010001516001600160c81b031681526020018961012001516001600160c81b031681526020018360060b8152602001826001600160a01b03168152508b60008860020b60020b815260200190815260200160002060008201518160000160006101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555060208201518160010160006101000a8154816001600160c81b0302191690836001600160c81b0316021790555060408201518160020160006101000a8154816001600160c81b0302191690836001600160c81b0316021790555060608201518160020160196101000a81548166ffffffffffffff021916908360060b66ffffffffffffff16021790555060808201518160030160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555090505050506121e8565b6121b683613967565b600285900b600090815260208b90526040902080546001600160801b0319166001600160801b03929092169190911790555b8460020b8160020b1215801561220357508360020b8160020b125b1561224d5761221788878860400151612519565b61014088015161ffff91821660208201529116905260c086018051849190612240908390613730565b6001600160801b03169052505b828660e00181815161225f9190613730565b6001600160801b0316905250859150505b979650505050505050565b600081156122b1576122aa61229e606087901b6122988787613719565b86612774565b85808204910615150190565b9050611340565b836122ca606087901b6122c48387613719565b8661148e565b61133d9190613705565b600081156122ed576122aa85858503600160601b612774565b61133d85858503600160601b61148e565b600080306001600160a01b031663d0c93a7c6040518163ffffffff1660e01b8152600401602060405180830381865afa15801561233f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061236391906138ab565b9050611340848483612781565b600080600061238786866000015161ffff1661280d565b90508363ffffffff166000036123d9574263ffffffff16816000015163ffffffff16146123c5576123c2814287608001518860a001516128d5565b90505b8060200151816040015192509250506107f3565b60006123e58542613984565b90506000806123f689858a866129aa565b91509150816000015163ffffffff168363ffffffff1603612428578160200151826040015195509550505050506107f3565b806000015163ffffffff168363ffffffff1603612456578060200151816040015195509550505050506107f3565b8151815160009161246691613984565b83519091506000906124789086613984565b60030b9050808260030b8560200151856020015161249691906139a1565b6124a091906139e7565b6124aa9190613a25565b84602001516124b99190613aba565b8263ffffffff168266ffffffffffffff16866040015186604001516124de9190613b00565b6001600160a01b03166124f191906136d0565b6124fb9190613705565b856040015161250a9190613b20565b975097505050505050506107f3565b6000806000858561014001516000015161ffff1661ffff811061253e5761253e613b42565b60408051606081018252919092015463ffffffff808216808452640100000000830460060b6020850152600160581b9092046001600160a01b0316938301939093529092504290911690612593906002613b58565b63ffffffff1611156125b55750505061014082015180516020909101516107f3565b8461014001516020015161ffff168561014001516040015161ffff1611801561260357506001856101400151602001516125ef9190613b77565b61ffff168561014001516000015161ffff16145b1561261957846101400151604001519150612626565b8461014001516020015191505b61014085015151829061263a906001613b92565b6126449190613baf565b92506126568142868860c001516128d5565b868461ffff1661ffff811061266d5761266d613b42565b82519101805460208401516040909401516001600160a01b0316600160581b027fff0000000000000000000000000000000000000000ffffffffffffffffffffff66ffffffffffffff909516640100000000026affffffffffffffffffffff1990921663ffffffff9094169390931717929092161790557f1e61e8fd71aa5f22dbbcc6be031edf6544e81c76bc567a3d8a9cc36b825833fb8661ffff80861690811061271b5761271b613b42565b0154640100000000900460060b8761ffff80871690811061273e5761273e613b42565b01546040805160069390930b8352600160581b9091046001600160a01b031660208301520160405180910390a150935093915050565b6000611268848484612b0f565b6000806000806127918686612b60565b600082815260028b0160205260409020549295509093509150600160ff85161b81179081036127c757600194505050505061126b565b60008381526002890160209081526040808320939093558382526001808b01909152918120805460ff90951683901b9094179093558754911b1790955550929392505050565b60408051606081018252600080825260208201819052918101919091526000806000856001600160a01b03166307e72129866040518263ffffffff1660e01b815260040161285d91815260200190565b606060405180830381865afa15801561287a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061289e9190613bd0565b6040805160608101825263ffffffff909416845260069290920b60208401526001600160a01b031690820152935050505092915050565b604080516060810182526000808252602082018190529181019190915284516000906129019086613984565b63ffffffff16905060405180606001604052808663ffffffff1681526020018260030b8660020b6129329190613a25565b88602001516129419190613aba565b60060b81526020016000856001600160801b031611612961576001612963565b845b612986906001600160801b031666ffffffffffffff60801b608086901b16613c26565b88604001516129959190613b20565b6001600160a01b031690529695505050505050565b6040805160608101825260008082526020820181905291810191909152604080516060810182526000808252602082018190529181019190915284516129f09084612cb0565b15612a4a57845163ffffffff808516911603612a2c57505060408051606081018252600080825260208201819052918101919091528390612b06565b84612a41868587608001518860a001516128d5565b91509150612b06565b60208401518451612a75918891612a62906001613b92565b612a6c9190613baf565b61ffff1661280d565b805190955063ffffffff16600003612a9557612a9286600061280d565b94505b8451612aa19084612cb0565b612aed5760405162461bcd60e51b815260206004820152601a60248201527f53616d706c654c656e6774684e6f74417661696c61626c652829000000000000604482015260640161078c565b612b01868486600001518760200151612d65565b915091505b94509492505050565b6000612b1c84848461148e565b90508180612b2c57612b2c6136ef565b8385091561126b576000198110612b56576040516304fd95eb60e51b815260040160405180910390fd5b6001019392505050565b60008080620d89e8600286900b1315612bb15760405162461bcd60e51b81526020600482015260136024820152725469636b496e6465784f766572666c6f77282960681b604482015260640161078c565b620d89e719600286900b1215612c005760405162461bcd60e51b81526020600482015260146024820152735469636b496e646578556e646572666c6f77282960601b604482015260640161078c565b8360020b8560020b81612c1557612c156136ef565b0760020b15612c2b57612c288585612ebe565b94505b8360020b612c3d620d89e71986612ebe565b860360020b81612c4f57612c4f6136ef565b0560020b92505050600881901c601082901c60ff811115612ca95760405162461bcd60e51b8152602060048201526014602482015273426c6f636b496e6465784f766572666c6f77282960601b604482015260640161078c565b9250925092565b60004263ffffffff80821690851611801590612cd857508063ffffffff168363ffffffff1611155b15612cf5578263ffffffff168463ffffffff1611159150506109e5565b63ffffffff808516908481169083168211612d2957612d1f63ffffffff8716640100000000613c4c565b64ffffffffff1691505b8263ffffffff168563ffffffff1611612d5b57612d5163ffffffff8616640100000000613c4c565b64ffffffffff1690505b1015949350505050565b604080516060808201835260008083526020808401829052838501829052845192830185528183528201819052928101839052909183612da6866001613b92565b612db09190613baf565b61ffff169050600060018561ffff1683612dca9190613833565b612dd49190613719565b905060005b6002612de58385613833565b612def9190613705565b9050612e0889612e0361ffff891684613c6c565b61280d565b805190955063ffffffff16600003612e2c57612e25816001613833565b9250612dd9565b612e4a8961ffff8816612e40846001613833565b612e039190613c6c565b93506000612e5c86600001518a612cb0565b90506000612e6e8a8760000151612cb0565b9050818015612e7a5750805b15612e86575050612eb2565b81612e9d57612e96600184613719565b9350612eab565b612ea8836001613833565b94505b5050612dd9565b50505094509492505050565b600081612ecb8185613c80565b61126b9190613cb1565b6040518060800160405280612ee8612f57565b8152602001612ef5612f29565b8152604080516080810182526000808252602082810182905292820181905260608201529101908152602001600081525090565b6040805160a08101825260008082526020820181905291810182905260608101829052608081019190915290565b60408051610180810182526000808252602080830182905282840182905260608084018390526080840183905260a0840183905260c0840183905260e08401839052610100840183905261012084018390528451908101855282815280820183905280850183905261014084015283518085019094528184528301529061016082015290565b634e487b7160e01b600052604160045260246000fd5b60405160a0810167ffffffffffffffff8111828210171561302457634e487b7160e01b600052604160045260246000fd5b60405290565b6040516080810167ffffffffffffffff8111828210171561302457634e487b7160e01b600052604160045260246000fd5b604051610180810167ffffffffffffffff8111828210171561302457634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146130a257600080fd5b50565b8060020b81146130a257600080fd5b80356130bf816130a5565b919050565b80356001600160801b03811681146130bf57600080fd5b803560ff811681146130bf57600080fd5b803561ffff811681146130bf57600080fd5b8060060b81146130a257600080fd5b80356130bf816130fe565b80356130bf8161308d565b80356001600160c81b03811681146130bf57600080fd5b60006060828403121561314c57600080fd5b6040516060810181811067ffffffffffffffff8211171561317d57634e487b7160e01b600052604160045260246000fd5b60405290508061318c836130ec565b815261319a602084016130ec565b60208201526131ab604084016130ec565b60408201525092915050565b6000604082840312156131c957600080fd5b6040516040810181811067ffffffffffffffff821117156131fa57634e487b7160e01b600052604160045260246000fd5b604052905080613209836130c4565b8152613217602084016130c4565b60208201525092915050565b600060a0828403121561323557600080fd5b61323d612ff3565b9050613248826130c4565b8152613256602083016130c4565b6020820152613267604083016130c4565b6040820152606082013560608201526080820135608082015292915050565b60006080828403121561329857600080fd5b6132a061302a565b905081356132ad8161308d565b815260208201356132bd8161308d565b60208201526132ce604083016130ec565b604082015260608201356132e1816130a5565b606082015292915050565b600081830361032081121561330057600080fd5b61330861302a565b91506101e08082121561331a57600080fd5b61332261305b565b915061332d846130db565b825261333b602085016130ec565b602083015261334c604085016130b4565b604083015261335d6060850161310d565b606083015261336e60808501613118565b608083015261337f60a08501613118565b60a083015261339060c085016130c4565b60c08301526133a160e085016130c4565b60e08301526101006133b4818601613123565b908301526101206133c6858201613123565b908301526101406133d98686830161313a565b908301526133eb856101a086016131b7565b61016083015281835261340085828601613223565b60208401525050613415836102808401613286565b6040820152610300820135606082015292915050565b600080600080600085870361042081121561344557600080fd5b60a081121561345357600080fd5b5061345c612ff3565b86356134678161308d565b81526020870135613477816130a5565b6020820152604087013561348a816130a5565b604082015261349b606088016130c4565b60608201526134ac608088016130c4565b608082015294506134c08760a088016132ec565b94979496505050506103c0830135926103e081013592610400909101359150565b8151805160ff1682526103208201906020810151613505602085018261ffff169052565b50604081015161351a604085018260020b9052565b50606081015161352f606085018260060b9052565b50608081015161354a60808501826001600160a01b03169052565b5060a081015161356560a08501826001600160a01b03169052565b5060c081015161358060c08501826001600160801b03169052565b5060e081015161359b60e08501826001600160801b03169052565b50610100818101516001600160c81b038116858301525050610120818101516001600160c81b03811685830152505061014081810151805161ffff90811686840152602082015181166101608701526040820151166101808601525050610160015180516001600160801b039081166101a08501526020820151166101c08401525060208381015180516001600160801b039081166101e08601529181015182166102008501526040810151909116610220840152606081015161024084015260808101516102608401525060408381015180516001600160a01b039081166102808601526020820151166102a08501529081015161ffff166102c0840152606081015160020b6102e084015250606083015161030083015292915050565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156136ea576136ea6136ba565b500290565b634e487b7160e01b600052601260045260246000fd5b600082613714576137146136ef565b500490565b60008282101561372b5761372b6136ba565b500390565b60006001600160801b03808316818516808303821115613752576137526136ba565b01949350505050565b6020808252601390820152724c69717569646974794f766572666c6f77282960681b604082015260600190565b60208082526028908201527f5472616e736665724661696c6564286d73672e73656e6465722c206164647265604082015267737328746869732960c01b606082015260800190565b6000602082840312156137e257600080fd5b5051919050565b6000602082840312156137fb57600080fd5b8151801515811461126b57600080fd5b60006001600160801b038381169083168181101561382b5761382b6136ba565b039392505050565b60008219821115613846576138466136ba565b500190565b60008260020b8061385e5761385e6136ef565b808360020b0791505092915050565b60008160020b627fffff198103613886576138866136ba565b60000392915050565b6000600160ff1b82016138a4576138a46136ba565b5060000390565b6000602082840312156138bd57600080fd5b815161126b816130a5565b600081600f0b83600f0b600082128260016001607f1b03038213811516156138f2576138f26136ba565b8260016001607f1b031903821281161561390e5761390e6136ba565b50019392505050565b600081600f0b83600f0b600081128160016001607f1b031901831281151615613942576139426136ba565b8160016001607f1b0301831381161561395d5761395d6136ba565b5090039392505050565b600081600f0b60016001607f1b03198103613886576138866136ba565b600063ffffffff8381169083168181101561382b5761382b6136ba565b60008160060b8360060b6000811281667fffffffffffff19018312811516156139cc576139cc6136ba565b81667fffffffffffff01831381161561395d5761395d6136ba565b60008160060b8360060b806139fe576139fe6136ef565b667fffffffffffff19821460001982141615613a1c57613a1c6136ba565b90059392505050565b60008160060b8360060b667fffffffffffff600082136000841383830485118282161615613a5557613a556136ba565b667fffffffffffff196000851282811687830587121615613a7857613a786136ba565b60008712925085820587128484161615613a9457613a946136ba565b85850587128184161615613aaa57613aaa6136ba565b5050509290910295945050505050565b60008160060b8360060b6000821282667fffffffffffff03821381151615613ae457613ae46136ba565b82667fffffffffffff1903821281161561390e5761390e6136ba565b60006001600160a01b038381169083168181101561382b5761382b6136ba565b60006001600160a01b03828116848216808303821115613752576137526136ba565b634e487b7160e01b600052603260045260246000fd5b600063ffffffff808316818516808303821115613752576137526136ba565b600061ffff8381169083168181101561382b5761382b6136ba565b600061ffff808316818516808303821115613752576137526136ba565b600061ffff80841680613bc457613bc46136ef565b92169190910692915050565b600080600060608486031215613be557600080fd5b835163ffffffff81168114613bf957600080fd5b6020850151909350613c0a816130fe565b6040850151909250613c1b8161308d565b809150509250925092565b60006001600160a01b0383811680613c4057613c406136ef565b92169190910492915050565b600064ffffffffff808316818516808303821115613752576137526136ba565b600082613c7b57613c7b6136ef565b500690565b60008160020b8360020b80613c9757613c976136ef565b627fffff19821460001982141615613a1c57613a1c6136ba565b60008160020b8360020b627fffff600082136000841383830485118282161615613cdd57613cdd6136ba565b627fffff196000851282811687830587121615613a7857613a786136ba56fea264697066735822122061ab72a22e16735132b6c9b9761ae43c89aa7ea13c1936034f037e6f8ab088c464736f6c634300080d0033';

export class MintCall__factory extends ContractFactory {
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
  ): Promise<MintCall> {
    return super.deploy(overrides || {}) as Promise<MintCall>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MintCall {
    return super.attach(address) as MintCall;
  }
  connect(signer: Signer): MintCall__factory {
    return super.connect(signer) as MintCall__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MintCallInterface {
    return new utils.Interface(_abi) as MintCallInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): MintCall {
    return new Contract(address, _abi, signerOrProvider) as MintCall;
  }
}
