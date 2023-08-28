import React from 'react'
import members from './data/member.json'

const Ex03 = () => {
    console.log(members);
    /*
    filter()함수
        - 배열 내 요소들 중 특정 조건에 해당하는 요소들만 새로운 배열로 만들어 반환해 주는 함수
        - 조건식을 만들면 해당하는 요소만 추출
    */

    let new_array = members.filter((member)=>member.task==='Leader')
    console.log(new_array);

    // age가 21세 이상인 데이터만 추출한 후 콘솔창에 출력해 보기
    
    let new_array2 = members.filter((member)=>member.age >=21)
    console.log(new_array2);

  return (
    <div></div>
  )
}

export default Ex03