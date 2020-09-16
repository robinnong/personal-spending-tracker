import React from 'react'; 
import { Categories } from './helpers';
import { VisibilityFilters } from './styles';
import { Months } from './helpers'; 
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const SelectFilter = ({ darkMode, setDate, sort, filter, dateRanges }) => ( 
  <> 
    <VisibilityFilters 
      action="" 
      darkMode={darkMode}
    >
      <div className="form__field">
        {/* <label htmlFor="dateView">Date</label> */}
        <select 
          name="dateView" 
          id="dateView"
          className="form__select--date"
          onChange={(e) => setDate(e.target.value)}
        >
          {dateRanges.map((range, index) => { 
            return (
              <option key={index} value={range.full}>{Months[range.month]} {range.year}</option>
            )
          })}
        </select>
        <ExpandMoreIcon />
      </div>
      <div className="form__fieldset">
        <div className="form__field">
          <label htmlFor="filter">Show</label>
          <select 
            name="filter" 
            id="filter"
            className="form__select--filter"
            onChange={(e) => filter(e.target.value)} 
          >
            <option value="">All</option>
            {Categories.map((category, index) => {
              return (
                <option key={index} value={category.category}>{category.category}</option>
              )
            })} 
          </select>
          <ExpandMoreIcon />
        </div>
        
        <div className="form__field">
          <label htmlFor="sort">Sort By</label>
          <select 
            name="sort" 
            id="sort"
            onChange={(e) => sort(e.target.value)}
          >
            <option value="date">Most Recent</option>
            <option value="name">Alphabetical</option>
            <option value="price">Highest to Lowest</option>
          </select>
          <ExpandMoreIcon />
        </div>
      </div>
    </VisibilityFilters> 
  </>
) 

export default SelectFilter