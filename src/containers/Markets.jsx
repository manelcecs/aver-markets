import React, { useState, useEffect } from "react";
import { getActiveEvents } from "../services/markets.service";

const Markets = () => {
  const [markets, setMarkets] = useState([]);

  useEffect(async () => {
    const response = await getActiveEvents();
    
    setMarkets(response.data.results);
  }, []);

  return (
    <div className="markets-container">
      <h2 className="text-gradient animated text-left">Available markets</h2>
      {markets.map((market) => {
        return <p>{market.name}</p>;
      })}
    </div>
  );
};

export default Markets;
