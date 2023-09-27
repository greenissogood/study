// Database 정보 기록
// 주의 사항 --> DB를 변경하면 꼭 table을 생성하고 확인해 줄 것.

const mysql = require("mysql2");
// mysql2를 가지고 와서 mysql로 불러 주겠음
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  port: 3306,
  database: "nodejs_DB",
});

// 연결
conn.connect();
module.exports = conn;
// 모듈화
