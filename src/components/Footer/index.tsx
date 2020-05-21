import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import useStyles from "./styles";

export interface FooterComponentProps {
  copyright?: string;
  url?: string;
}

const FooterComponent: React.FunctionComponent<FooterComponentProps> = ({
  copyright,
  url,
}) => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Container maxWidth={false}>
        <Typography variant="body2" color="textSecondary" align="right">
          {"©"}
          {new Date().getFullYear()}.
          <Link color="inherit" href={url}>
            {" "}
            {copyright}
          </Link>{" "}
        </Typography>
      </Container>
    </footer>
  );
};

export default FooterComponent;
