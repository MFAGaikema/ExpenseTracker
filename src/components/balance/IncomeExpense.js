import React from 'react';
import './IncomeExpense.scss';

const IncomeExpense = ({item}) => {
  return (
    <div className="income-expense">
      <h3>{item.title.toUpperCase()}</h3>
      <p className={item.amount >= 0 ? 'income' : 'expense'}>${Math.abs(item.amount).toFixed(2)}</p>
    </div>
  )
}

export default IncomeExpense
