

const http = require('http')
const url = require('url')

http.createServer(function(req,res){
    console.log('확인1');
    
    let data = url.parse(req.url,true).query
    //{num1 : 12}
    console.log(data);


    res.writeHead(200,{"Content-Type":'text/html;charset=utf-8'})
    res.write('<html>')
    res.write('<body>')
    res.write("<table border = '1px solid black'>")
    res.write('<tr>')
    for (let i=1;i<=data.num1;i++){
        res.write(`<td>${i}</td>`)
    }
    res.write('</tr>')
    res.write('</table>')
    res.write('</body>')
    res.write('</html>')

    res.end();

}).listen(3002)
//http://192.168.21.175:3002