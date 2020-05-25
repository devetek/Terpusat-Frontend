import React from "react";
import clsx from "clsx";
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useCategories from "hooks/categories/useCategories";
import relativeTime from "utils/date/relative";
import useStyles from "./styles";

export interface LatestProductsComponentProps {
  className?: any;
}

const LatestProductsComponent: React.FunctionComponent<LatestProductsComponentProps> = (
  props
) => {
  const { className, ...rest } = props;

  const classes = useStyles();
  const [loading, categories] = useCategories({ name: "produk" });
  const products = categories?.children?.nodes ?? [];

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardHeader
        subtitle={`${products} in total`}
        title={`${categories?.name ?? ""} Terpusat`}
      />
      <Divider />
      <CardContent className={classes.content}>
        <List>
          {!loading &&
            products.map((product, i) => (
              <ListItem divider={i < products.length - 1} key={product.id}>
                <ListItemAvatar>
                  <img
                    alt="Product"
                    className={classes.image}
                    src={product?.extraField?.thumbnail?.mediaItemUrl ?? ""}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={product.name}
                  secondary={`Updated ${relativeTime(
                    product?.extraField?.thumbnail?.modified ?? ""
                  )}`}
                />
                <IconButton edge="end" size="small">
                  <MoreVertIcon />
                </IconButton>
              </ListItem>
            ))}
        </List>
      </CardContent>
      <Divider />
      <CardActions className={classes.actions}>
        <Button color="primary" size="small" variant="text">
          View all <ArrowRightIcon />
        </Button>
      </CardActions>
    </Card>
  );
};

export default LatestProductsComponent;
