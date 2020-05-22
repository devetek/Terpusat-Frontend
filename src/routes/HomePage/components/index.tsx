import React from "react";
import { loader } from "graphql.macro";
import { Helmet } from "react-helmet-async";
import { useQuery } from "@apollo/react-hooks";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import FeaturedPost from "./FeaturedPost";
import useStyles from "./styles";
import mockup from "./../mockup/feature-post.json";

const MenuListQuery = loader("../queries/menus.graphql");

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
  const { loading, data: dataMenu } = useQuery(MenuListQuery, {
    fetchPolicy: "network-only",
  });

  return (
    <div>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <main>
        <Grid container spacing={4}>
          {!loading && JSON.stringify(dataMenu)}
          {/* {featuredPosts &&
            featuredPosts.length &&
            featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))} */}
          {mockup &&
            mockup.length &&
            mockup.map((post) => <FeaturedPost key={post.title} post={post} />)}
        </Grid>
        <Grid container spacing={5} className={classes.mainGrid}>
          {/* <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> */}
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography variant="h6" gutterBottom>
              Construction on progress.... Stay with Terpusat, wait our gift
              away ya!
            </Typography>
            <Divider />
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default HomePage;
