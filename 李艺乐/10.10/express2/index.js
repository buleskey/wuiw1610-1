var express = require("express");
var app = express();
app.get("/",function(req,res){
    res.send("abc");
});
app.get("/list",function(req,res){
    res.send("list");
});
app.get("/category",function(req,res){
    res.send("category");
});
var server = app.listen(3000,function(){
    console.log("http://%s:%s",server.address().address,server.address().port);
})
