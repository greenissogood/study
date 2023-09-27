// require, import ..
const express = require('express')
const app = express();
// 실행하고 싶은 애를 앱에 넣어서 앱을 실행해 줘서 사용

// Router  Require
const indexRouter = require('./routes')
// index는 default 값이기 때문에 생략이 가능한 것 뿐
const userRouter = require('./routes/user')

// 경로를 처리할 require path
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')

// 정적인 파일을 가져오기 위한 미들웨어
app.use(express.static(path.join(__dirname, 'react-project', 'build')));
// 내가 현재 있는 위치에서 reqct project로 가 준 다음에 build로 가 주겠다

// cors 오류 해결을 위한 미들웨어
//  1. cors 모듈 설치 : npm i cors
//  2. require
//  3. 사용
app.use(cors())
app.use(express.json())

// body-parser 미들웨어 대체 express 내장 모듈
app.use(express.urlencoded({extended:true}))


// router 미들웨어
// app.use를 사용하면 indexRouter로 가 줌
app.use('/', indexRouter)
app.use('/user', userRouter)
// app.use를 사용하면 userRouter 가 줌

// app.get('*')는 Express 라우팅에서 사용되는 패턴 중, '와일드 카드'로
// 모든 URL 경로에 대한 처리를 진행
// 조건 - 모든 라우팅 중, 가장 하단에 존재 --> 안 그러면 여기로 빠져버림.
// React + Node 연동할 때 가장 필요한 존재 ⭐⭐⭐
app.get('*',(req,res)=>{
  res.sendFile(
      path.join(__dirname, '..','react-project','build', 'index.html')
      )
})
// 자연스럽게 리액트 라우터로 넘어감



// 포트번호
// 보통 3000 겹치니까 --> node:3001 사용 3000번은 react에서 사용할 거라서
// 환경변수 process.env
app.set('port', process.env.PORT|| 3001)

// 누가 내 포트 번호 사용하나
app.listen(app.get('port'),()=>{
    console.log('port waiting ...ㅗ');
})