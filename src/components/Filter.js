import React from 'react'

const Filter = ({ chosenCountry, handleFilterChange }) => {
  return (
    <div className="filter">
      <input
        id="search"
        value={chosenCountry}
        onChange={handleFilterChange}
        placeholder="Search for a country"
      />
    </div>
  )
}

export default Filter
