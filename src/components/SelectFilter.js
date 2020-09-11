import React from 'react'; 
import { Categories } from './helpers';
import { VisibilityFilters } from './styles';
import { Months } from './helpers'; 

const SelectFilter = ({ darkMode, sort, filter, dateRanges }) => ( 
  <> 
    <VisibilityFilters 
      action="" 
      darkMode={darkMode}
    >
      <div className="field">
        <label htmlFor="dateView">Date</label>
        <select name="dateView" id="dateView">
          {dateRanges.map((range, index) => { 
            return (
              <option key={index} value={range.full}>{Months[range.month]} {range.year}</option>
            )
          })}
        </select>
      </div>
      <div className="fieldset">
        <div className="field">
          <label htmlFor="filter">Show</label>
          <select 
            name="filter" 
            id="filter"
            onChange={(e) => filter(e.target.value)} 
          >
            <option value="">All</option>
            {Categories.map((category, index) => {
              return (
                <option key={index} value={category.category}>{category.category}</option>
              )
            })} 
          </select>
        </div>
        
        <div className="field">
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
        </div>
      </div>
    </VisibilityFilters> 
  </>
) 

export default SelectFilter