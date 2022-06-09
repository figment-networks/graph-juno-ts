// Code generated by protoc-gen-as. DO NOT EDIT.
// versions:
// 	 protoc-gen-as v0.3.0-alpha.3
// 	 protoc        v3.20.1
// source: cosmos/feegrant/v1beta1/tx.ts

import { Writer, Reader, Protobuf } from "as-proto";
import { google } from "../../../google";

export class MsgGrantAllowance {
  static encode(message: MsgGrantAllowance, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.granter);

    writer.uint32(18);
    writer.string(message.grantee);

    const allowance_ = message.allowance;
    if (allowance_ !== null) {
      writer.uint32(26);
      writer.fork();
      google.protobuf.Any.encode(allowance_, writer);
      writer.ldelim();
    }
  }

  static decode(reader: Reader, length: i32): MsgGrantAllowance {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgGrantAllowance();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;

        case 2:
          message.grantee = reader.string();
          break;

        case 3:
          message.allowance = google.protobuf.Any.decode(reader, reader.uint32());
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  granter: string;
  grantee: string;
  allowance: google.protobuf.Any | null;

  constructor(granter: string = "", grantee: string = "", allowance: google.protobuf.Any | null = null) {
    this.granter = granter;
    this.grantee = grantee;
    this.allowance = allowance;
  }
}

export function decodeMsgGrantAllowance(a: Uint8Array): MsgGrantAllowance {
  return Protobuf.decode<MsgGrantAllowance>(a, MsgGrantAllowance.decode);
}

@unmanaged
export class MsgGrantAllowanceResponse {
  static encode(message: MsgGrantAllowanceResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgGrantAllowanceResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgGrantAllowanceResponse();

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

export function decodeMsgGrantAllowanceResponse(a: Uint8Array): MsgGrantAllowanceResponse {
  return Protobuf.decode<MsgGrantAllowanceResponse>(a, MsgGrantAllowanceResponse.decode);
}

export class MsgRevokeAllowance {
  static encode(message: MsgRevokeAllowance, writer: Writer): void {
    writer.uint32(10);
    writer.string(message.granter);

    writer.uint32(18);
    writer.string(message.grantee);
  }

  static decode(reader: Reader, length: i32): MsgRevokeAllowance {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgRevokeAllowance();

    while (reader.ptr < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string();
          break;

        case 2:
          message.grantee = reader.string();
          break;

        default:
          reader.skipType(tag & 7);
          break;
      }
    }

    return message;
  }

  granter: string;
  grantee: string;

  constructor(granter: string = "", grantee: string = "") {
    this.granter = granter;
    this.grantee = grantee;
  }
}

export function decodeMsgRevokeAllowance(a: Uint8Array): MsgRevokeAllowance {
  return Protobuf.decode<MsgRevokeAllowance>(a, MsgRevokeAllowance.decode);
}

@unmanaged
export class MsgRevokeAllowanceResponse {
  static encode(message: MsgRevokeAllowanceResponse, writer: Writer): void {}

  static decode(reader: Reader, length: i32): MsgRevokeAllowanceResponse {
    const end: usize = length < 0 ? reader.end : reader.ptr + length;
    const message = new MsgRevokeAllowanceResponse();

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

export function decodeMsgRevokeAllowanceResponse(a: Uint8Array): MsgRevokeAllowanceResponse {
  return Protobuf.decode<MsgRevokeAllowanceResponse>(a, MsgRevokeAllowanceResponse.decode);
}