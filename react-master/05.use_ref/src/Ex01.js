import React from 'react'
import {useRef} from 'react'

const Ex01 = () => {
    
    let inputRef = useRef();

    const handleClick = ()=>{
        let input= document.querySelector('input[type="text"]')
        console.log(input.value);
    }

    const handleClick2=()=>{
        console.log(inputRef); //ref
        console.log(inputRef.current); //input
        console.log(inputRef.current.value); //input요소의 값  
    }

  return (
    <div>
        <form>
        <input type ='text'/>
        <input type='button' onClick={handleClick} value='클릭'/>
        </form>
        <form>
        <input type ='text' ref={inputRef}/>
        <input type='button' onClick={handleClick2} value='클릭'/>
        </form>
    </div>
  )
}

export default Ex01