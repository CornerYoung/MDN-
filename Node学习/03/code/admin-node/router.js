var fs = require('fs');

//=============路由文件最优方案==============
var express = require('express');
//1.创建一个路由容器
var router = express.Router();
//2.把路由都挂载到 router 路由容器中去
router.get('/players', function (req, res) {
    fs.readFile('./db.json', 'utf8', function (err, data) {
        if (err) {
            return res.status(500).send('Server error.');
        };
        res.render('index.html', {
            players: JSON.parse(data).players,
            firuts: ['香蕉', '西瓜', '苹果']
        });
    });
});
//3.把路由文件导出，使 app.js 能够接收
module.exports = router;
//=============路由文件最优方案==============


//将路由函数暴露出去，在入口文件 app.js 中引入
//这样写也不是最优方案
// module.exports = function (app) {
//     app.get('/players', function (req, res) {
//         //readFile 的第二个参数是可选的，传入 utf8 可以使读取到的文件按照 utf8 编码进行字符转换
//         //除了这样来转换，也可以通过 data.toString（）的方式
//         fs.readFile('./db.json', 'utf8', function (err, data) {
//             if (err) {
//                 return res.status(500).send('Server error.');
//             };
//             res.render('index.html', {
//                 //从文件中读取到的数据一定是字符串，所以这里一定要手动转换成对象
//                 players: JSON.parse(data).players,
//                 firuts: ['香蕉', '西瓜', '苹果']
//             });
//         });
//     });
// };