import React from "react";

import Routes from "./Routes";
import Navigation from "./containers/Navigation";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <Navigation />
        </div>
        <div className="body">
          <Routes />
        </div>
      </div>
    );
  }
}
