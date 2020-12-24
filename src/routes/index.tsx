import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { FuseLayout3 as FuseLayout3Layout } from "Layout";
import RouteWithLayout from "components/RouteWithLayout";
// import HomeComponent from "routes/HomePage";
import DashboardComponent from "routes/DashboardPage";
import ProductDetailComponent from "routes/ProductDetailPage";
// import TentangComponent from "routes/TentangPage";
// import ExampleComponent from "routes/ExamplePage";

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
        path="/tentang"
        layout={FuseLayout3Layout}
        component={DashboardComponent}
      />
      <RouteWithLayout
        exact
        path="/visi"
        layout={FuseLayout3Layout}
        component={DashboardComponent}
      />
      <RouteWithLayout
        exact
        path="/lokasi"
        layout={FuseLayout3Layout}
        component={DashboardComponent}
      />
      <RouteWithLayout
        exact
        path="/divisi"
        layout={FuseLayout3Layout}
        component={DashboardComponent}
      />
      <RouteWithLayout
        exact
        path="/layanan/branding-produk"
        layout={FuseLayout3Layout}
        component={DashboardComponent}
      />
      <RouteWithLayout
        exact
        path="/layanan/design"
        layout={FuseLayout3Layout}
        component={DashboardComponent}
      />
      <RouteWithLayout
        exact
        path="/layanan/system"
        layout={FuseLayout3Layout}
        component={DashboardComponent}
      />
      <RouteWithLayout
        exact
        path="/layanan/marketing"
        layout={FuseLayout3Layout}
        component={DashboardComponent}
      />
      <RouteWithLayout
        exact
        path="/kategori"
        layout={FuseLayout3Layout}
        component={DashboardComponent}
      />
      <RouteWithLayout
        exact
        path="/mitra"
        layout={FuseLayout3Layout}
        component={DashboardComponent}
      />
      <RouteWithLayout
        exact
        path="/karir"
        layout={FuseLayout3Layout}
        component={DashboardComponent}
      />
      <RouteWithLayout
        exact
        path="/blog"
        layout={FuseLayout3Layout}
        component={DashboardComponent}
      />
      <RouteWithLayout
        exact
        path="/kontak"
        layout={FuseLayout3Layout}
        component={DashboardComponent}
      />
      <RouteWithLayout path="/d/:domain/:product" layout={FuseLayout3Layout} component={ProductDetailComponent} />
    </Switch>
  );
};

export default Routes;
