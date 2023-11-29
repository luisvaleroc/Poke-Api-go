import React, { useState, useEffect  } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Pokemon } from './Pokemon'
import Buscador from './Buscador';
import { SideBar } from './SideBar';

const App =  () => {
    const [pokemons , usePokemons] = useState([]);
    const [cargando , useCargando] = useState(true);
    const [tipos , useTipos] = useState([]);

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
      // console.log(resultado);
      usePokemons(resultado);
      useCargando(false);

    }

    const obtenerTipos = async () => {
        const respuesta = await fetch('https://pokeapi.co/api/v2/type/');
        const {results}  = await respuesta.json();
        useTipos(results);
        // console.log(results);
    }
    useEffect(() => {
      obtenerPokemons()
      obtenerTipos()
    }, []);

    useEffect( () => {
      console.log(tipos)
    },[tipos]);

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
       <Container fluid>
        <Row>
            <Col md={2}>
              <SideBar/>
            </Col>
            <Col md={10}>
              <Row>
                {pokemons.map(pokemon=>(
                     <Col xs={3} key={pokemon.order}>
                        <Pokemon {...pokemon}/>
                    </Col>
                ))}
              </Row>
            </Col>
        </Row>
       </Container>
    )}
    </>
  )
}

export default App
