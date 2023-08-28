import './App.css'
import Menubox from './Components/Menubox'
import MenuboxCard from './Components/MenuboxCard'

/*
  1 . Component(컴포넌트)
    - 반복되는 코드를 하나로 묶어서 만드는 화면의 최소 단위
    - 대문자로 파일을 만들고 확장자는 .jsx를 사용
    - 사용방법 -> <컴포넌트 이름/>
    ex) Menubox.jsx -> <Menubox/>
    - rafce 명령어를 이용해서 기본 틀을 생성

    --> 컴포넌트화 했을 때 문제점은 데이터가 모두 동일하다는 점
    해결책 : props 활용! 

    2.props(프로퍼티)
     - 부모(상위) 컴포넌트에서 자식(하위) 컴포넌트로 값을 전달하는 방법
 */

function App() {
  return (
    <div>
      {/* <div className="menu-item">
        <h3>아메리카노</h3>
        <p>3500</p>
      </div>
      <div className="menu-item">
        <h3>아메리카노</h3>
        <p>3500</p>
      </div> */}
      <Menubox name="아메리카노" price="1500" />
      <Menubox name="민트초코프라푸치노" price="5800" />
      <Menubox name="무화과라즈베리케이크" price="6800" />
      <Menubox name="감귤오렌지케일사과스무디" price="6200" />

      
      <MenuboxCard team="PLAVE" name="남예준" />
      <MenuboxCard team="PLAVE" name="한노아" />
      <MenuboxCard team="PLAVE" name="채봉구" />
      <MenuboxCard team="PLAVE" name="도은호" />
      <MenuboxCard team="PLAVE" name="유하민" />

    </div>
  )
}

export default App