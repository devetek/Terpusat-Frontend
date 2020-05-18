import React from "react";
import { Route, Switch } from "react-router-dom";
import HomeComponent from "./HomePage";
import Header from "components/Header";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Header title="Terpusat"></Header>
      <Route exact path="/" component={HomeComponent} />
      <Route exact path="/demo" component={HomeComponent} />
    </Switch>
  );
};

export default Routes;
