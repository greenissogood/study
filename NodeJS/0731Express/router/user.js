const express = require('express')
const router = express.Router()


const db = require('../config/database')
let conn = db.init()

// http://localhost:3000/user/join
router.post('/Join',function(req,res){

        let id = inputid = req.body.ID
        let pw = inputpw = req.body.PW
        let nick = req.body.NICK
        conn.connect();
    
        let sql = `insert into member values(?,?,?)`;
        conn.query(sql, [id, pw, nick], function (err, rows) {
            if (!err) {
                console.log('쿼리문 실행 완료');
                // res.redirect('http://localhost:5500/0727Express/public/Login.html')
            } else {
                console.log(err);
                console.log('db 명령이 제대로 실행되지 않았습니다.');
                alert('다시 시도해 주세요.')
            }
    
        })
    })
 
    // user/selectOne
    router.get('/SelectOne',function(req,res){
        let id = req.query.selectone

        conn.connect();

        let sql = 'select* from member where id=?'

        conn.query(sql,[id],function(err,rows){
            if(!err){
                console.log(rows);
                console.log('실행 완료');
                res.render('SelectOne',{selectUser :rows});
            }else{
                console.log(err)
                console.log('실행불가')

            }
        })
    })
    

    router.post('/Login',function(req,res){
        let Id = req.body.i_d
        let PW = req.body.p_w

        conn.connect();

        let sql = 'select * from member where id=? and pw=?'

        conn.query(sql,[Id,PW],function(err,rows){
            if(!err){
                if(rows.length>0){
                    console.log('실행 완료');
                    // 로그인 성공했을 때 DB에서 가지고 온 정보를 
                    // Cookie나 Session에 저장하고 싶다.

                    // 쿠키 생성
                    res.cookie('info',rows[0])
                    // session 생성 
                    req.session.info=rows[0]

                    res.render('Main')
                }

            }else{
                console.log(err);
                console.log('불가');
            }
        })

    })

    
  


module.exports = router;
