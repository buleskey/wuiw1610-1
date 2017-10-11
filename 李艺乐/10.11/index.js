var express = require("express");
var app = express();
// 字符串模式
// app.get("/ab?cde",function(req,res){
//     res.send("ab?cde匹配成功");
// })
// app.get("/ab+c",function(req,res){
//     res.send("ab+c匹配成功");
// })
// app.get("/ab*c",function(req,res){
//     res.send("ab*c匹配成功");
// })
// app.get("/ab(cd)?e",function(req,res){
//     res.send("ab(cd)?e匹配成功");
// })
// 正则表达式
// app.get(/a/,function(req,res){
//     res.send("正则/a/匹配成功");
// })
// app.get(/.*fly$/,function(req,res){
//     res.send("/.*fly$/匹配成功");
// })

// 路由句柄
// 多个回调函数

app.get("/",function(req,res,next){
    console.log("1111");
    next();
},function(req,res){
    console.log("222");
    res.send("luyoujubing");
})



app.listen(8002);


