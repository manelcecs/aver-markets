import React from "react";
import Market from "../components/Market";
import useGetMarkets from "../hooks/useGetMarkets";

const Markets = () => {
  // call the custom hook to retrieve markets information
  const markets = useGetMarkets();

  return (
    <div className="markets-container">
      <h2 className="text-gradient animated text-left">Available markets</h2>
      {markets.map((market) => {
        debugger;
        // each market will generate a market component that receive the market object.
        // each market component will have the DOM key property with the market id.
        return <Market market={market} key={market.id} />;
      })}
    </div>
  );
};

export default Markets;
