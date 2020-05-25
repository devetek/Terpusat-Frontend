import React from "react";
import Grid from "@material-ui/core/Grid";
import MoneyIcon from "@material-ui/icons/Money";
import SEO from "utils/SEO";
import Card from "components/Card";
import TypeProducts from "./TypeProducts";
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
      <Grid container spacing={2}>
        <Grid
          container
          item
          spacing={2}
          lg={6}
          sm={12}
          xl={6}
          xs={12}
          className={classes.leftRoot}
        >
          <Grid
            item
            lg={6}
            sm={12}
            xl={6}
            xs={12}
            className={classes.leftContentTop}
          >
            <Card
              title="Harga Emas per Gram"
              value="IDR 1.000.000"
              icon={MoneyIcon}
              palette="info"
              color="main"
            />
          </Grid>
          <Grid
            item
            lg={6}
            sm={12}
            xl={6}
            xs={12}
            className={classes.leftContentTop}
          >
            <Card
              title="Harga Perak per Gram"
              value="IDR 300.000"
              icon={MoneyIcon}
              palette="error"
              color="dark"
            />
          </Grid>
          <Grid item lg={12} sm={12} xl={12} xs={12}>
            <Card
              title="Terakhir dat Twitter"
              value="Hi terpusat fans club, hari ini kita mau ada giveaway lho ya, jangan sampai kelewatan"
              palette="info"
              color="light"
              withDiff={false}
            />
          </Grid>
        </Grid>
        <Grid item lg={6} sm={12} xl={6} xs={12}>
          <TypeProducts />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
