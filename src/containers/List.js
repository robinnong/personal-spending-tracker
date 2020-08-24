import { connect } from 'react-redux';
import { deleteItem } from '../redux/actions.js';
import Table from '../components/Table';

const getList = (items, filter, sort) => { 
  let list = [...items].sort((a, b) => {
      if (b[sort.column] > a[sort.column]) {
            return 1;
      } else if (b[sort.column] < a[sort.column]) {
          return -1;
      }
      return 0;
  });
  if (sort.direction) {
    list.reverse();
  }

  if (filter !== "") { 
    return list.filter(item => filter === item.category);
  } else { 
    return list;
  } 
}

const mapStateToProps = state => ({
  items: getList(state.items, state.filterBy, state.sorting) 
})

const mapDispatchToProps = dispatch => ({
  deleteItem: id => dispatch(deleteItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Table);