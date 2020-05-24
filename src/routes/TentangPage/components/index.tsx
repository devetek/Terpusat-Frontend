import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import SEO from "utils/SEO";
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

  const seoProps = {
    title: "Tentang",
    description:
      "Cari tahu lebih banyak tentang Terpusat. Misi, bisnis, perusahaan, dan informasi terbaru mengenai kami di sini",
  };

  return (
    <div>
      {SEO(seoProps)}
      <main>
        <Grid container className={classes.mainGrid}>
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
