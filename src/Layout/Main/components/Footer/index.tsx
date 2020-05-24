import React from "react";
import clsx from "clsx";
import { Typography, Link } from "@material-ui/core";
import { HOSTNAME, SITES_INFO } from "config";
import useStyles from "./styles";

export interface FooterComponentProps {
  className?: string;
}

const FooterComponent: React.FunctionComponent<FooterComponentProps> = ({
  className,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography variant="body1" className={clsx(classes.content, className)}>
        &copy;{" "}
        <Link component="a" href={HOSTNAME}>
          {SITES_INFO.title}
        </Link>
        . {SITES_INFO.copyright()}
      </Typography>
      <Typography
        className={clsx(classes.caption, className)}
        variant="caption"
      >
        {SITES_INFO.description}
      </Typography>
    </div>
  );
};

export default FooterComponent;
