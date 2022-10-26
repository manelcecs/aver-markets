import { useState, useEffect } from "react";
import { getActiveEvents } from "../services/markets.service";

// TODO: parametrice API uri to maybe add pagination/query params
const useGetEvents = () => {
    // define hook state
  const [events, setEvents] = useState([]);

  useEffect(async () => {
      // async call to API
    const response = await getActiveEvents();

    // set markets to hook state
    setEvents(response.data.results);
  }, []);

  return events;
};

export default useGetEvents;
