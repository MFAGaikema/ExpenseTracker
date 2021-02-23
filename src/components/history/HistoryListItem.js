import React, {Fragment} from 'react';

import './HistoryListItem.scss';

const HistoryListItem = ({item, delTransaction}) => {
  return (
    <Fragment>
    <li className={item.price < 0 ? "expense" : "income"}>
      <p>{item.item}</p>
      <p>{item.price}</p>
    </li>
    <button value={item.id} onClick={delTransaction}>X</button>
    </Fragment>
  )
}

export default HistoryListItem
