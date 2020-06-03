import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { Main as MainLayout, FuseLayout3 as FuseLayout3Layout } from "Layout";
import RouteWithLayout from "components/RouteWithLayout";
import HomeComponent from "routes/HomePage";
import DashboardComponent from "routes/DashboardPage";
import TentangComponent from "routes/TentangPage";
import ExampleComponent from "routes/ExamplePage";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Redirect exact from="/(dashboard|home)" to="/" />
      <RouteWithLayout
        exact
        path="/"
        layout={FuseLayout3Layout}
        component={DashboardComponent}
      />
      <RouteWithLayout
        exact
        path="/channel"
        layout={MainLayout}
        component={HomeComponent}
      />
      <RouteWithLayout
        exact
        path="/media"
        layout={MainLayout}
        component={TentangComponent}
      />
      <RouteWithLayout
        exact
        path="/news"
        layout={FuseLayout3Layout}
        component={ExampleComponent}
      />
      <RouteWithLayout
        exact
        path="/product"
        layout={MainLayout}
        component={TentangComponent}
      />
      <RouteWithLayout
        exact
        path="/service"
        layout={MainLayout}
        component={TentangComponent}
      />
      <RouteWithLayout
        exact
        path="/member"
        layout={MainLayout}
        component={TentangComponent}
      />
      <RouteWithLayout
        exact
        path="/setting"
        layout={MainLayout}
        component={TentangComponent}
      />
      <RouteWithLayout
        exact
        path="/about"
        layout={MainLayout}
        component={TentangComponent}
      />
      <RouteWithLayout
        exact
        path="/contact"
        layout={MainLayout}
        component={TentangComponent}
      />
    </Switch>
  );
};

export default Routes;
