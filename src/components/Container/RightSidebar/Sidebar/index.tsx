import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import clsx from "clsx";
import React, { useImperativeHandle, useState } from "react";
import Content from "./Content";
import useStyles from "../styles";

function FusePageSimpleSidebar(props: any, ref: any) {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles();

  useImperativeHandle(ref, () => ({
    toggleSidebar: handleToggleDrawer,
  }));

  const handleToggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Hidden lgUp>
        <Drawer
          variant="temporary"
          anchor={props.position}
          open={isOpen}
          onClose={(ev) => handleToggleDrawer()}
          classes={{
            root: clsx(classes.sidebarWrapper, "permanent"),
            paper: clsx(
              classes.sidebar,
              props.variant,
              props.position === "left"
                ? classes.leftSidebar
                : classes.rightSidebar
            ),
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          container={props.rootRef.current}
          BackdropProps={{
            classes: {
              root: classes.backdrop,
            },
          }}
          style={{ position: "absolute" }}
        >
          <Content {...props} classes={classes} />
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          variant="permanent"
          className={clsx(classes.sidebarWrapper, "permanent")}
          open={isOpen}
          classes={{
            paper: clsx(classes.sidebar, props.variant, classes.rightSidebar, "w-288"),
          }}
        >
          <Content {...props} classes={classes} />
        </Drawer>
      </Hidden>
    </>
  );
}

export default React.forwardRef(FusePageSimpleSidebar);
