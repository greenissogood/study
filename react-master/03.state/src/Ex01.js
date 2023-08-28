import React from 'react'
import imgSrc from './img/플레이브-plave.gif'
import Like from './components/Like'

/*
    실습문제 1) 좋아요 기능을 가진 페이지 구현
    1. 빈 하트를 클릭 시, 꽉 찬 하트로 변경해 주기
    2. 빈 하트를 클릭 시, 좋아요 1 개로 변경해 주기
    3. '좋아요' 가 눌린 상태에서 클릭 시, 되돌리기

*/

const Ex01 = () => {
  return (
    <div>
        <img src = {imgSrc} style={{width: '65%'}}/>
        <Like/>
    </div>
  )
}

export default Ex01