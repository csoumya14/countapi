import React from 'react'
import styled from 'styled-components'
const Input = styled.input`
  border-radius: 4px;
  margin-left: 14px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  border: none;
  font-size: 16px;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.inputBackgroundColor};
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;

  margin-top: 12px;
`

const Filter = ({ chosenCountry, handleFilterChange }) => {
  return (
    <div>
      <Input
        value={chosenCountry}
        onChange={handleFilterChange}
        placeholder="Search for a country"
      />
    </div>
  )
}

export default Filter
