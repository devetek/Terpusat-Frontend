import Loadable from "@loadable/component";
import { Skeleton } from "antd";
import React from "react";

const LoadableComponent = Loadable(() => import("./components/index"), {
  fallback: <Skeleton />, // what to show during loading
  ssr: true,
});

export default LoadableComponent;
