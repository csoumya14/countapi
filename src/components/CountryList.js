import React from 'react'

import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { BrowserRouter as Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
const CountryList = ({ countriesToShow, setChosenCountry }) => {
  switch (true) {
    case countriesToShow.length > 10: {
      const countriesToDisplay = countriesToShow.slice(0, 8)
      return (
        <div className="grid-container">
          <Container>
            <Row xs="1" md="4">
              {countriesToDisplay.map((country) => {
                return (
                  <Col key={country.name}>
                    <Card
                      style={{
                        width: '12rem',
                        height: '20rem',
                        marginBottom: '50px',
                        marginRight: '10px',
                      }}
                    >
                      <Card.Img variant="top" src={country.flag} style={{ height: '10rem' }} />
                      <Card.Body>
                        <Card.Title
                          style={{
                            fontSize: '18px',
                            width: '100%',
                            color: 'hsl(200, 15%, 8%)',
                          }}
                        >
                          {country.name}
                        </Card.Title>
                        <Card.Text
                          style={{
                            fontSize: '10px',
                            width: '80%',
                            color: 'hsl(200, 15%, 8%)',
                          }}
                        >
                          Population:{country.population}
                          {'\n'}
                          Region:{country.region}
                          {'\n'}
                          Capital:{country.capital}
                          {'\n'}
                        </Card.Text>
                        <Link to="/country">
                          <Button
                            onClick={() => {
                              setChosenCountry(country.name)
                            }}
                            variant="secondary"
                            size="sm"
                          >
                            show
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })}
            </Row>
          </Container>
        </div>
      )
    }
    case countriesToShow.length > 1 && countriesToShow.length < 10: {
      return (
        <div className="grid-container">
          <Container fluid style={{ lineHeight: '32px' }}>
            <Row xs="1" md="4">
              {countriesToShow.map((country) => {
                return (
                  <Col key={country.name}>
                    <Card style={{ width: '15rem', marginBottom: '50px' }}>
                      <Card.Img variant="top" src={country.flag} style={{ height: '10rem' }} />
                      <Card.Body>
                        <Card.Title>{country.name}</Card.Title>
                        <Card.Text>
                          <div>Population:{country.population}</div>
                          <div>Region:{country.region}</div>
                          <div>Capital:{country.capital}</div>
                        </Card.Text>
                        <Link to="/country">
                          <Button
                            onClick={() => {
                              setChosenCountry(country.name)
                            }}
                          >
                            show
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })}
            </Row>
          </Container>
        </div>
      )
    }

    case countriesToShow.length === 1: {
      return (
        <div className="grid-container">
          <Container>
            <Row md="1">
              <Col md={{ span: 3, offset: 5 }} key={countriesToShow[0].name}>
                <Card style={{ width: '15rem', marginBottom: '50px' }}>
                  <Card.Img
                    variant="top"
                    src={countriesToShow[0].flag}
                    style={{ height: '10rem' }}
                  />
                  <Card.Body>
                    <Card.Title>{countriesToShow[0].name}</Card.Title>
                    <Card.Text>
                      <div>Population:{countriesToShow[0].population}</div>
                      <div>Region:{countriesToShow[0].region}</div>
                      <div>Capital:{countriesToShow[0].capital}</div>
                    </Card.Text>
                    <Link to="/country">
                      <Button
                        onClick={() => {
                          setChosenCountry(countriesToShow[0].name)
                        }}
                      >
                        show
                      </Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      )
    }
    default:
      return null
  }
}

export default CountryList
