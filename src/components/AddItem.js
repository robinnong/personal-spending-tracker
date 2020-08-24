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
  const { type, name, category, price, date } = current;
  
  return (
    <form 
      action="" 
      className="inputForm" 
      onSubmit={(e) => {
        e.preventDefault();  
        dispatch(addItem(current));  
      }} 
      onChange={handleUserInput} 
    >  
      <h2>Add Transaction</h2>
      <div>
        <label htmlFor="name">Type</label>
        <select 
          id="type"
          value={type}
          required={true}
        >
          <option value="expense">Expense</option> 
          <option value="income">Income</option> 
        </select>
      </div>
      <div>
        <label htmlFor="name">Item</label>
        <input 
          type="text" 
          id="name" 
          value={name}  
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
          placeholder="1000.00" 
          required={true}
        />
      </div> 
      <div>
        <label htmlFor="date">Date</label>
        <input 
          type="date" 
          id="date"  
          value={date} 
          required={true}
        /> 
      </div>
      <button className="add" type="submit" aria-label="add item">Add</button>
    </form>
  )
}

export default connect(mapStateToProps)(AddItem)