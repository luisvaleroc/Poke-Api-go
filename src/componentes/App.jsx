import React, { useState, useEffect  } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Pokemon } from './Pokemon'
import Buscador from './Buscador';

const App =  () => {
    const [pokemons , usePokemons] = useState([]);

    const obtenerPokemons = async () =>{
        const respuesta  = await fetch('https://pokeapi.co/api/v2/pokemon');
        const {results} = await respuesta.json();
        // console.log(results)
      const resp = results.map(async pokemon => {
        const res = await fetch(pokemon.url)
        const dato = await res.json();
        return dato;
      })
      const resultado = await Promise.all(resp);
      console.log(resultado);
      usePokemons(resultado);
    }
 useEffect(() => {
    
    obtenerPokemons()
  }, []);
   
    



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
                    <Pokemon pokemon={pokemons[0]}/>
                </Col>
            </Row>
       </Container>
    </>
  )
}

export default App
