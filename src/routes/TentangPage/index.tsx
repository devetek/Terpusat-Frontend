import React from "react";
import Loadable from "@loadable/component";

const LoadableComponent = Loadable(
  () => import(/* webpackChunkName: "tentang-page" */ "./components/index"),
  {
    fallback: <></>, // what to show during loading
    ssr: true,
  }
);

export default LoadableComponent;
