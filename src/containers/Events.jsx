import React from "react";
import Event from "../components/Event";
import useGetEvents from "../hooks/useGetEvents";

const Events = () => {
  // call the custom hook to retrieve events information
  const events = useGetEvents();

  return (
    <div className="events-container">
      <h2 className="text-gradient animated text-left">Available events</h2>
      {events.map((event) => {
        // each event will generate a event component that receive the event object.
        // each event component will have the DOM key property with the event id.
        return <Event event={event} key={event.id} />;
      })}
    </div>
  );
};

export default Events;
