import { AverClient, SolanaNetwork, AVER_PROGRAM_IDS, Market, MarketStatus } from "aver-ts";
import { Connection, PublicKey, Keypair } from "@solana/web3.js";
import bs58 from 'bs58';

export const getAverMarket = async (market) => {
  if (market.internal_status !== "active") {
    throw Error(`Market ${market.name} is not 'active' now.`);
  }

  // client connection options
  const opts = { preflightCommitment: "confirmed" };

  //conection obj
  // workaround -> aver.getSolanaEndpoint(SolanaNetwork.Devnet) not working
  const solanaEndpoint = "https://api.devnet.solana.com";
  const connection = new Connection(solanaEndpoint, "confirmed");

  // Owner keyPair
  const secretKey = bs58.decode(
    "2qP527Hw6iC4J3w7B63dVg9dnKsZfwmkVeAxgmB4UqEcVC4KzV6H6u84qVxBdHwc54pPHgbBhwP5Prj8M9j3rRUk"
    )
  const ownerKeypair = Keypair.fromSecretKey(secretKey)

  //client obj
  const client = await AverClient.loadAverClient(
    connection,
    SolanaNetwork.Devnet,
    ownerKeypair,
    opts,
    AVER_PROGRAM_IDS
  );

  // funding wallet with 1 SOL
  await client?.requestLamportAirdrop(1_000_000, ownerKeypair.publicKey);

  // since market is active - we can build PublicKey
  const marketPubkey = new PublicKey(market.pubkey);

  // obtain markets from solana bchain
  const loadedMarkets = await Market.loadMultiple(client, [marketPubkey]);

  //Ensure market is in ACTIVE_PRE_EVENT status so we can place orders on it
  //Also make sure the market is not past its trading cease time
  const activePreEventMarkets = loadedMarkets
    .filter((m) => m?.marketStatus === MarketStatus.ActivePreEvent)
    .filter((m) =>
      m?.tradingCeaseTime ? m?.tradingCeaseTime > new Date(Date.now()) : true
    );

  // get first
  let averMarket = activePreEventMarkets[0];
  return averMarket;
};
