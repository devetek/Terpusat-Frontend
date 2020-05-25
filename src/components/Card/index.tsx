import React from "react";
import clsx from "clsx";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  useTheme,
} from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import useStyles from "./styles";

export interface CardComponentProps {
  className?: any;
  title?: string;
  value?: string;
  icon?: any;
  palette?:
    | "error"
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "info"
    | "success";
  color?: "light" | "main" | "dark" | "contrastText";
  withDiff?: boolean;
}

const CardComponent: React.FunctionComponent<CardComponentProps> = (props) => {
  const {
    className,
    title = "Title",
    value = "10000",
    icon: IconProps,
    palette = "common",
    color = "black",
    withDiff = true,
    ...rest
  } = props;
  const theme = useTheme();
  const classes = useStyles();

  const setIconColor = (): string => {
    const tmpUIPalette: any = theme.palette;

    return tmpUIPalette[palette][color];
  };

  return (
    <Card {...rest} className={clsx(classes.root, className)}>
      <CardContent>
        <Grid container justify="space-between">
          <Grid item>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
              variant="body2"
            >
              {title}
            </Typography>
            <Typography
              className={classes.contentText}
              variant="h6"
              dangerouslySetInnerHTML={{ __html: value }}
            />
          </Grid>
          {IconProps && (
            <Grid item>
              <Avatar
                className={classes.avatar}
                style={{ backgroundColor: setIconColor() }}
              >
                <IconProps className={classes.icon} />
              </Avatar>
            </Grid>
          )}
        </Grid>
        {withDiff && (
          <div className={classes.difference}>
            <ArrowDownwardIcon className={classes.differenceIcon} />
            <Typography className={classes.differenceValue} variant="body2">
              12%
            </Typography>
            <Typography className={classes.caption} variant="caption">
              Since last month
            </Typography>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default CardComponent;
