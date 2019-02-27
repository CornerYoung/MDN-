var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request',function(req,res){
    var url = req.url;
    if(url === '/'){
        fs.readFile('./resource/index.html',function(error,data){
            if(error){
                res.end('文件读取失败，请稍后重试！');
            }else{
                res.setHeader('Content-Type','text/html;charset=utf-8');
                res.end(data);
            };
        });
    }
    console.log('请求路径是： '+url);
});

server.listen(3000,function(){
    console.log('Server is running...');
});



