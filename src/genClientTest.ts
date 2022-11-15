import { SigningStargateClient, StargateClient } from '@cosmjs/stargate';
import { DirectSecp256k1HdWallet, GeneratedType, Registry, OfflineDirectSigner } from '@cosmjs/proto-signing';
import { readFile } from "fs/promises"
import {
    MsgChallengeService,
    MsgGenChallenger,
    MsgGenClient,
    MsgUnregisterChallenger,
    MsgUnregisterClient,
} from './tx';

const main = async () => {
    console.log('Validator Started \n---------------');

    const rpc = '104.248.142.45:26657';
    const admin4Addr = "soar1kmt93s74vmja2fy3ckpv2fae6g70kx2zyq465v"    // I will register this as client from admin1 account

    const runAll = async () => {
        // Connect with admin1
        const getSignerFromMnemonic = async (): Promise<OfflineDirectSigner> => {
            return DirectSecp256k1HdWallet.fromMnemonic((await readFile("./devnet.admin1.mnemonic.key")).toString(), {
                prefix: "soar",
            })
        }
        const signer: OfflineDirectSigner = await getSignerFromMnemonic()
        const walletAddress = (await signer.getAccounts())[0].address
        console.log("Address from signer", walletAddress)


        // Registry
        const registry = new Registry();
        registry.register('/soarchain.poa.MsgGenClient', MsgGenClient);

        const client = await SigningStargateClient.connectWithSigner(rpc, signer, { registry })
        console.log(
            "With signing client, chain id:",
            await client.getChainId(),
            ", height:",
            await client.getHeight()
        )

        // Balance check
        console.log(await client.getAllBalances(walletAddress));

        // Prepare msg
        const sendMsg = {
            typeUrl: '/soarchain.poa.MsgGenClient',
            value: {
                creator: walletAddress,
                address: admin4Addr,
                fee: '25soar',
            },
        };

        // SendAndBroadcast Message
        const res = await client.signAndBroadcast(
            walletAddress,
            [sendMsg],
            {
                amount: [{ denom: 'soar', amount: '500' }],
                gas: '200000',
            },
            'this is the tx memo'
        );

        console.log(res);
    }

    await runAll();
}

main().then(() => {
    console.log('hello');
});
