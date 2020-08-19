import React, { useState, useEffect } from 'react'; 
// Components 
import TableRow from './components/TableRow';
// Material UI 
import { Button, TextField } from '@material-ui/core'; 
// Styles
import './App.css'; 

const App = () => { 
  const sampleData = [
    {
      name: 'groceries',
      category: 'food',
      price: '200.00',
      date: '2019-11-02'
    },
    {
      name: 'monthly rent',
      category: 'housing',
      price: '1000.00',
      date: '2019-11-08'
    },
    {
      name: 'spotify',
      category: 'subscriptions',
      price: '9.99',
      date: '2019-11-22'
    }
  ]
  const [list, setList] = useState(sampleData);   
  const [selectedFilter, setFilter] = useState("");
  const [currentItem, setCurrentItem] = useState({}); 
  const [categories, setCategories] = useState([]);   
  const [sortingMode, setSortingMode] = useState("");
  const [isAscending, setDirection] = useState(true);  

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
  
  // Resets the sorting order direction to ascending whenever user switching the sorting mode
  useEffect(()=> { 
    setDirection(true)
  }, [sortingMode]);

  // Every time the user sorts the table, a sorting function is performed on the List and the sorting direction is toggled
  useEffect(()=> {
    let sortedItems = [...list]; 
    sortedItems.sort((a,b) => {
      if (b[sortingMode] > a[sortingMode]) {
        return 1;
      } else if (b[sortingMode] < a[sortingMode]) {
        return -1;
      }
      return 0;
    }); 
    if (isAscending) {
      sortedItems.reverse();
    }
    setList(sortedItems); 
  }, [isAscending]) 

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
    <header className="app-header"> 
      <div className="app-header-title">Personal Spending Tracker</div>
    </header>
    <section className="app-content"> 
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
        <Button variant="contained" size="medium" color="primary"
        type="submit" aria-label="Add item">Add</Button>
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

      <table>
        <thead>
          <tr className="tableHeadings">
            <th onClick={() => { setSortingMode("name"); setDirection(!isAscending) }}>Item 
              {sortingMode === "name" 
                ? <span>{isAscending ? "⯆" : "⯅"}</span>
                : null
              }
            </th>
            <th onClick={() => {setSortingMode("category"); setDirection(!isAscending)}}>Category
              {sortingMode === "category"
                ? <span>{isAscending ? "⯆" : "⯅"}</span>
                : null
              }
            </th>
            <th onClick={() => {setSortingMode("price"); setDirection(!isAscending)}}>Total
              {sortingMode === "price"
                ? <span>{isAscending ? "⯆" : "⯅"}</span>
                : null
              }
            </th>
            <th>Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list.length === 0 
          ? <tr className="placeholderRow">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          : <>
              {list.map((item, index) => {
                if (item.category === selectedFilter || selectedFilter === "") {
                  return (
                    <TableRow 
                      key={index}
                      name={item.name}
                      category={item.category}
                      price={item.price}
                      date={item.date}
                      delete={() => deleteItem(index)}
                    />
                  )
                }
              })} 
            </>
        }
        </tbody>
      </table> 
    </section>
  </>
  )
};

export default App;
