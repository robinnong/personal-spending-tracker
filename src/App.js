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
      <Balance />
      <AddItem />
    </header>
    <main className="wrapper">    
      <div>
        <Filter /> 
        <List /> 
      </div> 
    </main>
  </>
)

export default App;
