import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import MoneyIcon from "@material-ui/icons/Money";
import SEO from "utils/SEO";
import Card from "components/Card";
import TypeProducts from "./TypeProducts";
import { instagramOne, instagramTwo, instagramThree } from "./mock";
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
          style={{ padding: "0px" }}
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
              withDiff={false}
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
              withDiff={false}
            />
          </Grid>
          <Grid item lg={12} sm={12} xl={12} xs={12}>
            <Card
              title="Terakhir dari Twitter"
              value={`<blockquote class="twitter-tweet"><p lang="in" dir="ltr">Saya menjual Whiskas + Me-... seharga Rp30.000. Dapatkan produk ini hanya di Shopee! <a href="https://t.co/CEpJZkY6r9">https://t.co/CEpJZkY6r9</a> <a href="https://twitter.com/hashtag/ShopeeID?src=hash&amp;ref_src=twsrc%5Etfw">#ShopeeID</a> <a href="https://t.co/FyYZW5IHxU">pic.twitter.com/FyYZW5IHxU</a></p>&mdash; terpusat.com (@Terpusat) <a href="https://twitter.com/Terpusat/status/1262770031995191296?ref_src=twsrc%5Etfw">May 19, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`}
              palette="info"
              color="light"
              withDiff={false}
            />
          </Grid>
        </Grid>
        <Grid item lg={6} sm={12} xl={6} xs={12}>
          <TypeProducts />
        </Grid>
        <Grid item lg={4} sm={12} xl={3} xs={12}>
          <Typography
            variant="h6"
            dangerouslySetInnerHTML={{
              __html: instagramOne,
            }}
          />
        </Grid>
        <Grid item lg={4} sm={12} xl={3} xs={12}>
          <Typography
            variant="h6"
            dangerouslySetInnerHTML={{
              __html: instagramTwo,
            }}
          />
        </Grid>
        <Grid item lg={4} sm={12} xl={3} xs={12}>
          <Typography
            variant="h6"
            dangerouslySetInnerHTML={{
              __html: instagramThree,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
