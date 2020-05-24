import React from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";
import { Avatar, Typography } from "@material-ui/core";
import useStyles from "./styles";

export interface ProfileComponentProps {
  className?: string;
}

const ProfileComponent: React.FunctionComponent<ProfileComponentProps> = (
  props
) => {
  const { className, ...rest } = props;

  const classes = useStyles();

  const user = {
    name: "Prakasa",
    avatar: "/img/avatar/rio.png",
    bio: "Founding Father",
  };

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Avatar
        alt="Person"
        className={classes.avatar}
        component={RouterLink}
        src={user.avatar}
        to="/settings"
      />
      <Typography className={classes.name} variant="h4">
        {user.name}
      </Typography>
      <Typography className={classes.bio} variant="body2">
        {user.bio}
      </Typography>
    </div>
  );
};

export default ProfileComponent;
