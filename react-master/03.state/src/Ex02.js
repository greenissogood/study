import React, {useState} from 'react'

/*
    실습문제 2) 랜덤 숫자 맞추는 페이지 구현
    step 1. 랜덤 숫자를 생성한다.(범위 : 1~3)
    step 2. 사용자가 누른 버튼의 숫자를 가져온다
    step 3. 랜덤 숫자와 사용자 숫자 비교한다
              - 두 숫자가 동일할 경우 : "Oh~"
              - 두 숫자가 불일치한 경우 : "Noo.."
*/

const Ex02 = () => {

  const [ranNum, setRanNum] = useState(0)
  const [userNum, setUserNum] = useState(0)
  const [result, setResult] = useState("")

  const handleNum = (e) => {
    console.log('버튼 text :', e.target.innerText)
    // 버튼을 눌렀을 때 버튼text를 가져옴 => e.target(button태그) -> innerText(1)를 가져온다
  
    // 랜덤숫자 생성
    let newNum = parseInt(Math.random()*3)+1
    let inputNum = parseInt(e.target.innerText)

    console.log(newNum);
    console.log(inputNum);

    // state 변경
    setUserNum(inputNum)
    setRanNum(newNum)

    // 사용자와 컴퓨터 숫자를 비교하는 함수
    jugement(inputNum, newNum)
  }

  const jugement = (userNum, ranNum)=>{
    let resultMsg = userNum === ranNum ? <p>정답~</p> : <p>오답~</p>

    setResult(resultMsg)
  }

  return (
    <div>
      <button onClick={handleNum}>1</button>
      <button onClick={handleNum}>2</button>
      <button onClick={handleNum}>3</button>
      <p>내가 선택한 숫자 : {userNum}</p>
      <p>랜덤 숫자 : {ranNum}</p>
      <p>{result}</p>
    </div>
  )
}

export default Ex02

// import React from 'react'
// import { useState } from 'react'

// /*
//     실습문제2) 랜덤 숫자 맞추는 페이지 구현
//     STEP1) 랜덤숫자를 생성한다. ( 범위: 1~3 )
//     STEP2) 사용자가 누른 버튼의 숫자를 가져온다
//     STEP3) 사용자가 선택한 숫자와 랜덤숫자를 비교한다
//             - 두 숫자가 일치한 경우: "정답입니다~!👍"
//             - 두 숫자가 불일치한 경우: "오답입니다..😢"

// */
// const Ex02 = () => {
//   const [ranNum, setRanNum] = useState(0)
//   const [userNum, setUserNum] = useState(0)
//   const [result, setResult] = useState('')

//   const handleNum = (e) => {
//     console.log(e.target.innerText)

//     //랜덤숫자 생성
//     let newNum = parseInt(Math.random() * 3) + 1
//     let inputNum = parseInt(e.target.innerText)

//     console.log(newNum, inputNum)

//     //state 변경
//     setUserNum(inputNum)
//     setRanNum(newNum)

//     //사용자와 컴퓨터 숫자를 비교하는 함수
//     jugement(inputNum, newNum)
//   }

//   const jugement = (userNum, ranNum) => {
//     let resultMsg = userNum === ranNum ? 
//                     <p>정</p> : <p>오</p>
//     setResult(resultMsg)
//   }

//   return (
//     <div>
//       <button onClick={handleNum}>1</button>
//       <button onClick={handleNum}>2</button>
//       <button onClick={handleNum}>3</button>
//       <p>내가 선택한 숫자:{userNum}</p>
//       <p>생성된 숫자:{ranNum}</p>
//       {/* {userNum !== 0 &&
//         ranNum !== 0 &&
//         (userNum === ranNum ? <p>정답입니다~!👍</p> : <p>오답입니다..😢</p>)}
//          */}

//       {result}

//     </div>
//   )
// }

// export default Ex02