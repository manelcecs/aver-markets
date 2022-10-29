import {
  AverClient,
  SolanaNetwork,
  AVER_PROGRAM_IDS,
  Market,
  MarketStatus,
  getSolanaEndpoint,
} from "aver-ts";
import { Connection, PublicKey, Keypair } from "@solana/web3.js";
import bs58 from "bs58";

import * as env from "../environment.dev.json";

export const getOwnerKeyPair = () => {
    //obtaing wallet secret from env file and decode it
  const secretKey = bs58.decode(env.wallet_key);
   // create Keypair
  const ownerKeypair = Keypair.fromSecretKey(secretKey);
  return ownerKeypair;
};

export const getAverConnection = async (ownerKeypair) => {
  // client connection options
  const opts = { preflightCommitment: "confirmed" };

  //conection obj
  const solanaEndpoint = getSolanaEndpoint(SolanaNetwork.Devnet);
  const connection = new Connection(solanaEndpoint, "confirmed");

  //client obj
  return await AverClient.loadAverClient(
    connection,
    SolanaNetwork.Devnet,
    ownerKeypair,
    opts,
    AVER_PROGRAM_IDS
  );
};
