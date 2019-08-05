import React, { useState, useEffect } from "react";
import API from "../Utils/API";
import Button from "./Button";
import { useAuth0 } from "../react-auth0-wrapper";

function WaitBoard(props) {
  const [events, setEvents] = useState([]);
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return "Please log in to continue to wait for an event!";
  }

  useEffect(() => {
    API.getEvent().then(res => {
      console.log(res.data);
      setEvents(res.data);
    });
  }, []);

  const toBook = e => {
    API.findAndUpdateEvent({ _id: e.target.value }).then(res => {
      window.location.reload();
    });
  };

  if (events.length > 0) {
    return events.map(event => (
      <div key={event._id}>
        <h2>{event.eventName}</h2>
        <h3>Waiting for {event.owner}</h3>
        {event.booked === false ? (
          <Button name="Book Now" onClick={toBook} value={event._id} />
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
