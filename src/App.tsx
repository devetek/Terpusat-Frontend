import React from "react";
import { Layout } from "antd";
import { HelmetProvider } from "react-helmet-async";
import { Router } from "react-router-dom";
import Routes from "./routes";
import "./App.css";

export interface AppProps {
  history: any;
}

const App = ({ history }: AppProps): any => {
  return (
    <Layout>
      <HelmetProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </HelmetProvider>
    </Layout>
  );
};

export default App;
