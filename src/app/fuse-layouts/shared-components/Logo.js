import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { BrowserView, MobileView } from "react-device-detect";
import clsx from "clsx";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .logo-icon": {
      width: 40,
      height: 40,
      transition: theme.transitions.create(["width", "height"], {
        duration: theme.transitions.duration.shortest,
        easing: theme.transitions.easing.easeInOut,
      }),
    },
    "& .react-badge, & .logo-text": {
      transition: theme.transitions.create("opacity", {
        duration: theme.transitions.duration.shortest,
        easing: theme.transitions.easing.easeInOut,
      }),
    },
  },
  reactBadge: {
    backgroundColor: "#121212",
    color: "#61DAFB",
  },
}));

function Logo() {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, "flex items-center")}>
      <BrowserView>
        <img
          className="logo-icon"
          src="assets/images/logos/terpusat.png"
          alt="Terpusat"
        />
      </BrowserView>
      <MobileView>
        <img
          className="logo-icon"
          src="assets/images/logos/terpusat-invers.png"
          alt="Terpusat"
        />
      </MobileView>
      <Typography
        className="text-16 mx-12 font-light logo-text"
        color="inherit"
      >
        Terpusat
      </Typography>
    </div>
  );
}

export default Logo;
