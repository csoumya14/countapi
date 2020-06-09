import React from 'react'

import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

import { Container, Row, Col } from 'react-bootstrap'

const CardStyle = {
  width: '10rem',
  marginBottom: '50px',
  marginRight: '10px',
  background: '#737373',
}

const CardTextStyle = {
  fontSize: '14px',
  width: '100%',
  color: 'hsl(200, 15%, 8%)',
  lineHeight: '1.3',
}

const CardTitleStyle = {
  marginTop: '0px',
  paddingTop: '0px',
  fontSize: '14px',
  width: '100%',
  height: '50%',
  color: 'hsl(200, 15%, 8%)',
  fontWeight: '600',
}

const ButtonStyle = {
  marginTop: '0px',
  padding: '0px 0px 5px 0px',
}

const CountryList = ({ countriesToShow, setChosenCountry, handleSubmit }) => {
  const history = useHistory()

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
                    <Card style={CardStyle}>
                      <Card.Img variant="top" src={country.flag} style={{ height: '8rem' }} />
                      <Card.Body>
                        <Card.Title style={CardTitleStyle}>{country.name}</Card.Title>
                        <Card.Text style={CardTextStyle}>
                          Region:{country.region}
                          {'\n'}
                          Capital:{country.capital}
                          {'\n'}
                        </Card.Text>
                        <Button
                          onClick={() => {
                            setChosenCountry(country.name)
                            history.push('/country')
                          }}
                          variant="outline-info"
                          size="sm"
                          style={ButtonStyle}
                        >
                          show
                        </Button>
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
                    <Card style={CardStyle}>
                      <Card.Img variant="top" src={country.flag} style={{ height: '8rem' }} />
                      <Card.Body>
                        <Card.Title style={CardTitleStyle}>{country.name}</Card.Title>
                        <Card.Text style={CardTextStyle}>
                          Population:{country.population}
                          {'\n'}
                          Region:{country.region}
                          {'\n'}
                          Capital:{country.capital}
                          {'\n'}
                        </Card.Text>

                        <Button
                          onClick={() => {
                            setChosenCountry(country.name)
                            history.push('/country')
                          }}
                          variant="outline-info"
                          size="sm"
                          style={ButtonStyle}
                        >
                          show
                        </Button>
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
                <Card style={CardStyle}>
                  <Card.Img
                    variant="top"
                    src={countriesToShow[0].flag}
                    style={{ height: '8rem' }}
                  />
                  <Card.Body>
                    <Card.Title style={CardTitleStyle}>{countriesToShow[0].name}</Card.Title>
                    <Card.Text style={CardTextStyle}>
                      Population:{countriesToShow[0].population}
                      {'\n'}
                      Region:{countriesToShow[0].region}
                      {'\n'}
                      Capital:{countriesToShow[0].capital}
                      {'\n'}
                    </Card.Text>

                    <Button
                      onClick={() => {
                        setChosenCountry(countriesToShow[0].name)
                        history.push('/country')
                      }}
                      variant="outline-info"
                      size="sm"
                      style={ButtonStyle}
                    >
                      show
                    </Button>
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
