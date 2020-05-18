import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout } from "antd";
import HomeComponent from "./HomePage";
import Header from "components/Header";
import Footer from "components/Footer";

const Routes: React.FC = () => {
  return (
    <Fragment>
      <Header title="Terpusat"></Header>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/demo" component={HomeComponent} />
        </Switch>
        <Footer
          copyright={`Terpusat Inc. &copy;2020 Powered by Terpusat Design`}
        ></Footer>
      </Layout>
    </Fragment>
  );
};

export default Routes;
