import React from 'react'; 

const SelectFilter = ({ categories, sort, filter }) => (
  <div className="visiblilityFilters">
    <form action="" className="filterSelect">
      <fieldset>
        <label htmlFor="filter">Show</label>
        <select 
          name="filter" 
          id="filter"
          onChange={(e) => filter(e.target.value)} 
        >
          <option value="">All</option>
          {categories.map((category, index) => {
            return (
              <option key={index} value={category}>
                {category}
              </option>
            )
          })}
        </select>
      </fieldset>
      <fieldset>
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
      </fieldset>
    </form>
  </div>
) 

export default SelectFilter