// config --> 개발에 관련된 환경설정에 대한 정보를 관리한다.
const mysql = require('mysql2')
let conn = {
    host: '127.0.0.1',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'NODEJS_DB'

}

module.exports = {
    init : function(){
        return mysql.createConnection(conn)

    }
}