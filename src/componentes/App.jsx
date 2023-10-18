import React, { useState, useEffect  } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Pokemon } from './Pokemon'
import Buscador from './Buscador';

const App =  () => {
    const [pokemons , usePokemons] = useState([]);
    const [cargando , useCargando] = useState(true);

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
      usePokemons(resp);
      useCargando(false);

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
    {cargando ? "Cargando": (
       <Container fluid="md">
        {JSON.stringify(pokemons)};
            <Row>
                {pokemons.map((pokemon)=>{
                    <Col xs={3} key={pokemon.order}>
                        <Pokemon {...pokemon}/>
                        hola
                    </Col>
                })}
            </Row>
       </Container>
    )}
    </>
  )
}

export default App
