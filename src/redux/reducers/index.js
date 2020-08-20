import { combineReducers } from 'redux';
import items from './items'; 
import filterBy from './filterBy';
import sorting from './sorting';

export default combineReducers({
  items,  
  filterBy,
  sorting
})