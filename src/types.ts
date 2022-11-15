export interface MsgGenChallenger {
  creator: string;
  stakeAmount: string;
}

export interface MsgGenClient {
  creator: string;
  address: string;
  fee: string;
}

export interface MsgChallengeService {
  creator: string;
  challengeeAddress: string;
  challengeResult: string;
}

export interface MsgUnregisterClient {
  creator: string;
  address: string;
  fee: string;
}

export interface MsgUnregisterChallenger {
  creator: string;
  fee: string;
}