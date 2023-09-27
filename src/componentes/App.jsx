import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Pokemon } from './Pokemon'
import Buscador from './Buscador';

const App =  () => {
    const obtenerPokemons = async () =>{
        const respuesta  = await fetch('https://pokeapi.co/api/v2/pokemon');
        const {results} = await respuesta.json();
        // console.log(results)
        return results;
    }

    const [pokemons , usePokemons] = useState([]);
    obtenerPokemons().then( (pokemons) => {
        console.log(pokemons)
    });
    



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
