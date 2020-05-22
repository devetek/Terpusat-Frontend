import React from "react";
import clsx from "clsx";
import { Typography, Link } from "@material-ui/core";
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
      <Typography variant="body1">
        &copy;{" "}
        <Link component="a" href="https://terpusat.com/">
          Terpusat Inc
        </Link>
        . 2020
      </Typography>
      <Typography variant="caption">
        Pusat belanja, investasi, layanan, informasi nomor 1 di Indonedia.
      </Typography>
    </div>
  );
};

export default FooterComponent;
