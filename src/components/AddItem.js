import React from 'react';  
import { connect } from 'react-redux';
import { addItem, setCurrentItem } from '../redux/actions';  

const mapStateToProps = (state) => ({ current: state.currentItem });

const AddItem = ({ current, dispatch }) => { 
   // Keeps track of user's input, saving the input to its corresponding property in the list item object
  const handleUserInput = (e) => {
    const { id, value } = e.target;  
    dispatch(setCurrentItem({ field: id, val: value }));
  }     
  const { name, category, price, date } = current;
  
  return (
    <form 
      action="" 
      className="inputForm" 
      onSubmit={(e) => {
        e.preventDefault();  
        dispatch(addItem(current));  
      }} 
    >  
      <div>
        <label htmlFor="name">Item</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={handleUserInput}
          placeholder="Rent" 
          required={true}
        />
      </div>
      <div>
        <label htmlFor="category">Category</label>
        <input 
          type="text" 
          id="category" 
          value={category} 
          onChange={handleUserInput}
          placeholder="Housing" 
          required={true}
        />
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input 
          type="number" 
          step="0.01" 
          min="0" 
          id="price" 
          value={price}
          onChange={handleUserInput}
          placeholder="1000.00" 
          required={true}
        />
      </div> 
      <div>
        <label htmlFor="date">Date</label>
        <input 
          type="date" 
          id="date" 
          onChange={handleUserInput}
          value={date} 
          required={true}
        /> 
      </div>
      <button className="add" type="submit" aria-label="add item">
        +
      </button>
    </form>
  )
}

export default connect(mapStateToProps)(AddItem)