import React from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import ListItem from "@material-ui/core/ListItem";
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
  className?: string;
  pages: IPageItem[];
}

export interface IPageItem {
  title?: string;
  href?: string;
  icon?: JSX.Element;
}

const SidebarNavComponent: React.FunctionComponent<SidebarNavComponentProps> = ({
  pages,
  className,
  ...rest
}) => {
  const classes = useStyles();
  const history = useHistory();

  const onClickButton = (url: string | undefined): void => {
    if (url) {
      history.push(url);
    }
  };

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      {pages.map((page) => (
        <ListItem className={classes.item} disableGutters key={page.title}>
          <Button
            className={classes.button}
            onClick={(e) => onClickButton(page.href)}
          >
            <div className={classes.icon}>{page.icon}</div>
            {page.title}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default SidebarNavComponent;
