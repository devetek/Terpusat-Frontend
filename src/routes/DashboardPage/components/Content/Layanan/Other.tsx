import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import clsx from 'clsx';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles(theme => ({
	marginRight: {
		marginRight: "3px",
		marginTop: "3px",
	}
}));

const Other = (props: any) => {
	const classes = useStyles(props);

	return (
		<Paper className="w-full rounded-8 shadow-none border-1">
			<div className="pt-12 pb-28">
				<img height="100px" src="https://ecs7.tokopedia.net/img/cache/700/VqbcmM/2020/5/19/fe7fe1be-ea79-4794-9035-47b080102e0d.jpg" className="w-full block" alt="note" />
				<Typography className="p-8 pb-8 text-14 font-bold">
					<a rel="noopener noreferrer" target="_blank" href="https://www.tokopedia.com/terpusat/vitamin-suplemen-herbal-semua-jenis-ikan-raja-lele">Vitamin Suplemen Herbal Semua Jenis Ikan Raja Lele</a>
				</Typography>
				<div className="py-8 px-6 flex flex-wrap w-full -mx-2">
					<Chip
						label="Vitamin Hewan"
						classes={{
							root: clsx('h-24', classes.marginRight),
							label: 'px-4 py-2 text-11',
							deleteIcon: 'w-16',
						}}
						variant="outlined"
					/>
					<Chip
						label="Obat Ikan"
						classes={{
							root: clsx('h-24', classes.marginRight),
							label: 'px-4 py-2 text-11',
							deleteIcon: 'w-16',
						}}
						variant="outlined"
					/>
					<Chip
						label="Probiotik Ikan"
						classes={{
							root: clsx('h-24', classes.marginRight),
							label: 'px-4 py-2 text-11',
							deleteIcon: 'w-16',
						}}
						variant="outlined"
					/>
				</div>
			</div>
		</Paper>
	);
}

export default React.memo(Other);
