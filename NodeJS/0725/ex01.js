
const http = require('http')
const url = require('url')

http.createServer(function(request,res){
    //첫 번째 숫자, 두 번째 숫자를 꺼내서 활용해 주세요.
    // {
    //     num1:12,
    //     num2:12
    // }
    console.log("ads");
    let data = url.parse(request.url,true).query
    console.log(data);
    
    //쿼리스트링으로 넘겨받은 값은 무조건 문자열 타입 그래서 무조건 정수로 바꿔야 됨
    let num1 = parseInt(data.num1)
    let num2 = parseInt(data.num2)

    console.log("넘어감?");

    res.writeHead(200,{"Content-Type":'text/html;charset=utf-8'})
    res.write('<html>')
    res.write('<body>')
    res.write(`<h1>${num1}+${num2}=${num1+num2}</h1>`)
    res.write('</body>')
    res.write('</html>')

    
    
    res.end();

}).listen(3000)
//http://192.168.21.175:3000

// const http = require("http");
// const url = require("url");

// http
//   .createServer(function (request, response) {
//     let queryData = url.parse(request.url, true).query;
//     console.log(queryData.firstNum);
//     console.log(queryData.secNum);
//     console.log(queryData.cal);

//     // 쿼리스트링으로 넘겨받은 값은 무조건 문자열타입
//     let sum = parseInt(queryData.firstNum) + parseInt(queryData.secNum);
//     let num1 = parseInt(queryData.firstNum);
//     let num2 = parseInt(queryData.secNum);
//     let cal = queryData.cal;
//     let result = 0;

//     switch (cal) {
//       case "+":
//         result = num1 + num2;
//         break;

//       case "-":
//         result = num1 - num2;
//         break;

//       case "*":
//         result = num1 * num2;
//         break;

//       case "/":
//         result = num1 / num2;
//         break;
//     }

//     response.writeHead(200, { "content-Type": "text/html ; charset=UTF-8" });
//     response.write("<html>");
//     response.write("<body>");
//     response.write(`<h3>${num1} ${cal} ${num2} = ${result}</h3>`);
//     response.write("</body>");
//     response.write("</html>");

//     response.end();
//   })
//   .listen(3000);


//---------------------------------


// let queryData2 = cal_url.parse(request.url, true).query

// console.log(queryData2);
// let num3 = parseInt(queryData2.num3)
// let num4 = parseInt(queryData2.num4)

// console.log("콘솔 : 서버생성완료!")

// response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"}) 
// response.write('<html>')
// response.write('<body>')
// if(queryData2.cal == '+'){
//     response.write(`<h2>Plus : ${num3+num4}</h2>`)
// }
// else if(queryData2.cal == '-'){
//     response.write(`<h2>Minus : ${num3-num4}</h2>`)
// }
// else if(queryData2.cal == '*'){
//     response.write(`<h2>Multi : ${num3*num4}</h2>`)
// }
// else if(queryData2.cal == '/'){
//     response.write(`<h2>Divide : ${num3/num4}</h2>`)
// }
// response.write('</body>')
// response.write('</html>')