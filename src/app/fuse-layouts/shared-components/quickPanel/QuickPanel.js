import FuseScrollbars from "@fuse/core/FuseScrollbars";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import withReducer from "app/store/withReducer";
import React from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "./store/actions/index";
import reducer from "./store/reducers";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 280,
  },
}));

function QuickPanel(props) {
  const dispatch = useDispatch();
  const state = useSelector(({ quickPanel }) => quickPanel.state);

  const classes = useStyles();

  return (
    <Drawer
      classes={{ paper: classes.root }}
      open={state}
      anchor="right"
      onClose={(ev) => dispatch(Actions.toggleQuickPanel())}
    >
      <FuseScrollbars>
        <ListSubheader component="div">Today</ListSubheader>

        <div className="mb-0 py-16 px-24">
          <Typography className="mb-12 text-32" color="textSecondary">
            {moment().format("dddd")}
          </Typography>
          <div className="flex">
            <Typography className="leading-none text-32" color="textSecondary">
              {moment().format("DD")}
            </Typography>
            <Typography className="leading-none text-16" color="textSecondary">
              th
            </Typography>
            <Typography className="leading-none text-32" color="textSecondary">
              {moment().format("MMMM")}
            </Typography>
          </div>
        </div>
        <Divider />
        <List>
          <ListSubheader component="div">Lokasi</ListSubheader>
          <ListItem>
            <ListItemText
              primary="Jakarta"
              secondary="Jl. Bakung No.23 RT 02/RW 12, Kelapa Dua Wetan, Ciracas, Jakarta Timur"
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Wonogiri"
              secondary="Jalan Pracimantoro - Wonogiri RT.001 / RW.005, Mlangse Lor, Tubokarto"
            />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListSubheader component="div">Kontak</ListSubheader>
          <ListItem>
            <ListItemText primary="Email" secondary="prakasa@devetek.com" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Phone" secondary="0821-3818-4418" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Phone" secondary="0813-9205-4040" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Phone" secondary="0889-5318-0369-9" />
          </ListItem>
        </List>
        <Divider />
      </FuseScrollbars>
    </Drawer>
  );
}

export default withReducer("quickPanel", reducer)(React.memo(QuickPanel));
