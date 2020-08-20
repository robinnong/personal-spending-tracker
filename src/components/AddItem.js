import React, { useState } from 'react';  
import { connect } from 'react-redux';
import { addItem, addCategory } from '../redux/actions';
import { TextField } from '@material-ui/core';
import { Add } from '@material-ui/icons';

const AddItem = ({ dispatch }) => {
  const [currentItem, setCurrentItem] = useState({}); 
  // Keeps track of user's input, saving the input to its corresponding property in the list item object
  const handleUserInput = (e) => {
    const { id, value } = e.target;
    let newItem = { ...currentItem };
    newItem[id] = value.toLowerCase();
    setCurrentItem(newItem);
  }  

  return(
    <form 
      action="" 
      className="inputForm" 
      onSubmit={(e) => {
        e.preventDefault(); 
        dispatch(addItem(currentItem))
        dispatch(addCategory(currentItem.category))
      }} 
      onChange={handleUserInput}
    >
      <div>
        <label htmlFor="name">Item</label>
        <input type="text" id="name" placeholder="Rent" required />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <input type="text" id="category" placeholder="Housing" required />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input type="number" step="0.01" min="0" id="price" placeholder="1000.00" required />
      </div> 
      <TextField
        id="date"
        label="Date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
      /> 
      <button className="add" type="submit" aria-label="add item">
        <Add />
      </button>
    </form>
  )
}

export default connect()(AddItem)