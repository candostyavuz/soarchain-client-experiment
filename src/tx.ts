/* eslint-disable */
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'soarchain.poa';

export interface MsgGenClient {
  creator: string;
  address: string;
  fee: string;
}

export interface MsgGenClientResponse {}

export interface MsgGenChallenger {
  creator: string;
  stakeAmount: string;
}

export interface MsgGenChallengerResponse {}

export interface MsgChallengeService {
  creator: string;
  challengeeAddress: string;
  challengeResult: string;
}

export interface MsgChallengeServiceResponse {}

export interface MsgUnregisterClient {
  creator: string;
  address: string;
  fee: string;
}

export interface MsgUnregisterClientResponse {}

export interface MsgUnregisterChallenger {
  creator: string;
  fee: string;
}

export interface MsgUnregisterChallengerResponse {}

function createBaseMsgGenClient(): MsgGenClient {
  return { creator: '', address: '', fee: '' };
}

export const MsgGenClient = {
  encode(message: MsgGenClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address);
    }
    if (message.fee !== '') {
      writer.uint32(26).string(message.fee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGenClient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGenClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.fee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgGenClient {
    return {
      creator: isSet(object.creator) ? String(object.creator) : '',
      address: isSet(object.address) ? String(object.address) : '',
      fee: isSet(object.fee) ? String(object.fee) : '',
    };
  },

  toJSON(message: MsgGenClient): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    message.fee !== undefined && (obj.fee = message.fee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGenClient>, I>>(object: I): MsgGenClient {
    const message = createBaseMsgGenClient();
    message.creator = object.creator ?? '';
    message.address = object.address ?? '';
    message.fee = object.fee ?? '';
    return message;
  },
};

function createBaseMsgGenClientResponse(): MsgGenClientResponse {
  return {};
}

export const MsgGenClientResponse = {
  encode(_: MsgGenClientResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGenClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGenClientResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgGenClientResponse {
    return {};
  },

  toJSON(_: MsgGenClientResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGenClientResponse>, I>>(_: I): MsgGenClientResponse {
    const message = createBaseMsgGenClientResponse();
    return message;
  },
};

function createBaseMsgGenChallenger(): MsgGenChallenger {
  return { creator: '', stakeAmount: '' };
}

export const MsgGenChallenger = {
  encode(message: MsgGenChallenger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.stakeAmount !== '') {
      writer.uint32(18).string(message.stakeAmount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGenChallenger {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGenChallenger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.stakeAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgGenChallenger {
    return {
      creator: isSet(object.creator) ? String(object.creator) : '',
      stakeAmount: isSet(object.stakeAmount) ? String(object.stakeAmount) : '',
    };
  },

  toJSON(message: MsgGenChallenger): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.stakeAmount !== undefined && (obj.stakeAmount = message.stakeAmount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGenChallenger>, I>>(object: I): MsgGenChallenger {
    const message = createBaseMsgGenChallenger();
    message.creator = object.creator ?? '';
    message.stakeAmount = object.stakeAmount ?? '';
    return message;
  },
};

function createBaseMsgGenChallengerResponse(): MsgGenChallengerResponse {
  return {};
}

export const MsgGenChallengerResponse = {
  encode(_: MsgGenChallengerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgGenChallengerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgGenChallengerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgGenChallengerResponse {
    return {};
  },

  toJSON(_: MsgGenChallengerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgGenChallengerResponse>, I>>(
    _: I
  ): MsgGenChallengerResponse {
    const message = createBaseMsgGenChallengerResponse();
    return message;
  },
};

function createBaseMsgChallengeService(): MsgChallengeService {
  return { creator: '', challengeeAddress: '', challengeResult: '' };
}

export const MsgChallengeService = {
  encode(message: MsgChallengeService, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.challengeeAddress !== '') {
      writer.uint32(18).string(message.challengeeAddress);
    }
    if (message.challengeResult !== '') {
      writer.uint32(26).string(message.challengeResult);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChallengeService {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChallengeService();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.challengeeAddress = reader.string();
          break;
        case 3:
          message.challengeResult = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgChallengeService {
    return {
      creator: isSet(object.creator) ? String(object.creator) : '',
      challengeeAddress: isSet(object.challengeeAddress) ? String(object.challengeeAddress) : '',
      challengeResult: isSet(object.challengeResult) ? String(object.challengeResult) : '',
    };
  },

  toJSON(message: MsgChallengeService): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.challengeeAddress !== undefined && (obj.challengeeAddress = message.challengeeAddress);
    message.challengeResult !== undefined && (obj.challengeResult = message.challengeResult);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChallengeService>, I>>(
    object: I
  ): MsgChallengeService {
    const message = createBaseMsgChallengeService();
    message.creator = object.creator ?? '';
    message.challengeeAddress = object.challengeeAddress ?? '';
    message.challengeResult = object.challengeResult ?? '';
    return message;
  },
};

function createBaseMsgChallengeServiceResponse(): MsgChallengeServiceResponse {
  return {};
}

export const MsgChallengeServiceResponse = {
  encode(_: MsgChallengeServiceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgChallengeServiceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgChallengeServiceResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgChallengeServiceResponse {
    return {};
  },

  toJSON(_: MsgChallengeServiceResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgChallengeServiceResponse>, I>>(
    _: I
  ): MsgChallengeServiceResponse {
    const message = createBaseMsgChallengeServiceResponse();
    return message;
  },
};

function createBaseMsgUnregisterClient(): MsgUnregisterClient {
  return { creator: '', address: '', fee: '' };
}

export const MsgUnregisterClient = {
  encode(message: MsgUnregisterClient, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== '') {
      writer.uint32(18).string(message.address);
    }
    if (message.fee !== '') {
      writer.uint32(26).string(message.fee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnregisterClient {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnregisterClient();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        case 3:
          message.fee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnregisterClient {
    return {
      creator: isSet(object.creator) ? String(object.creator) : '',
      address: isSet(object.address) ? String(object.address) : '',
      fee: isSet(object.fee) ? String(object.fee) : '',
    };
  },

  toJSON(message: MsgUnregisterClient): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    message.fee !== undefined && (obj.fee = message.fee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnregisterClient>, I>>(
    object: I
  ): MsgUnregisterClient {
    const message = createBaseMsgUnregisterClient();
    message.creator = object.creator ?? '';
    message.address = object.address ?? '';
    message.fee = object.fee ?? '';
    return message;
  },
};

function createBaseMsgUnregisterClientResponse(): MsgUnregisterClientResponse {
  return {};
}

export const MsgUnregisterClientResponse = {
  encode(_: MsgUnregisterClientResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnregisterClientResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnregisterClientResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUnregisterClientResponse {
    return {};
  },

  toJSON(_: MsgUnregisterClientResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnregisterClientResponse>, I>>(
    _: I
  ): MsgUnregisterClientResponse {
    const message = createBaseMsgUnregisterClientResponse();
    return message;
  },
};

function createBaseMsgUnregisterChallenger(): MsgUnregisterChallenger {
  return { creator: '', fee: '' };
}

export const MsgUnregisterChallenger = {
  encode(message: MsgUnregisterChallenger, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.fee !== '') {
      writer.uint32(18).string(message.fee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnregisterChallenger {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnregisterChallenger();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.fee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUnregisterChallenger {
    return {
      creator: isSet(object.creator) ? String(object.creator) : '',
      fee: isSet(object.fee) ? String(object.fee) : '',
    };
  },

  toJSON(message: MsgUnregisterChallenger): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.fee !== undefined && (obj.fee = message.fee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnregisterChallenger>, I>>(
    object: I
  ): MsgUnregisterChallenger {
    const message = createBaseMsgUnregisterChallenger();
    message.creator = object.creator ?? '';
    message.fee = object.fee ?? '';
    return message;
  },
};

function createBaseMsgUnregisterChallengerResponse(): MsgUnregisterChallengerResponse {
  return {};
}

export const MsgUnregisterChallengerResponse = {
  encode(_: MsgUnregisterChallengerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUnregisterChallengerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUnregisterChallengerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUnregisterChallengerResponse {
    return {};
  },

  toJSON(_: MsgUnregisterChallengerResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUnregisterChallengerResponse>, I>>(
    _: I
  ): MsgUnregisterChallengerResponse {
    const message = createBaseMsgUnregisterChallengerResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  GenClient(request: MsgGenClient): Promise<MsgGenClientResponse>;
  GenChallenger(request: MsgGenChallenger): Promise<MsgGenChallengerResponse>;
  ChallengeService(request: MsgChallengeService): Promise<MsgChallengeServiceResponse>;
  UnregisterClient(request: MsgUnregisterClient): Promise<MsgUnregisterClientResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  UnregisterChallenger(request: MsgUnregisterChallenger): Promise<MsgUnregisterChallengerResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.GenClient = this.GenClient.bind(this);
    this.GenChallenger = this.GenChallenger.bind(this);
    this.ChallengeService = this.ChallengeService.bind(this);
    this.UnregisterClient = this.UnregisterClient.bind(this);
    this.UnregisterChallenger = this.UnregisterChallenger.bind(this);
  }
  GenClient(request: MsgGenClient): Promise<MsgGenClientResponse> {
    const data = MsgGenClient.encode(request).finish();
    const promise = this.rpc.request('soarchain.poa.Msg', 'GenClient', data);
    return promise.then((data) => MsgGenClientResponse.decode(new _m0.Reader(data)));
  }

  GenChallenger(request: MsgGenChallenger): Promise<MsgGenChallengerResponse> {
    const data = MsgGenChallenger.encode(request).finish();
    const promise = this.rpc.request('soarchain.poa.Msg', 'GenChallenger', data);
    return promise.then((data) => MsgGenChallengerResponse.decode(new _m0.Reader(data)));
  }

  ChallengeService(request: MsgChallengeService): Promise<MsgChallengeServiceResponse> {
    const data = MsgChallengeService.encode(request).finish();
    const promise = this.rpc.request('soarchain.poa.Msg', 'ChallengeService', data);
    return promise.then((data) => MsgChallengeServiceResponse.decode(new _m0.Reader(data)));
  }

  UnregisterClient(request: MsgUnregisterClient): Promise<MsgUnregisterClientResponse> {
    const data = MsgUnregisterClient.encode(request).finish();
    const promise = this.rpc.request('soarchain.poa.Msg', 'UnregisterClient', data);
    return promise.then((data) => MsgUnregisterClientResponse.decode(new _m0.Reader(data)));
  }

  UnregisterChallenger(request: MsgUnregisterChallenger): Promise<MsgUnregisterChallengerResponse> {
    const data = MsgUnregisterChallenger.encode(request).finish();
    const promise = this.rpc.request('soarchain.poa.Msg', 'UnregisterChallenger', data);
    return promise.then((data) => MsgUnregisterChallengerResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
