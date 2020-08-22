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

const calculateSum = data => {
  const values = data.map(item => item.price);
  return values.reduce((a, b) => a + b);
}

const mapStateToProps = state => ({
  items: getList(state.items, state.filterBy, state.sorting),
  total: calculateSum(state.items)
})

const mapDispatchToProps = dispatch => ({
  deleteItem: id => dispatch(deleteItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Table);