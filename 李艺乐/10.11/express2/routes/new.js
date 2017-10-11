var express = require("express");
var router = express.Router();
router.route("/")
    .get(function(req,res){
        res.send("get new");
    })
    .post(function(req,res){
        res.send("post new");
    });
module.exports = router;
