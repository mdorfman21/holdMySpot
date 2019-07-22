import React from "react";
import Button from "./Button";
import InputBar from "./Input-Bar";
import API from "../Utils/API";

class CreateEventContainer extends React.Component {
  state = {
    eventName: "",
    address: "",
    estimatedWaitTime: 0
  };

  inputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({ [name]: value });
  };

  submitEvent = () => {
    const address = this.state.address;
    const estimatedWaitTime = this.state.estimatedWaitTime;
    const eventName = this.state.eventName;
    const eventObject = { address, estimatedWaitTime, eventName };
    API.createEvent({ eventObject });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <InputBar onChange={this.inputChange} name="eventName" />
        <InputBar onChange={this.inputChange} name="address" />
        <InputBar onChange={this.inputChange} name="estimatedWaitTime" />
        <Button name="Submit" onClick={this.submitEvent} />
      </div>
    );
  }
}

export default CreateEventContainer;
