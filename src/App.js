import React from 'react';  
import AddItem from './components/AddItem';
import Filter from './containers/Filter';
import List from './containers/List';  
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
        <List />
      </section>
    </main>
  </>
  )
};

export default App;
