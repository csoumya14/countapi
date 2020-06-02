import React from 'react'
import Select from 'react-select'

const options = [
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'America', label: 'America' },
  { value: 'Oceania', label: 'Oceania' },
  { value: 'Africa', label: 'Africa' },
]

const customStyles = {
  container: (provided, state) => ({
    marginTop: '12px',
    ...provided,
    className: 'float-md-right',
    border: state.isFocused ? null : null,
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease, padding 0.2s ease',
    '&:hover': {
      boxShadow: '0 2px 4px 0 rgba(41, 56, 78, 0.1)',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    className: 'float-right',
    backgroundColor: 'hsl(209, 23%, 22%)',
    color: 'white',
  }),
  control: (base, state) => ({
    ...base,
    className: 'float-md-right',
    background: 'hsl(209, 23%, 22%)',
  }),
  valueContainer: (base, state) => ({
    ...base,
    className: 'float-right',
    background: 'hsl(209, 23%, 22%)',
  }),
}

const FilterRegion = ({ chosenRegion, handleRegionChange }) => {
  return (
    <div style={{ maxWidth: '40% ', marginLeft: '210px', marginRight: '0px' }}>
      <Select
        placeholder="Filter by Region"
        styles={customStyles}
        options={options}
        onChange={handleRegionChange}
        value={options.filter((obj) => obj.value === chosenRegion)}
      />
    </div>
  )
}
/*
const FilterRegion = ({ chosenRegion, handleRegionChange, handleSubmit, defaultOption }) => {
  return (
    <div className="regionFilter">
      <form onSubmit={handleSubmit}>
        <label className="dropdown">
          <select value={chosenRegion} onChange={handleRegionChange}>
            <option id="dropdownContent" value=" ">
              {defaultOption}
            </option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="America">America</option>
            <option value="Oceania">Oceania</option>
            <option value="Africa">Africa</option>
          </select>
        </label>
      </form>
    </div>
  )
}
*/

export default FilterRegion
