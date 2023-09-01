import { createContext } from "react"

export const ColorContext = createContext(null)

// colorList, ColorResult, Ex01, ColorContext 기준으로
// Ex01에서 rafce 해 주고
// 다음에 export 이거 먼저 불러줌
// app.css에 css 넣어 주고
// colorList에 rafce 해 줌
// ex01에 colorList 호출 <ColorList/><hr><Colorresult> 후 div에 id
// List 이동 후 구현 h1태그 div 태그 생성 후 클래스네임 colorlist 설정
// div태그 다섯 개 생성 클래스 네임 app.css에 있는 이름 color-red 색별로 붙임
// 렉 뜬 이유 import 해 줘야 됨 컴포넌트 ex01에서
// 서버 안 나오면 index.js에서 import app from './app'/을 바꾸면 됨
// ex01에서 state 정의 useState(null)
// retrun 안에 <ColorContext.Provider> div안으로 옮겨주고 value={}에 넣어줌
// colorlist에 const setcolor 정의
// 색상값 state에 저장하려면 onClick={()=>(setColor('red')
// 값이 궁금하니까 콘솔에 나오게 ex01에 return 위에 로그를 찍음
// const로 color 지정
// colorResult에 div를 만들어서 classname 박스 스타일을 백그라운드컬러: color로 줌
