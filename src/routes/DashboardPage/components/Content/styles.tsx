import { blue, green, red } from '@material-ui/core/colors';
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(theme => ({
	root: {
		padding: '24px 32px'
	},
	badge: {
		display: 'inline-flex',
		fontSize: 13,
		color: '#FFF',
		letterSpacing: '.015em',
		lineHeight: 1,
		padding: '5px 8px',
		borderRadius: 2,
		'&.new': {
			backgroundColor: green[500]
		},
		'&.fix': {
			backgroundColor: blue[500]
		},
		'&.breaking': {
			backgroundColor: red[500]
		}
  },
  lineHeight: {
    '& p': {
      lineHeight: '30px',
      marginBottom: '20px',
		},
  },
}));