import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    marginLeft: "10px",
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
