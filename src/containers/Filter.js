import { connect } from 'react-redux';
import { setFilter, sortColumn } from '../redux/actions'; 
import SelectFilter from '../components/SelectFilter'; 

const mapStateToProps = (state) => ({ 
  darkMode: state.darkMode
}) 

const mapDispatchToProps = (dispatch) => ({
  filter: (selection) => dispatch(setFilter(selection)),
  sort: (selection) => dispatch(sortColumn(selection)),
}) 

export default connect(mapStateToProps, mapDispatchToProps)(SelectFilter)