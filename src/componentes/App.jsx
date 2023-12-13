import React, { useState, useEffect  } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Pokemon } from './Pokemon'
import Buscador from './Buscador';
import { SideBar } from './SideBar';
import ListarPokemons from './ListarPokemons';

const App =  () => {
    const [pokemons , usePokemons] = useState([]);
    const [cargando , useCargando] = useState(true);
    const [tipos , useTipos] = useState([]);
    const [tipoSeleccionado, settipoSeleccionado] = useState([]);

    const obtenerPokemons = async () =>{
        let results = []
        if(tipoSeleccionado.length > 0){
          usePokemons([])
          const respuesta  = await fetch('https://pokeapi.co/api/v2/type/'+tipoSeleccionado);
          const {pokemon} = await respuesta.json();
          results = pokemon.map(pokemon => pokemon.pokemon);
          console.log(results,'RESULTS')
        }else{
          const respuesta  = await fetch('https://pokeapi.co/api/v2/pokemon');
          const resultado2 = await respuesta.json();
          results = await resultado2.results;
        }
        // console.log(results)
      const resp = results.map(async pokemon => {
        const res = await fetch(pokemon.url)
        const dato = await res.json();
        console.log(pokemon.url,'URL')
        return dato;
      })
      const resultado = await Promise.all(resp);
      // console.log(resultado);
      usePokemons(resultado);
      useCargando(false);

    }


    const seleccionarTipos = (tipo) => {
      let tipoFiltrado = tipoSeleccionado.filter((tipoS) => tipoS === tipo)
         settipoSeleccionado([
          ...tipoFiltrado,
           tipo
      ])
      
    }

    const buscar = () => {
      obtenerPokemons();
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
            <button type="button"
            onClick={buscar}
            >Buscar</button>
        </Row>
    </Container>
    {cargando ? "Cargando": (
       <Container fluid>
        <Row>
            <Col md={2}>
                <SideBar tipos={tipos} seleccionarTipos={seleccionarTipos}/>
            </Col>
            <Col md={10}>
              <Row>
                <ListarPokemons pokemons={pokemons}/>
              </Row>
            </Col>
        </Row>
       </Container>
    )}
    </>
  )
}

export default App
