import React from 'react'
import Form from 'react-bootstrap/Form';

export const SideBar = () => {
  return (
    <Form>
        <Form.Check // prettier-ignore
            type={'checkbox'}
            id={`default`}
            label={`default`}
        />
    </Form>
  )
}
