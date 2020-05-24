import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ComputerIcon from "@material-ui/icons/Computer";
import StyleIcon from "@material-ui/icons/Style";
import PeopleIcon from "@material-ui/icons/People";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import TextFieldsIcon from "@material-ui/icons/TextFields";
import ImageIcon from "@material-ui/icons/Image";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import SettingsIcon from "@material-ui/icons/Settings";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { IUseMenuHook } from "./useMenu";

const iconArray = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    title: "Techno",
    icon: <ComputerIcon />,
  },
  {
    title: "Style",
    icon: <StyleIcon />,
  },
  {
    title: "Users",
    icon: <PeopleIcon />,
  },
  {
    title: "Products",
    icon: <ShoppingBasketIcon />,
  },
  {
    title: "Authentication",
    icon: <LockOpenIcon />,
  },
  {
    title: "Typography",
    icon: <TextFieldsIcon />,
  },
  {
    title: "Icons",
    icon: <ImageIcon />,
  },
  {
    title: "Account",
    icon: <AccountBoxIcon />,
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
  },
];

export default (menus: IUseMenuHook[]): IUseMenuHook[] => {
  return menus.map((menu) => {
    const selectedIcon = iconArray.filter((icon) => icon.title === menu.label);
    const thisIcon = selectedIcon.length ? selectedIcon[0].icon : undefined;

    return { ...menu, icon: thisIcon };
  });
};
