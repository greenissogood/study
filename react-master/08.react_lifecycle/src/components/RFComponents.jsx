import React, { useEffect, useState } from "react";

/*
    1. Life Cycle(생명주기)
    - React 컴포넌트의 생성부터 소멸까지 이르는 일련의 과정
    - 생명 주기의 요소 : Mount, Update, UnMount
    Mount : 컴포넌트가 화면에 처음 그려진 상태
            ex) api활용
    Update : props, state, force Update 변화가 발생했을 때 리렌더링 되는 상태
            + 부모 컴포넌트가 갱신되었을 때도 동작        
    ex) 특정 state가 변경 되었을 때 활용
    UnMount : 컴포넌트가 화면에서 사라진 상태
    - 함수형 컴포넌트에서는 useEffect() 사용 (클래스 컴포넌트에서는 사용 불가)
*/

const RFComponents = () => {
  console.log("1.constructor 대체 => 함수 초기화");
  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleIncrement = () => {
    setNum(num + 1);
  };

  const handleIncrement2 = () => {
    setNum2(num + 1);
  };

  // 하나는 함수, 하나는 배열 배열은 적는 게 없다면 생략 가능
  // 3. componentDidMount 대체
  // useEffect(()=>{ 실행할 로직 },[]) : 화면이 처음 렌더링 될 때 실행
  useEffect(() => {
    console.log("3. componentDidMount 대체 => 화면 렌더링 완료");
  }, []);

  // componentDidUpdate 대체
  // useEffect(()=>{ 실행할 로직 },[변화를 감지할 state]) --> [] 배열이니까 여러 개 쓸 수 있음
  // - 특정 state가 변화할 때 실행
  // 대괄호 부분에 state를 넣어 줌
//   useEffect(() => {
//     console.log("componentDidUpdate 대체 => []안에 state 설정");
//   }, [num]);
// //   num 을 감지하는 useEffect
//     useEffect(() => {
//     console.log("num2 state 변화 감지");
//   }, [num2]);


  useEffect(() => {
    console.log("num 또는 num2 state 변화 감지");
  }, [num, num2]);

  
  return (
    <div>
      {console.log("2.render 대체 => return문 안")}
      <p>
        RFComponents:{num}<br/>
        <button onClick={handleIncrement}>+</button>
      </p>
      <p>
        RFComponents:{num2}<br/>
        <button onClick={handleIncrement2}>+</button>
      </p>
    </div>
  );
};
// rafce 쓰면 됨

export default RFComponents;
