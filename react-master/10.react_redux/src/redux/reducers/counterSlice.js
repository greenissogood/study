import { createSlice } from "@reduxjs/toolkit";

// createSlice() : state, reducer(둘 다)를 관리하는 함수
// - state 초기화
// - state를 변경하는 함수 정의 --> reducer

// name : reducer의 특정 이름을 정의하는 속성
// initialState : state를 초기화하는 속성
// reducers : 컴포넌트에서 state 변경 요청 시 수행하는 Action 기능을 정의하는 속성
export const counterSlice = createSlice({
    name: 'counter',
    initialState:{
        count:10
    },
    reducers:{
        // reducer 함수 정의 시, 매개변수에 반드시 state 정의
        // 정의한 state는 initialState에 접근할 수 있음
        increment:(state)=>{
            state.count+=1

        },
        // count를 -1 감소시키는 decremet 함수 정의하기
        // reducer에만 하면 등록만 함 1.
        decrement:(state)=>{
            state.count-=1
        },
        // 넘겨받은 숫자를 이용해서 state를 변경하는 함수 정의하기
        // action -> {type, payload} 형태로 반환
        // type : 명령 타입 ex) 숫자를 증가해라(increment), 숫자를 감소해라(decrement)
        // payload : 외부로부터 넘겨받은 데이터를 저장하는 속성
        incrementByAmount:(state,action)=>{
            console.log('counterSlice action:',action);

            // action -> {type:'counter/incrementByAmount', payload:{num:2}}
            state.count+= action.payload.num
        }
    }
})

// 컴포넌트에서 reducer 함수를 실행할 수 있게 내보내기
// 여기서 내보내 줘야만 사용 가능 2.
// export const {increment,decrement,incremyentByAmount} = counterSlice.actions
export const CounterReducerActions = counterSlice.actions

// store에서 접근할 수 있도록 내보내기
export default counterSlice.reducer