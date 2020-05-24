import React, { useState } from "react";
import clsx from "clsx";
import {
  AppBar,
  Typography,
  Toolbar,
  Badge,
  Hidden,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import InputIcon from "@material-ui/icons/Input";
import { SITES_INFO } from "config";
import useStyles from "./styles";

export interface TopbarComponentProps {
  className?: any;
  path?: string;
  onSidebarOpen: () => void;
}

const TopbarComponent: React.FunctionComponent<TopbarComponentProps> = ({
  className,
  onSidebarOpen,
  ...rest
}) => {
  const classes = useStyles();

  const [notifications] = useState([]);

  return (
    <AppBar {...rest} className={clsx(classes.root, className)}>
      <Toolbar>
        {/* <RouterLink to="/"> */}
        {/* <img alt="Logo" src="/img/logo/sample.svg" /> */}
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          {SITES_INFO.title}.
        </Typography>
        {/* </RouterLink> */}
        <div className={classes.flexGrow} />
        <Hidden mdDown>
          <IconButton color="inherit">
            <Badge
              badgeContent={notifications.length}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton className={classes.signOutButton} color="inherit">
            <InputIcon />
          </IconButton>
        </Hidden>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={onSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default TopbarComponent;
