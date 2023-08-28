import React, { useState } from 'react'
import coffeemenu from './data/coffee_menus.json'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import './App.css'

/*
    실습문제 : 커피 메뉴를 출력하는 웹 페이지 구현
        1. 'coffee_menus.json'에 파일을 import 한다.
        2. 커피 정보를 HTML 문법과 결합하여 화면에 출력한다.
        
        <결과물>
            card 형태로 메뉴 이름과 금액만 출력할 것
            * react bootstrap 사용할 경우
            1. npm install react-bootstrap bootstrap 설치
            2. Ex02.js에 CSS 파일을 import 하기
                -> import 'bootstrap/dist/css/bootstrap.min.css';
            3. 원하는 컴포넌트가 있다면 import 해서 사용하기
                ex) 버튼을 사용할 경우 -> import {Button} from 'react-bootstrap'
*/
// const Ex02 = () => {
//     console.log(coffeemenu);

//     const [Menu, setMenu] = useState(coffeemenu)

//   return <div className='cardStyle'>
//         {Menu.map((Menu)=>(
//            <Card style={{ width: '18rem' }}>
//            <Card.Img variant="top" src={Menu.img} />
//            <Card.Body>
//              <Card.Title>{Menu.category}</Card.Title>
//              <Card.Text>
//              {Menu.name}
//              <br></br>
//              {Menu.price}
//              </Card.Text>
//              <Button variant="primary">선택하기</Button>
//            </Card.Body>
//          </Card>
//         ))}
//     </div>
// }

export default Ex02