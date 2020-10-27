import React from "react";
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import Pet from "./Layanan/Pet";
import Makanan from "./Layanan/Makanan";
import Fashion from "./Layanan/Fashion";
import Tech from "./Layanan/Tech";
import Invest from "./Layanan/Invest";
import Liburan from "./Layanan/Liburan";
import Other from "./Layanan/Other";
import Member from "./Dvisi/Member";
import useStyles from "./styles";

export interface ContentComponentProps {
  activeContent: number;
  className?: any;
}

const ContentComponent = (props: ContentComponentProps) => {
  const classes = useStyles(props);
  const { activeContent } = props;

  return (
    <>
      {activeContent === 0 && (
        <Grid container>
          <Grid item xs={4} sm={2}>
            <div className="widget flex w-full p-12">
              <Pet />
            </div>
          </Grid>
          <Grid item xs={4} sm={2}>
            <div className="widget flex w-full p-12">
              <Makanan />
            </div>
          </Grid>
          <Grid item xs={4} sm={2}>
            <div className="widget flex w-full p-12">
              <Tech />
            </div>
          </Grid>
          <Grid item xs={4} sm={2}>
            <div className="widget flex w-full p-12">
              <Fashion />
            </div>
          </Grid>
          <Grid item xs={4} sm={2}>
            <div className="widget flex w-full p-12">
              <Invest />
            </div>
          </Grid>
          <Grid item xs={4} sm={2}>
            <div className="widget flex w-full p-12">
              <Liburan />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="widget flex w-full p-12">
              {/* <Other /> */}
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <div className="widget flex w-full p-12">
                    <Typography variant="h6">Terbaru</Typography>
                  </div>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <Other />
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      )
      }
      {
        activeContent === 1 && (
          <div className="flex flex-wrap">
            <div className="widget flex w-full p-12">
              <Member />
            </div>
          </div>
        )
      }
      {
        activeContent === 2 && (
          <div className="flex flex-wrap">
            <div className="p-16">
              <Card className={clsx(classes.root, props.className)}>
                <div className={clsx(classes.lineHeight, "flex items-center")}>
                  <Typography className="text-14 mx-8">
                    <p>
                      Terpusat adalah pusat bisnis lokal yang berdiri sejak 2012.
                      Dimulai dari divisi teknologi kami yang bergerak di bidang
                      pelayanan teknologi yang dipromotori oleh Nedya Amrih Prakasa dan
                      Muhammad Arifin. Devetek adalah lini bisnis terpusat di bidang
                      teknologi. Dengan pengalaman lebih dari 5 tahun. Dan berhasil
                      membantu memecahkan masalah dari berbagai lini bisnis dan
                      pemerintahan dengan pendekatan teknologi.
            </p>
                    <p>
                      Selain membantu kehidupan dengan pendekatan teknologi, devetek
                      telah mampu memberikan layanan konsultasi teknologi untuk
                      kebutuhan sistem guna memberikan manfaat berlebih berupa efisiensi
                      dan efektifitas.
            </p>
                    <p>
                      Bergerak di tahun 2016, dengan telah suksesnya layanan teknologi
                      kami. Terpusat mulai melebarkan sayap ke bisnis penyediaan barang.
                      Dengan pengetahuan yang mumpuni di bidang teknologi, kami dengan
                      cekatan mampu beradaptasi dengan hadirnya platform-platform
                      e-commerce dan memanfaatkannya sebagai lahan bisnis baru.
            </p>
                    <p>
                      Dengan keterbatasan sumberdaya, dan melewati berbagai situasi,
                      terpusat mampu menjalankan mempertahankan bisnis baru ini dengan
                      tim Nedya Amrih Prakasa dan Tumiran. Barang yang kami sediakan
                      untuk saat ini fokus di bidang perikanan dan peternakan.
            </p>
                    <p>
                      Di awal tahun 2020, terpusat kembali melebarkan sayapnya di lini
                      bisnis fashion, khususnya fashion muslim. Digawangi oleh Nedya
                      Amrih Prakasa dan Anggi Ranggita Asri. Saat ini terpusat telah
                      memiliki brand fashion dengan nama ulook_id.
            </p>
                  </Typography>
                </div>
              </Card>
            </div>
          </div>
        )
      }
    </>
  );
};

export default ContentComponent;
