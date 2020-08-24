import React from 'react';  
import AddItem from './components/AddItem';
import Filter from './containers/Filter';
import List from './containers/List';  
import Balance from './components/Balance'; 
import './App.css'; 

const App = () => (
  <>
    <header> 
      <h1>Personal Spending Tracker</h1>
    </header>
    <main className="wrapper">   
      <AddItem />
      <div>
        <h2>Account Activity</h2>
        <Balance />
        <Filter /> 
        <List /> 
      </div> 
    </main>
  </>
)

export default App;
