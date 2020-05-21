import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import useStyles from "./styles";

export interface HeaderComponentProps {
  title: string;
  sections?: ISectionItem[];
}

export interface ISectionItem {
  title?: string;
  url?: string;
}

const HeaderComponent: React.FunctionComponent<HeaderComponentProps> = ({
  sections,
  title,
}) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar color="primary" position="relative">
        <Toolbar className={classes.toolbar}>
          {/* <Button size="small" color="secondary" variant="outlined">
            Subscribe
          </Button> */}
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="left"
            noWrap
            className={classes.toolbarTitle}
          >
            {title}
          </Typography>
          <IconButton>
            <SearchIcon color="secondary" />
          </IconButton>
          <Button color="secondary" variant="outlined" size="small">
            Sign up
          </Button>
        </Toolbar>
        <Toolbar
          component="nav"
          variant="dense"
          className={classes.toolbarSecondary}
        >
          {sections &&
            sections.length &&
            sections.map((section) => (
              <Link
                color="inherit"
                noWrap
                key={section.title}
                variant="body2"
                href={section.url}
                className={classes.toolbarLink}
              >
                {section.title}
              </Link>
            ))}
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
};

export default HeaderComponent;
