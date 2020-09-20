import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";

export default class Navigation extends React.Component {
  render() {
    return (
      <div className="Navigation">
        <Link to="/" className="link">
          Back
        </Link>
        <Link to="/simulation" className="link">
          Simulation
        </Link>
      </div>
    );
  }
}
