import React from "react";
import { ApolloProvider } from "@apollo/react-common";
import { HelmetProvider } from "react-helmet-async";
import { Router } from "react-router-dom";
import Routes from "./routes";

export interface AppProps {
  history: any;
  client: any;
}

const App = ({ history, client }: AppProps): any => {
  return (
    <ApolloProvider client={client}>
      <HelmetProvider>
        <Router history={history}>
          <Routes />
        </Router>
      </HelmetProvider>
    </ApolloProvider>
  );
};

export default App;
