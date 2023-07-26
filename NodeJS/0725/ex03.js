const http = require('http')
const qs  = require('querystring')
const { log } = require('console')
const exPostTemp = require('./exPostTemp')

http.createServer(function(req,res){

    let bodyData=''
    req.on('data',function(data){
        console.log(data);
        bodyData+=data
    })

    req.on('end',function(){
        let queryData = qs.parse(bodyData)
        console.log(queryData);

        res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'})
        res.write(exPostTemp.gradeTemp(queryData))

    res.end()

    })
}).listen(3006)