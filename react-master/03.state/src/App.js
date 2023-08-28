import './App.css';
import {useState} from 'react'

/*
  1. state 개념
    - 컴포넌트 내부에서 사용하는 데이터
    - 일반 변수는 값이 변화해도 화면에 보여지지 않음.
      But, state는 변화를 감지한 후 화면에 변경된 값을 보여줌.

  2. state 사용방법
    - 생성 -> const [state 변수 이름, set 함수 이름] = usestate(초기값)
    - state 변수 이름 : 컴포넌트 내부에서 사용할 데이터
    - set 함수 이름 : state를 변경해 주는 함수
      ex) const [num, setNum] = useState(0)
            num = 3 (X)
            setNum(3) (O) -> state는 set함수를 통해서만 변경이 가능하다
    - 최상단에 import {usestate} from 'react' 추가
*/

function App() {

  let count = 0;

  // state 생성
  const [count2, setCount2] = useState(0); //0 초기값을 설정

  const handleClick =()=>{
    console.log('클릭');
    count +=1;
    console.log(count);
  }

  const handleClick2=()=>{
    // state 변경하는 방법
    setCount2(count2+1) //화면에 렌더링이 다 끝난 후에 변경된 값이 화면에 출력
    console.log(count2); //0출력
  }
  return (
    <div>
      <p>변수:{count}</p>
      <p>state:{count2}</p> {/*1출력*/}
      <button onClick={handleClick}>클릭</button>
      <button onClick={handleClick2}>클릭</button>
    </div>
  );
}

export default App;
