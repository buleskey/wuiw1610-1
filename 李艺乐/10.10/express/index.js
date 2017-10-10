var express = require("express");
var app = express();
app.get("/",function(req,res){
    res.send("abc");
});
var server = app.listen(3000,function(){
    console.log("http://%s:%s",server.address().address,server.address().port);
})