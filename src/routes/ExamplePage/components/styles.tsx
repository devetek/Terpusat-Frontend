import { makeStyles } from "@material-ui/core/styles";

export const headerHeight = 120;
export const toolbarHeight = 64;
export const drawerWidth = 240;

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100%",
    position: "relative",
    flex: "1 0 auto",
    height: "auto",
    backgroundColor: theme.palette.background.default,
  },
  innerScroll: {
    flex: "1 1 auto",
    height: "100%",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    flex: "1 1 auto",
    zIndex: 2,
    maxWidth: "100%",
    minWidth: 0,
    height: "100%",
    backgroundColor: theme.palette.background.default,
  },
  header: {
    height: headerHeight,
    minHeight: headerHeight,
    display: "flex",
    background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    color: theme.palette.primary.contrastText,
    backgroundSize: "cover",
    backgroundColor: theme.palette.primary.dark,
  },
  topBg: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: headerHeight,
    pointerEvents: "none",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    flex: "1 1 auto",
    overflow: "auto",
    "-webkit-overflow-scrolling": "touch",
    zIndex: 9999,
  },
  toolbar: {
    height: toolbarHeight,
    minHeight: toolbarHeight,
    display: "flex",
    alignItems: "center",
  },
  content: {
    flex: "1 0 auto",
  },
  sidebarWrapper: {
    overflow: "hidden",
    backgroundColor: "transparent",
    position: "absolute",
    "&.permanent": {
      [theme.breakpoints.up("lg")]: {
        position: "relative",
      },
    },
  },
  sidebar: {
    position: "absolute",
    "&.permanent": {
      [theme.breakpoints.up("lg")]: {
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        position: "relative",
      },
    },
    width: drawerWidth,
    height: "100%",
  },
  leftSidebar: {
    [theme.breakpoints.up("lg")]: {
      borderRight: `1px solid ${theme.palette.divider}`,
      borderLeft: 0,
    },
  },
  rightSidebar: {
    [theme.breakpoints.up("lg")]: {
      borderLeft: `1px solid ${theme.palette.divider}`,
      borderRight: 0,
    },
  },
  sidebarHeader: {
    height: headerHeight,
    minHeight: headerHeight,
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.contrastText,
  },
  sidebarHeaderInnerSidebar: {
    backgroundColor: "transparent",
    color: "inherit",
    height: "auto",
    minHeight: "auto",
  },
  sidebarContent: {},
  backdrop: {
    position: "absolute",
  },
}));
