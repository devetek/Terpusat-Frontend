import React from "react";
import { Switch, Redirect } from "react-router-dom";
import HomeComponent from "routes/HomePage";
import { Main as MainLayout } from "Layout";
import RouteWithLayout from "components/RouteWithLayout";
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
    </Switch>
  );
};

export default Routes;
