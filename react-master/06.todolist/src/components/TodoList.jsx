import React from 'react'
import Todoitem from './Todoitem'

const TodoList = ({title,todos,setTodos}) => {
    console.log(title,todos,setTodos);


    // map 함수를 이용해서 반복적인 걸 만들어내기
    // 투두 아이템 컴포넌트 세개 써놓은 거를 날리고 만들기


  return (
 <div className='todo-list'>
    <p className='todo-list-tit'>[{title} : 🐶]</p>
    <ul className='todo-list-ul'>
        {todos&&todos.map((todo)=>(
         <Todoitem
         todo={todo}
         key={todo.id}
         todos={todos}
         setTodos={setTodos}/>
        ))}
       
    </ul>
 </div>
  )
}

export default TodoList