import React, { useState } from 'react';  
import { connect } from 'react-redux';
import { Categories } from './helpers';
import { addItem, setCurrentItem } from '../redux/actions';  
import { Form } from './styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

const mapStateToProps = (state) => ({ 
  current: state.currentItem,
  darkMode: state.darkMode
});

const AddItem = ({ darkMode, current, dispatch }) => { 
  const [isVisible, setVisibility] = useState(true);
   // Keeps track of user's input, saving the input to its corresponding property in the list item object
  const handleUserInput = (e) => {
    const { id, value } = e.target;  
    dispatch(setCurrentItem({ field: id, val: value })); 
  }      

  const { type, name, price, date } = current;
  return (
    <div> 
      <Form 
        action=""  
        visible={isVisible}
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
          <ExpandMoreIcon />
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
          <ExpandMoreIcon />
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
          <CalendarTodayIcon />
        </div>
        <button className="button__add" type="submit" aria-label="add item">+</button>
      </Form>
      <button className="button__hide" onClick={() => setVisibility(!isVisible)}>
        {isVisible 
          ? 
          <>
            <span className="button__hide--labelled">Hide</span>
            <ExpandLessIcon /> 
          </>
          : 
          <>
            <span className="button__hide--labelled">Show</span>
            <ExpandMoreIcon />
          </>
          }
      </button>
    </div>
  )
}

export default connect(mapStateToProps)(AddItem)