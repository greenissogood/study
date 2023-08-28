import React from 'react'

const Board = ({name, imgPath, score}) => {
    console.log(name, imgPath, score);



  return (
    <div className='board'>
        <h4>{name}</h4>
        <img src={imgPath}/>
        <div className='score-area'>
            <h4>현재 점수는?</h4>
            <h4>{score}</h4>
        </div>
    </div>
  )
}

export default Board