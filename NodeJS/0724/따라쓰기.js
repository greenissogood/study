
console.log('실행 확인');

// 파일을 서버로 만들기 위해서는 서버의 기능을 할 수 있는 모듈을 가져와서 사용해 줘야 함.
//http 기능을 불러와서 사용하기 
const http = require('http')

http.createServer(function(req,res){
    // 1. createServer : 현재 js 파일을 서버로 만들어 주는 역할 --이름부터 서버를 만들잖아
    // 2. function(req,res) : {실행로직} : 클라이언트가 요청을 보냈을 때 응답 실행할 로직
    console.log('접속 확인');

    // request : 클라이언트가 서버로 요청을 보냈을 때 정보를 가지고 있다.
    let ip = req.connection.remoteAddress;
    console.log('요청 보낸 주소:' +ip);

    res.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'})
    res.write('<html>')
    res.write('<body>')
    res.write('<h1>바보</h1>')
    res.write('</body>')
    res.write('</html>')

    res.end();


}).listen(3000)

//http://172.30.1.49:3000