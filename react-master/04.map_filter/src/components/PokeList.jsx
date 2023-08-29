import React from 'react'
import PokeCard from './PokeCard'

const PokeList = ({pokemons}) => {
  
    const styleDiv = {
        display:'flex',
        flexWrap:'wrap',
        gap:'10px',
        width:'100%',
        margin : '3%'
    }
    return (
    <div style={styleDiv}>
        {pokemons.map((item)=>(
            <PokeCard pokemon={item}/>
        ))}
    </div>
  )
}

export default PokeList