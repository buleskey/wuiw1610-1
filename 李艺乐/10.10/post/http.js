var http = require("http");
var fs = require("fs");
var url = require("url");

var qs=require('querystring');
var users=[];
var sever=http.createServer((req,res)=>{
    var u=url.parse(req.url);
if(u.pathname==='/favicon.ico'){
    res.end();
    return;
}
if(u.pathname==='/'||u.pathname==='/index.html'){
    fs.readFile('./index.html',function (err,data) {
        res.write(data);
        res.end();
    })
    return;
}
if(u.pathname=='/login'){
    var data='';
    var q=qs.parse(u.query);
    res.setHeader("Content-type","text/plain;charset=utf-8");
    req.on('data',function(d){
        data+=d;

    })
    req.on('end',function(){
        users.push(qs.parse(data));
        console.log(users);
        console.log('提交成功')
    })

}
}).listen(7000);
