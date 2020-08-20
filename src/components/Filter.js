import { connect } from 'react-redux';
import { setFilter } from '../redux/actions'; 
import SelectFilter from './SelectFilter';

const getFilters = (categories) => {
  return categories
}

const mapStateToProps = (state) => ({
  categories: getFilters(state.categories) 
}) 

const mapDispatchToProps = (dispatch) => ({
  handleChange: (selection) => dispatch(setFilter(selection))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(SelectFilter)