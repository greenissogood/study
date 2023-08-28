import React from 'react'
import Nav from 'react-bootstrap/Nav'

const MenuNav = ({onClick}) => {
  let navItems = ['All', '커피', '에이드', '디저트', '베이커리']

  const handleClick = (e) =>{
    // Event객체 : 이벤트가 발생했을 때 이벤트 정보를 가지고 있는 객체

    // 버튼을 클릭했을 때 해당 요소의 컨텐츠 추출하기
    let category = e.target.innerText
    console.log(category);
    
  }

  return (
    <Nav className="justify-content-center" activeKey="/home">
      {navItems.map((item,index)=>(
      <Nav.Item key={index}>
        <Nav.Link eventKey="disabled" onClick={onClick}>{item}</Nav.Link>
      </Nav.Item>
   ))}
    </Nav>
  )
}

export default MenuNav
