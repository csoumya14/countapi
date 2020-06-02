import React from 'react'
import { Button } from 'react-bootstrap'
import { BrowserRouter as Link } from 'react-router-dom'

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
/*

      */
