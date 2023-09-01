import React, { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'

const ColorResult = () => {
    const {color} = useContext(ColorContext)
    // let styleColor ={backgroundColor:color} 위랑 같음
    // 이렇게 하려면 style에 style={styleColor} 이렇게 넣음
  return (
    <div>
        <h1>선택한 색상</h1>
        <div className='box' style={{background:color}}></div>

    </div>
  )
}

export default ColorResult