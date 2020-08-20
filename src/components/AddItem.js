import React, { useState } from 'react';  
import { connect } from 'react-redux';
import { addItem } from '../redux/actions';  

const AddItem = ({ dispatch }) => {
  const [currentItem, setCurrentItem] = useState({}); 
  // Keeps track of user's input, saving the input to its corresponding property in the list item object
  const handleUserInput = (e) => {
    const { id, value } = e.target;
    let newItem = { ...currentItem };
    newItem[id] = value.toLowerCase();
    setCurrentItem(newItem);
  }  

  return (
    <form 
      action="" 
      className="inputForm" 
      onSubmit={(e) => {
        e.preventDefault(); 
        dispatch(addItem(currentItem));
        setCurrentItem({});
      }} 
      onChange={handleUserInput}
    >
      <div>
        <label htmlFor="name">Item</label>
        <input type="text" id="name" value={currentItem.name} placeholder="Rent" required />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <input type="text" id="category" value={currentItem.text} placeholder="Housing" required />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input type="number" step="0.01" min="0" id="price" value={currentItem.price}placeholder="1000.00" required />
      </div> 
      <div>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" value={currentItem.date} required /> 
      </div>
      <button className="add" type="submit" aria-label="add item">
        +
      </button>
    </form>
  )
}

export default connect()(AddItem)