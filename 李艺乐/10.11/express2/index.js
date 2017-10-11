var express = require("express");
var app = express();

// 路由模块
//导入
var home = require("./routes/home");
var news = require("./routes/new");
var list = require("./routes/list");

//调用
app.use("/",home);
app.use("/new",news);
app.use("/list",list);

app.listen(8003);


// var  express = require("express");
// var app = express();
//
// //路由模块
// var  home = require("./routes/home")
// // var  news = require("./routes/new")
// // var  list = require("./routes/list")
//
// app.use('/',home);
// // app.use('/new',news)
// // app.use('/list',list)
//
// app.listen(9000);
