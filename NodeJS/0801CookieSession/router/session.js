const express = require('express')
const router = express.Router()

router.get('/setSession',function(req,res){
    // 세션 생성하기
    req.session.nickName = 'appleJuice'
    req.session.age = 18

    res.send('세션 만들기')
})

router.get('/getSession',function(req,res){
    // 세션에 있는 값 가져오기
    let cookieData = res.cookie
    console.log(cookieData);
    
    let nick = req.session.nickName
    let age = req.session.age
    console.log(nick);

})

router.get('/deleteSession',function(req,res){
    // 세션값지우기
    // delete req.session.키값
    // 해당하는 세션만 삭제!
    // 
    req.session.destroy();
    res.send('세션전부제거')
})

module.exports = router