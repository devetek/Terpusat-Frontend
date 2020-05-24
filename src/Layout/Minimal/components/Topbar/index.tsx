import React from "react";
import clsx from "clsx";
import { AppBar, Typography, Toolbar } from "@material-ui/core";
import useStyles from "./styles";

export interface TopbarComponentProps {
  className?: any;
  path?: string;
}

const TopbarComponent: React.FunctionComponent<TopbarComponentProps> = ({
  className,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <AppBar
      {...rest}
      className={clsx(classes.root, className)}
      color="primary"
      position="fixed"
    >
      <Toolbar>
        <Typography component="h2" variant="h5" color="inherit" noWrap>
          Terpusat Inc.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopbarComponent;
