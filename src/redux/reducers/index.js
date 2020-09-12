import { combineReducers } from 'redux';
import items from './items'; 
import filterBy from './filterBy';
import sorting from './sorting';
import currentItem from './currentItem';
import darkMode from './darkMode';
import dateRange from './dateRange';

export default combineReducers({
  currentItem,
  darkMode,
  dateRange,
  items,  
  filterBy,
  sorting,
})