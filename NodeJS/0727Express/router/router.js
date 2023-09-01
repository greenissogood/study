const express = require('express')
const router = express.Router()

// DB연결
// 1. MYSQL 연결할 수 있는 MYSQL이라는 모듈 가져오기
const mysql = require('mysql')

// 2.mysql db에 접근할 수 있는 정보를 저장
//  DB에 접근할 수 있는 기능을 conn에 저장
let conn = mysql.createConnection({
    // mysql 서버의 주소(ip)
    host: '127.0.0.1',
    // mysql에 접속할 id입력
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'NODEJS_DB'
})

//http://localhost:3000
router.get('/', function (req, res) {
    console.log('접속 확인');
    res.render('ExTemp', { day: '월요일' })
})

router.get('/res', function (req, res) {
    console.log(req.query.text);
})

router.get('/nextPage', function (req, res) {
    // req.query.next
    // 페이지 이동하는 방법
    let page = req.query.next
    let result = ''

    if (page == 'Google') {
        result = 'https://www.google.co.kr'
    }
    else if (page == 'Naver') {
        result = 'https://www.naver.com'
    } else if (page == 'Daum') {
        result = 'https://www.daum.net'
    }
    res.redirect(result)
})



// router.js
// router.get("/nextPage", function(request, response){
//     console.log("nextPage 서버 접속 확인")

//     // 페이지 이동하는 방법(-> 페이지 있는 서버 요청하기)
//     // response.redirect("주소창 입력");

//     if(request.query.page=="naver"){
//         response.redirect("https://www.naver.com/")
//         console.log("네이버 이동 성공")
//     }
//     else if(request.query.page=="google"){
//         response.redirect("https://www.google.co.kr")
//         console.log("구글 이동 성공")
//     }
//     else if(request.query.page=="daum"){
//         response.redirect("https://www.daum.net")
//         console.log("다음 이동 성공")
//     }

// })








// router.get('/Google',function(req,res){
//     res.redirect('http://google.com')

// })
// router.get('/Naver',function(req,res){
//     res.redirect('http://naver.com')

// })
// router.get('/Daum',function(req,res){
//     res.redirect('http://Daum.com')

// })



// router.post('/login',function(req,res){
//     // req.query.next
//     // 페이지 이동하는 방법
//     let id = req.body.id
//     let pw = req.body.pw

//     if(id=='aischool' && pw =='123'){
//         res.redirect('http://localhost:5500/0727Express/public/S.html')
//     }
//     else{
//         res.redirect('http://localhost:5500/0727Express/public/F.html')
//     }


// })

let inputid = ''
let inputpw = ''


// join창
router.post('/join', function (req, res) {

    let id = inputid = req.body.ID
    let pw = inputpw = req.body.PW
    let nick = req.body.NICK
    // DB접속
    conn.connect();

    // ? 물음표는 -> 나중에 값을 담아 주겠습니다.(단, 숫서를 맞추어서.)
    let sql = `insert into member values(?,?,?)`;
    // conn.query(sql, funtion) -> sql 쿼리문을 실행시키겠습니다.
    // function : 쿼리문을 실행 후 작업 진행하겠습니다.
    conn.query(sql, [id, pw, nick], function (err, rows) {
        // err => 쿼리문 오류 내용을 받아오겠습니다.
        // rows => 정상 실행된 결과를 받아오겠습니다.
        // err 또는 rows 둘 중 하나만 값이 들어간다.
        if (!err) {//err가 아니라면 -> 정상으로 쿼리문이 실행 되었다면
            console.log('쿼리문 실행 완료');
            res.redirect('http://localhost:5500/0727Express/public/Login.html')
        } else {
            console.log(err);
            console.log('db 명령이 제대로 실행되지 않았습니다.');
            alert('다시 시도해 주세요.')
        }

    })





})

// login 창
router.post('/login', function (req, res) {
    // req.query.next
    // 페이지 이동하는 방법
    console.log("r?");
    console.log(req.body.i_d, req.body.p_w)
    console.log(inputid, inputpw)

    let id = req.body.i_d
    let pw = req.body.p_w

    conn.connect();

    let sql = 'select*from member where id=? and pw=?'
    conn.query(sql, [id, pw], function (err, rows) {
        if (!err) {
            console.log('로그인 실행 완료');
            console.log(rows[0]);
            if (rows.length == 0) {
                console.log('로그인 실패');
            } else {
                console.log('로그인 성공');
                res.render('LoginS', { nick: rows[0].NICK })
                // 이 페이지를 랜더링 하겠습니다. nick 데이터를 같이 가지고 가겠습니다.
                // res.redirect('http://localhost:5500/0727Express/public/Main.html')
            }
        } else {
            console.log('로그인 실행 실패');
        }

    })

    // if(req.body.i_d==inputid && req.body.p_w ==inputpw){
    //     res.redirect('http://localhost:5500/0727Express/public/S.html')
    // }
    // else{
    //     res.redirect('http://localhost:5500/0727Express/public/F.html')
    // }


})





router.get('/delete', function (req, res) {
    let deleteUser = req.query.deleteUser
    console.log(deleteUser);


    // 1.서버와 DB 통로
    conn.connect();
    // 2. 실행시킬 쿼리문 작성
    let sql = 'delete from member where nick = ?'
    // 3. 쿼리문을 DB로 넘겨서 실행
    conn.query(sql, [deleteUser], function (err, rows) {
        if (!err) {
            console.log('회원 삭제 성공');
            res.redirect('http://localhost:5500/0727Express/public/Main.html')
        } else {
            console.log('회원 삭제 실패');
        }

    })

})


router.post('/update', function (req, res) {
    let updateID = req.body.updateid
    let updatePW = req.body.updatepw
    let updateNCIK = req.body.updatenick

    conn.connect();

    let sql = `update member set pw='${updatePW}',nick='${updateNCIK}' where id='${updateID}'`

    conn.query(sql, function (err, rows) {
        if (!err) {
            console.log('변경 성공');
            res.redirect('http://localhost:5500/0727Express/public/Main.html')

        } else {
            console.log('변경 실패');
        }

    })
})


router.get('/getAlluser', function (req, res) {
    let getAlluser = req.query.getAlluser
    console.log('getAlluser');

    conn.connect

    let sql = 'select*from member'
  
    conn.query(sql, function (err, rows) {
        // err => 쿼리문에 대한 오류, DB 오류에 대한 정보를 가지고 있다!
        // rows => 쿼리문 실행 데이터
        // err 또는 rows 둘 중 하나만 값이 들어간다.
        if (!err) {//err가 아니라면 -> 정상으로 쿼리문이 실행 되었다면
            console.log('전체 완료');
            console.log(rows);
            res.render('UserList',{userList:rows})
        } else {
            console.log(err);
            console.log('db 명령이 제대로 실행되지 않았습니다.');
        }

    })
})
// 위에 만들어진 기능을 외부에서 사용할 수 있도록 빼내는 작업
//  --> 모듈화 (router)
module.exports = router