import React from "react";

import Routes from "./Routes";
import "./App.css";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="body">
          <Routes />
        </div>
      </div>
    );
  }
}
