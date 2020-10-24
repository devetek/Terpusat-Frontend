import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const Other = (props: any) => {
	return (
		<Paper className="w-full rounded-8 shadow-none border-1">
			<div className="pt-12 pb-28">
				<Typography className="text-20 leading-none text-blue mx-8">
					Informasi selengkapnya kunjungi terpusat di:
				</Typography>
				<Typography className="text-14 mx-8" color="textSecondary">
					<br />
					<p>Lokasi:</p>
					<p>Jakarta: Jl. Bakung No.23 RT 02/RW 12, Kelapa Dua Wetan, Ciracas, Jakarta Timur</p>
					<p>Surakarta: Jalan Pracimantoro - Wonogiri RT.001 / RW.005, Mlangse Lor, Tubokarto</p>
					<br />
					<p>E-mail: support@terpusat.com</p>
					<br />
					<p>Phone:</p>
					<p>+62895-3180-3699</p>
					<p>+62 821-3818-4418</p>
					<br />
					<p>Website: <a href="https://terpusat.com/">https://terpusat.com/</a></p>
					<br />
					<p>Lokasi: <a href="https://g.page/terpusat?share" rel="noopener noreferrer" target="_blank">https://g.page/terpusat?share</a></p>
					<br />
					<p>Facebook: <a href="https://www.facebook.com/Terpusat/" rel="noopener noreferrer" target="_blank">https://www.facebook.com/Terpusat/</a></p>
					<br />
					<p>Instagram: <a href="https://www.instagram.com/terpusat/" rel="noopener noreferrer" target="_blank">https://www.instagram.com/terpusat/</a></p>
					<br />
					<p>Twitter: <a href="https://twitter.com/terpusat" rel="noopener noreferrer" target="_blank">https://twitter.com/terpusat</a></p>
					<br />
					<p>Tokopedia: <a href="https://tokopedia.com/terpusat" rel="noopener noreferrer" target="_blank">https://tokopedia.com/terpusat</a></p>
					<br />
					<p>Shopee: <a href="https://shopee.co.id/terpusat" rel="noopener noreferrer" target="_blank">https://shopee.co.id/terpusat</a></p>
					<br />
					<p>Bukalapak: <a href="https://bukalapak.com/terpusat" rel="noopener noreferrer" target="_blank">https://bukalapak.com/terpusat</a></p>
				</Typography>
			</div>
		</Paper>
	);
}

export default React.memo(Other);
