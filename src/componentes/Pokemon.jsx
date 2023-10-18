import React from 'react'
import { Avatar } from './Avatar'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const Pokemon = ({name, types, sprites, order}) => {
  return (
    <>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sprites.other.dream_world.front_default} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          N° {order}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </>
  )
}
