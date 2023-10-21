import axios from 'axios';

const BASE_URL ='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false';

export const getCoins = async () => {
	const res = await axios.get(BASE_URL);
	return res.data;
};
