import React from 'react'
import LoginSuccess from './Components/LoginSuccess'
import LoginFail from './Components/LoginFail'
import './App.css'

/*
    1. 사용자로부터 id, pw를 입력받는다. (prompt() 활용)
    2. 성공 여부에 따라 다른 화면을 출력한다.
        성공 시 --> LoginSuccess 컴포넌트 출력 --> '환영합니다~ㅗ'
        실패 시 --> LoginFail 컴포넌트 실행 --> '아이디 또는 패스워드가 잘못됨'
                    +아이디만 틀린 경우 또는 패스워드가 틀린 경우를 구분하여 메시지를 출력해 보기
*/

const AppSample = () => {
  let id = prompt('아이디 입력')
  let pw = prompt('비밀번호 입력')

  let suc = ''

  if (id === 'fucku' && pw === '123') {
    suc = <LoginSuccess />
  } else {
    suc = <LoginFail id={id} pw={pw}/>
  }

  return (
    <div className='succe'>
       {suc} 
    </div>
  )
}

export default AppSample


// import React from 'react'

// export const AppSample = () => {
//     let id = prompt('아이디')
//     let pw = prompt('비번')

//   return (
//     <div{id==='smhrd'&&pw=='123'}
//          <LoginSuccess/>:
//          <LoginFail id={id} pw={pw}/>}
// </div>
//   )
// }
