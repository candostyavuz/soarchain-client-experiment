"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgUnregisterChallengerResponse = exports.MsgUnregisterChallenger = exports.MsgUnregisterClientResponse = exports.MsgUnregisterClient = exports.MsgChallengeServiceResponse = exports.MsgChallengeService = exports.MsgGenChallengerResponse = exports.MsgGenChallenger = exports.MsgGenClientResponse = exports.MsgGenClient = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = 'soarchain.poa';
function createBaseMsgGenClient() {
    return { creator: '', address: '', fee: '' };
}
exports.MsgGenClient = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    fromJSON(object) {
        return {
            creator: isSet(object.creator) ? String(object.creator) : '',
            address: isSet(object.address) ? String(object.address) : '',
            fee: isSet(object.fee) ? String(object.fee) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.address !== undefined && (obj.address = message.address);
        message.fee !== undefined && (obj.fee = message.fee);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgGenClient();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : '';
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : '';
        message.fee = (_c = object.fee) !== null && _c !== void 0 ? _c : '';
        return message;
    },
};
function createBaseMsgGenClientResponse() {
    return {};
}
exports.MsgGenClientResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgGenClientResponse();
        return message;
    },
};
function createBaseMsgGenChallenger() {
    return { creator: '', stakeAmount: '' };
}
exports.MsgGenChallenger = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.stakeAmount !== '') {
            writer.uint32(18).string(message.stakeAmount);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    fromJSON(object) {
        return {
            creator: isSet(object.creator) ? String(object.creator) : '',
            stakeAmount: isSet(object.stakeAmount) ? String(object.stakeAmount) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.stakeAmount !== undefined && (obj.stakeAmount = message.stakeAmount);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgGenChallenger();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : '';
        message.stakeAmount = (_b = object.stakeAmount) !== null && _b !== void 0 ? _b : '';
        return message;
    },
};
function createBaseMsgGenChallengerResponse() {
    return {};
}
exports.MsgGenChallengerResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgGenChallengerResponse();
        return message;
    },
};
function createBaseMsgChallengeService() {
    return { creator: '', challengeeAddress: '', challengeResult: '' };
}
exports.MsgChallengeService = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    fromJSON(object) {
        return {
            creator: isSet(object.creator) ? String(object.creator) : '',
            challengeeAddress: isSet(object.challengeeAddress) ? String(object.challengeeAddress) : '',
            challengeResult: isSet(object.challengeResult) ? String(object.challengeResult) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.challengeeAddress !== undefined && (obj.challengeeAddress = message.challengeeAddress);
        message.challengeResult !== undefined && (obj.challengeResult = message.challengeResult);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgChallengeService();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : '';
        message.challengeeAddress = (_b = object.challengeeAddress) !== null && _b !== void 0 ? _b : '';
        message.challengeResult = (_c = object.challengeResult) !== null && _c !== void 0 ? _c : '';
        return message;
    },
};
function createBaseMsgChallengeServiceResponse() {
    return {};
}
exports.MsgChallengeServiceResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgChallengeServiceResponse();
        return message;
    },
};
function createBaseMsgUnregisterClient() {
    return { creator: '', address: '', fee: '' };
}
exports.MsgUnregisterClient = {
    encode(message, writer = minimal_1.default.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    fromJSON(object) {
        return {
            creator: isSet(object.creator) ? String(object.creator) : '',
            address: isSet(object.address) ? String(object.address) : '',
            fee: isSet(object.fee) ? String(object.fee) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.address !== undefined && (obj.address = message.address);
        message.fee !== undefined && (obj.fee = message.fee);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseMsgUnregisterClient();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : '';
        message.address = (_b = object.address) !== null && _b !== void 0 ? _b : '';
        message.fee = (_c = object.fee) !== null && _c !== void 0 ? _c : '';
        return message;
    },
};
function createBaseMsgUnregisterClientResponse() {
    return {};
}
exports.MsgUnregisterClientResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUnregisterClientResponse();
        return message;
    },
};
function createBaseMsgUnregisterChallenger() {
    return { creator: '', fee: '' };
}
exports.MsgUnregisterChallenger = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.fee !== '') {
            writer.uint32(18).string(message.fee);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    fromJSON(object) {
        return {
            creator: isSet(object.creator) ? String(object.creator) : '',
            fee: isSet(object.fee) ? String(object.fee) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.fee !== undefined && (obj.fee = message.fee);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseMsgUnregisterChallenger();
        message.creator = (_a = object.creator) !== null && _a !== void 0 ? _a : '';
        message.fee = (_b = object.fee) !== null && _b !== void 0 ? _b : '';
        return message;
    },
};
function createBaseMsgUnregisterChallengerResponse() {
    return {};
}
exports.MsgUnregisterChallengerResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
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
    fromJSON(_) {
        return {};
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = createBaseMsgUnregisterChallengerResponse();
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.GenClient = this.GenClient.bind(this);
        this.GenChallenger = this.GenChallenger.bind(this);
        this.ChallengeService = this.ChallengeService.bind(this);
        this.UnregisterClient = this.UnregisterClient.bind(this);
        this.UnregisterChallenger = this.UnregisterChallenger.bind(this);
    }
    GenClient(request) {
        const data = exports.MsgGenClient.encode(request).finish();
        const promise = this.rpc.request('soarchain.poa.Msg', 'GenClient', data);
        return promise.then((data) => exports.MsgGenClientResponse.decode(new minimal_1.default.Reader(data)));
    }
    GenChallenger(request) {
        const data = exports.MsgGenChallenger.encode(request).finish();
        const promise = this.rpc.request('soarchain.poa.Msg', 'GenChallenger', data);
        return promise.then((data) => exports.MsgGenChallengerResponse.decode(new minimal_1.default.Reader(data)));
    }
    ChallengeService(request) {
        const data = exports.MsgChallengeService.encode(request).finish();
        const promise = this.rpc.request('soarchain.poa.Msg', 'ChallengeService', data);
        return promise.then((data) => exports.MsgChallengeServiceResponse.decode(new minimal_1.default.Reader(data)));
    }
    UnregisterClient(request) {
        const data = exports.MsgUnregisterClient.encode(request).finish();
        const promise = this.rpc.request('soarchain.poa.Msg', 'UnregisterClient', data);
        return promise.then((data) => exports.MsgUnregisterClientResponse.decode(new minimal_1.default.Reader(data)));
    }
    UnregisterChallenger(request) {
        const data = exports.MsgUnregisterChallenger.encode(request).finish();
        const promise = this.rpc.request('soarchain.poa.Msg', 'UnregisterChallenger', data);
        return promise.then((data) => exports.MsgUnregisterChallengerResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=tx.js.map