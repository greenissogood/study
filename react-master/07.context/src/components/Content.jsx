import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Content = () => {

  const {isDark, user} = useContext(ThemeContext)
  // 가져다 쓰기만 하면 됨 전역으로 쓸 수 있게 있는 게 useContext
  return (
    <div className='content' style={{
      backgroundColor : isDark? 'black':'white',
      color : isDark? 'white':'black'
    }}> {user}님, 좋은 하루</div>
  )
}

export default Content

// header에 rafce 불러와주고 div에 클래스 네임 h1태그 넣기
// content에서 rafce div에 좋은 하루 넣고 클래스네임 content로 넣기
// footer에는 내용 대신 버튼
// page 컴포넌트에서 세개의 컴포넌트 보여 줄 수 있게 호출
// page로 넘어와서 rafce 넣어 주고 div태그에 header,content,footer 컴포넌트 불러오기
// div에 클래스네임 page
// ex02에 rafce page 컴포넌트 불러오기
// index.js에서 ex02 컴포넌트 실행
// ex02 에서 css 잡기