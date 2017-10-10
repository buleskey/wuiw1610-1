
var http = require('http');
var fs = require('fs');
var url=require('url');
var qs=require('querystring');
var formidable = require('formidable');
var p = require('path');
var sever=http.createServer((req,res)=>{
    var u=url.parse(req.url);
    if(u.pathname==='/favicon.ico'){
        res.end();
        return;
    }
    if(u.pathname=='/'||u.pathname=='/index.html'){
        fs.readFile('./index.html',function (err,data) {
            res.write(data);
            res.end();
        })
        return;
    }
    if(u.pathname=="/upload"){
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files){
            fs.existsSync('./upload')||fs.mkdir("./upload");
            var d = new Date();
            var path = d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();
            fs.existsSync('./upload/'+path)||fs.mkdir("./upload/"+path);
            var filename = ''+d.getTime()+Math.floor(Math.random()*1000)+p.extname(files.avatar.name);
            var lujing='/upload/'+path+'/'+filename;
            fs.readFile(files.avatar.path,function(err,data){
                fs.writeFile('.'+lujing,data,function(err){
                    res.end(lujing);
                })
            })
        })
        return;
    }
    if(fs.existsSync('.'+u.pathname)){
        fs.readFile('.'+u.pathname,function(err,data){
            res.end(data)
        })
    }
}).listen(8090);


