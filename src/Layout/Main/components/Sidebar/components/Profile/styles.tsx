import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "fit-content",
  },
  avatar: {
    width: 60,
    height: 60,
  },
  name: {
    fontWeight: 500,
    color: "#263238",
    fontSize: "20px",
    marginTop: theme.spacing(1),
  },
  bio: {
    color: "#546e7a",
    fontSize: "12px",
  },
}));
