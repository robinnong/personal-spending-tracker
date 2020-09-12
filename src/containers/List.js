import { connect } from 'react-redux';
import { deleteItem } from '../redux/actions.js';
import Table from '../components/Table';

const getList = (items, filter, sort, date) => { 
  let list = [...items].filter(item => item.date.includes(date));
  let sorted = list.sort((a, b) => {
      if (b[sort.column] > a[sort.column]) {
            return 1;
      } else if (b[sort.column] < a[sort.column]) {
          return -1;
      }
      return 0;
  });

  if (sort.direction) {
    sorted.reverse();
  }

  if (filter !== "") { 
    return sorted.filter(item => filter === item.category);
  } else { 
    return sorted;
  } 
}

const mapStateToProps = state => ({
  items: getList(state.items, state.filterBy, state.sorting, state.dateRange),
  darkMode: state.darkMode 
})

const mapDispatchToProps = dispatch => ({
  deleteItem: id => dispatch(deleteItem(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Table);