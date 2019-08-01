import React, { useState } from "react";
import Button from "./Button";
import InputBar from "./Input-Bar";
import API from "../Utils/API";
import { useAuth0 } from "../react-auth0-wrapper";


function CreateEventContainer() {

  const [ eventName, setEventName] = useState();
  const [ address, setAddress ] = useState();
  const [ estimatedWaitTime, setEstimatedWaitTime ] = useState();
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return "Please log in to continue to make an event!";
  }

 
    return (
      <div>
        {!user.name ?  null : <h1> {JSON.stringify(user)}</h1>}
        
        <InputBar
          onChange={e => {setEventName(e.target.value)}}
          name="eventName"
          placeholder="Event Name"
        />
        <h2>The event name state is {eventName}</h2>
        <InputBar
          onChange={e => {setAddress(e.target.value)}}
          name="address"
          placeholder="Address"
        />
        <h2>address state is {address}</h2>
        <InputBar
          onChange={e => {setEstimatedWaitTime(e.target.value)}}
          name="estimatedWaitTime"
          placeholder="Estimated Wait Time"
        />
        <h2>wait time state is {estimatedWaitTime}</h2>
       <Button name="Submit" onClick={() => API.createEvent({eventName, address, estimatedWaitTime})} />
       <Button name="Save" onClick={() => API.createUser(user)} />
      </div>
    );
  }


  

  

export default CreateEventContainer;
