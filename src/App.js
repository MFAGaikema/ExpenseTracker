import './App.scss';
import React, {useState} from 'react';

import BalanceContainer from './components/balance/BalanceContainer';
import Header from './components/layout/Header';
import HistoryContainer from './components/history/HistoryContainer';
import Input from './components/input/Input';

function App() {
  const [list, setList] = useState([])

  const addNewTransaction = (transaction) => {
    setList(prevList => [...prevList, transaction]);
  }

  const delTransaction = (e) => {
    setList(list.filter(item => item.id !== e.target.value))
  }

  return (
    <div className="App">
      <Header />
      <BalanceContainer list={list} />
      <HistoryContainer list={list} delTransaction={delTransaction}/>
      <Input addNewTransaction={addNewTransaction}/>
    </div>
  );
}

export default App;
