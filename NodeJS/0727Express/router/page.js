const express = require('express')
const router = express.Router()

router.get('/Login',function(req,res){
    res.render('Login')
})

module.exports=router