const http = require('http');
const fs = require('fs');

const server = http.createServer();

server
    .on('request', (req, res) => {
        fs.readFile('./music.json','utf-8',function(err,data){
            if(err){
                res.setHeader('Content-Type', 'text/plain;charset=utf-8');
                res.end('文件读取失败，请稍后重试！');
                return console.log(err)
            };
            res.setHeader('Content-Type', 'text/plain;charset=utf-8');
            res.end(data)
        });
    })
    .listen('3000', () => {
        console.log('Running is 3000...');
    });