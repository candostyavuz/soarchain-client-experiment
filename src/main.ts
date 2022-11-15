import { SigningStargateClient, StargateClient } from '@cosmjs/stargate';

import { DirectSecp256k1HdWallet, GeneratedType, Registry } from '@cosmjs/proto-signing';
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
  // const rpc = 'rpc.sentry-01.theta-testnet.polypore.xyz:26657';
  const walletAddress = 'soar1hpyzkavq74u4tjumacpjcwu9ptdd7cdyqd8kym';

  const runAll = async () => {
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
      'soul resource flash raise voice grocery gas lobster fork include census hidden employ lunch shield dinosaur crack safe junk toss anxiety boss donate weasel',
      {
        prefix: 'soar',
      }
    );

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

    const registry = new Registry();
    registry.register('/soarchain.poa.MsgGenChallenger', MsgGenChallenger);
    // console.log({ registry });

    const client = await SigningStargateClient.connectWithSigner(rpc, wallet, {
      registry,
    });
    // console.log(
    //   'With client, chain id:',
    //   await client.getChainId(),
    //   ', height:',
    //   await client.getHeight()
    // );

    console.log(await client.getAllBalances(walletAddress));

    const sendMsg = {
      typeUrl: '/soarchain.poa.MsgGenChallenger',
      value: {
        creator: walletAddress,
        stakeAmount: '2000soar',
      },
    };

    // console.log(await wallet.getAccounts());

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
  };

  await runAll();

  // interface MsgGenChallenger {
  //   creator: string;
  //   stakeAmount: string;
  // }
};
//159.223.107.178

main().then(() => {
  console.log('hello');
});
