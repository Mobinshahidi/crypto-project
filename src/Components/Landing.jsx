import React, { useEffect, useState } from 'react';

//api
import { getCoins } from '../Services/api';

//Component
import Loader from './Loader';
import Coin from './Coin';

//styles
import styles from './Landing.module.css';

const Landing = () => {
	const [coins, setCoins] = useState([]);
	const [search, setSearch] = useState('');
	useEffect(() => {
		const fetchAPI = async () => {
			const data = await getCoins();
			setCoins(data);
		};
		fetchAPI();
	}, []);
	const searchHandler = (event) => {
		setSearch(event.target.value);
	};

	const filteredCoins = coins.filter(
		(coin) =>
			coin.name.toLowerCase().includes(search.toLowerCase()) ||
			coin.symbol.toLowerCase().includes(search.toLowerCase()) ||
			coin.id.toLowerCase().includes(search.toLowerCase()),
	);
	return (
		<>
			<input
				className={styles.input}
				type="text"
				placeholder="Search"
				value={search}
				onChange={searchHandler}
			/>
			{coins.length ? (
				<div className={styles.coinContainer}>
					{filteredCoins.length ? (
						filteredCoins.map((coin) => (
							<Coin
								key={coin.id}
								name={coin.name}
								image={coin.image}
								symbol={coin.symbol}
								price={coin.current_price}
								marketCap={coin.market_cap}
								priceChange={coin.price_change_percentage_24h}
							/>
						))
					) : (
						<h1 className={styles.notFound}>nothing found!</h1>
					)}
				</div>
			) : (
				<Loader />
			)}
		</>
	);
};

export default Landing;
