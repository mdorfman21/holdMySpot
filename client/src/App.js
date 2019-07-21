import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from './components/NavBar';
import CreateEventContainer from './components/Create-Event-Container';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
         <header>
           <NavBar />
         </header>
        </div>
        <div>
          <CreateEventContainer />
        </div>
      </div>
      
    );
  }
}

export default App;
