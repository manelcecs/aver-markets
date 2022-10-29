import  React, {useState } from "react";
import { getAverMarket } from "../services/averMarkets.service";
import SelectedMarket from "./SelectedMarket";

const Market = ({ market }) => {
  const [open, setOpen] = useState(false);
  debugger;
  const [selectedMarket, setSelectedMarket] = useState(null);

  const marketInternalStatus = market.internal_status;
  const marketPubkey = market.pubkey;
  const handleOnClick = async () => {
    console.log(`Selected market ${market.name} with pubkey ${marketPubkey}`);

    setSelectedMarket({"name":'Dummy market', "status": 'active', "orderbooks": [
      {"best_ask_price": 12, "best_ask_bid": 12.1}
    ],
  "outcomeNames": [
    "Team 1 WINS", "Team 2 WINS", "DRAW :/"
  ]})
    //setSelectedMarket(await getAverMarket(market));

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="market-container" onClick={handleOnClick}>
      <p>
        {market.name}{" "}
        <strong className={marketInternalStatus}>{marketInternalStatus}</strong>
      </p>
      <SelectedMarket
        market={selectedMarket}
        onClose={handleClose}
        open={open}
      />
    </div>
  );
};

const printMarketInfo = (market) => {
  // console.log market data or specific properties
  console.log("-".repeat(10));
  console.log(`Market ${market?.pubkey} loaded...`);
  console.log(`Market name: ${market?.name}`);
  market?.outcomeNames.map((o, i) => {
    console.log(` - ${i} - ${o}`);
  });
  console.log("-".repeat(10));
  console.log("Market status:");
  console.log(market.marketStatus);

  // console.log one or more of the orderbooks or orderbook properties from memory
  if (!market.orderbooks || !market.orderbooks[0])
    throw new Error("Orderbooks don't exist");

  debugger;
  const outcome1Orderbook = market.orderbooks[0];
  console.log("Best Ask Price", outcome1Orderbook.getBestAskPrice(true));
  console.log("Best Bid Price", outcome1Orderbook.getBestBidPrice(true));
};

export default Market;
