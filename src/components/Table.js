import { connect } from 'react-redux';
import { deleteItem } from '../redux/actions.js';
import List from './List';

const getList = (items, text) => {
  console.log(text)
  if (text !== "") { 
    return items.filter(item => text === item.category)
  } else {
    return items;
  } 
}

const mapStateToProps = state => ({
  items: getList(state.items, state.filterBy)
})

const mapDispatchToProps = dispatch => ({
  deleteItem: id => dispatch(deleteItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(List);