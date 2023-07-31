/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';
import { Provider, TransactionRequest } from '@ethersproject/providers';
import type { QuoteCall, QuoteCallInterface } from '../QuoteCall';

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: 'uint160',
            name: 'priceLimit',
            type: 'uint160',
          },
          {
            internalType: 'uint128',
            name: 'amountIn',
            type: 'uint128',
          },
          {
            internalType: 'bool',
            name: 'zeroForOne',
            type: 'bool',
          },
        ],
        internalType: 'struct ICoverPool.QuoteParams',
        name: 'params',
        type: 'tuple',
      },
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint128',
                    name: 'token0',
                    type: 'uint128',
                  },
                  {
                    internalType: 'uint128',
                    name: 'token1',
                    type: 'uint128',
                  },
                ],
                internalType: 'struct ICoverPoolStructs.ProtocolFees',
                name: 'protocolFees',
                type: 'tuple',
              },
              {
                internalType: 'uint160',
                name: 'latestPrice',
                type: 'uint160',
              },
              {
                internalType: 'uint128',
                name: 'liquidityGlobal',
                type: 'uint128',
              },
              {
                internalType: 'uint32',
                name: 'lastTime',
                type: 'uint32',
              },
              {
                internalType: 'uint32',
                name: 'auctionStart',
                type: 'uint32',
              },
              {
                internalType: 'uint32',
                name: 'accumEpoch',
                type: 'uint32',
              },
              {
                internalType: 'int24',
                name: 'latestTick',
                type: 'int24',
              },
              {
                internalType: 'uint16',
                name: 'syncFee',
                type: 'uint16',
              },
              {
                internalType: 'uint16',
                name: 'fillFee',
                type: 'uint16',
              },
              {
                internalType: 'uint8',
                name: 'unlocked',
                type: 'uint8',
              },
            ],
            internalType: 'struct ICoverPoolStructs.GlobalState',
            name: 'state',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint128',
                name: 'token0',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'token1',
                type: 'uint128',
              },
            ],
            internalType: 'struct ICoverPoolStructs.SyncFees',
            name: 'syncFees',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'contract ITwapSource',
                name: 'source',
                type: 'ITwapSource',
              },
              {
                components: [
                  {
                    internalType: 'uint160',
                    name: 'min',
                    type: 'uint160',
                  },
                  {
                    internalType: 'uint160',
                    name: 'max',
                    type: 'uint160',
                  },
                ],
                internalType: 'struct ITickMath.PriceBounds',
                name: 'bounds',
                type: 'tuple',
              },
              {
                internalType: 'address',
                name: 'token0',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'token1',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'inputPool',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'minAmountPerAuction',
                type: 'uint256',
              },
              {
                internalType: 'uint32',
                name: 'genesisTime',
                type: 'uint32',
              },
              {
                internalType: 'int16',
                name: 'minPositionWidth',
                type: 'int16',
              },
              {
                internalType: 'int16',
                name: 'tickSpread',
                type: 'int16',
              },
              {
                internalType: 'uint16',
                name: 'twapLength',
                type: 'uint16',
              },
              {
                internalType: 'uint16',
                name: 'auctionLength',
                type: 'uint16',
              },
              {
                internalType: 'uint16',
                name: 'blockTime',
                type: 'uint16',
              },
              {
                internalType: 'uint8',
                name: 'token0Decimals',
                type: 'uint8',
              },
              {
                internalType: 'uint8',
                name: 'token1Decimals',
                type: 'uint8',
              },
              {
                internalType: 'bool',
                name: 'minAmountLowerPriced',
                type: 'bool',
              },
            ],
            internalType: 'struct ICoverPoolStructs.Immutables',
            name: 'constants',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint160',
                name: 'price',
                type: 'uint160',
              },
              {
                internalType: 'uint128',
                name: 'liquidity',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'amountInDelta',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'amountInDeltaMaxClaimed',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'amountOutDeltaMaxClaimed',
                type: 'uint128',
              },
            ],
            internalType: 'struct ICoverPoolStructs.PoolState',
            name: 'pool0',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint160',
                name: 'price',
                type: 'uint160',
              },
              {
                internalType: 'uint128',
                name: 'liquidity',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'amountInDelta',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'amountInDeltaMaxClaimed',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'amountOutDeltaMaxClaimed',
                type: 'uint128',
              },
            ],
            internalType: 'struct ICoverPoolStructs.PoolState',
            name: 'pool1',
            type: 'tuple',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'liquidity',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountIn',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'input',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'output',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'inputBoosted',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'auctionDepth',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'auctionBoost',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountInDelta',
            type: 'uint256',
          },
        ],
        internalType: 'struct ICoverPoolStructs.SwapCache',
        name: 'cache',
        type: 'tuple',
      },
    ],
    name: 'perform',
    outputs: [
      {
        components: [
          {
            components: [
              {
                components: [
                  {
                    internalType: 'uint128',
                    name: 'token0',
                    type: 'uint128',
                  },
                  {
                    internalType: 'uint128',
                    name: 'token1',
                    type: 'uint128',
                  },
                ],
                internalType: 'struct ICoverPoolStructs.ProtocolFees',
                name: 'protocolFees',
                type: 'tuple',
              },
              {
                internalType: 'uint160',
                name: 'latestPrice',
                type: 'uint160',
              },
              {
                internalType: 'uint128',
                name: 'liquidityGlobal',
                type: 'uint128',
              },
              {
                internalType: 'uint32',
                name: 'lastTime',
                type: 'uint32',
              },
              {
                internalType: 'uint32',
                name: 'auctionStart',
                type: 'uint32',
              },
              {
                internalType: 'uint32',
                name: 'accumEpoch',
                type: 'uint32',
              },
              {
                internalType: 'int24',
                name: 'latestTick',
                type: 'int24',
              },
              {
                internalType: 'uint16',
                name: 'syncFee',
                type: 'uint16',
              },
              {
                internalType: 'uint16',
                name: 'fillFee',
                type: 'uint16',
              },
              {
                internalType: 'uint8',
                name: 'unlocked',
                type: 'uint8',
              },
            ],
            internalType: 'struct ICoverPoolStructs.GlobalState',
            name: 'state',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint128',
                name: 'token0',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'token1',
                type: 'uint128',
              },
            ],
            internalType: 'struct ICoverPoolStructs.SyncFees',
            name: 'syncFees',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'contract ITwapSource',
                name: 'source',
                type: 'ITwapSource',
              },
              {
                components: [
                  {
                    internalType: 'uint160',
                    name: 'min',
                    type: 'uint160',
                  },
                  {
                    internalType: 'uint160',
                    name: 'max',
                    type: 'uint160',
                  },
                ],
                internalType: 'struct ITickMath.PriceBounds',
                name: 'bounds',
                type: 'tuple',
              },
              {
                internalType: 'address',
                name: 'token0',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'token1',
                type: 'address',
              },
              {
                internalType: 'address',
                name: 'inputPool',
                type: 'address',
              },
              {
                internalType: 'uint256',
                name: 'minAmountPerAuction',
                type: 'uint256',
              },
              {
                internalType: 'uint32',
                name: 'genesisTime',
                type: 'uint32',
              },
              {
                internalType: 'int16',
                name: 'minPositionWidth',
                type: 'int16',
              },
              {
                internalType: 'int16',
                name: 'tickSpread',
                type: 'int16',
              },
              {
                internalType: 'uint16',
                name: 'twapLength',
                type: 'uint16',
              },
              {
                internalType: 'uint16',
                name: 'auctionLength',
                type: 'uint16',
              },
              {
                internalType: 'uint16',
                name: 'blockTime',
                type: 'uint16',
              },
              {
                internalType: 'uint8',
                name: 'token0Decimals',
                type: 'uint8',
              },
              {
                internalType: 'uint8',
                name: 'token1Decimals',
                type: 'uint8',
              },
              {
                internalType: 'bool',
                name: 'minAmountLowerPriced',
                type: 'bool',
              },
            ],
            internalType: 'struct ICoverPoolStructs.Immutables',
            name: 'constants',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint160',
                name: 'price',
                type: 'uint160',
              },
              {
                internalType: 'uint128',
                name: 'liquidity',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'amountInDelta',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'amountInDeltaMaxClaimed',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'amountOutDeltaMaxClaimed',
                type: 'uint128',
              },
            ],
            internalType: 'struct ICoverPoolStructs.PoolState',
            name: 'pool0',
            type: 'tuple',
          },
          {
            components: [
              {
                internalType: 'uint160',
                name: 'price',
                type: 'uint160',
              },
              {
                internalType: 'uint128',
                name: 'liquidity',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'amountInDelta',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'amountInDeltaMaxClaimed',
                type: 'uint128',
              },
              {
                internalType: 'uint128',
                name: 'amountOutDeltaMaxClaimed',
                type: 'uint128',
              },
            ],
            internalType: 'struct ICoverPoolStructs.PoolState',
            name: 'pool1',
            type: 'tuple',
          },
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'liquidity',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountIn',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'input',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'output',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'inputBoosted',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'auctionDepth',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'auctionBoost',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'amountInDelta',
            type: 'uint256',
          },
        ],
        internalType: 'struct ICoverPoolStructs.SwapCache',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

const _bytecode =
  '0x61134761003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c80635608209c1461003a575b600080fd5b61004d610048366004610dde565b610063565b60405161005a9190611189565b60405180910390f35b61006b61074c565b60008360400151610080578260600151610086565b82608001515b9050604051806101c00160405280846000015181526020018460200151815260200184604001518152602001846060015181526020018460800151815260200182600001516001600160a01b0316815260200182602001516001600160801b0316815260200185602001516001600160801b0316815260200185602001516001600160801b03168152602001600081526020016000815260200184600001516080015163ffffffff16856040015160c0015163ffffffff1642610149919061128b565b610153919061128b565b815260200160008152602001600081525092505061018483604001518460000151846000015185866040015161018b565b9392505050565b61019361074c565b856101ae578260a00151856001600160a01b031611156101c0565b8260a00151856001600160a01b031610155b806101cd575060c0830151155b806101db5750610100830151155b156101e7575081610524565b600084602001516001600160a01b0316905082610100015161ffff1683610140015161ffff1684610140015161ffff1686610160015111156102325784610140015161ffff16610239565b8561016001515b61024990655af3107a40006112a2565b61025391906112d7565b61025d91906112a2565b6101808501819052670de0b6b3a76400009061027990826112f9565b85610100015161028991906112a2565b61029391906112d7565b61014085015286156103e15780866001600160a01b031611156102bc57506001600160a01b0385165b60006102d38560c00151838760a00151600061052d565b905080856101400151116103455760006102fc8660a001518760c001518861014001518c610546565b90506103138660c00151828860a001516000610592565b866101200181815161032591906112f9565b90525060a0860152600061010086015260e08501516101a08601526103db565b80156103db576103608560c00151838760a001516000610592565b856101200181815161037291906112f9565b90525060a08501829052610180850151670de0b6b3a764000090610396908261128b565b6103a090836112a2565b6103aa91906112d7565b85610100018181516103bc919061128b565b90525061010085015160e08601516103d4919061128b565b6101a08601525b5061051f565b80866001600160a01b031610156103fe57506001600160a01b0385165b60006104158560c001518660a00151846000610592565b9050808561014001511161048757600061043e8660a001518760c001518861014001518c610546565b90506104558660c001518760a0015183600061052d565b866101200181815161046791906112f9565b90525060a0860152600061010086015260e08501516101a086015261051d565b801561051d576104a28560c001518660a0015184600061052d565b85610120018181516104b491906112f9565b90525060a08501829052610180850151670de0b6b3a7640000906104d8908261128b565b6104e290836112a2565b6104ec91906112d7565b85610100018181516104fe919061128b565b90525061010085015160e0860151610516919061128b565b6101a08601525b505b839150505b95945050505050565b600061053b858585856105a0565b90505b949350505050565b6000811561057957606084901b610571818761056287826112a2565b61056c90856112f9565b6105f8565b91505061053e565b61058883600160601b86610670565b61053b90866112f9565b600061053b85858585610722565b600081156105cf576105c86105bc606087901b868603866105f8565b85808204910615150190565b905061053e565b836105e1606087901b86860386610670565b816105ee576105ee6112c1565b0495945050505050565b6000610605848484610670565b90508180610615576106156112c1565b838509156101845760001981106106665760405162461bcd60e51b81526020600482015260116024820152704d617855696e744578636565646564282960781b604482015260640160405180910390fd5b6001019392505050565b60008080600019858709858702925082811083820303915050806000036106a9576000841161069e57600080fd5b508290049050610184565b8084116106b557600080fd5b6000848688096000868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b6000811561073b576105c885858503600160601b6105f8565b61053b85858503600160601b610670565b60408051610340810182526000610300820181815261032083018290526101c083019081526101e08301829052610200830182905261022083018290526102408301829052610260830182905261028083018290526102a083018290526102c083018290526102e08301829052825282518084018452818152602081810192909252908201529081016107dd61087e565b81526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526040805160a0810182526000808252602082810182905292820181905260608201819052608082015291019081526020016000815260200160008152602001600081526020016000815260200160008152602001600081526020016000815260200160008152602001600081525090565b604051806101e0016040528060006001600160a01b031681526020016108c9604051806040016040528060006001600160a01b0316815260200160006001600160a01b031681525090565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c0820181905260e08201819052610100820181905261012082018190526101408201819052610160820181905261018082018190526101a09091015290565b6040805190810167ffffffffffffffff8111828210171561096157634e487b7160e01b600052604160045260246000fd5b60405290565b604051610140810167ffffffffffffffff8111828210171561096157634e487b7160e01b600052604160045260246000fd5b6040516101e0810167ffffffffffffffff8111828210171561096157634e487b7160e01b600052604160045260246000fd5b6040516060810167ffffffffffffffff8111828210171561096157634e487b7160e01b600052604160045260246000fd5b6040516101c0810167ffffffffffffffff8111828210171561096157634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610a4357600080fd5b50565b8035610a5181610a2e565b919050565b80356001600160801b0381168114610a5157600080fd5b80358015158114610a5157600080fd5b600060408284031215610a8f57600080fd5b610a97610930565b9050610aa282610a56565b8152610ab060208301610a56565b602082015292915050565b803563ffffffff81168114610a5157600080fd5b8035600281900b8114610a5157600080fd5b803561ffff81168114610a5157600080fd5b803560ff81168114610a5157600080fd5b60006101608284031215610b1757600080fd5b610b1f610967565b9050610b2b8383610a7d565b8152610b3960408301610a46565b6020820152610b4a60608301610a56565b6040820152610b5b60808301610abb565b6060820152610b6c60a08301610abb565b6080820152610b7d60c08301610abb565b60a0820152610b8e60e08301610acf565b60c0820152610100610ba1818401610ae1565b60e0830152610120610bb4818501610ae1565b82840152610bc56101408501610af3565b908301525092915050565b600060408284031215610be257600080fd5b610bea610930565b90508135610bf781610a2e565b81526020820135610ab081610a2e565b8035600181900b8114610a5157600080fd5b60006102008284031215610c2c57600080fd5b610c34610999565b9050610c3f82610a46565b8152610c4e8360208401610bd0565b6020820152610c5f60608301610a46565b6040820152610c7060808301610a46565b6060820152610c8160a08301610a46565b608082015260c082013560a0820152610c9c60e08301610abb565b60c0820152610100610caf818401610c07565b60e0830152610120610cc2818501610c07565b828401526101409150610cd6828501610ae1565b90830152610160610ce8848201610ae1565b828401526101809150610cfc828501610ae1565b908301526101a0610d0e848201610af3565b828401526101c09150610d22828501610af3565b90830152610d336101e08401610a6d565b9082015292915050565b600060a08284031215610d4f57600080fd5b60405160a0810181811067ffffffffffffffff82111715610d8057634e487b7160e01b600052604160045260246000fd5b6040529050808235610d9181610a2e565b8152610d9f60208401610a56565b6020820152610db060408401610a56565b6040820152610dc160608401610a56565b6060820152610dd260808401610a56565b60808201525092915050565b600080828403610660811215610df357600080fd5b6060811215610e0157600080fd5b610e096109cb565b8435610e1481610a2e565b8152610e2260208601610a56565b6020820152610e3360408601610a6d565b60408201529250610600605f198201811315610e4e57600080fd5b610e566109fc565b9150610e658660608701610b04565b8252610e75866101c08701610a7d565b6020830152610e88866102008701610c19565b6040830152610e9b866104008701610d3d565b6060830152610eae866104a08701610d3d565b608083015261054085013560a083015261056085013560c083015261058085013560e08301526105a08501356101008301526105c08501356101208301526105e0850135610140830152840135610160820152610620840135610180820152610640909301356101a08401525092909150565b610f4282825180516001600160801b03908116835260209182015116910152565b60208101516001600160a01b03811660408401525060408101516001600160801b038116606084015250606081015163ffffffff8116608084015250608081015163ffffffff811660a08401525060a081015163ffffffff811660c08401525060c0810151610fb660e084018260020b9052565b5060e0810151610100610fce8185018361ffff169052565b8201519050610120610fe58482018361ffff169052565b82015160ff81166101408501529050505050565b80516001600160a01b03168252602081015161102e602084018280516001600160a01b03908116835260209182015116910152565b5060408101516001600160a01b03811660608401525060608101516001600160a01b03811660808401525060808101516001600160a01b03811660a08401525060a081015160c083015260c081015161108f60e084018263ffffffff169052565b5060e08101516101006110a68185018360010b9052565b82015190506101206110bc8482018360010b9052565b82015190506101406110d38482018361ffff169052565b82015190506101606110ea8482018361ffff169052565b82015190506101806111018482018361ffff169052565b82015190506101a06111178482018360ff169052565b82015190506101c061112d8482018360ff169052565b8201518015156101e08501529050505050565b80516001600160a01b031682526020808201516001600160801b039081169184019190915260408083015182169084015260608083015182169084015260809182015116910152565b60006106008201905061119d828451610f21565b60208301516101606111c78185018380516001600160801b03908116835260209182015116910152565b604085015191506101a06111dd81860184610ff9565b606086015192506111f26103a0860184611140565b60808601519250611207610440860184611140565b60a08601516104e086015260c086015161050086015260e0860151610520860152610100860151610540860152610120860151610560860152610140860151610580860152818601516105a08601526101808601516105c0860152808601516105e086015250505092915050565b634e487b7160e01b600052601160045260246000fd5b60008282101561129d5761129d611275565b500390565b60008160001904831182151516156112bc576112bc611275565b500290565b634e487b7160e01b600052601260045260246000fd5b6000826112f457634e487b7160e01b600052601260045260246000fd5b500490565b6000821982111561130c5761130c611275565b50019056fea264697066735822122095ad203833a07234e0dc722cb56646b648c1d62b576a80bf3dab8d44fb69c27764736f6c634300080d0033';

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
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<QuoteCall> {
    return super.deploy(overrides || {}) as Promise<QuoteCall>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> },
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
    signerOrProvider: Signer | Provider,
  ): QuoteCall {
    return new Contract(address, _abi, signerOrProvider) as QuoteCall;
  }
}
