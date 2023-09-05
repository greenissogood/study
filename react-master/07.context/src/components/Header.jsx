import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Header = () => {
  

  const {isDark, user} = useContext(ThemeContext)
  // 사용할 거 가져오기만 하면 됨

  // 밑에 스타일이 너무 가독성이 떨어지면 이렇게 하면 됨
  // const styleDiv = {
  //     backgroundColor : isDark? 'black':'white',
  //     color : isDark? 'black':'white'
  //   }
  // }
  // return style에 style={styleDiv} 넣어 주면 됨

  return (
    <div className='header'
    style={{
      backgroundColor : isDark? 'lightblue':'white',
      color : isDark? 'white':'black'
    }}>
        <h1>Welcome! {user} </h1>
    </div>
  )
}

export default Header