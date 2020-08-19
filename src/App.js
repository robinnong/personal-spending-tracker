import React, { useState, useEffect } from 'react'; 
 // Components 
import AddItem from './components/AddItem';
import Filter from './components/Filter';
import Table from './components/Table';
import { SampleData, Months } from './components/helpers';
// Styles
import './App.css'; 

const App = () => { 
  const [list, setList] = useState(SampleData);   
  const [selectedFilter, setFilter] = useState("");
  const [categories, setCategories] = useState([]);     

  // Updates the list of categories whenever user adds or deletes an item
  useEffect(() => { 
    const updatedCategories = list.reduce((unique, current)=>{
      if (!unique.includes(current.category)) {
        unique.push(current.category)
      }
      return unique;
    }, []); 
    setCategories(updatedCategories); 
  }, [list.length])  

  // Deletes item from the list
  const deleteItem = (index) => {
    // const newList = [...list]; 
    // newList.splice(index, 1); 
    // setList(newList);
  }   

  // Gets the user's selected category filter 
  const handleCategoryChange = e => setFilter(e.target.value); 

  return (
  <>
    <header> 
      <h1>Personal Spending Tracker</h1>
    </header>
    <main> 
      <section>
        <AddItem />
        <Filter 
          categories={categories}
          handleCategoryChange={(e) => handleCategoryChange}
        />
        <Table 
          list={list}  
          selectedFilter={selectedFilter} 
          setList={(arg) => setList(arg)}
          deleteItem={(arg) => deleteItem(arg)}
        />
      </section>
    </main>
  </>
  )
};

export default App;
