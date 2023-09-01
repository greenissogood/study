// express 사용 3 단계
// 1. npm init --> 프로젝트의 정보를 저장하는 package.json 생성
// 2. 프로젝트 express 설치
// 3. 프로젝트 구조 생성()
// config(환경설정), public(정적), router(경로), app.js(서버)의 역할

// express 서버 생성
// 1. express 모듈 가져오기
const express = require('express')
// 2. express 실행 정보를 app 변수에 담아주기
const app = express();
// 4. 경로를 설정할 수 있는 router 만들기
// const router = express.Router()
const router = require('./router/router')
const page = require('./router/page')
app.use(page)
// router.get('/',function(req,res){
//     console.log('접속 확인');
// })

// 동적페이지를 사용할 수 있는 nunjucks 가져오기
// html -> 동적인 파일로 사용할 수 있다!
const nunjucks = require('nunjucks')

// view engine 확장자를 html로 사용하겠다!
// html 파일들을 동적 파일로 사용할 수 있게 만들겠다.
app.set('view engine','html')
// views 안에 있는 html을 동적 파일로 사용할 수 있게끔 만들겠다.
// 동적 파일 --> 데이터가 바뀔 때마다 화면 내용도 같이 바뀌는 파일
nunjucks.configure('views',{
    express: app,
    whtch:true
})

// router.get('/res',function(req,res){
//     console.log(req.query.text);
// })

// 5. router로 만든 경로를 서버(app)에 등록
// 서버에 등록시킨다 => 미들웨어
// body 영역 허용 뒤 -> router 등록
app.use(express.urlencoded({extended:true}))
app.use(express.json())
// 라우터 하기 전에 바디 영역부터 허용시켜 줌

app.use(router)
// 3. 포트 번호 달아 주기
app.listen(3000);
