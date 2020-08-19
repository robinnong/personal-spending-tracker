import React from 'react';

const Filter = (props) => {
  return(
    <form action="" onChange={props.handleCategoryChange} className="filterSelect">
      <label htmlFor="filter">Show</label>
      <select name="filter" id="filter">
        <option value="">All</option>
        {props.categories.map((category, index) => {
          return (
            <option
              key={index}
              value={category}>{category}</option>
          )
        })}
      </select>
    </form> 
  )
}

export default Filter
