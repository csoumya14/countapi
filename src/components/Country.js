import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { Image, Button } from 'react-bootstrap'

const Country = ({ countriesToShow, setChosenCountry }) => {
  const history = useHistory()
  return (
    <Container>
      <Row>
        <Col md={4}>
          <Button
            onClick={() => {
              setChosenCountry('')
              history.push('/')
            }}
            variant="secondary"
            size="sm"
          >
            Back
          </Button>
        </Col>
      </Row>
      <Row md={3} xs={1}>
        <Col>
          <Image src={countriesToShow[0].flag} alt="flag" fluid style={{ marginTop: '50px' }} />
        </Col>
        <Col>
          <div style={{ marginTop: '80px', marginLeft: '50px' }}>
            <h2>{countriesToShow[0].name}</h2>
            <div style={{ fontSize: '11px', lineHeight: '1.6' }}>
              <div>Native Name: {countriesToShow[0].nativeName}</div>

              <div>Population: {countriesToShow[0].population}</div>

              <div>Region: {countriesToShow[0].region}</div>

              <div>Sub Region: {countriesToShow[0].subregion}</div>

              <div>Capital: {countriesToShow[0].capital}</div>
              {'\n'}
            </div>
          </div>
        </Col>
        <Col>
          <div style={{ marginTop: '125px' }}>
            <div style={{ fontSize: '11px', lineHeight: '1.6' }}>
              <div>Top Level Domain:{countriesToShow[0].topLevelDomain}</div>
              <div>
                Currencies: {countriesToShow[0].currencies.map((currency) => currency.name)}
              </div>
              <div>
                Languages:{' '}
                {countriesToShow[0].languages
                  .map(function (lan) {
                    return lan.name
                  })
                  .join(',')}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Country
