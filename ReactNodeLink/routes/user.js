const express = require('express')
const router = express.Router();

// url 접근할 거니까 get방식
router.get('/',(req,res)=>{
    console.log('user router');
})

module.exports = router;
// 모듈로써 수출해 줄 거다 라우터를