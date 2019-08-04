import React, { useState, useEffect } from "react";
import API from "../Utils/API";
import Button from "./Button";

function WaitBoard(props) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    API.getEvent().then(res => {
      console.log(res.data);
      setEvents(res.data);
    });
  }, []);

  if (events.length > 0) {
    return events.map(event => (
      <div key={event._id}>
        <h2>{event.eventName}</h2>
        <h3>Waiting for {event.owner}</h3>
        {event.booked === false ? (
          <Button name="Book Now" />
        ) : (
          <Button name="Booked" />
        )}
      </div>
    ));
  } else {
    return (
      <div>
        <h2>hi</h2>
      </div>
    );
  }
}

export default WaitBoard;
