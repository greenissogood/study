import { createSlice } from "@reduxjs/toolkit";


export const todoSlice = createSlice({
    name: 'todo',
    initialState:{
        todos:[]
        // 투두리스트는 계속 사람이 적으면 들어감 배열로 정의
    },
    reducers:{
        // 투두에 값이 들어가게 해 주겠다
        // state는 default로 넣는 것
        // action도 매개변수로 넣어 줌 투두 인풋으로부터 값을 넘겨받은
        // payload에서 받은 값을 toods로 넘겨주겠다
        addTodo:(state, action)=>{
            console.log(action);
            // 값이 넘어오는지 확인하는 콘솔
            state.todos = state.todos.concat(action.payload)
            // 새로운 배열로 생성해서 기존 state에 반영 -> 업데이트가 이루어지면서 리액트가 저장하게 됨
        }
       
    },
    
})

export const TodoReducerActions = todoSlice.actions
export default todoSlice.reducer