import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "typeface-muli";
import "utils/i18n";
import { render } from "react-dom";
import App from "./App";
import history from "utils/history";
import { GQL_MAIN_CONFIG } from "config";
import * as serviceWorker from "./serviceWorker";
import { createApolloClient, createApolloBrowser } from "utils/graphql";

import "addons/react-chartjs-2-defaults";
import "assets/css/index.css";

const client = createApolloClient({
  options: {
    queryDeduplication: true,
  },
  link: createApolloBrowser(GQL_MAIN_CONFIG),
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
serviceWorker.register();
