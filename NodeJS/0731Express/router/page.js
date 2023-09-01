// views 안에 있는 html 파일끼리 페이지 이동이 될 수 있게 설정해 주는 역할

const express = require('express')
const router = express.Router()

//http://localhost:3000/page
router.get('/',function(req,res){
    res.render('Main')

})
//http://localhost:3000/page/Login
router.get('/Login',function(req,res){
    res.render('Login')
})

//http://localhost:3000/page/Join
router.get('/Join',function(req,res){
    res.render('Join')
})

router.get('/UserList',function(req,res){
    res.render('UserList')
})

router.get('/SelectOne',function(req,res){
    // 세션에 있는 값을 변수에 저장하기

    // let arr =req.session.info
    let info = req.session.info
    res.render('SelectOne',{userInfo: arr})
    
})
router.get('UserList',function(req,res){
    res.render('UserList')
})

module.exports = router