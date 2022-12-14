import React from "react";
import Market from "./Market";

const Event = ({ event }) => {
  const markets = event.markets;
  return (
    <div className="market-container">
      <h3>{event.name}</h3>
      {markets.map((market) => {
        return <Market market={market} key={market.pubkey} />;
      })}
    </div>
  );
};

export default Event;
