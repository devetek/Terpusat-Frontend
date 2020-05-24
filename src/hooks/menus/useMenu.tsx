import { useState, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { loader } from "graphql.macro";
import getIcon from "./getterIcon";

const SidebarMenuListQuery = loader("../queries/get-sidebar-menu.graphql");

export interface IUseMenuHook {
  id: string;
  title?: any;
  label: string;
  description?: any;
  url: string;
  icon?: JSX.Element;
  isRestricted: boolean;
}

export default (): [boolean, IUseMenuHook[]] => {
  const [menus, updateMenus] = useState<IUseMenuHook[]>([]);
  const { loading, data } = useQuery(SidebarMenuListQuery);

  useEffect(() => {
    if (!loading && data) {
      const menuItem = data?.menus?.nodes?.[0]?.menuItems?.nodes ?? [];
      updateMenus(getIcon(menuItem));
    }
  }, [data, loading]);

  return [loading, menus];
};
