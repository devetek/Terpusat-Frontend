import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Router } from "react-router-dom";
import Routes from "./routes";

export interface AppProps {
  history: any;
}

const App = ({ history }: AppProps): any => {
  return (
    <HelmetProvider>
      <Router history={history}>
        <Routes />
      </Router>
    </HelmetProvider>
  );
};

export default App;
