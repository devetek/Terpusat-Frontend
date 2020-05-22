import React from "react";
import { Route, RouteProps } from "react-router-dom";

export interface RouteWithLayoutComponentProps extends RouteProps {
  layout: any;
  component: any;
  path: string;
  exact?: boolean;
}

const RouteWithLayoutComponent: React.FunctionComponent<RouteWithLayoutComponentProps> = ({
  layout: Layout,
  component: Component,
  path,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};

export default RouteWithLayoutComponent;
