import React from "react";
import { Route, Switch } from "react-router-dom";

import Simulation from "./containers/Simulation";
import NotFound from "./containers/NotFound";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/simulation" component={Simulation} />
        <Route component={NotFound} />
      </Switch>
    );
  }
}
