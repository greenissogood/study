import React from 'react'
import {useRef} from 'react'

const Ex02 = () => {

    const idRef = useRef();
    const pwRef = useRef();

    // idRef.current.여기까지는 input 태그
    const handleLogin =()=>{
        if(idRef.current.value==='smart' && pwRef.current.value==='1234'){
            alert(`맞다 ${idRef.current.value}님`);
        }else{
            alert('틀리다')
        }

    }
    
  return (
    <div>
        <form>
            ID : <input type='text' ref={idRef}/>
            PW : <input type='password' ref={pwRef}/>
            <input type='button' onClick={handleLogin} value='로그인'/>
        </form>
    </div>
  )
}

export default Ex02