import React from 'react'
import Form from 'react-bootstrap/Form';

export const SideBar = ({tipos,seleccionarTipos}) => {
  console.log(tipos)

  return (
    <Form>
        {tipos.map(tipo => (
          <Form.Check // prettier-ignore
              key={tipo.name}
              type={'checkbox'}
              id={`default`}
              label={tipo.name}
              value={1}
              onClick={() => seleccionarTipos(tipo.name)}
          />
        ))}
    </Form>
  )
}
