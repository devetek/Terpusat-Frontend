import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  '@global': {
		'code:not([class*="language-"])': {
			color: theme.palette.secondary.dark,
			backgroundColor: theme.palette.type === 'light' ? 'rgba(255, 255, 255, .9)' : 'rgba(0, 0, 0, .9)',
			padding: '2px 3px',
			borderRadius: 2,
			lineHeight: 1.7
		},
		'table.simple tbody tr td': {
			borderColor: theme.palette.divider
		},
		'table.simple thead tr th': {
			borderColor: theme.palette.divider
		},
		'a:not([role=button])': {
			color: theme.palette.secondary.main,
			textDecoration: 'none',
			'&:hover': {
				textDecoration: 'underline'
			}
		},
		'[class^="border-"]': {
			borderColor: theme.palette.divider
		},
		'[class*="border-"]': {
			borderColor: theme.palette.divider
		},
		hr: {
			borderColor: theme.palette.divider
		}
	},
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    overflow: "hidden",
    "&.boxed": {
      maxWidth: 1120,
      margin: "0 auto",
      boxShadow: theme.shadows[3],
    },
    "&.container": {
      "& .container": {
        maxWidth: 1120,
        width: "100%",
        margin: "0 auto",
      },
      "& .navigation": {},
    },
  },
  content: {
    display: "flex",
    overflow: "auto",
    flex: "1 1 auto",
    flexDirection: "column",
    width: "100%",
    "-webkit-overflow-scrolling": "touch",
    zIndex: 4,
  },
  toolbarWrapper: {
    display: "flex",
    position: "relative",
    zIndex: 5,
  },
  toolbar: {
    display: "flex",
    flex: "1 0 auto",
  },
  footerWrapper: {
    position: "relative",
    zIndex: 5,
  },
  footer: {
    display: "flex",
    flex: "1 0 auto",
  },
}));
