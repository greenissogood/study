import React, { useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const Footer = () => {

  const {isDark, setIsdark} = useContext(ThemeContext)


  return (
    <div className='footer' style={{background:isDark? 'black':'white'}}>
        <button className='button' onClick={()=>setIsdark(!isDark)} >Dark Mode</button>
    </div>
  )
}
