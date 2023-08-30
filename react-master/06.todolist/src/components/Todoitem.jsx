import React from 'react'
import {FaCheckCircle} from 'react-icons/fa'

const Todoitem = ({todo,todos,setTodos}) => {
    console.log(todo,todos,setTodos);

    const handleCheckChange=()=>{
       
        let updateList = todos.map((item)=>({
            ...item,
            complete: item.id===todo.id ? !item.complete : item.complete
            // 누르면 완료된 투두가 완료된 곳으로 내려가야 됨
        }))
        setTodos(updateList)
    }

    
  return (
        <li className='todo-item'>
        <FaCheckCircle
        style={{ color: 'green'}}
        className='todo-item-checkbox'
        onclick={handleCheckChange}
        />

        {/* 위에 const todo에 있는 내용을 가지고 오는데 todo에 입력한 text 내용을 들고온다 */}
        {/* todo.text */}
        <span className='todo-item-content'>{todo.text}</span>

        <button className='todo-item-edit-btn' onClick={onclick}>✍🏻</button>

        <button className='todo-item-delete-btn'onclick={onclick}>🗑️</button>
        </li>
  )
}

export default Todoitem