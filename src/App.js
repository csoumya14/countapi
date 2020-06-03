import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom'
import FilterRegion from './components/FilterRegion'
import Filter from './components/Filter'
import CountryList from './components/CountryList'
import Country from './components/Country'
import { useDarkMode } from './useDarkMode'
import { Container, Row, Col } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme'
import { GlobalStyles } from './global'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

const rowFirstStyle = {
  backgroundColor: 'hsl(209, 23%, 22%)',
  color: 'hsl(0, 0%, 100%)',
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [chosenCountry, setChosenCountry] = useState('')
  const [chosenRegion, setChosenRegion] = useState('')
  const [theme, toggleTheme] = useDarkMode()

  useEffect(() => {
    Axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setCountries(response.data)
    })
  }, [])
  console.log('render', countries.length, 'countries')

  const handleFilterChange = (event) => {
    setChosenCountry(event.target.value)
  }

  const handleRegionChange = (event) => {
    setChosenRegion(event.value)
  }

  const regionOfCountries = countries.filter((country) =>
    country.region.toLowerCase().includes(chosenRegion.toLowerCase()),
  )

  const countriesToShow = regionOfCountries.filter((country) =>
    country.name.toLowerCase().includes(chosenCountry.toLowerCase()),
  )

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Router basename="/">
        <Container>
          <Row style={rowFirstStyle}>
            <Col>
              <h1 style={{ fontWeight: '800', fontSize: '16px', marginTop: '20px' }}>
                Where in the world?
              </h1>
            </Col>
            <Col>
              <Button
                className="float-right"
                style={{
                  background: 'hsl(209, 23%, 22%)',
                  border: 'none',
                }}
                onClick={toggleTheme}
              >
                <FontAwesomeIcon icon={faMoon} />
                Dark Mode
              </Button>
            </Col>
          </Row>
          <div>
            <Switch>
              <Route path="/country">
                <Row>
                  <Col>
                    <Country
                      countriesToShow={countriesToShow}
                      setChosenCountry={setChosenCountry}
                    />
                  </Col>
                </Row>
              </Route>
              <Route path="/">
                <Row>
                  <Col sm={{ size: 'auto' }}>
                    <Filter chosenCountry={chosenCountry} handleFilterChange={handleFilterChange} />
                  </Col>
                  <Col sm={{ size: 'auto' }}>
                    <FilterRegion
                      handleRegionChange={handleRegionChange}
                      chosenRegion={chosenRegion}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col sm={{ size: 'auto' }}>
                    <CountryList
                      countriesToShow={countriesToShow}
                      setChosenCountry={setChosenCountry}
                    />
                  </Col>
                </Row>
              </Route>
            </Switch>
          </div>
        </Container>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
