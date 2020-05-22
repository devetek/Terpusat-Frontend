import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";

export interface LayoutComponentProps {
  children: React.ReactNode;
}

const LayoutComponent: React.FunctionComponent<LayoutComponentProps> = ({
  children,
}) => {
  // return <div dangerouslySetInnerHTML={{ __html: copyright }} />;
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth={false}>{children}</Container>
    </Fragment>
  );
};

export default LayoutComponent;
