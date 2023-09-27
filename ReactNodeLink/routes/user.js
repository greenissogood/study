/*
    User와 관련된 router들 모음
        - 기능 : 회원가입, 중복 체크, 로그인, 회원 탈퇴, 로그아웃, 회원 검색
        - 작성자 : 도은호(23.09.19)
*/

const express = require("express");
const router = express.Router();
const conn = require("../config/database");
// index나 sever에서는 DB를 연결할 일이 잘 없음
const path = require("path");

// url 접근할 거니까 get방식
// router.get('/',(req,res)=>{
//     console.log('user router');
// })

// 회원가입 시, ID 중복 체크
router.post("/checkId", (req, res) => {
  console.log("check Id Router", req.body);

  let { id } = req.body;
  // req.body 속성값이 id로 들어감
  let sql = "select id from project_member where id = ?";

  // sql문, 물음표 안에 들어갈 내용, 콜백 함수 순서
  conn.query(sql, [id], (err, rows) => {
    console.log("rows", rows);
    console.log("err", err);
    // 정확하게 하려면 err가 null일 때 조건을 먼저 걸어 줘야 됨

    if (rows.length > 0) {
      // 중복값이 있다면?
      res.json({ result: "dup" });
      // 너 지금 중복이야 라는 뜻
    } else {
      // 중복값이 없다면?
      res.json({ result: "uniq" });
      // 너 지금 유니크야 중복 아니라고 쓴 표현
    }
  });
});

// 회원가입 자체를 하는 라우터
router.post("/join", (req, res) => {
  console.log("join Router", req.body);
  const { id, pw, name, email } = req.body.userData;
  console.log("이름", name);

  let sql = "insert into project_member values(?,?,?,?)";
  conn.query(sql, [id, pw, name, email], (err, rows) => {
    console.log("rows", rows);
    if (rows) {
      res.json({ msg: "success" });
    } else {
      res.json({ msg: "failed" });
    }
  });
});
// 로그인 라우터
router.post("/login", (req, res) => {
  console.log("login router", req.body);
  let { id, pw } = req.body;

  let sql = `select id, user_name, email from project_member where id=? and pw=?`;

  // DB에 연결 connecting query라는 뜻
  conn.query(sql, [id, pw], (err, rows) => {
    console.log("rows", rows);

    if (rows.length > 0) {
      // 로그인 성공
      res.json({
        msg: "success",
        user: rows[0],
      });
    } else {
      // 로그인 실패
      res.json({ msg: "failed" });
    }
  });
});

// 로그아웃 라우터
// url로 접근하는 방식 => get방식
// session을 백엔드로 server에 저장한 경우에는 해당 라우터로 와야 함(기존)
// session을 front에 저장한 경우에는 로그아웃을 react에서 설정 가능
router.get("/logout");

// 비번 수정 라우터
router.post("/changePw", (req, res) => {
  let { id, currentPw, changePw } = req.body;
  console.log("받아온 데이터:", id, currentPw, changePw);

  // 1) 사용자가 비밀번호 입력을 틀리게 입력한 경우 : '비밀번호를 다시 입력해 주세요'
  // 2) 서버 측 문제가 있는 경우 : '죄송합니다. 다시 시도해 주세요.'
  // 3) 1,2 모두 문제가 있는 경우 => 정상 수정 : 변경 완료 로직을 따라간다

  // 1)
  let sql1 = "select id from project_member where id=? and pw=?";
  conn.query(sql1, [id, currentPw], (err, rows) => {
    console.log("1번 쿼리문 결과", rows);
    if (rows.length > 0) {
      // row.length>0이면 데이터가 0보다 크다면 우리 회원이 맞음
      // 변경 query문 시작
      let sql2 = "update project_member set pw = ? where id=?";
      conn.query(sql2, [changePw, id], (err, rows) => {
        console.log("2번 쿼리문 결과", rows);
        if (rows) {
          res.json({ msg: "success" });
        } else {
          res.json({ msg: "error" });
        }
      });
    } else {
      // 세션값이 있는데? 우리 회원이 아니다라고 나오는 거 -->회원이 아닐 리 없다
      // 그러면 비번이 틀렸다 --> 비번 잘못 입력함
      res.json({ msg: "failed" });
    }
  });
});

// 이름, 이메일 수정 라우터
router.post("/modify", (req, res) => {
  console.log("modify router");
  let { id, new_name, new_email } = req.body;
  let sql = "update project_member set user_name=?, email=? where id=?";
  conn.query(sql, [new_name, new_email], (err, rows) => {
    console.log("정보수정 쿼리문 결과:", rows);
    if (rows) {
      res.json({ msg: "success" });
    } else {
      res.json({ msg: "failed" });
    }
  });
});

// 회원 정보 검색 라우터
router.post("/select", (req, res) => {
  console.log("select router");
  let sql = "select id, user_name, email from project_member";
  conn.query(sql, (err, rows) => {
    console.log("rows", rows);
    res.json({ list: rows });
  });
});

// 회원 탈퇴 라우터
router.post("/delete", (req, res) => {
  console.log("delete router", req.body);
  let { id, pw } = req.body;
  let sql = "select id,pw from project_member where id=? and pw=?";
  conn.query(sql, [id, pw], (err, rows) => {
    if (rows.length > 0) {
      let sql2 = "delete from project_member where id=? and pw=?";
      conn.query(sql2, [id, pw], (err, rows) => {
        console.log("회원탈퇴 쿼리문 결과", rows);
        if (rows) {
          res.json({ msg: "success" });
        } else {
          res.json({ msg: "failed" });
        }
      });
    } else {
      res.json({ msg: "failed" });
    }
  });
});

// 라우터의 와일드 카드
// 위에 훑고 왔던 router에 전부 해당하지 않으면 이 라우터로 들어오겠다.
// router.get('*',(req,res)=>{
//   res.sendFile(
//       path.join(__dirname, '..','react-project','build', 'index.html')
//       )
// })

module.exports = router;
// 모듈로써 수출해 줄 거다 라우터를
