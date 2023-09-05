import React, { useState } from 'react'
import './App.css'
import Page from '../src/pages/Page'
import { ThemeContext } from './context/ThemeContext'

const Ex02 = () => {
  const [isDark, setIsdark] = useState(false)
  const [user, setUser] = useState('남예준')

  console.log('다크모드상태', isDark);

  return (
    <div>
        <ThemeContext.Provider value={{isDark, setIsdark, user}}>
        <Page/>
        </ThemeContext.Provider>
    </div>
  )
}

export default Ex02