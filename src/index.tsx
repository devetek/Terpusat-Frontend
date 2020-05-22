import { createBrowserHistory } from "history";
import { render } from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createApolloClient, createApolloBrowser } from "utils/graphql";

const history = createBrowserHistory();

const client = createApolloClient({
  options: {
    queryDeduplication: true,
  },
  link: createApolloBrowser({
    url: "https://outletcyber.net/terpusat/graphql",
    retry: {
      initialDelay: 3000,
      maxAttempts: 5,
    },
  }),
});

const bootstrap = () => {
  const container = document.getElementById("root");
  const reactDOM = render;
  const props = { history, client };

  reactDOM(App(props), container);
};

bootstrap();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
