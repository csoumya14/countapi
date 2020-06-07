import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

const Main = styled.div`
  marginTop: '5em' 
  marginLeft: '50px' 
  padding: 1em;
  lineHeight: '1.6'
  
`
const Title = styled.h1`
  font-family: Nunito Sans;
  font-size: 16px;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
`
const Paragraph = styled.div`
  font-family: Nunito Sans;
  font-size: 14px;
  font-weight: 300;
`
const Button = styled.button`
  font-family: Nunito Sans;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
  font-weight: 300;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  width: 8.5em;
  padding: 0.5em;
  margin-top: 10px;
`

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
          >
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Button>
        </Col>
      </Row>
      <Row md={3} xs={1}>
        <Col>
          <Image src={countriesToShow[0].flag} alt="flag" fluid style={{ marginTop: '50px' }} />
        </Col>
        <Col>
          <Main>
            <Title>{countriesToShow[0].name}</Title>
            <div>
              <Paragraph>Native Name: {countriesToShow[0].nativeName}</Paragraph>

              <Paragraph>Population: {countriesToShow[0].population}</Paragraph>

              <Paragraph>Region: {countriesToShow[0].region}</Paragraph>

              <Paragraph>Sub Region: {countriesToShow[0].subregion}</Paragraph>

              <Paragraph>Capital: {countriesToShow[0].capital}</Paragraph>
              {'\n'}
            </div>
          </Main>
        </Col>
        <Col>
          <div>
            <Main>
              <Paragraph>
                Top Level Domain:
                {countriesToShow[0].topLevelDomain}
              </Paragraph>
              <Paragraph>
                Currencies: {countriesToShow[0].currencies.map((currency) => currency.name)}
              </Paragraph>
              <Paragraph>
                Languages:{' '}
                {countriesToShow[0].languages
                  .map(function (lan) {
                    return lan.name
                  })
                  .join(',')}
              </Paragraph>
            </Main>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Country
