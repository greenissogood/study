import React from 'react'
import { useState } from 'react'

const Like = () => {

    const [heart, setHeart] = useState('🖤')
    const [count, setCount] = useState(0)


    const handleLike = () =>{

        if(count ===0){
            setCount(3000)
        setHeart('❤️‍🔥')
        }else{
            setCount(0)
            setHeart('🖤')
        }
    }

  return (
    <div className='Love'>
        {count}개 만큼 사랑해<span onClick={handleLike}>{heart}</span>
    </div>
  )
}

export default Like