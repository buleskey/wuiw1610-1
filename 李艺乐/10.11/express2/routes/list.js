var express = require("express");
var router = express.Router();
router.route("/")
    .get(function(req,res){
        res.send("get list");
    })
    .post(function(req,res){
        res.send("post list");
    });
module.exports = router;
