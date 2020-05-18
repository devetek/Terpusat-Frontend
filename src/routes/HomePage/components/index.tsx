import React from "react";
import { Helmet } from "react-helmet-async";
import { Layout } from "antd";

const HomePage = () => {
  return (
    <Layout.Content>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      Home Page
    </Layout.Content>
  );
};

export default HomePage;
