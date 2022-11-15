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
const tx_1 = require("./tx");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Validator Started \n---------------');
    const rpc = '104.248.142.45:26657';
    // const rpc = 'rpc.sentry-01.theta-testnet.polypore.xyz:26657';
    const walletAddress = 'soar1hpyzkavq74u4tjumacpjcwu9ptdd7cdyqd8kym';
    const runAll = () => __awaiter(void 0, void 0, void 0, function* () {
        const wallet = yield proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic('soul resource flash raise voice grocery gas lobster fork include census hidden employ lunch shield dinosaur crack safe junk toss anxiety boss donate weasel', {
            prefix: 'soar',
        });
        // interface MsgGenChallenger {
        //   creator: string;
        //   stakeAmount: string;
        // }
        // Symbol('MsgGenChallenger')
        // const msgTypes: Array<[string, GeneratedType]>  = [
        //   ["/soarchain.poa.MsgUnregisterClient", MsgUnregisterClient],
        //   ["/soarchain.poa.MsgGenClient", MsgGenClient],
        //   ["/soarchain.poa.MsgChallengeService", MsgChallengeService],
        //   ["/soarchain.poa.MsgGenChallenger", MsgGenChallenger],
        //   ["/soarchain.poa.MsgUnregisterChallenger", MsgUnregisterChallenger],
        // ];
        const registry = new proto_signing_1.Registry();
        registry.register('/soarchain.poa.MsgGenChallenger', tx_1.MsgGenChallenger);
        // console.log({ registry });
        const client = yield stargate_1.SigningStargateClient.connectWithSigner(rpc, wallet, {
            registry,
        });
        // console.log(
        //   'With client, chain id:',
        //   await client.getChainId(),
        //   ', height:',
        //   await client.getHeight()
        // );
        console.log(yield client.getAllBalances(walletAddress));
        const sendMsg = {
            typeUrl: '/soarchain.poa.MsgGenChallenger',
            value: {
                creator: walletAddress,
                stakeAmount: '2000soar',
            },
        };
        // console.log(await wallet.getAccounts());
        const res = yield client.signAndBroadcast(walletAddress, [sendMsg], {
            amount: [{ denom: 'soar', amount: '500' }],
            gas: '200000',
        }, 'this is the tx memo');
        console.log(res);
    });
    yield runAll();
    // interface MsgGenChallenger {
    //   creator: string;
    //   stakeAmount: string;
    // }
});
//159.223.107.178
main().then(() => {
    console.log('hello');
});
//# sourceMappingURL=main.js.map