
console.log('실행 확인');

//파일을 서버로 만들기 위해서는 서버의 기능을 할 수 있는 모듈을 가져와서 사용해 줘야 함. 
//http 기능(모듈)을 불러와서 사용하기!
const http = require('http')

//http://로컬컴퓨터주소(ip주소)
//http://192.168.21.175(ip주소)


//http://192.168.21.175:3000
//(포트까지 달아줘야 ip값으로 열린다.)
http.createServer(function (request, response) {
    //1. creatsServer : 현재 js 파일을 서버로 만들어 주는 역할
    //2. function(req, res) : {실행로직} : 클라이언트가 요청을 보냈을 때 응답 실행할 로직
    console.log('접속 확인!')

    //requset : 클라이언트가 서버로 요청을 보냈을 때 정보를 가지고 있다.
    let ip = request.connection.remoteAddress;
    console.log('요청 보낸 주소 : '+ip);

    //http://192.168.21.175:3000(ip주소)
    //ip 주소 확인하는 법 cmd창에 ipconfig
    //현재 내 컴퓨터의 ip주소를 확인 가능하다

    //응답값 만들어 주기 -> html  형식
    //200 ---> 통신성공코드
    //'Content-Type':'text/html' ==> html 형식으로 응답하겠습니다.
    //response  : 응답객체 --> 응답을 하기 위한 객체

    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
    response.write('<html>');
    response.write('<body>');
    response.write('<h1> 오윤띠모띠 </h1>');
    response.write('</body>');
    response.write('</html>');

    response.end();

}).listen(3000)

// 서버 실행 : node 실행파일명
// 서버 중지 : Ctrl + C


//CLI : command line interface --> 리눅스 기반
//GUI : 사용자에 초점을 맞춘 화면 --> window 명령

// cd : 경로 이동 명령 ex) cd 경로명(파일명) cd .. 이전 경로로 이동
// ls : 현재 경로에서 접근할 수 있는 파일 확인
// clear : 커맨드 창 지우기
// tab : 자동완성