/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import { Provider } from '@ethersproject/providers';
import type {
  WormholeTokenBridge,
  WormholeTokenBridgeInterface,
} from '../WormholeTokenBridge';

const _abi = [
  {
    inputs: [
      {
        internalType: 'bytes',
        name: 'encodedVm',
        type: 'bytes',
      },
    ],
    name: 'completeTransfer',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: 'hash',
        type: 'bytes32',
      },
    ],
    name: 'isTransferCompleted',
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
        internalType: 'bytes',
        name: 'encoded',
        type: 'bytes',
      },
    ],
    name: 'parseTransfer',
    outputs: [
      {
        components: [
          {
            internalType: 'uint8',
            name: 'payloadID',
            type: 'uint8',
          },
          {
            internalType: 'uint256',
            name: 'amount',
            type: 'uint256',
          },
          {
            internalType: 'bytes32',
            name: 'tokenAddress',
            type: 'bytes32',
          },
          {
            internalType: 'uint16',
            name: 'tokenChain',
            type: 'uint16',
          },
          {
            internalType: 'bytes32',
            name: 'to',
            type: 'bytes32',
          },
          {
            internalType: 'uint16',
            name: 'toChain',
            type: 'uint16',
          },
          {
            internalType: 'uint256',
            name: 'fee',
            type: 'uint256',
          },
        ],
        internalType: 'struct WormholeTokenBridge.Transfer',
        name: 'transfer',
        type: 'tuple',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'token',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'uint16',
        name: 'recipientChain',
        type: 'uint16',
      },
      {
        internalType: 'bytes32',
        name: 'recipient',
        type: 'bytes32',
      },
      {
        internalType: 'uint256',
        name: 'arbiterFee',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'nonce',
        type: 'uint32',
      },
    ],
    name: 'transferTokens',
    outputs: [
      {
        internalType: 'uint64',
        name: 'sequence',
        type: 'uint64',
      },
    ],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'wormhole',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export class WormholeTokenBridge__factory {
  static readonly abi = _abi;
  static createInterface(): WormholeTokenBridgeInterface {
    return new utils.Interface(_abi) as WormholeTokenBridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): WormholeTokenBridge {
    return new Contract(address, _abi, signerOrProvider) as WormholeTokenBridge;
  }
}