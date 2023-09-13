import React from 'react'
import Todoitem from './Todoitem'
import {useSelector} from 'react-redux'

const TodoList = ({ title, checked }) => {

  const todos = useSelector(state=>state.todo.todos)

  console.log(title, todos, checked)

  // map 함수를 이용해서 반복적인 걸 만들어내기
  // 투두 아이템 컴포넌트 세 개 써놓은 거를 날리고 만들기--> 그냥 여러개 나오게 써놓은 것임.

  return (
    <div className="todo-list">
      <p className="todo-list-tit">[{title} : {}🐶]</p>
      <ul className="todo-list-ul">
        {todos &&
          todos.map((todo) => {
            if(todo.complete === checked){
              return(
                //todoitem 컴포넌트를 넣은 것
              <Todoitem
              todo={todo}
              key={todo.id}
            />)
            }else{
              return null
            }
            ;
          })}
      </ul>
    </div>
  )
}

export default TodoList
