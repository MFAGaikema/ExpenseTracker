import React from 'react';

import HistoryListItem from './HistoryListItem';

const HistoryList = ({ list, delTransaction }) => {
	return (
		<ul>
			{list.map((item) => (
				<HistoryListItem key={item.id} item={item} delTransaction={delTransaction} />
			))}
		</ul>
	);
};

export default HistoryList;
