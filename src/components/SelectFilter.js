import React from 'react'; 
import { Categories } from './helpers';
import { VisibilityFilters } from './styles';

const SelectFilter = ({ darkMode, sort, filter }) => ( 
  <VisibilityFilters 
    action="" 
    darkMode={darkMode}
  >
    <div>
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
    
    <div>
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
  </VisibilityFilters> 
) 

export default SelectFilter