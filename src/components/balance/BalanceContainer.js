import React from 'react';
import Balance from './Balance';
import IncomeExpense from './IncomeExpense';

import './BalanceContainer.scss';

const BalanceContainer = ({ list }) => {
	const prices = list.map((item) => item.price);
	const income = prices.filter((price) => price > 0);
	const expense = prices.filter((price) => price < 0);

	const total = (amount) => {
		return amount.reduce((prev, current) => prev + current, 0);
	};

	const titleArray = ['income', 'expense'];

	let amountArray = [];

	amountArray.push(total(income));
	amountArray.push(total(expense));

	const expIncArray = titleArray.map((title, index) => {
		return { title: title, amount: amountArray[index] };
	});

	return (
		<div>
			<Balance amount={amountArray} />
			<div className='flex-container'>
				{expIncArray.map((item) => (
					<IncomeExpense key={item.title} item={item} />
				))}
			</div>
		</div>
	);
};

export default BalanceContainer;
