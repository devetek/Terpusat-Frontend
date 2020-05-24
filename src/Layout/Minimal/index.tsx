import React from "react";

import { Topbar } from "./components";
import useStyles from "./styles";

export interface MinimalLayoutComponentProps {
  children: React.ReactNode;
}

const MinimalLayoutComponent: React.FunctionComponent<MinimalLayoutComponentProps> = ({
  children,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Topbar />
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default MinimalLayoutComponent;
