import React, { useState, useEffect } from 'react'; 
// Components 
import Table from './components/Table';
import { SampleData, Months } from './components/helpers';
// Material UI 
import { TextField } from '@material-ui/core'; 
import { Add } from '@material-ui/icons';
// Styles
import './App.css'; 

const App = () => {  
  const [list, setList] = useState(SampleData);   
  const [selectedFilter, setFilter] = useState("");
  const [currentItem, setCurrentItem] = useState({}); 
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

  // Keeps track of user's input, saving the input to its corresponding property in the list item object
  const handleUserInput = (e) => {
    const { id, value } = e.target;  
    let newItem = {...currentItem};
    newItem[id] = value.toLowerCase(); 
    setCurrentItem(newItem);     
  }  
  
  // Adds item to the list
  const addItem = (e) => {
    e.preventDefault();
    let newList = [...list]   
    newList.push(currentItem)
    setList(newList);  
  }

  // Deletes item from the list
  const deleteItem = (index) => {
    const newList = [...list]; 
    newList.splice(index, 1); 
    setList(newList);
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
        <form action="" onSubmit={addItem} className="inputForm" onChange={handleUserInput}> 
          <div>
            <label htmlFor="name">Item</label>
            <input type="text" id="name" placeholder="Rent" required/> 
          </div>
          <div>
            <label htmlFor="category">Category</label>
            <input type="text" id="category" placeholder="Housing" required /> 
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input type="number" step="0.01" min="0" id="price" placeholder="1000.00" required />  
          </div>
          <div> 
              <TextField
                id="date"
                label="Date"
                type="date" 
                InputLabelProps={{
                  shrink: true,
                }}
              />
          </div>
          <button class="add" type="submit" aria-label="add item">
            <Add /> 
          </button>
        </form> 

        <form action="" onChange={handleCategoryChange} className="filterSelect">
          <label htmlFor="filter">Show</label>
          <select name="filter" id="filter">
            <option value="">All</option>
            {categories.map((category, index) => {
              return (
                <option
                  key={index}
                  value={category}>{category}</option>
              )
            })}
          </select>
        </form> 
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
