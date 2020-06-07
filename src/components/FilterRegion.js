import React, { useState } from 'react'

import styled from 'styled-components'

const Main = styled.div`
  font-family: sans-serif;

  width: 10.5em;

  float: right;

  margin-bottom: 0.8em;
`

const DropDownContainer = styled.div`
  width: 10.5em;
  border: 1px solid hhh;
  margin-top: 13px;
`
const DropDownHeader = styled.div`
  box-sizing: border-box;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);

  border-radius: 4px;
  font-family: Nunito Sans;
  font-weight: 300;
  font-size: 14px;
  text-align: center;
  margin-right: 15px;
  padding: 12px 20px 12px 40px;

  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
`
const DropDownListContainer = styled.div``
const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: ${({ theme }) => theme.background};

  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  font-weight: 300;
  &:first-child {
    padding-top: 0.8em;
  }
`
const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
`
const Options = ['Asia', 'Europe', 'America', 'Oceania', 'Africa']
const FilterRegion = ({ setChosenRegion, chosenRegion }) => {
  const [isOpen, setIsOpen] = useState(false)

  const onOptionClicked = (value) => () => {
    setChosenRegion(value)
    setIsOpen(false)
  }

  return (
    <Main>
      <DropDownContainer>
        <DropDownHeader
          onClick={() => {
            setIsOpen(!isOpen)
            setChosenRegion('')
          }}
        >
          {chosenRegion || 'Filter by Region'}
        </DropDownHeader>
      </DropDownContainer>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList value={chosenRegion}>
            {Options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                {option}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </Main>
  )
}

export default FilterRegion
