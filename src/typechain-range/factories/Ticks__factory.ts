/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { Ticks, TicksInterface } from '../Ticks';

const _abi = [
  {
    inputs: [],
    name: 'InvalidLowerTick',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidPositionAmount',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidPositionBounds',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidUpperTick',
    type: 'error',
  },
  {
    inputs: [],
    name: 'LiquidityOverflow',
    type: 'error',
  },
  {
    inputs: [],
    name: 'LiquidityUnderflow',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'uint160',
        name: 'startPrice',
        type: 'uint160',
      },
      {
        indexed: false,
        internalType: 'int24',
        name: 'tickAtPrice',
        type: 'int24',
      },
      {
        indexed: false,
        internalType: 'int24',
        name: 'minTick',
        type: 'int24',
      },
      {
        indexed: false,
        internalType: 'int24',
        name: 'maxTick',
        type: 'int24',
      },
    ],
    name: 'Initialize',
    type: 'event',
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
        internalType: 'bool',
        name: 'zeroForOne',
        type: 'bool',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountIn',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amountOut',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint160',
        name: 'price',
        type: 'uint160',
      },
      {
        indexed: false,
        internalType: 'uint128',
        name: 'liquidity',
        type: 'uint128',
      },
      {
        indexed: false,
        internalType: 'int24',
        name: 'tickAtPrice',
        type: 'int24',
      },
    ],
    name: 'Swap',
    type: 'event',
  },
];

const _bytecode =
  '0x61123061003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c806362fe0ff21461003a575b600080fd5b81801561004657600080fd5b5061005a610055366004610d31565b610070565b6040516100679190610e5f565b60405180910390f35b610078610af9565b6000610088620d89e719846101f2565b905060006100a261009c620d89e719610fb5565b856101f2565b905060006100af83610210565b905060006100bc83610210565b9050816001600160a01b03168760a001516001600160a01b031610806100f85750806001600160a01b03168760a001516001600160a01b031610155b156101405760405162461bcd60e51b815260206004820152601360248201527253746172745072696365496e76616c6964282960681b60448201526064015b60405180910390fd5b61014f89620d89e71988610569565b5061016789610161620d89e719610fb5565b88610569565b506101758760a0015161057e565b600290810b604089810182905260a08a015181516001600160a01b039091168152602081019290925286830b908201529084900b60608201527f0791f6afb8fe9263ab01ea01ed97da03ca0beaa3cf3ec07c0808ee899ba4a83d9060800160405180910390a16101e588886108c6565b9998505050505050505050565b6000816101ff8185610fed565b6102099190611035565b9392505050565b60008060008360020b12610227578260020b610234565b8260020b610234906110c2565b9050610243620d89e719610fb5565b62ffffff1681111561028b5760405162461bcd60e51b81526020600482015260116024820152705469636b4f75744f66426f756e6473282960781b6044820152606401610137565b6000816001166000036102a257600160801b6102b4565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff16905060028216156102e8576ffff97272373d413259a46990580e213a0260801c5b6004821615610307576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b6008821615610326576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b6010821615610345576fffcb9843d60f6159c9db58835c9266440260801c5b6020821615610364576fff973b41fa98c081472e6896dfb254c00260801c5b6040821615610383576fff2ea16466c96a3843ec78b326b528610260801c5b60808216156103a2576ffe5dee046a99a2a811c461f1969c30530260801c5b6101008216156103c2576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b6102008216156103e2576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615610402576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615610422576fe7159475a2c29b7443b29c7fa6e889d90260801c5b611000821615610442576fd097f3bdfd2022b8845ad8f792aa58250260801c5b612000821615610462576fa9f746462d870fdf8a65dc1f90e061e50260801c5b614000821615610482576f70d869a156d2a1b890bb3df62baf32f70260801c5b6180008216156104a2576f31be135f97d08fd981231505542fcfa60260801c5b620100008216156104c3576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b620200008216156104e3576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615610502576d2216e584f5fa1ea926041bedfe980260801c5b6208000082161561051f576b048a170391f7dc42444e8fa20260801c5b60008460020b131561054057806000198161053c5761053c610fd7565b0490505b640100000000810615610554576001610557565b60005b60ff16602082901c0192505050919050565b600061057684848461091d565b949350505050565b60006401000276a36001600160a01b03831610806105b9575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b03831610155b156105fb5760405162461bcd60e51b815260206004820152601260248201527150726963654f75744f66426f756e6473282960701b6044820152606401610137565b640100000000600160c01b03602083901b166001600160801b03811160071b81811c67ffffffffffffffff811160061b90811c63ffffffff811160051b90811c61ffff811160041b90811c60ff8111600390811b91821c600f811160021b90811c918211600190811b92831c979088119617909417909217179091171717608081106106965761068c607f826110de565b83901c91506106a7565b6106a181607f6110de565b83901b91505b600060406106b66080846110f5565b901b9050828302607f1c92508260801c80603f1b8217915083811c935050828302607f1c92508260801c80603e1b8217915083811c935050828302607f1c92508260801c80603d1b8217915083811c935050828302607f1c92508260801c80603c1b8217915083811c935050828302607f1c92508260801c80603b1b8217915083811c935050828302607f1c92508260801c80603a1b8217915083811c935050828302607f1c92508260801c8060391b8217915083811c935050828302607f1c92508260801c8060381b8217915083811c935050828302607f1c92508260801c8060371b8217915083811c935050828302607f1c92508260801c8060361b8217915083811c935050828302607f1c92508260801c8060351b8217915083811c935050828302607f1c92508260801c8060341b8217915083811c935050828302607f1c92508260801c8060331b8217915083811c935050828302607f1c92508260801c8060321b8217915050600081693627a301d71055774c856108399190611134565b9050600060806108596f028f6481ab7f045a5af012a19d003aaa846110f5565b901d90506000608061087b846fdb2df09e81959a81455e260799a0632f6111b9565b901d90508060020b8260020b146108ba57886001600160a01b031661089f82610210565b6001600160a01b031611156108b457816101e5565b806101e5565b50979650505050505050565b6108ce610af9565b50604080516060810182524263ffffffff16808252600060208084018290529284015284546001600160f81b031916179093556101408201805160019401939093529151600592019190915290565b60008060008061092d86866109a9565b600082815260028b0160205260409020549295509093509150600160ff85161b8117908103610963576001945050505050610209565b60008381526002890160209081526040808320939093558382526001808b01909152918120805460ff90951683901b9094179093558754911b1790955550929392505050565b60008080620d89e8600286900b13156109fa5760405162461bcd60e51b81526020600482015260136024820152725469636b496e6465784f766572666c6f77282960681b6044820152606401610137565b620d89e719600286900b1215610a495760405162461bcd60e51b81526020600482015260146024820152735469636b496e646578556e646572666c6f77282960601b6044820152606401610137565b8360020b8560020b81610a5e57610a5e610fd7565b0760020b15610a7457610a7185856101f2565b94505b8360020b610a86620d89e719866101f2565b860360020b81610a9857610a98610fd7565b0560020b92505050600881901c601082901c60ff811115610af25760405162461bcd60e51b8152602060048201526014602482015273426c6f636b496e6465784f766572666c6f77282960601b6044820152606401610137565b9250925092565b60408051610180810182526000808252602080830182905282840182905260608084018390526080840183905260a0840183905260c0840183905260e08401839052610100840183905261012084018390528451908101855282815280820183905280850183905261014084015283518085019094528184528301529061016082015290565b604051610180810167ffffffffffffffff81118282101715610bb157634e487b7160e01b600052604160045260246000fd5b60405290565b803560ff81168114610bc857600080fd5b919050565b803561ffff81168114610bc857600080fd5b8035600281900b8114610bc857600080fd5b8035600681900b8114610bc857600080fd5b80356001600160a01b0381168114610bc857600080fd5b80356001600160801b0381168114610bc857600080fd5b80356001600160c81b0381168114610bc857600080fd5b600060608284031215610c5a57600080fd5b6040516060810181811067ffffffffffffffff82111715610c8b57634e487b7160e01b600052604160045260246000fd5b604052905080610c9a83610bcd565b8152610ca860208401610bcd565b6020820152610cb960408401610bcd565b60408201525092915050565b600060408284031215610cd757600080fd5b6040516040810181811067ffffffffffffffff82111715610d0857634e487b7160e01b600052604160045260246000fd5b604052905080610d1783610c1a565b8152610d2560208401610c1a565b60208201525092915050565b600080600080848603610240811215610d4957600080fd5b85359450602086013593506101e080603f1983011215610d6857600080fd5b610d70610b7f565b9150610d7e60408801610bb7565b8252610d8c60608801610bcd565b6020830152610d9d60808801610bdf565b6040830152610dae60a08801610bf1565b6060830152610dbf60c08801610c03565b6080830152610dd060e08801610c03565b60a0830152610100610de3818901610c1a565b60c0840152610120610df6818a01610c1a565b60e0850152610140610e09818b01610c31565b838601526101609250610e1d838b01610c31565b82860152610e2f8b6101808c01610c48565b9085015250610e4089898401610cc5565b90830152509150610e546102208601610bdf565b905092959194509250565b815160ff1681526101e081016020830151610e80602084018261ffff169052565b506040830151610e95604084018260020b9052565b506060830151610eaa606084018260060b9052565b506080830151610ec560808401826001600160a01b03169052565b5060a0830151610ee060a08401826001600160a01b03169052565b5060c0830151610efb60c08401826001600160801b03169052565b5060e0830151610f1660e08401826001600160801b03169052565b50610100838101516001600160c81b038116848301525050610120838101516001600160c81b03811684830152505061014083810151805161ffff9081168584015260208201518116610160860152604082015116610180850152505061016083015180516001600160801b039081166101a08501526020820151166101c08401525092915050565b634e487b7160e01b600052601160045260246000fd5b60008160020b627fffff198103610fce57610fce610f9f565b60000392915050565b634e487b7160e01b600052601260045260246000fd5b60008160020b8360020b8061101257634e487b7160e01b600052601260045260246000fd5b627fffff1982146000198214161561102c5761102c610f9f565b90059392505050565b60008160020b8360020b627fffff60008213600084138383048511828216161561106157611061610f9f565b627fffff19600085128281168783058712161561108057611080610f9f565b6000871292508582058712848416161561109c5761109c610f9f565b858505871281841616156110b2576110b2610f9f565b5050509290910295945050505050565b6000600160ff1b82016110d7576110d7610f9f565b5060000390565b6000828210156110f0576110f0610f9f565b500390565b60008083128015600160ff1b85018412161561111357611113610f9f565b6001600160ff1b038401831381161561112e5761112e610f9f565b50500390565b60006001600160ff1b038184138284138082168684048611161561115a5761115a610f9f565b600160ff1b600087128281168783058912161561117957611179610f9f565b6000871292508782058712848416161561119557611195610f9f565b878505871281841616156111ab576111ab610f9f565b505050929093029392505050565b600080821280156001600160ff1b03849003851316156111db576111db610f9f565b600160ff1b83900384128116156111f4576111f4610f9f565b5050019056fea2646970667358221220ef11a315e83eebe47db4bffacdc59b1d3574d055e9c10f4f8b5692775e2a7f6464736f6c634300080d0033';

export class Ticks__factory extends ContractFactory {
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
  ): Promise<Ticks> {
    return super.deploy(overrides || {}) as Promise<Ticks>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> },
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
