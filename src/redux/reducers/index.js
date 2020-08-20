import { combineReducers } from 'redux';
import items from './items';
import categories from './categories';
import filterBy from './filterBy';
import sorting from './sorting';

export default combineReducers({
  items, 
  categories,
  filterBy,
  sorting
})