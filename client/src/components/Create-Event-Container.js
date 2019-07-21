import React from 'react';
import Button from './Button';
import InputBar from './Input-Bar';
import API from '../Utils/API';

class CreateEventContainer extends React.Component {
  state={
    eventName: '',

  };

  inputChange = e => {
    const value = e.target.value
    const name = e.target.name
    this.setState({ [name]: value})
  };

  submitEvent = () => {
    const eventName = this.state.eventName;
    API.createEvent({eventName})
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <InputBar onChange={this.inputChange} name='eventName' />
        <Button name='Submit' onClick={this.submitEvent} />
      </div>
    )
  }
}

export default CreateEventContainer;