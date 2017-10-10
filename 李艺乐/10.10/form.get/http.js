// var http = require("http");
// var fs = require("fs");
// var u = require("url");
// var path = require("path");
// // console.log(path);
// var qs = require("querystring");
// http.createServer(function(req,res){
//     var p = path.parse(req.url);
//     console.log(p);
//     if(req.url=="/favicon.ico"){
//         res.end();
//         return;
//     }
//     if(req.url=="/"||req.url=="/index.html"){
//         res.setHeader("Content-Type","text/html;charset=utf-8");
//         fs.readFile('./index.html',function(err,data){
//             res.write(data);
//             res.end();
//         })
//         return;
//     }
//     if(req.url=="/"){}
//
// }).listen(8100);
//

var http = require("http");
var fs = require("fs");
var url = require("url")
var path = require("path")
var qs = require("querystring");
var data = ['aa','bb','cc','dd'];
var server = http.createServer(function(req,res){
    var u =url.parse(req.url)
    if(req.url === "/favicon.ico"){
        res.end();
        return;
    }
    if(u.pathname == "/" || u.pathname == "/index.html"){
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
}).listen(6000);



