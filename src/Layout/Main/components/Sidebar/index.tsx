import React from "react";
import clsx from "clsx";
import { Divider, Drawer, ModalProps } from "@material-ui/core";
import useStyles from "./styles";

import { Profile, SidebarNav } from "./components";

export interface SidebarComponentProps {
  open: boolean;
  variant?: "permanent" | "persistent" | "temporary";
  onClose: ModalProps["onClose"];
  className?: string;
}

const SidebarComponent: React.FunctionComponent<SidebarComponentProps> = (
  props
) => {
  const classes = useStyles();
  const { open, variant, onClose, className, ...rest } = props;

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div {...rest} className={clsx(classes.root, className)}>
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav className={classes.nav} />
      </div>
    </Drawer>
  );
};

export default SidebarComponent;
