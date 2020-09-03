import React from 'react';  
import { connect } from 'react-redux';
import { Categories } from './helpers';
import { addItem, setCurrentItem } from '../redux/actions';  
import { Form } from './styles';

const mapStateToProps = (state) => ({ 
  current: state.currentItem,
  darkMode: state.darkMode
});

const AddItem = ({ darkMode, current, dispatch }) => { 
   // Keeps track of user's input, saving the input to its corresponding property in the list item object
  const handleUserInput = (e) => {
    const { id, value } = e.target;  
    dispatch(setCurrentItem({ field: id, val: value }));
  }     
  const { type, name, price, date } = current;
  
  return (
    <div>
      <h2>Add Transaction</h2>
      <Form 
        action="" 
        className="inputForm" 
        darkMode={darkMode}
        onSubmit={(e) => {
          e.preventDefault();  
          dispatch(addItem(current));  
        }} 
        onChange={handleUserInput} 
        >  
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
          <select
            id="category" 
            value={type}
            required={true}
          >
            {Categories.map((category, index)=> {
              return (
                <option key={index} value={category.category}>{category.category}</option>
              )
            })} 
          </select>
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
        <button className="add" type="submit" aria-label="add item">+</button>
      </Form>
    </div>
  )
}

export default connect(mapStateToProps)(AddItem)