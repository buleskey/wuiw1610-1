var http = require("http");
var fs = require("fs");
var url = require("url")
var path = require("path")
var qs = require("querystring");
var data = ['张三','李四','王五','赵六']
var server = http.createServer(function(req,res){
    var u =url.parse(req.url)
    if(u.pathname === "/favicon.ico"){
        res.end();
        return;
    }
    if(u.pathname == "/" || u.pathname == "index.html"){
        res.setHeader("Content-type","text/html")
        fs.readFile("./index.html",function(err,data){
            res.write(data.toString());
            res.end();
        })
        return;
    }
    if(u.pathname == "/search"){
        var q = qs.parse(u.query)
        res.setHeader("Content-type","text/plain;charset=utf-8");
            var result = data.filter((v,i)=>{
                if(v == q.s){
                return true;
            }
            return false;
        })
        res.write(result.toString());
        res.end();
    }
}).listen(7000);



