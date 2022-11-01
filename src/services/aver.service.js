import {
  AverClient,
  SolanaNetwork,
  AVER_PROGRAM_IDS,
  getSolanaEndpoint,
} from "aver-ts";
import { Connection, Keypair } from "@solana/web3.js";
import bs58 from "bs58";

import { appContext } from "../components/App";

import * as env from "../environment.dev.json";

export const getOrCreateOwnerKeyPair = () => {
  //obtaing wallet secret from env file and decode it
  const secretKey = bs58.decode(env.wallet_key);
  // create Keypair
  const ownerKeypair = Keypair.fromSecretKey(secretKey);

  appContext.owner_keypair = ownerKeypair;
  return ownerKeypair;
};

export const getOrCreateAverConnection = async (ownerKeypair) => {
  const contextAverConnection = appContext.client;

  if (contextAverConnection) {
    return contextAverConnection;
  }

  // client connection options
  const opts = { preflightCommitment: "confirmed" };

  //conection obj
  const connection = getOrCreateRPCConnection();

  //client obj
  const averClient = await AverClient.loadAverClient(
    connection,
    SolanaNetwork.Devnet,
    appContext.owner_keypair,
    opts,
    AVER_PROGRAM_IDS
  );

  appContext.client = averClient;

  return averClient;
};

export const getOrCreateRPCConnection = () => {
  return appContext.connection
    ? appContext.connection
    : new Connection(getSolanaEndpoint(SolanaNetwork.Devnet), "confirmed");
};
