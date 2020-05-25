import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
  leftRoot: {
    paddingTop: "0px !important",
    margin: "0px",
  },
  leftContentTop: {
    maxHeight: "150px",
  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  card: {
    display: "flex",
    marginTop: "7px",
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
}));
