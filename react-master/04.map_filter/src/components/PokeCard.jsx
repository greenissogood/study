import React from 'react'
import Card from 'react-bootstrap/Card'

const PokeCard = ({pokemon}) => {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={pokemon.img} />
        <Card.Body>
          <Card.Title>{pokemon.name}</Card.Title>
          <Card.Text>몸무게 : {pokemon.weight}</Card.Text>
          <Card.Text>키 : {pokemon.height}</Card.Text>
          <Card.Text>타입 : {pokemon.type}</Card.Text>
          <Card.Text>약한 타입 : {pokemon.weaknesses}</Card.Text>
        </Card.Body>
      </Card>
  )
}

export default PokeCard