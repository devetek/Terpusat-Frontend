import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  content: {
    "& canvas": {
      maxHeight: "100%",
    },
  },
  selectedProject: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: "8px 0 0 0",
  },
  projectMenuButton: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    borderRadius: "0 8px 0 0",
    marginLeft: 1,
  },
  iconAlign: {
      margin: "0px 5px -7px -5px"
  },
}));
