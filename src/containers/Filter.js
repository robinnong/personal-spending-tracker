import { connect } from 'react-redux';
import { setFilter, sortColumn } from '../redux/actions'; 
import SelectFilter from '../components/SelectFilter';

const getCategories = (state) => { 
  let categories = state.map(item => item.category)
  return categories.filter((val, i) => categories.indexOf(val) === i)   
}

const mapStateToProps = (state) => ({
  categories: getCategories(state.items)
}) 

const mapDispatchToProps = (dispatch) => ({
  filter: (selection) => dispatch(setFilter(selection)),
  sort: (selection) => dispatch(sortColumn(selection)),
}) 

export default connect(mapStateToProps, mapDispatchToProps)(SelectFilter)