import React from "react";
import { Route, Switch } from "react-router-dom";

import NotFound from "./containers/NotFound";

export default class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route component={NotFound} />
      </Switch>
    );
  }
}