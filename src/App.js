import React from 'react';  
import AddItem from './components/AddItem';
import Filter from './components/Filter';
import Table from './components/Table';  
import './App.css'; 

const App = () => {      
  return (
  <>
    <header> 
      <h1>Personal Spending Tracker</h1>
    </header>
    <main> 
      <section>
        <AddItem />
        <Filter />
        <Table />
      </section>
    </main>
  </>
  )
};

export default App;
