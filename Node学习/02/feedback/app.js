var http = require('http');
var fs=require('fs');

http
    .createServer(function(req,res){
        var url = req.url;
    })
    .listen(3000,function(){
        console.log('running...');
    })