const http = require('http')
const qs = require('querystring')
// body 안에 담긴 데이터를 객체 형식으로 변환해서 사용할 수 있게끔 도와주는 역할
const exPostTemp = require('./exPostTemp')

http.createServer(function (request, response) {
    

    // 1. 클라이언트가 보낸 데이터를 꺼내오겠습니다.
    let bodyData = ''
    request.on('data', function (data) {
        bodyData+=data

    })
    // 2. 모든 요청이 끝났을 때(데이터를 전부 전송했을 때)
    // 받아 온 데이터를 (개발자가 사용할 수 있게)변환시켜서 사용하겠습니다.
    request.on('end',function(){
        let queryData = qs.parse(bodyData)
            console.log(queryData)
        
        response.writeHead(200, {'Content-Type':'text/html;charset=utf-8'})
        response.write(exPostTemp.postTemp(queryData))
        // response.write('<html>')
        // response.write('<body>')
        // response.write(`<p>ID : ${queryData.id}</p>`)
        // response.write(`<p>PW : ${queryData.pw}</p>`)
        // response.write(`<p>GENDER : ${queryData.gender}</p>`)
        // response.write(`<p>BLD : ${queryData.bld}</p>`)
        // response.write(`<p>BTH : ${queryData.bth}</p>`)
        // response.write(`<p>HOBBY : ${queryData.hobby}</p>`)
        // response.write(`<p>CLR : ${queryData.clr}</p>`)
        // response.write(`<p>TEXTAREA : ${queryData.textarea}</p>`)
        // response.write('</body>')
        // response.write('</html>')

        response.end()

    })

    // response.end() 여기에 있으면 이거 먼저 실행됨
    


}).listen(3004)
//http://localhost:3004
//http://192.168.20.25:3004