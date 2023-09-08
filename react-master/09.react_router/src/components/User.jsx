import React from 'react'
import { Link } from 'react-router-dom'


/*
  1. Home 컴포넌트에서 user 컴포넌트로 이동하는 Link 컴포넌트 만들기
      -> Home 에서 user 페이지로 이동하는 버튼 만들기 <Link> 활용
  2. App.js 에서 user 컴포넌트로 이동될 수 있도록 Route 만들기
      -> Route path='이동할 경로' element ={렌더링할 컴포넌트}
  3. Home에서 user 페이지로 이동하는 버튼 클릭 시, 이동이 잘 되는지 테스트하기
*/

const User = () => {
  return (
    <div>
      <h1>마이페이지</h1>
      <Link to={'/'}>🏠</Link>
    </div>
  )
}

export default User