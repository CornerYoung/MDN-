var fs = require('fs');
//将路由函数暴露出去，在入口文件 app.js 中引入
module.exports = function (app) {
    
    app.get('/players', function (req, res) {
        //readFile 的第二个参数是可选的，传入 utf8 可以使读取到的文件按照 utf8 编码进行字符转换
        //除了这样来转换，也可以通过 data.toString（）的方式
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

    app.get('/players/new', function (req, res) {

    });

    app.get('/players/new', function (req, res) {

    });

    app.get('/players/new', function (req, res) {

    });

};