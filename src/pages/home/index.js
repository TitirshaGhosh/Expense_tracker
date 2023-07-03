import React from 'react';
import './home.css';
import Topfold from '../../components/topfold';
  
  import ExpenseList from '../../components/expense-list';
const Home = () => {
  return (
    <div className='home'>
    <Topfold/>
     <ExpenseList/>
    </div>
  );
};

export default Home;
