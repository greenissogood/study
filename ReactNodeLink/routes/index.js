/*
    페이지 이동을 다루어 주는 라우터 모음
        * 메인 페이지
        * 작성자 : 도은호(23-09-18) 오전 10:15
*/
const express = require('express')
const router = express.Router();
const path = require('path')

// main page
// url 접근할 거니까 get방식
router.get('/link',(req,res)=>{
    console.log('main router');
    res.sendFile(
        path.join(__dirname, '..','react-project','build', 'index.html')
        )
})
// 내가 현재 있는 위치에서 reqct project로 가 준 다음에 build로 가서 index.html을 보내 줄 거다.

module.exports = router;
// 모듈로써 수출해 줄 거다 라우터를