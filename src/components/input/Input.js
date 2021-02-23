import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './Input.scss';

const Input = ({ addNewTransaction }) => {
	const [text, setText] = useState('');
	const [amount, setAmount] = useState(0);

	const newTransaction = {
		id: uuidv4(),
		item: text,
		price: +amount,
	};

	const submitForm = (e) => {
		e.preventDefault();
		addNewTransaction(newTransaction);
		setText('');
		setAmount(0);
	};

	return (
		<form className='form' onSubmit={submitForm}>
			<label htmlFor='text'>Add New Transaction:</label>
			<input type='text' name='text' placeholder='Add Text' value={text} onChange={(e) => setText(e.target.value)} />
			<label htmlFor='amount'>Amount:</label>
			<input type='number' value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Set Amount' />
			<button type='submit'>Submit</button>
		</form>
	);
};

export default Input;
