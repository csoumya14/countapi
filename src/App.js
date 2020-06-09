import React, { useState, useEffect } from 'react'

import countryService from './services/countries'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import FilterRegion from './components/FilterRegion'
import Filter from './components/Filter'
import CountryList from './components/CountryList'
import Country from './components/Country'
import Titles from './components/Title'
import { useDarkMode } from './useDarkMode'
import { Container, Row, Col } from 'react-bootstrap'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './theme'
import { GlobalStyles } from './global'

const App = () => {
  const [countries, setCountries] = useState([])

  const [chosenCountry, setChosenCountry] = useState('')
  const [chosenRegion, setChosenRegion] = useState('')

  const [theme, toggleTheme] = useDarkMode()

  useEffect(() => {
    countryService.getAll().then((initialCountries) => {
      setCountries(initialCountries)
    })
  }, [])

  const handleFilterChange = (event) => {
    setChosenCountry(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setChosenCountry('')
  }

  const regionOfCountries = countries.filter((country) =>
    country.region.toLowerCase().includes(chosenRegion.toLowerCase()),
  )

  const countriesToShow = regionOfCountries.filter((country) =>
    country.name.toLowerCase().includes(chosenCountry.toLowerCase()),
  )

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <Router basename={process.env.PUBLIC_URL}>
        <Container>
          <Titles toggleTheme={toggleTheme} />
          <Switch>
            <Route path="/country">
              <Row>
                <Col>
                  <Country countriesToShow={countriesToShow} setChosenCountry={setChosenCountry} />
                </Col>
              </Row>
            </Route>
            <Route path="/">
              <Row>
                <Col sm={{ size: 'auto' }}>
                  <Filter
                    chosenCountry={chosenCountry}
                    handleFilterChange={handleFilterChange}
                    handleSubmit={handleSubmit}
                  />
                </Col>
                <Col sm={{ size: 'auto' }}>
                  <FilterRegion chosenRegion={chosenRegion} setChosenRegion={setChosenRegion} />
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
            <Redirect from="/country" to="/" />
          </Switch>
          <Row>
            <Col>
              <br />
              <em>Challenge by frontend mentor, coded by Soumya</em>
            </Col>
          </Row>
        </Container>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
