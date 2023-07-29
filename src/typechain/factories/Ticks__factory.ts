/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Ticks, TicksInterface } from "../Ticks";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int24",
        name: "minTick",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "int24",
        name: "maxTick",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "int24",
        name: "latestTick",
        type: "int24",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "genesisTime",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "auctionStart",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint160",
        name: "pool0Price",
        type: "uint160",
      },
      {
        indexed: false,
        internalType: "uint160",
        name: "pool1Price",
        type: "uint160",
      },
    ],
    name: "Initialize",
    type: "event",
  },
];

const _bytecode =
  "0x61250161003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361061004b5760003560e01c806382a3895c1461005057806391dd9d5514610072578063c521a92214610092575b600080fd5b81801561005c57600080fd5b5061007061006b366004611cb8565b6100c8565b005b81801561007e57600080fd5b5061007061008d366004611d50565b610a2d565b81801561009e57600080fd5b506100b26100ad366004611dfc565b610d8a565b6040516100bf9190611e50565b60405180910390f35b60016001607f1b036001600160801b03831611156101235760405162461bcd60e51b81526020600482015260136024820152724c69717569646974794f766572666c6f77282960681b60448201526064015b60405180910390fd5b816001600160801b0316866040015160016001607f1b036101449190611f41565b6001600160801b031610156101915760405162461bcd60e51b81526020600482015260136024820152724c69717569646974794f766572666c6f77282960681b604482015260640161011a565b60008860008660020b60020b81526020019081526020016000206040518060c0016040529081600082016040518060800160405290816000820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016000820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160109054906101000a90046001600160801b03166001600160801b03166001600160801b03168152505081526020016002820160009054906101000a9004600f0b600f0b600f0b81526020016002820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016003820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016003820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016004820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681525050905060008960008660020b60020b81526020019081526020016000206040518060c0016040529081600082016040518060800160405290816000820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016000820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016001820160109054906101000a90046001600160801b03166001600160801b03166001600160801b03168152505081526020016002820160009054906101000a9004600f0b600f0b600f0b81526020016002820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016003820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016003820160109054906101000a90046001600160801b03166001600160801b03166001600160801b031681526020016004820160009054906101000a90046001600160801b03166001600160801b03166001600160801b031681525050905073__$4152b7ff06ffc80286808c1ade3be88148$__639c0f24a9878b8a6040518463ffffffff1660e01b815260040161056c93929190611f69565b602060405180830381865af4158015610589573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105ad91906120c6565b5082156105d15783826020018181516105c691906120ea565b600f0b9052506105ea565b83826020018181516105e3919061213a565b600f0b9052505b604051639c0f24a960e01b815273__$4152b7ff06ffc80286808c1ade3be88148$__90639c0f24a9906106259088908d908c90600401611f69565b602060405180830381865af4158015610642573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061066691906120c6565b50821561068a57838160200181815161067f919061213a565b600f0b9052506106a3565b838160200181815161069c91906120ea565b600f0b9052505b818a60008860020b60020b815260200190815260200160002060008201518160000160008201518160000160006101000a8154816001600160801b0302191690836001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160106101000a8154816001600160801b0302191690836001600160801b03160217905550505060208201518160020160006101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555060408201518160020160106101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160030160006101000a8154816001600160801b0302191690836001600160801b0316021790555060808201518160030160106101000a8154816001600160801b0302191690836001600160801b0316021790555060a08201518160040160006101000a8154816001600160801b0302191690836001600160801b03160217905550905050808a60008760020b60020b815260200190815260200160002060008201518160000160008201518160000160006101000a8154816001600160801b0302191690836001600160801b0316021790555060208201518160000160106101000a8154816001600160801b0302191690836001600160801b0316021790555060408201518160010160006101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160010160106101000a8154816001600160801b0302191690836001600160801b03160217905550505060208201518160020160006101000a8154816001600160801b030219169083600f0b6001600160801b0316021790555060408201518160020160106101000a8154816001600160801b0302191690836001600160801b0316021790555060608201518160030160006101000a8154816001600160801b0302191690836001600160801b0316021790555060808201518160030160106101000a8154816001600160801b0302191690836001600160801b0316021790555060a08201518160040160006101000a8154816001600160801b0302191690836001600160801b0316021790555090505050505050505050505050565b600286810b600090815260208b815260409182902082516101408101845281546001600160801b0380821660c08401908152600160801b92839004821660e085015260018501548083166101008601528390048216610120850152835295830154600f81900b94830194909452928390048516938101939093526003810154808516606085015291909104831660808301526004015490911660a08201528215610bae578315610af4578481602001818151610ae9919061213a565b600f0b905250610b0d565b8481602001818151610b0691906120ea565b600f0b9052505b600287810b600090815260208c815260409182902084518051818401516001600160801b03918216600160801b918316820217845582860151606093840151908316908316820217600185015593870151948701519481169481168402949094179482019490945592840151608085015190831690831690910217600383015560a0830151600490920180546001600160801b031916929091169190911790555b610bbc8861010001516111b1565b60020b8760020b14610bd557610bd58a8a8a848b6111d6565b50600285810b600090815260208b815260409182902082516101408101845281546001600160801b0380821660c08401908152600160801b92839004821660e085015260018501548083166101008601528390048216610120850152835295830154600f81900b94830194909452928390048516938101939093526003810154808516606085015291909104831660808301526004015490911660a08201528115610d57578315610c9d578481602001818151610c9291906120ea565b600f0b905250610cb6565b8481602001818151610caf919061213a565b600f0b9052505b600286810b600090815260208c815260409182902084518051818401516001600160801b03918216600160801b918316820217845582860151606093840151908316908316820217600185015593870151948701519481169481168402949094179482019490945592840151608085015190831690831690910217600383015560a0830151600490920180546001600160801b031916929091169190911790555b610d6588610100015161144c565b60020b8660020b14610d7e57610d7e8a8a8a848a6111d6565b50505050505050505050565b6040805161018081018252600061014082018181526101608301829052825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282610120015160ff166000036111a7578151604051635361ae3560e01b81526001600160a01b0390911690635361ae3590610e29908590600401612189565b60408051808303816000875af1158015610e47573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e6b91906122d5565b60020b60c085015260ff1661012084018190526001036111a75761010082015160c084015160019190910b90610ea2908290612325565b610eac919061236d565b60020b60c08401819052610ec0908361146b565b6001600160a01b0316602084015260c0820151610ee39063ffffffff16426123fa565b63ffffffff166080840152600160a084015261010082015173__$4152b7ff06ffc80286808c1ade3be88148$__90639c0f24a990610f20906111b1565b88856040518463ffffffff1660e01b8152600401610f4093929190611f69565b602060405180830381865af4158015610f5d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610f8191906120c6565b5073__$4152b7ff06ffc80286808c1ade3be88148$__639c0f24a9610faa84610100015161144c565b88856040518463ffffffff1660e01b8152600401610fca93929190611f69565b602060405180830381865af4158015610fe7573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061100b91906120c6565b5060c0830151604051639c0f24a960e01b815273__$4152b7ff06ffc80286808c1ade3be88148$__91639c0f24a99161104b91908a908790600401611f69565b602060405180830381865af4158015611068573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061108c91906120c6565b506110ae82610100015160010b8460c001516110a89190612411565b8361146b565b85546001600160a01b0319166001600160a01b039190911617855561010082015160c08401516110e8916110a89160019190910b9061244f565b84546001600160a01b0319166001600160a01b03919091161784556101008201517f403c1f3b991faacd223548b00532057f23c9350cddf3ce78ee167b2c532c36c290611134906111b1565b61114284610100015161144c565b60c086810151868201516080808a01518c548c546040805160029a8b0b8152988a0b60208a01529590980b8786015263ffffffff93841660608801529216908501526001600160a01b0390811660a08501529093169082015290519081900360e00190a15b5090949350505050565b6000600182900b6111c681620d89e719612325565b6111d0919061236d565b92915050565b6111df826117c6565b6112ed5760408201516001600160801b03161580611208575060608201516001600160801b0316155b1561121c5760006040830181905260608301525b60808201516001600160801b03161580611241575060a08201516001600160801b0316155b156112555760006080830181905260a08301525b61125e82611889565b156112ed5760006040808401829052606084018290526080840182905260a08401919091525163020c5aa160e01b815273__$4152b7ff06ffc80286808c1ade3be88148$__9063020c5aa1906112bc90849088908890600401611f69565b60006040518083038186803b1580156112d457600080fd5b505af41580156112e8573d6000803e3d6000fd5b505050505b6112f6826117c6565b156113a45760405163020c5aa160e01b815273__$4152b7ff06ffc80286808c1ade3be88148$__9063020c5aa19061133690849088908890600401611f69565b60006040518083038186803b15801561134e57600080fd5b505af4158015611362573d6000803e3d6000fd5b50505050600281810b600090815260208790526040812081815560018101829055918201819055600382015560040180546001600160801b0319169055611445565b600281810b6000908152602087815260409182902085518051818401516001600160801b03918216600160801b918316820217845582860151606093840151908316908316820217600185015593880151948801519481169481168402949094179482019490945592850151608086015190831690831690910217600383015560a0840151600490920180546001600160801b031916929091169190911790555b5050505050565b6000600182900b80611461620d89e71961248d565b6111c69190612325565b60008060008460020b12611482578360020b61148f565b8360020b61148f906124af565b905061149f83610100015161144c565b62ffffff168111156114e75760405162461bcd60e51b81526020600482015260116024820152705469636b4f75744f66426f756e6473282960781b604482015260640161011a565b6000816001166000036114fe57600160801b611510565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff1690506002821615611544576ffff97272373d413259a46990580e213a0260801c5b6004821615611563576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b6008821615611582576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b60108216156115a1576fffcb9843d60f6159c9db58835c9266440260801c5b60208216156115c0576fff973b41fa98c081472e6896dfb254c00260801c5b60408216156115df576fff2ea16466c96a3843ec78b326b528610260801c5b60808216156115fe576ffe5dee046a99a2a811c461f1969c30530260801c5b61010082161561161e576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b61020082161561163e576ff987a7253ac413176f2b074cf7815e540260801c5b61040082161561165e576ff3392b0822b70005940c7a398e4b70f30260801c5b61080082161561167e576fe7159475a2c29b7443b29c7fa6e889d90260801c5b61100082161561169e576fd097f3bdfd2022b8845ad8f792aa58250260801c5b6120008216156116be576fa9f746462d870fdf8a65dc1f90e061e50260801c5b6140008216156116de576f70d869a156d2a1b890bb3df62baf32f70260801c5b6180008216156116fe576f31be135f97d08fd981231505542fcfa60260801c5b6201000082161561171f576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b6202000082161561173f576e5d6af8dedb81196699c329225ee6040260801c5b6204000082161561175e576d2216e584f5fa1ea926041bedfe980260801c5b6208000082161561177b576b048a170391f7dc42444e8fa20260801c5b60008560020b131561179c5780600019816117985761179861230f565b0490505b6401000000008106156117b05760016117b3565b60005b60ff16602082901c019250505092915050565b60008082608001516001600160801b03161180156117f1575060008260a001516001600160801b0316115b156117fe57506000919050565b600082604001516001600160801b03161180156118285750600082606001516001600160801b0316115b1561183557506000919050565b8151604001516001600160801b03161580159061185f57508151606001516001600160801b031615155b1561186c57506000919050565b6020820151600f0b1561188157506000919050565b506001919050565b60008082608001516001600160801b03161180156118b4575060008260a001516001600160801b0316115b156118c157506000919050565b600082604001516001600160801b031611801561185f575060608201516001600160801b03161561186c57506000919050565b6040805190810167ffffffffffffffff8111828210171561192557634e487b7160e01b600052604160045260246000fd5b60405290565b604051610140810167ffffffffffffffff8111828210171561192557634e487b7160e01b600052604160045260246000fd5b6040516101e0810167ffffffffffffffff8111828210171561192557634e487b7160e01b600052604160045260246000fd5b80356001600160801b03811681146119a657600080fd5b919050565b6000604082840312156119bd57600080fd5b6119c56118f4565b90506119d08261198f565b81526119de6020830161198f565b602082015292915050565b6001600160a01b03811681146119fe57600080fd5b50565b80356119a6816119e9565b803563ffffffff811681146119a657600080fd5b8060020b81146119fe57600080fd5b80356119a681611a20565b803561ffff811681146119a657600080fd5b60ff811681146119fe57600080fd5b80356119a681611a4c565b60006101608284031215611a7957600080fd5b611a8161192b565b9050611a8d83836119ab565b8152611a9b60408301611a01565b6020820152611aac6060830161198f565b6040820152611abd60808301611a0c565b6060820152611ace60a08301611a0c565b6080820152611adf60c08301611a0c565b60a0820152611af060e08301611a2f565b60c0820152610100611b03818401611a3a565b60e0830152610120611b16818501611a3a565b82840152611b276101408501611a5b565b908301525092915050565b600060408284031215611b4457600080fd5b611b4c6118f4565b90508135611b59816119e9565b815260208201356119de816119e9565b8035600181900b81146119a657600080fd5b80151581146119fe57600080fd5b80356119a681611b7b565b60006102008284031215611ba757600080fd5b611baf61195d565b9050611bba82611a01565b8152611bc98360208401611b32565b6020820152611bda60608301611a01565b6040820152611beb60808301611a01565b6060820152611bfc60a08301611a01565b608082015260c082013560a0820152611c1760e08301611a0c565b60c0820152610100611c2a818401611b69565b60e0830152610120611c3d818501611b69565b828401526101409150611c51828501611a3a565b90830152610160611c63848201611a3a565b828401526101809150611c77828501611a3a565b908301526101a0611c89848201611a5b565b828401526101c09150611c9d828501611a5b565b90830152611cae6101e08401611b89565b9082015292915050565b600080600080600080600080610420898b031215611cd557600080fd5b8835975060208901359650611ced8a60408b01611a66565b9550611cfd8a6101a08b01611b94565b94506103a0890135611d0e81611a20565b93506103c0890135611d1f81611a20565b9250611d2e6103e08a0161198f565b9150610400890135611d3f81611b7b565b809150509295985092959890939650565b60008060008060008060008060006103008a8c031215611d6f57600080fd5b8935985060208a01359750611d878b60408c01611b94565b96506102408a0135611d9881611a20565b95506102608a0135611da981611a20565b9450611db86102808b0161198f565b93506102a08a0135611dc981611b7b565b92506102c08a0135611dda81611b7b565b91506102e08a0135611deb81611b7b565b809150509295985092959850929598565b60008060008060006103c08688031215611e1557600080fd5b853594506020860135935060408601359250611e348760608801611a66565b9150611e44876101c08801611b94565b90509295509295909350565b815180516001600160801b0390811683526020918201511690820152610160810160208301516001600160a01b03811660408401525060408301516001600160801b038116606084015250606083015163ffffffff8116608084015250608083015163ffffffff811660a08401525060a083015163ffffffff811660c08401525060c0830151611ee560e084018260020b9052565b5060e0830151610100611efd8185018361ffff169052565b8401519050610120611f148482018361ffff169052565b84015160ff811661014085015290505b5092915050565b634e487b7160e01b600052601160045260246000fd5b60006001600160801b0383811690831681811015611f6157611f61611f2b565b039392505050565b600284900b81526020810183905281516001600160a01b0316604082015261024081016020830151611fb4606084018280516001600160a01b03908116835260209182015116910152565b5060408301516001600160a01b03811660a08401525060608301516001600160a01b03811660c08401525060808301516001600160a01b03811660e08401525060a0830151610100818185015260c0850151915061012061201c8186018463ffffffff169052565b60e086015192506101406120348187018560010b9052565b9186015192506101609161204c8684018560010b9052565b908601519250610180906120658683018561ffff169052565b86015192506101a061207c8682018561ffff169052565b9186015192506101c0916120958684018561ffff169052565b9086015160ff9081166101e08701529086015116610200850152909301511515610220909201919091529392505050565b6000602082840312156120d857600080fd5b81516120e381611b7b565b9392505050565b600081600f0b83600f0b600081128160016001607f1b03190183128115161561211557612115611f2b565b8160016001607f1b0301831381161561213057612130611f2b565b5090039392505050565b600081600f0b83600f0b600082128260016001607f1b030382138115161561216457612164611f2b565b8260016001607f1b031903821281161561218057612180611f2b565b50019392505050565b81516001600160a01b03168152610200810160208301516121c3602084018280516001600160a01b03908116835260209182015116910152565b5060408301516001600160a01b03811660608401525060608301516001600160a01b03811660808401525060808301516001600160a01b03811660a08401525060a083015160c083015260c083015161222460e084018263ffffffff169052565b5060e083015161010061223b8185018360010b9052565b84015190506101206122518482018360010b9052565b84015190506101406122688482018361ffff169052565b840151905061016061227f8482018361ffff169052565b84015190506101806122968482018361ffff169052565b84015190506101a06122ac8482018360ff169052565b84015190506101c06122c28482018360ff169052565b8401518015156101e08501529050611f24565b600080604083850312156122e857600080fd5b82516122f381611a4c565b602084015190925061230481611a20565b809150509250929050565b634e487b7160e01b600052601260045260246000fd5b60008160020b8360020b8061234a57634e487b7160e01b600052601260045260246000fd5b627fffff1982146000198214161561236457612364611f2b565b90059392505050565b60008160020b8360020b627fffff60008213600084138383048511828216161561239957612399611f2b565b627fffff1960008512828116878305871216156123b8576123b8611f2b565b600087129250858205871284841616156123d4576123d4611f2b565b858505871281841616156123ea576123ea611f2b565b5050509290910295945050505050565b60008282101561240c5761240c611f2b565b500390565b60008160020b8360020b6000811281627fffff190183128115161561243857612438611f2b565b81627fffff01831381161561213057612130611f2b565b60008160020b8360020b6000821282627fffff0382138115161561247557612475611f2b565b82627fffff1903821281161561218057612180611f2b565b60008160020b627fffff1981036124a6576124a6611f2b565b60000392915050565b6000600160ff1b82016124c4576124c4611f2b565b506000039056fea2646970667358221220d9ef1c875d16594cbbee76e788c51b773365053fcf204e5bc25abfc70008156b64736f6c634300080d0033";

type TicksConstructorParams =
  | [linkLibraryAddresses: TicksLibraryAddresses, signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TicksConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class Ticks__factory extends ContractFactory {
  constructor(...args: TicksConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(_abi, Ticks__factory.linkBytecode(linkLibraryAddresses), signer);
    }
  }

  static linkBytecode(linkLibraryAddresses: TicksLibraryAddresses): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$4152b7ff06ffc80286808c1ade3be88148\\$__", "g"),
      linkLibraryAddresses["contracts/libraries/TickMap.sol:TickMap"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Ticks> {
    return super.deploy(overrides || {}) as Promise<Ticks>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Ticks {
    return super.attach(address) as Ticks;
  }
  connect(signer: Signer): Ticks__factory {
    return super.connect(signer) as Ticks__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TicksInterface {
    return new utils.Interface(_abi) as TicksInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Ticks {
    return new Contract(address, _abi, signerOrProvider) as Ticks;
  }
}

export interface TicksLibraryAddresses {
  ["contracts/libraries/TickMap.sol:TickMap"]: string;
}