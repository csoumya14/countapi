import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const Main = styled.div`
  padding: 1em;
  background: ${({ theme }) => theme.background};
`
const Title = styled.h1`
  font-family: Nunito Sans;
  font-size: 16px;
  font-weight: 800;
  color: ${({ theme }) => theme.text};
`

const Button = styled.button`
  font-family: Nunito Sans;
  color: ${({ theme }) => theme.text};
  background: ${({ theme }) => theme.background};
  font-weight: 600;
  font-size: 14px;
  border: none;
`
const Titles = ({ toggleTheme }) => {
  return (
    <Container>
      <Main>
        <Row>
          <Col>
            <Title>Where in the world?</Title>
          </Col>
          <Col>
            <Button className="float-right" onClick={toggleTheme}>
              <FontAwesomeIcon icon={faMoon} /> Dark Mode
            </Button>
          </Col>
        </Row>
      </Main>
    </Container>
  )
}

export default Titles
