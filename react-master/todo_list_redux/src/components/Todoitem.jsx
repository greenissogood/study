import React, { useState } from 'react'
import { FaCheckCircle, FaRegCircle } from 'react-icons/fa'

// dispatch랑 action 한쌍
import { useDispatch, useSelector} from 'react-redux'
import { TodoReducerActions } from '../redux/reducers/todoSlice'

const Todoitem = ({ todo, setTodos }) => {
  console.log(todo)

  const todos = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch()

  const handleCheckChange = () => {
    dispatch(TodoReducerActions.checkChangeTodo({ id: todo.id }))
  }

  // edited : 사용자가 수정 버튼을 눌렀는지에 대한 상태
  // true : 수정 | false : 수정X
  const [edited, setEdited] = useState() //숫자일 때 0부터 시작할지 1부터 시작할지 쓰는 거임
  //들어오는 거, 보여지는 거

  // 사용자가 입력한 텍스트를 저장하는 상태값
  const [newText, setNewText] = useState(todo.text) //문자일 때는 usestste에 초깃값 안 써도 됨
  //   newtext의 초깃값으로 잡아 줘야 하는 거고 밑에 value todo.text는 안 바뀌어서 나오니까 newText로 바뀌게 바꿔줌

  // 수정상태를 true로 변경
  const handleEditClick = () => {
    setEdited(true)
    //보여지는 거니까 set써주고 return에 들어오는 값을 넣어 줘어서 리턴
  }

  //수정 완료 기능 구현
  const handleSubmitClick = () => {
    dispatch(TodoReducerActions.textChangeTodo({ id: todo.id, text: newText }))
    setEdited(false)
  }

  //   사용자가 입력한 값을 newText에 저장
  //   이벤트 요소
  // const handleEditText=(e)=>{
  //   setNewText(e.target.value)
  //   console.log(newText);
  // }

  const handleDelClick = (id) => {
    if (window.confirm('ㄹㅇ삭제?')) {
      console.log('삭제할 todo의 id:', id)
      dispatch(TodoReducerActions.deleteTodo({ id: id }))
    }
  }

  return (
    // 눌렸을 때
    <li className="todo-item">
      {todo.complete ? (
        <FaCheckCircle
          className="todo-item-checkbox"
          style={{ color: 'green' }}
          onClick={handleCheckChange}
        />
      ) : (
        // 안 눌렸을 때
        <FaRegCircle
          className="todo-item-checkbox"
          style={{ color: 'light-gray' }}
          onClick={handleCheckChange}
        />
      )}

      {edited ? (
        <input
          type="text"
          className="todo-item-edit-input"
          value={newText}
          //   onChange={handleEditText}
          onChange={(e) => setNewText(e.target.value)}
          //   이벤트가 일어나는 현재 객체의 값을 가지고 온다는 뜻
        />
      ) : (
        //const todo에 있는 내용을 가지고 오는데 todo에 입력한 text 내용을 들고온다
        //todo.text
        <span
          className={`todo-item-content
          ${todo.complete ? 'todo-item-content-checked' : ''}`}
        >
          {todo.text}
        </span>
      )}

      {/* ~(todo.complete)? ~라면? 참:거짓*/}
      {todo.complete ? null : //    조건? true : (조건? true : false) //    조건 ? true : false에 조건을 하나 더 넣으려면?
      // 할 일 완료 상태? null : (수정상태? 수정완료버튼 : 수정버튼)
      //                          edited 새로 만드는 버튼 : 기존에 있는 버튼
      edited ? (
        <button className="todo-item-submit-btn" onClick={handleSubmitClick}>
          ⭐
        </button>
      ) : (
        <button className="todo-item-edit-btn" onClick={handleEditClick}>
          ✍🏻
        </button>
      )}

      <button
        className="todo-item-delete-btn"
        onClick={() => handleDelClick(todo.id)}
      >
        🗑️
      </button>
    </li>
  )
}

export default Todoitem
