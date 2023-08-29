import React, { useState } from 'react'
import pokemonData from '../data/pokemon.json'
import PokeNav from './PokeNav'
import PokeList from './PokeList'
import Nav from 'react-bootstrap/Nav'

const PokeBoard = ({ onClick }) => {
  const [pokemons, setPokemons] = useState(pokemonData)
  console.log(pokemons)

  const handleClick = (e) => {
    let menu = e.target.innerText
    console.log('선택한 메뉴 :', menu)

    let filter = []

    if (menu === 'All') {
        setPokemons(pokemonData)
    } else {
      if (menu === '1~50') {
       filter = pokemonData.filter((item)=>item.id>=1 && item.id <=50)
      } else if (menu === '51~100') {
       filter = pokemonData.filter((item)=>item.id>=51 && item.id <=100)
      } else {
       filter = pokemonData.filter((item)=>item.id>=101 && item.id <=151)

      }
      setPokemons(filter)
    }
  }

  return (
    <div>
      {/* 메뉴 영역 */}
      <PokeNav onClick={handleClick} />
      {/* 포켓몬 정보를 보여 주는 영역 */}
      <PokeList pokemons={pokemons} />
    </div>
  )
}

export default PokeBoard
