import React from "react";
import { Provider } from "react-redux";
import { ApolloProvider } from "@apollo/react-common";
import { HelmetProvider } from "react-helmet-async";
import { Router } from "react-router-dom";
import Routes from "./routes";
import store from "app/store";

export interface AppProps {
  history: any;
  client: any;
}

const App = ({ history, client }: AppProps): any => {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>
        <HelmetProvider>
          <Router history={history}>
            <Routes />
          </Router>
        </HelmetProvider>
      </ApolloProvider>
    </Provider>
  );
};

export default App;
