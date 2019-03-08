var express = require('express');
var fs = require('fs');

var app = express();
app.engine('html', require('express-art-template'));
app.use('/node_modules', express.static('./node_modules'));
app.use('/public', express.static('./public'));

app.get('/', function (req, res) {
    fs.readFile('./db.json', 'utf8', function (err, data) {
        if (err) {
            return res.status(500).send('Server error.');
        };
        res.render('index.html', {
            //从文件中读取到的数据一定是字符串，所以这里一定要手动转换成对象
            players: JSON.parse(data).players,
            firuts: ['香蕉', '西瓜', '苹果']
        });
    });
});

app.listen(3000, function () {
    console.log('Running... 3000')
});