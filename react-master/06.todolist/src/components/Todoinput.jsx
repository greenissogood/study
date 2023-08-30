import React from 'react'
import { useRef } from 'react'

const Todoinput = ({ todos, setTodos }) => {
  const inputRef = useRef(null)
    // todos는 현재 할 일 목록, setTodos는 할 일 목록을 업데이트 하는 컴포넌트 함수

  const handleAddBtn = () => {
    let todo = inputRef.current.value //input요소.value
    console.log(todo);

    setTodos([
        ...todos,
        {id: todos.length, text:todo, complete:false}])

    // 입력된 내용을 비우고 커서 생성하기
    inputRef.current.value=''
    // value는 유저가 가지고 있는 값 그리고 비워버리겠다
    inputRef.current.focus()
    // 커서 자동으로 생기게
  }

  return (
    <div className="todo-inputbox">
      <input
        type="text"
        className="todo-inputbox-input"
        placeholder="할 일 입력"
        ref={inputRef}
      />
      <input type="button" className="todo-inputbox-add-btn" value="등록" onClick={handleAddBtn} />
    </div>
  )
}

export default Todoinput
