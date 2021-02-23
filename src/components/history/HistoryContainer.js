import React from 'react';
import './HistoryContainer.scss';

import HistoryList from './HistoryList';

const HistoryContainer = ({ list, delTransaction }) => {
	return (
		<div className='history-container'>
			<h2 className='underline'>HISTORY</h2>
			<HistoryList list={list} delTransaction={delTransaction}/>
		</div>
	);
};

export default HistoryContainer;
