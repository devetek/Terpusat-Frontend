import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import HomeComponent from "routes/HomePage";
import Layout from "components/Layout";
import Header from "components/Header";
import Footer from "components/Footer";

const sections = [
  { title: "Store", url: "https://www.tokopedia.com/terpusat" },
  { title: "Style", url: "https://www.instagram.com/ulooks_id" },
  { title: "Techno", url: "https://devetek.com" },
  { title: "Invest", url: "https://www.facebook.com/TerpusatInvestment" },
  {
    title: "Media",
    url: "https://www.youtube.com/channel/UCi9ueSOWcbgLfb0sCW_BWbA",
  },
  {
    title: "Health",
    url: "https://www.facebook.com/InformasiKesehatanTerpusat",
  },
  { title: "Travel", url: "https://mypermatawisata.com/" },
];

const Routes: React.FC = () => {
  return (
    <Fragment>
      <Layout>
        <Header title="Terpusat Inc." sections={sections}></Header>
        <Switch>
          <Route exact path="/" component={HomeComponent} />
          <Route exact path="/tentang" component={HomeComponent} />
        </Switch>
      </Layout>
      <Footer copyright="Terpusat Inc" url="https://terpusat.com"></Footer>
    </Fragment>
  );
};

export default Routes;
