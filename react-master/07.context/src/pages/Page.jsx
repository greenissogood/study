import React from 'react'
import Header from '../components/Header'
import Content from '../components/Content'
import { Footer } from '../components/Footer'

const page = () => {
  return (
    <div className='page'>
        <Header/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default page