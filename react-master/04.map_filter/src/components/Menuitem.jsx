import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Menuitem = ({ name, price, img }) => {
  console.log(name, price, img)

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Button variant="primary">주문하기</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Menuitem
