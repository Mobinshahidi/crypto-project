import React from 'react';

//styles
import styles from './Coin.module.css';

const Coin = ({ name, image, price, symbol, priceChange, marketCap }) => {
	return (
		<div className={styles.container}>
			<img src={image} className={styles.image} alt="coin image" />
			<span className={styles.name}>{name}</span>
			<span className={styles.symbol}>{symbol.toUpperCase()}</span>
			<span className={styles.currentPrice}>{price.toLocaleString()}$</span>
			<span
				className={
					priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange
				}
			>
				{priceChange}
			</span>
			<span className={styles.marketCap}>{marketCap.toLocaleString()}</span>
		</div>
	);
};

export default Coin;
