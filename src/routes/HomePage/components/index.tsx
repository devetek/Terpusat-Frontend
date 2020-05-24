import React from "react";
import Grid from "@material-ui/core/Grid";
import SEO from "utils/SEO";
import Budget from "./Budget";
import useStyles from "./styles";

export interface HomePageProps {
  featuredPosts?: IFeatureItem[];
}

export interface IFeatureItem {
  title?: string;
  description?: string;
  link?: string;
  date?: string;
  image?: string;
  imageTitle?: string;
}

const HomePage: React.FunctionComponent<HomePageProps> = ({
  featuredPosts,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {SEO()}
      <Grid container spacing={4}>
        <Grid item lg={3} sm={6} xl={3} xs={12}>
          <Budget />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
