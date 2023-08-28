import React from 'react'


const LoginFail = ({ id, pw }) => {
   console.log(id,pw);
  
   let error =''
    if (pw !=='123') {
        
    error = '비밀번호 틀렸다'
  } else if(id !== 'fucku'){
    error = '아이디가 다르다'
  }else{
    error = '아이디와 비밀번호가 모두 틀림'
  }

  return (
    <div class='idpw'>
       <h1>{error}</h1>
    </div>
  )
}

export default LoginFail
