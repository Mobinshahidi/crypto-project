import React from 'react';

//gif
import spinner from '../gif/spinner.gif';

const Loader = () => {
	return (
		<div>
			<img src={spinner} alt="loading" />
			<h1>Loading...</h1>
		</div>
	);
};

export default Loader;
