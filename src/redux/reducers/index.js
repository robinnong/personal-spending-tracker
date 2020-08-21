import { combineReducers } from 'redux';
import items from './items'; 
import filterBy from './filterBy';
import sorting from './sorting';
import currentItem from './currentItem';

export default combineReducers({
  items,  
  filterBy,
  sorting,
  currentItem
})