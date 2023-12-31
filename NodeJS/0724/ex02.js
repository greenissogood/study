
//4000번 포트로 서버 열어 주세요!
// 접속 했을 때 ==> 서버 생성 완료!
//require('http') --> http 모듈을 가져와서 사용하겠습니다.
const { log } = require('console');
const http = require('http')
const m_url = require('url')
//url 모듈 : 클라이언트가 보낸 url 정보를 사용할 수 있게 도와주는 모듈(기능)


//function 역할 : 요청이 들어왔을 때 실행할 로직

//http://192.168.21.175:4000
http.createServer(function (request, response) {
    console.log('접속 확인22.');
    //request : 클라이언트 ->서버
    //response : 서버 -> 클라이언트

    //http://192.168.21.175:4000/?inputId=dd&inputPw=dd
    //? get 방식으로 쿼리스트링 형태로 데이터를 요청 보낸다!
    //쿼리 스트링 : ? 물음표를 기준으로 왼쪽 : 주소
    //오른쪽 : data(key-value) >> key --> input 태그에 적은 name
    //데이터가 여러 개라면 & 기호를 기준으로 나뉘어진다.

    //url에 담긴 데이터 꺼내기
    console.log(request.url); //-> request.url : 클라이언트가 요청한 url 값
    //true --> 쿼리 스트링의 데이터 부분만 사용하겠습니다.
    //.query --> 사용할 수 있게끔 객체로 만들어 주겠습니다.
    let queryData = m_url.parse(request.url, true).query
    console.log(queryData);
    console.log('입력한 ID :' + queryData.inputId);
    console.log('입력한 PW :' + queryData.inputPw);

    // response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })//어떤 식으로 응답을 할지 세팅
    // response.write('<html>')
    // response.write('<body>')
    // let id = queryData.inputId
    // let pw = queryData.inputPw
    // if (id === 'aischool' && pw === '123') {
    //     //로그인 성공
    //     response.write('<h1>로그인 성공</h1>')

    // }
    // else {
    //     //로그인 실패
    //     response.write('<h1>로그인 실패</h1>')

    // }
    // response.write('</body>')
    // response.write('</html>')


    //넘겨받은 값
    //ID : aischool , PW :123
    //h1 태그로 '로그인 성공'입니다.
    //둘 중 하나라도 값이 다르다면 
    // h1 태그로 '로그인 실패'

    response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' })
    if (queryData.inputId == 'aischool' && queryData.inputPw == '123') {
        response.write('<html>');
        response.write('<body>');
        response.write('<h1> 로그인 성공! </h1>');
        response.write('</body>');
        response.write('</html>');
    }
    else {
        response.write('<html>');
        response.write('<body>');
        response.write('<h1> 로그인 실패! </h1>');
        response.write('</body>');
        response.write('</html>');
    }




    console.log('실행 확인22');

    response.end();

}).listen(4000)
//포트 --> 중복x

///favicon.ico 앞에 지구 아이콘