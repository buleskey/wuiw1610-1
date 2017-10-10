var express = require("express");
var app = express();
app.use(express.static('aa'));
var server = app.listen(3000,function(){
    console.log("http://%s:%s",server.address().address,server.address().port);
})
