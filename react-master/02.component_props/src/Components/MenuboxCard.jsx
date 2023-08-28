import React from 'react'

const MenuboxCard = ({team,name}) => {
    console.log('data');
    console.log(team,name);
  return (
    <div className='plave'>
        <h3>{team}</h3>
        <p>{name}</p>
    </div>
  )
}

export default MenuboxCard