import React from 'react'
import Nav from 'react-bootstrap/Nav'

const PokeNav = ({onClick}) => {

  let navItems = ['All', '1~50', '51~100', '101~151']

  return (
    <Nav className="justify-content-center">
    {navItems.map((item,index)=>(
    <Nav.Item key={index}>
      <Nav.Link eventKey="disabled" onClick={onClick}>{item}</Nav.Link>
    </Nav.Item>
  ))}
  </Nav>
  )
}

export default PokeNav
