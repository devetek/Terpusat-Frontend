import React, { useRef, forwardRef } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";
import clsx from "clsx";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import menus from "./Item";
import useStyles from "./styles";
// import { onClickLink } from "utils/hyperlink";

/**
 *
 * Deskripsi:
 * Ini hanya contoh untuk deskripsi yang akan muncul di typescript, selengkapnya akan kita upgrade selanjutnya.
 *
 * Agar menjadi lebih baik dalam dokumentasi, karena dokumentasi code adalah yang terbaik.
 *
 * - [Selengkapnya](https://terpusat.com)
 *
 */
export interface SidebarNavComponentProps {
  loading?: boolean;
  className?: string;
}

const SidebarNavComponent: React.FunctionComponent<SidebarNavComponentProps> = ({
  className,
  ...rest
}) => {
  const el = useRef(null);
  const classes = useStyles();

  const CustomRouterLink = forwardRef((props: NavLinkProps, _) => (
    <div ref={el} style={{ flexGrow: 1 }}>
      <NavLink {...props} />
    </div>
  ));

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      {menus.map((page) => {
        return (
          <ListItem
            className={classes.item}
            disableGutters
            key={`${page.label}-${page.id}`}
          >
            <Button
              activeClassName={classes.active}
              className={classes.button}
              component={CustomRouterLink}
              to={page.url}
            >
              {page.icon && <div className={classes.icon}>{page.icon}</div>}
              {page.label}
            </Button>
          </ListItem>
        );
      })}
    </List>
  );
};

export default SidebarNavComponent;
