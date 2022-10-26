import { useState, useEffect } from "react";
import { getActiveEvents } from "../services/markets.service";

// TODO: parametrice API uri to maybe add pagination/query params
const useGetMarkets = () => {
    // define hook state
  const [markets, setMarkets] = useState([]);

  useEffect(async () => {
      // async call to API
    const response = await getActiveEvents();

    // set markets to hook state
    setMarkets(response.data.results);
  }, []);

  return markets;
};

export default useGetMarkets;
