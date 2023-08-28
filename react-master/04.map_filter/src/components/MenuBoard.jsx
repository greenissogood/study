import React, { useState } from 'react'
import menuData from '../data/coffee_menus.json'
import MenuItem from './Menuitem'
import MenuNav from './MenuNav'

const MenuBoard = () => {
  console.log(menuData)
  const [menus, setMenus] = useState(menuData)
  const[filter,setFilter] = useState(menus)

  // 특정 메뉴를 눌렀을 때 해당 메뉴 데이터만 필터링하는 기능
  const filterMenus = (e) =>{
    let category = e.target.innerText
    console.log('MenuBoard:',category);


    if(category==='커피'){
      setFilter(coffeeList)
    }else if(category==='디저트'){

      setFilter(dessertList)
    }else if(category==='에이드'){
    setFilter(adeList)
  }else if(category==='베이커리'){
    setFilter(bakeryList)
  }else{
    setFilter(menus)
  }
}
  // 커피 메뉴만 필터링한 후 저장하는 배열 생성
  const coffeeList = menus.filter((item)=>item.category==='Coffee')
  console.log(coffeeList);

  const dessertList = menus.filter((item)=>item.category==='Dessert')
  console.log(dessertList);

  const adeList = menus.filter((item)=>item.category==='Ade')
  console.log(adeList);
  
  const bakeryList = menus.filter((item)=>item.category==='bakery')
  console.log(bakeryList);
  return (
    <div>
      {/*네비게이션 영역*/}
      <div className='menu-nav'>
        <MenuNav onClick={filterMenus}/>
      </div>
      {/* 커피메뉴출력영역 */}
      <div className='menu-list'>
        {filter.map((item) => (
          <MenuItem
            key={item.id}
            name={item.name}
            price={item.price}
            img={item.img}
          />
        ))}
      </div>
    </div>
  )
}

export default MenuBoard
