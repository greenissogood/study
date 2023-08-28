import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Board from './components/Board'
import './style/ex03.css'
/*
  실습문제 ) 주사위 게임 페이지 구현
   1. 사용자가 '던지기' 버튼을 누른다.
   2. 주사위 눈이 랜덤으로 표시된다.
   3. 사용자의 주사위 눈과 컴퓨터의 주사위 눈을 비교한다.
      - 무승부 : alert()를 활용하여 '무승부' 출력 창 띄우기
      - 사용자가 이겼을 경우 : 사용자의 카운트 +1
      - 컴퓨터가 이겼을 경우 : 컴퓨터에 카운트 +1
   4. 'Reset' 버튼 클릭 시 모든 내용 초기화
        - 점수, 이미지 

      [만들어야 할 state]
        - 점수
        - 주사위 숫자
        - 주사위 이미지 경로
      [만들어야 할 component]
        - Board.jsx
*/
const Ex03 = () => {
  const imgPath = './img/dice'

  // 사용자 state
  const [userScore, setUserScore] = useState(0)
  const [userDicenum, setUserDicenum] = useState(1)
  const [userImg, setUserimg] = useState(`${imgPath}1.png`)

  // 컴퓨터 state
  const [comScore, setComScore] = useState(0)
  const [ComDicenum, setComDicenum] = useState(1)
  const [comImg, setComimg] = useState(`${imgPath}1.png`)

  // 주사위 던지기 기능
  const pushButn = () => {
    let userNum = parseInt(Math.random() * 6) + 1
    let comNum = parseInt(Math.random() * 6) + 1
    console.log(userNum, comNum)

    setUserDicenum(userNum)
    setComDicenum(comNum)
    setUserimg(`${imgPath}${userNum}.png`)
    setComimg(`${imgPath}${comNum}.png`)

    judgement(userNum, comNum)
  }
  // 주사위 눈 비교하는 기능
  const judgement = (user, com) => {
    console.log('넘겨받은 숫자 :', user, com)
    if (user === com) {
      alert('무승부')
    } else if (user > com) {
      setUserScore(userScore + 1)
    } else {
      setComScore(comScore + 1)
    }
  }

  // 초기화 기능
  const reset = () =>{
    setUserDicenum(1)
    setUserimg(`${imgPath}1.png`)
    setUserScore(0)

    setComDicenum(1)
    setComimg(`${imgPath}1.png`)
    setComScore(0)
  }

  return (
    <div className="container">
      <h1>주사위게임</h1>
      <div className="button_area">
        <Button onClick={pushButn}>던지기</Button>
        <Button onClick={reset}>초기화</Button>
      </div>
      <div className="board-area">
        <Board
          name={`나(${userDicenum})`}
          imgPath={userImg}
          score={userScore}
        />
        <Board
          name={`컴퓨터(${ComDicenum})`} 
          imgPath={comImg}
          score={comScore}
        />
      </div>
    </div>
  )
}

export default Ex03
