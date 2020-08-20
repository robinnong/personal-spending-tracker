import React from 'react'; 

const SelectFilter = ({ categories, handleChange }) => (
  <form action="" onChange={(e) => handleChange(e.target.value)} className="filterSelect">
    <label htmlFor="filter">Show</label>
    <select name="filter" id="filter">
      <option value="">All</option>
      {categories.map((category, index) => {
        return (
          <option
            key={index}
            value={category}>{category}</option>
        )
      })}
    </select>
  </form>
) 

export default SelectFilter