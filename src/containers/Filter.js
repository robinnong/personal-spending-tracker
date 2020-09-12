import { connect } from 'react-redux';
import { setFilter, sortColumn, setDate } from '../redux/actions'; 
import SelectFilter from '../components/SelectFilter'; 

const getDateRanges = (state) => {
  const dates = state.items.map(item => item.date.slice(0, 7));
  const unique = dates.filter((num, i) => dates.indexOf(num) === i);  
  const ranges = unique.map(date => {
    const month = parseInt(date.slice(5,7));
    const year = date.slice(0,4);
    return (
      {
        full: date,
        month: month,
        year: year
      }
    )
  }) 
  return ranges
}

const mapStateToProps = (state) => ({ 
  darkMode: state.darkMode,
  dateRanges: getDateRanges(state)
}) 

const mapDispatchToProps = (dispatch) => ({
  filter: selection => dispatch(setFilter(selection)),
  sort: selection => dispatch(sortColumn(selection)),
  setDate: date => dispatch(setDate(date))
}) 

export default connect(mapStateToProps, mapDispatchToProps)(SelectFilter)