import { useState } from 'react'
import './App.css'

/*
실습문제2) 랜덤 숫자 맞추는 페이지 구현
    1. 랜덤숫자를 생성한다. (범위: 1~3)
    2. 사용자가 누른 버튼의 숫자를 가져온다. (범위: 1~3)
        -> 버튼을 눌렀을 때 값을 가져오는 건 같이 해주신다고 함
    3. 사용자가 선택한 숫자와 랜덤숫자를 비교
        - 두 숫자가 동일 : "정답입니다! 😉"
        - 두 숫자가 다름 : "오답입니다. 🥱"


숫자를 입력할 때마다 랜덤한 숫자가 생기도록
내가 입력한 숫자와 랜덤하게 발생한 숫자가 일치하면 정답입니다!
-> 틀리면 오답입니다!
*/

const Ex02 = () => {
  const [userNum, setUserNum] = useState(1)
  const [randNum, setRandNum] = useState(1)
  const [isSolve, setIsSolve] = useState('')

  const HandleNum = (e) => {
    const selectedNum = parseInt(e.target.innerText)
    const generatedRandNum = Math.floor(Math.random() * 3) + 1
    setUserNum(selectedNum)
    setRandNum(generatedRandNum)
    console.log(randNum)

    if (selectedNum === generatedRandNum) {
      console.log('정답입니다', selectedNum, generatedRandNum)
      setIsSolve('정답입니다! 😉')
      console.log(isSolve)
    } else {
      console.log('오답입니다', selectedNum, generatedRandNum)
      setIsSolve('오답입니다. 🥱')
    }
  }
  return (
    <div className="container">
      <div className='item-box'>
        <h2>숫자 맞추기 게임!</h2>
        <div>
          <button onClick={HandleNum}>1</button>
          <button onClick={HandleNum}>2</button>
          <button onClick={HandleNum}>3</button>
        </div>
        <div>
          <p>내가 입력한 숫자: {userNum}</p>
          <p>랜덤한 숫자: {randNum}</p>
          <p>{isSolve}</p>
        </div>
      </div>
    </div>
  )
}

export default Ex02
