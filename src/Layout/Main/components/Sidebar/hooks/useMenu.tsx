import { useState, useEffect } from "react";
// import DashboardIcon from "@material-ui/icons/Dashboard";
// import PeopleIcon from "@material-ui/icons/People";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
// import TextFieldsIcon from "@material-ui/icons/TextFields";
// import ImageIcon from "@material-ui/icons/Image";
// import AccountBoxIcon from "@material-ui/icons/AccountBox";
// import SettingsIcon from "@material-ui/icons/Settings";
// import LockOpenIcon from "@material-ui/icons/LockOpen";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";

const SidebarMenuListQuery = loader("../queries/get-sidebar-menu.graphql");

export interface IUseMenuHook {
  id: string;
  title?: any;
  label: string;
  description?: any;
  url: string;
  isRestricted: boolean;
}

export default (): [boolean, IUseMenuHook[]] => {
  const [menus, updateMenus] = useState<IUseMenuHook[]>([]);
  const { loading, data } = useQuery(SidebarMenuListQuery, {
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (!loading && data) {
      const menuItem = data?.menus?.nodes?.[0]?.menuItems?.nodes ?? [];
      updateMenus(menuItem);
    }
  }, [data, loading]);

  return [loading, menus];
};
