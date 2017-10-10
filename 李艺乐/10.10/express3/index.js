var express = require("express");
var app = express();
app.get("/",function(req,res){
    res.send("get");
});
app.post("/",function(req,res){
    res.send("post");
});
app.put("/list",function(req,res){
    res.send("put");
});
app.delete("/list",function(req,res){
    res.send("delete");
});
var server = app.listen(3000,function(){
    console.log("http://%s:%s",server.address().address,server.address().port);
})
