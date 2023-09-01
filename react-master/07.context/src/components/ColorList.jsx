import React, { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'

const ColorList = () => {
    const {setColor} = useContext(ColorContext)

    // 각  div를 클릭했을 때 해당 div의 색상값이 color state에 저장되게 구현하기
  return (
    <div>
        <h1>색상 선택하기</h1>
        <div className='colorList'>
            <div className='box color-red' onClick={()=>(setColor('red'))}></div>
            <div className='box color-orange' onClick={()=>(setColor('orange'))}></div>
            <div className='box color-yellow' onClick={()=>(setColor('yellow'))}></div>
            <div className='box color-green' onClick={()=>(setColor('green'))}></div>
            <div className='box color-blue' onClick={()=>(setColor('blue'))}></div>
        </div>
    </div>
  )
}

export default ColorList