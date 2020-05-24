import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import LanguageIcon from "@material-ui/icons/Language";
import ComputerIcon from "@material-ui/icons/Computer";
import StyleIcon from "@material-ui/icons/Style";
import PeopleIcon from "@material-ui/icons/People";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SettingsIcon from "@material-ui/icons/Settings";
import InfoIcon from "@material-ui/icons/Info";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";

export default [
  {
    id: 1,
    label: "Dashboard",
    url: "/",
    icon: <DashboardIcon />,
  },
  {
    id: 2,
    label: "Channel",
    url: "/channel",
    icon: <LanguageIcon />,
  },
  {
    id: 3,
    label: "Media",
    url: "/media",
    icon: <VideoLibraryIcon />,
  },
  {
    id: 3,
    label: "Informasi",
    url: "/news",
    icon: <StyleIcon />,
  },
  {
    id: 5,
    label: "Produk",
    url: "/product",
    icon: <ShoppingBasketIcon />,
  },
  {
    id: 5,
    label: "Layanan",
    url: "/service",
    icon: <ComputerIcon />,
  },
  {
    id: 4,
    label: "Anggota",
    url: "/member",
    icon: <PeopleIcon />,
  },
  {
    id: 6,
    label: "Pengaturan",
    url: "/setting",
    icon: <SettingsIcon />,
  },
  {
    id: 8,
    label: "Tentang",
    url: "/about",
    icon: <InfoIcon />,
  },
  {
    id: 9,
    label: "Kontak",
    url: "/contact",
    icon: <ContactSupportIcon />,
  },
];
