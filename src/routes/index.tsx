import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { Main as MainLayout } from "Layout";
import RouteWithLayout from "components/RouteWithLayout";
import HomeComponent from "routes/HomePage";
import TentangComponent from "routes/TentangPage";
// import Header from "components/Header";
// import Footer from "components/Footer";

// const sections = [
//   { title: "Store", url: "https://www.tokopedia.com/terpusat" },
//   { title: "Style", url: "https://www.instagram.com/ulooks_id" },
//   { title: "Techno", url: "https://devetek.com" },
//   { title: "Invest", url: "https://www.facebook.com/TerpusatInvestment" },
//   {
//     title: "Media",
//     url: "https://www.youtube.com/channel/UCi9ueSOWcbgLfb0sCW_BWbA",
//   },
//   {
//     title: "Health",
//     url: "https://www.facebook.com/InformasiKesehatanTerpusat",
//   },
//   { title: "Travel", url: "https://mypermatawisata.com/" },
// ];

const Routes: React.FC = () => {
  return (
    <Switch>
      <Redirect exact from="/(dashboard|home)" to="/" />
      <RouteWithLayout
        exact
        path="/"
        layout={MainLayout}
        component={HomeComponent}
      />
      <RouteWithLayout
        exact
        path="/channel"
        layout={MainLayout}
        component={TentangComponent}
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
        layout={MainLayout}
        component={TentangComponent}
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
