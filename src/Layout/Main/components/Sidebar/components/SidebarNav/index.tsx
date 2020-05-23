import React from "react";
import clsx from "clsx";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
import { onClickLink } from "utils/hyperlink";
import useMenu from "./../../hooks/useMenu";
import useStyles from "./styles";

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
  const classes = useStyles();
  const [loading, menus] = useMenu();

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      {!loading &&
        menus.map((page) => (
          <ListItem className={classes.item} disableGutters key={page.label}>
            <Button
              className={classes.button}
              onClick={(e) => {
                e.preventDefault();
                onClickLink(page.url);
              }}
            >
              <div className={classes.icon}>{page.label}</div>
              {page.title}
            </Button>
          </ListItem>
        ))}
    </List>
  );
};

export default SidebarNavComponent;
