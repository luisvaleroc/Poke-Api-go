import React from 'react'
import { Pokemon } from './Pokemon'
import Col from 'react-bootstrap/Col';

const ListarPokemons = ({pokemons}) => {
  return (
    <>
        {pokemons.map(pokemon => (
          <Col xs={3} key={pokemon.name}>
            <Pokemon {...pokemon}/>
          </Col>
        ))}
    </>
  )
}

export default ListarPokemons