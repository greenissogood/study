// require, import ..
const express = require('express')
const app = express();
// 실행하고 싶은 애를 앱에 넣어서 앱을 실행해 줘서 사용
const indexRouter = require('./routes')

// 경로를 처리할 require path
const path = require('path')

// 정적인 파일을 가져오기 위한 미들웨어
app.use(express.static(path.join(__dirname, 'react-project', 'build')));
// 내가 현재 있는 위치에서 reqct project로 가 준 다음에 build로 가 주겠다

// router
// app.use를 사용하면 indexRouter로 가 줌
app.use('/', indexRouter)

// 포트번호
// 보통 3000 겹치니까 --> node:3001 사용 3000번은 react에서 사용할 거라서
// 환경변수 process.env
app.set('port', process.env.PORT|| 3001)

// 누가 내 포트 번호 사용하나
app.listen(app.get('port'),()=>{
    console.log('port waiting ...ㅗ');
})