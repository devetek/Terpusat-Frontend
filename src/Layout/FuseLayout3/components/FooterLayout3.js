import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

function FooterLayout3(props) {
  const footerTheme = useSelector((data) => data.fuse.settings.footerTheme);

  return (
    <ThemeProvider theme={footerTheme}>
      <AppBar
        id="fuse-footer"
        className="relative z-10"
        color="default"
        style={{ backgroundColor: footerTheme.palette.background.default }}
      >
        <Toolbar className="flex items-center container py-20 px-16 lg:px-24">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <Typography variant="subtitle2">Terpusat</Typography>
              <Typography variant="caption">
                All Right Reserved &copy; {dayjs().year()}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="subtitle2">Info</Typography>
              <Typography variant="caption">
                <ul>
                  <li>
                    <Link to="/tentang" rel="noopener noreferrer">
                      Tentang Terpusat
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog" rel="noopener noreferrer">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/mitra" rel="noopener noreferrer">
                      Menjadi Mitra Brand
                    </Link>
                  </li>
                  <li>
                    <Link to="/karir" rel="noopener noreferrer">
                      Karir
                    </Link>
                  </li>
                </ul>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="subtitle2">Kontak</Typography>
              <Typography variant="caption">
                <ul>
                  <li>Senin-Jumat 09:00 - 17:00</li>
                  <li>
                    Telp.{" "}
                    <a href="https://wa.me/+6289531803699?text=Halo%20terpusat">
                      +62 895-3180-3699
                    </a>
                  </li>
                  <li>
                    Email:{" "}
                    <a href="mailto:prakasa@devetek.com">prakasa@devetek.com</a>
                  </li>
                </ul>
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Typography variant="subtitle2">Temukan Kami</Typography>
              <Grid container spacing={1}>
                <Grid item xs={1} sm={1}>
                  <a
                    href="https://tokopedia.com/terpusat"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="logo-icon"
                      src="assets/images/logos/toped.png"
                      alt="logo"
                    />
                  </a>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <a
                    href="https://shopee.co.id/terpusat"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="logo-icon"
                      src="assets/images/logos/shopee.png"
                      alt="logo"
                    />
                  </a>
                </Grid>
                <Grid item xs={1} sm={1}>
                  <a
                    href="https://www.bukalapak.com/u/terpusat"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <img
                      className="logo-icon"
                      src="assets/images/logos/bl.png"
                      alt="logo"
                    />
                  </a>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography variant="caption">
                    Jakarta: Jl. Bakung No.23 RT 02/RW 12, Kelapa Dua Wetan,
                    Ciracas, Jakarta Timur
                  </Typography>
                  <br />
                  <Typography variant="caption">
                    Surakarta: Jalan Pracimantoro - Wonogiri RT.001 / RW.005,
                    Mlangse Lor, Tubokarto
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default React.memo(FooterLayout3);
