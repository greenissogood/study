const express = require('express')
const router = express.Router()

// 쿠키 : 저장 공간을 클라이언트로 이용해서 데이터를 관리하는 기술
// 쿠키 생성
router.get('/Setcookie',function(req,res){
    console.log('실행');
    let nick = 'watrulookinat'

    // cookie --> key 와 value 형태로 되어 있음 : key-value
    res.cookie('nickName',nick,{
        maxAge : 10000, //maxAge : 만료기간 (10000->1초)
    })
    // path : cookie가 어디로 요청이 들어왔을 때만 생성할 것인지
    // secure : https(보안)으로 설정되어 있을 때만 쿠키를 만들겠다!
    // httpOnly : 웹 서버를 통해서만(http 통신일 때만) 쿠키에 접근 가능.
    res.send('쿠키생성')
})

router.get('/getCookie',function(req,res){
    // 쿠키 가져오기
    // 쿠키 값을 가져올 때만 request 객체를 이용한다.
    console.log(req.cookies.nickName);
    res.send('쿠키가져오기')
})
router.get('/deleteCookie',function(req,res){
    res.clearCookie('nickName')
    res.send('쿠키삭제')
})

module.exports = router