import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { increment, decrement, incrementByAmount} from "../redux/reducers/counterSlice";

import {CounterReducerActions} from '../redux/reducers/counterSlice'
// 사용하려면 들고 와야 됨 3.

/*
    1.useSelector() : store에 등록된 state를 접근하기 위한 함수
        사용법 : useSelector((state)=>state.등록된 reducer 속성명.state명)
        등록된 reducer 속성명 -> configureStore의 reducer에 정의된 객체 속성
    
    2.useDispatch() : state변경에 대한 요청을 보내는 함수
        사용법)
        const dispatch = useDispatch()
        dispatch(action) -> action에 대해 실행해 줘라
    
    3.Action : state를 변경하기 위한 명령
        ex) counterSlice의 reducers 속성에 정의된 increment, decrement

    4. react middleware : action과 reducer 사이에 특정 함수를 실행하는 중간 처리기
        -> log에 pre, next 나오는 거 확인 가능(감시 가능)
*/

const Counter = () => {

    const count = useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()
    // dispatch를 통해 increment를 사용
    // dispatch: 요청 --> state를 바꿔 줘, 요청 함수

    console.log('counterReducer state:', count);
    
  return (
    <div>
      <h1>Redux Toolkit 활용 실습</h1>
      <br />
      <h1>{count}</h1>
      <br />
      <button onClick={()=>dispatch(CounterReducerActions.increment())}>증가</button>
      <button onClick={()=>dispatch(CounterReducerActions.decrement())}>감소</button>
      <button onClick={()=>dispatch(CounterReducerActions.incrementByAmount(2))}>2씩 증가</button>
    </div>
  );
};

export default Counter;
