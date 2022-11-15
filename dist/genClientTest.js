"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const stargate_1 = require("@cosmjs/stargate");
const proto_signing_1 = require("@cosmjs/proto-signing");
const promises_1 = require("fs/promises");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Validator Started \n---------------');
    const rpc = '104.248.142.45:26657';
    // Connect with admin1
    const getSignerFromMnemonic = () => __awaiter(void 0, void 0, void 0, function* () {
        return proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic((yield (0, promises_1.readFile)("./devnet.admin1.mnemonic.key")).toString(), {
            prefix: "soar",
        });
    });
    const signer = yield getSignerFromMnemonic();
    const admin1 = (yield signer.getAccounts())[0].address;
    console.log("Admin1's address from signer", admin1);
    const signingClient = yield stargate_1.SigningStargateClient.connectWithSigner(rpc, signer);
    console.log("With signing client, chain id:", yield signingClient.getChainId(), ", height:", yield signingClient.getHeight());
});
//# sourceMappingURL=genClientTest.js.map