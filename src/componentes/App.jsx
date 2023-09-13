import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Pokemon } from './Pokemon'
import Buscador from './Buscador';

const App = () => {
  return (
    <>
    <header>
        <h1>Poke Api</h1>
    </header>
    <Container>
        <Row>
            <Buscador />
        </Row>
    </Container>
       <Container fluid="md">
            <Row>
                <Col xs={3}>
                    <Pokemon/>
                </Col>
                <Col xs={3}>
                    <Pokemon/>
                </Col>
                <Col xs={3}>
                    <Pokemon/>
                </Col>
                <Col xs={3}>
                    <Pokemon/>
                </Col>

            </Row>
        
       </Container>
      
    </>
  )
}

export default App
