import React from "react";
import Icon from '@material-ui/core/Icon';
import Card from "@material-ui/core/Card";
import Button from '@material-ui/core/Button';
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import Member from "./Dvisi/Member";
import useStyles from "./styles";

export interface ContentComponentProps {
  activeContent: number;
  className?: any;
}

const ContentComponent = (props: ContentComponentProps) => {
  const classes = useStyles(props);
  const { activeContent } = props;

  const onClickBuyButton = (url: string | undefined) => {
    window.open(url, '_blank');
  }

  return (
    <>
      {activeContent === 0 && (
        <div className="flex flex-wrap">
          <div className="p-16 w-full">
            <Card className={clsx(classes.root, props.className)}>
              <div className={clsx(classes.lineHeight, "flex items-center")}>
                <Typography className="text-14 mx-8">
                  RAJA LELE Adalah mikroba probiotik isolat asli indonesia dengan kandungan loctobaallus, acetobacter, dan yeast yang sangat efektif untuk budidaya lele agar menghasilkan produksi secara maksimal, berkesinambungan dan ramah lingkungan. RAJA LELE juga sangat efektif diaplikasikan pada budidaya ikan jenis lainnya seperti nila, gurame, patin, mas, tawes, bawal, graskop, koi, dll.
                <br /><br />
                Fungsi dan Manfaat:
                <br />
                  <ul>
                    <li>Meningkatkan nafsu makan dan memacu pertumbuhan lelesecara maksimal.</li>
                    <li>Menambah berat bobot panenan dan menyingkat masa panen.</li>
                    <li>Mencegah terjadinya macet tumbuh (ikan kerdil) dan menurunkan mortalitas.</li>
                    <li>Meningkatkan penyerapan protein pada pakan agar menjadi daging secara maksimal.</li>
                    <li>Menghemat biaya pakan secar total.</li>
                    <li>Menghilangkan bau busuk (amis) kolam akibat amoniak dan gas beracun lainnya.</li>
                  </ul>
                  <br />
                Untuk Pakan Apung Maupun Tenggelam:
                <br />
                Campurkan 1 tutup botol RAJA LELE kedalam air. Tambahkan 1 sendok gula pasir (tetes tebu) kemudian aduk merata. Selanjutnya aduk cairan tersebut kedalam 2-3 kg pakan pelet sampai cairan meresap rata. Pemcampuran bisa dalam jumlah banyak. Separoh pakan bisa ditebarkan pagi, sisanya disimpan ditempat kering dan tertutup, untuk diberikan pada sore hari. Probiotik RAJA LELE masih bekerja secara optimal jika disimpan 24 jam.
                <br />
                  <br />
                  <Button
                    variant="contained"
                    color="primary"
                    className={clsx(classes.button, classes.tokopedia)}
                    endIcon={<Icon>send</Icon>}
                    onClick={() => onClickBuyButton("https://www.tokopedia.com/terpusat/vitamin-suplemen-herbal-semua-jenis-ikan-raja-lele")}
                  >
                    Pesan di Tokopedia
              </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className={clsx(classes.button, classes.shopee)}
                    endIcon={<Icon>send</Icon>}
                    onClick={() => onClickBuyButton("https://shopee.co.id/RAJA-LELE-500ml-Vitamin-Suplemen-Herbal-Semua-Jenis-Ikan-i.80496578.7834602495")}
                  >
                    Pesan di Shopee
              </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    className={clsx(classes.button, classes.bukalapak)}
                    endIcon={<Icon>send</Icon>}
                    onClick={() => onClickBuyButton("https://www.bukalapak.com/p/hobi-koleksi/pet-food-stuff/vitamin-obat-obatan/3ajax2z-jual-raja-lele-500ml-vitamin-suplemen-herbal-semua-jenis-ikan?from=product_owner&product_owner=normal_seller")}
                  >
                    Pesan di Bukalapak
              </Button>
                </Typography>
              </div>
            </Card>
          </div>
        </div>
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
            <div className="p-16 w-full">
              <Card className={clsx(classes.root, props.className)}>
                <div className={clsx(classes.lineHeight, "flex items-center")}>
                  <Typography className="text-14 mx-8">
                    No Review.
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
