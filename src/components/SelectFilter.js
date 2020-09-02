import React from 'react'; 
import { Categories } from './helpers';

const SelectFilter = ({ categories, sort, filter }) => ( 
  <form action="" className="filterSelect">
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
            <option key={index} value={category}>{category}</option>
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
  </form> 
) 

export default SelectFilter