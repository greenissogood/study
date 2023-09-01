// import { createContext } from "react";

// // 1
// // 전역으로 state를 관리하기 위한 context 생성
// export const CounterContext = createContext(null)
// import React from 'react'

// // 중괄호 작성하고 각 속성을 적음
// const Counter = ({count,setCount}) => {
//   return (
//     <div>
//       <h1>{count}</h1> 
//     <button onClick={()=>setCount(count+1)}>증가</button>
//                      {/* // 클릭하면 실행해라 */}
// </div>
// )
// }

import React, { useContext } from 'react'
import {CounterContext} from '../context/CounterContext'

/*
    1.Countext란?
        - React Component 간에 state를 공유할 수 있게 해 주는 기능
        - 상위 컴포넌트에 전역으로 state를 정의하고 Context.Provider의 value 속성에 저장
        - 하위 컴포넌트에서는 useContext(Context정보)로 state를 접근할 수 있음
        - 매번 props로 state를 전달할 필요가 없음
    2. Context 사용 방법
        2-1. src-> context 폴더를 생성하고 Context 컴포넌트를 생성한다. (oooContext.jsx)
        2-2. 최상위 컴포넌트에서 import로 Context를 불러온다.
        2-3. <oooContext.Provider value={{state,setState}}> 컴포넌트로 <App/> 컴포넌트를 감싸 준다.
        2-4. 하위 컴포넌트에서는 useContext()를 이용하여 사용할 state와 setState를 가져온다.
 */
const Counter = () => {
   
    const {count,setCount} =useContext(CounterContext)

  return (
    <div>
      <h1>{count}</h1> 
    <button onClick={()=>setCount(count+1)}>증가</button>
                     {/* // 클릭하면 실행해라 */}
</div>
)
}

export default Counter