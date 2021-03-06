// Code generated by protoc-gen-as. DO NOT EDIT.
// versions:
// 	 protoc-gen-as v0.3.0-alpha.3
// 	 protoc        v3.20.1
// source: cosmos/distribution/v1beta1/tx.ts

import { Writer, Reader, Protobuf } from "as-proto";
import { base } from "../../base";

export class MsgSetWithdrawAddress {
  static encode(message: MsgSetWithdrawAddress, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.delegator_address);

    writer.uint32(18);
    writer.string(message.withdraw_address);
  }

  static decode(reader: Reader, length: i32): MsgSetWithdrawAddress {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSetWithdrawAddress();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;

        case 2:
          message.withdraw_address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  delegator_address: string;
  withdraw_address: string;

  constructor(delegator_address: string = "", withdraw_address: string = "") {
    this.delegator_address = delegator_address;
    this.withdraw_address = withdraw_address;
  }
}

export function decodeMsgSetWithdrawAddress(a: Uint8Array): MsgSetWithdrawAddress {
  return Protobuf.decode<MsgSetWithdrawAddress>(a, MsgSetWithdrawAddress.decode);
}

@unmanaged
export class MsgSetWithdrawAddressResponse {
  static encode(message: MsgSetWithdrawAddressResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgSetWithdrawAddressResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgSetWithdrawAddressResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function decodeMsgSetWithdrawAddressResponse(a: Uint8Array): MsgSetWithdrawAddressResponse {
  return Protobuf.decode<MsgSetWithdrawAddressResponse>(a, MsgSetWithdrawAddressResponse.decode);
}

export class MsgWithdrawDelegatorReward {
  static encode(message: MsgWithdrawDelegatorReward, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.delegator_address);

    writer.uint32(18);
    writer.string(message.validator_address);
  }

  static decode(reader: Reader, length: i32): MsgWithdrawDelegatorReward {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgWithdrawDelegatorReward();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegator_address = reader.string();
          break;

        case 2:
          message.validator_address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  delegator_address: string;
  validator_address: string;

  constructor(delegator_address: string = "", validator_address: string = "") {
    this.delegator_address = delegator_address;
    this.validator_address = validator_address;
  }
}

export function decodeMsgWithdrawDelegatorReward(a: Uint8Array): MsgWithdrawDelegatorReward {
  return Protobuf.decode<MsgWithdrawDelegatorReward>(a, MsgWithdrawDelegatorReward.decode);
}

@unmanaged
export class MsgWithdrawDelegatorRewardResponse {
  static encode(message: MsgWithdrawDelegatorRewardResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgWithdrawDelegatorRewardResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgWithdrawDelegatorRewardResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function decodeMsgWithdrawDelegatorRewardResponse(a: Uint8Array): MsgWithdrawDelegatorRewardResponse {
  return Protobuf.decode<MsgWithdrawDelegatorRewardResponse>(a, MsgWithdrawDelegatorRewardResponse.decode);
}

export class MsgWithdrawValidatorCommission {
  static encode(message: MsgWithdrawValidatorCommission, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.validator_address);
  }

  static decode(reader: Reader, length: i32): MsgWithdrawValidatorCommission {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgWithdrawValidatorCommission();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validator_address = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  validator_address: string;

  constructor(validator_address: string = "") {
    this.validator_address = validator_address;
  }
}

export function decodeMsgWithdrawValidatorCommission(a: Uint8Array): MsgWithdrawValidatorCommission {
  return Protobuf.decode<MsgWithdrawValidatorCommission>(a, MsgWithdrawValidatorCommission.decode);
}

@unmanaged
export class MsgWithdrawValidatorCommissionResponse {
  static encode(message: MsgWithdrawValidatorCommissionResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgWithdrawValidatorCommissionResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgWithdrawValidatorCommissionResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function decodeMsgWithdrawValidatorCommissionResponse(a: Uint8Array): MsgWithdrawValidatorCommissionResponse {
  return Protobuf.decode<MsgWithdrawValidatorCommissionResponse>(a, MsgWithdrawValidatorCommissionResponse.decode);
}

export class MsgFundCommunityPool {
  static encode(message: MsgFundCommunityPool, writer: Writer): void {
    const amount_ = message.amount;
    for (let i = 0; i < amount_.length; ++i) {
      writer.uint32(10);
      writer.fork();
      base.v1beta1.Coin.encode(amount_[i], writer);
      writer.ldelim();
    }

    writer.uint32(18);
    writer.string(message.depositor);
  }

  static decode(reader: Reader, length: i32): MsgFundCommunityPool {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgFundCommunityPool();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.amount.push(base.v1beta1.Coin.decode(reader, reader.uint32()));
          break;

        case 2:
          message.depositor = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  amount: Array<base.v1beta1.Coin>;
  depositor: string;

  constructor(amount: Array<base.v1beta1.Coin> = [], depositor: string = "") {
    this.amount = amount;
    this.depositor = depositor;
  }
}

export function decodeMsgFundCommunityPool(a: Uint8Array): MsgFundCommunityPool {
  return Protobuf.decode<MsgFundCommunityPool>(a, MsgFundCommunityPool.decode);
}

@unmanaged
export class MsgFundCommunityPoolResponse {
  static encode(message: MsgFundCommunityPoolResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgFundCommunityPoolResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgFundCommunityPoolResponse();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  constructor() {}
}

export function decodeMsgFundCommunityPoolResponse(a: Uint8Array): MsgFundCommunityPoolResponse {
  return Protobuf.decode<MsgFundCommunityPoolResponse>(a, MsgFundCommunityPoolResponse.decode);
}
