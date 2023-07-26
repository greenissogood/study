const exPostTemp =require('./exPostTemp')


// 1. express 사용 기능 가져오기
const express  = require('express')

// 2. express 실행 정보를 app 변수에 저장
const app = express()

// 3. router 기능 사용 선언
const router = express.Router()

// body 영역 사용 등록 --> post 방식 때 사용
app.use(express.urlencoded({extended:true})) //body영역 허용
app.use(express.json())//받은 데이터를 json 객체로 변환
// 4. 서버 등록 
app.use(router)
// 클라이언트가 요청 보낸 주소값에 따라 서버를 사용하겠습니다.


// 6. 요청을 보낸 주소값에 대해서 처리
// http://localhost:3000 -->/
router.get('/', function(req,res){
    console.log('서버접속 확인');

})
router.get('/plus', function(req,res){
    console.log('plus 서버접속 확인');
    console.log(req.query.num1);
    console.log(req.query.num2);

    let num1 = parseInt(req.query.num1)
    let num2 = parseInt(req.query.num2)


    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
    res.write('<html>')
    res.write('<body>')
    res.write(`${num1}+${num2}=${num1+num2}`)
    res.write('</body>')
    res.write('</html>')



})

// 5. 포트 번호 등록
app.listen(3000)

//router 를 통해서 각각의 주소값에 따라 다른 기능을 실행시킬 수 있다.
// 주의!! router.get , router.post 각각으 상황에 맞게 사용해야 함.
router.post('/login',function(req,res){
    console.log('login 확인');
    console.log(req.query.inputId);
    console.log(req.query.inputPw);

    let Id = (req.body.inputId)
    let Pw = (req.body.inputPw)

    res.writeHead(200, { 'Content-Type':'text/html;charset=utf-8' })
    res.write('<html>')
    res.write('<body>')

    if (Id == 'aischool' && Pw == '123') {

        res.write('<h1> 로그인 성공! </h1>');
       
    }
    else {
        res.write('<h1> 로그인 실패! </h1>'); 
    }
    res.write('</body>')
    res.write('</html>')

})
app.listen(4000)


router.post('/grade',function(req,res){
    console.log('grade');

    res.writeHead(200, { 'Content-Type':'text/html;charset=utf-8' })
    res.write(exPostTemp.gradeTemp(req.body))

})
app.listen(3006)