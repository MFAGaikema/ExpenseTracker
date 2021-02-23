import React from 'react';

import './Balance.scss';

const Balance = ({ amount }) => {
	const balance = amount.reduce((prev, current) => prev + current, 0);

	return (
		<div className='balance'>
			<h3>YOUR BALANCE</h3>
			<h2 className={balance >= 0 ? 'income' : 'expense'}>
				{balance >= 0 ? '+' : '-'}${Math.abs(balance)}
			</h2>
		</div>
	);
};

export default Balance;
