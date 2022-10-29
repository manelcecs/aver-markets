import React from "react";
import { getAverMarket } from "../services/averMarkets.service";

const Market = ({ market }) => {
  const outcomes = market.outcomes;
  const marketInternalStatus = market.internal_status;
  const marketPubkey = market.pubkey;
  const handleOnClick = async () => {
    console.log(`Selected market ${market.name} with pubkey ${marketPubkey}`);
    
    const selectedMarket = await getAverMarket(market);
    debugger;
    printMarketInfo(selectedMarket);
  };

  return (
    <div className="market-container" onClick={handleOnClick}>
      <p>
        {market.name}{" "}
        <strong className={marketInternalStatus}>{marketInternalStatus}</strong>
      </p>
    </div>
  );
};

const printMarketInfo = (market) =>{
  // console.log market data or specific properties
console.log("-".repeat(10))
console.log(`Market ${market?.pubkey} loaded...`)
console.log(`Market name: ${market?.name}`)
market?.outcomeNames.map((o, i) => {
  console.log(` - ${i} - ${o}`)
})
console.log("-".repeat(10))
console.log("Market status:")
console.log(market.marketStatus)

// console.log one or more of the orderbooks or orderbook properties from memory
if (!market.orderbooks || !market.orderbooks[0])
  throw new Error("Orderbooks don't exist")

const outcome1Orderbook = market.orderbooks[0]
console.log("Best Ask Price", outcome1Orderbook.getBestAskPrice(true))
console.log("Best Bid Price", outcome1Orderbook.getBestBidPrice(true))
}

export default Market;
