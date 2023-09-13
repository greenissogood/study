import React from 'react'
import Todoinput from '../components/Todoinput'
import TodoList from '../components/TodoList'

const Todohome = () => {
  return (
    <div className='todo-container'>
        <h1 className='todo-List'>ToDo List</h1>
        {/* todo 추가하는 영역 */}
        <Todoinput/>

        {/* 해야할 일 출력 */}
        <TodoList title='할 일' checked={false}/>

        {/* 완료된 일 출럭 */}
        <TodoList title='완료' checked={true}/>
    </div>
  )
}

export default Todohome