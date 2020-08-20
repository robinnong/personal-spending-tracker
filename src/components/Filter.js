import { connect } from 'react-redux';
import { setFilter } from '../redux/actions'; 
import SelectFilter from './SelectFilter';

const getCategories = (state) => { 
  let categories = state.map(item => item.category)
  return categories.filter((num, i) => categories.indexOf(num) === i)   
}

const mapStateToProps = (state) => ({
  categories: getCategories(state.items)
}) 

const mapDispatchToProps = (dispatch) => ({
  handleChange: (selection) => dispatch(setFilter(selection))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(SelectFilter)