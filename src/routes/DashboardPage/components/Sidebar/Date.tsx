import React from "react";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
// import useStyles from "../styles";

function WidgetNow() {
  // const classes = useStyles();

  return (
    <div className="widget w-full p-12">
      <Paper className="w-full rounded-8 shadow-none border-1">
        <div className="flex items-center justify-between px-4 pt-4">
          <Typography className="text-16 px-12">Terpopuler</Typography>
          <IconButton aria-label="more">
            <Icon>more_vert</Icon>
          </IconButton>
        </div>
        <div className="px-24 py-14">
          <List>
            <ListItem>
              <ListItemText
                primary="Pollard Gandum Cap Angsa"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Pollard Gandum Kepala Kuda"
              />
            </ListItem>
          </List>
          {/* <Typography className="text-12 leading-tight" color="textSecondary">
            <Icon className={classes.iconAlign}>home</Icon>
            Jl. Bakung No.23, RT 12/RW 2, Kelapa Dua Wetan, Kec. Ciracas, Kota
            Jakarta Timur, Daerah Khusus Ibukota Jakarta, 13730
          </Typography> */}
          {/* <Typography className="text-12 leading-tight" color="textSecondary">
            {time.format("D")}
          </Typography>
          <Typography className="text-12 leading-tight" color="textSecondary">
            {time.format("Y")}
          </Typography> */}
        </div>
      </Paper>
    </div>
  );
}

export default React.memo(WidgetNow);
