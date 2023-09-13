import React from 'react'
import Form from 'react-bootstrap/Form';

const Buscador = () => {
  return (
    <div className='mb-5'>
       <Form.Label htmlFor="inputPassword5">Buscar</Form.Label>
      <Form.Control
        type="text"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
    </div>
  )
}

export default Buscador
