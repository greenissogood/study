import React, { useState } from 'react'

export const Footer = () => {
  const [isDark, setIsdark] = useState()
  const [user, setUser] = useState()


  return (
    <div className='footer'>
        <button className='button' onClick={()=>setIsdark} style={{background:black}}>Dark Mode</button>
    </div>
  )
}
