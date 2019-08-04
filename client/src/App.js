import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import CreateEventContainer from "./components/Create-Event-Container";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";
import WaitBoard from "./components/WaitBoard";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <header>
              <NavBar />
            </header>
          </div>
          <Switch>
            <Route exact path="/" component={CreateEventContainer} />
            <PrivateRoute exact path="/profile" component={Profile} />
            <Route exact path="/events" component={WaitBoard} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
