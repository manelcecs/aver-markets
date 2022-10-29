import { Market, MarketStatus } from "aver-ts";
import { PublicKey } from "@solana/web3.js";

import { getOwnerKeyPair, getAverConnection } from "./aver.service";

export const getAverMarket = async (market) => {

  // check if market is active
  if (market.internal_status !== "active") {
    throw Error(`Market ${market.name} is not 'active' now.`);
  }

  // Owner keyPair
  const ownerKeypair = getOwnerKeyPair();

  // aver client connection
  const client = await getAverConnection();

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

  // return all available markets
  return activePreEventMarkets;
};
