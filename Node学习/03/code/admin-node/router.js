/**
 * router.js 路由模块
 * 职责：
 *   处理路由
 *   根据不同的请求方法+请求路径设置具体的请求处理函数
 * 模块职责要单一，不要乱写
 * 我们划分模块的目的就是为了增强项目代码的可维护性
 * 提升开发效率
 */

var fs = require('fs');
var Players = require('./players');

//=============路由文件最优方案==============
var express = require('express');

//1.创建一个路由容器
var router = express.Router();

//2.把路由都挂载到 router 路由容器中去

/*
 * 渲染球员列表页面
 */
router.get('/players', function (req, res) {
    // fs.readFile('./db.json', 'utf8', function (err, data) {
    //     if (err) {
    //         return res.status(500).send('Server error.');
    //     };
    //     res.render('index.html', {
    //         players: JSON.parse(data).players,
    //         firuts: ['香蕉', '西瓜', '苹果']
    //     });
    // });

    //调用 players 模块中的 find 方法，并传入回调函数，拿到其中读取到的数据
    Players.find(function (err, players) {
        if (err) {
            return res.status(500).send('Server error.');
        };
        res.render('index.html', {
            players: players,
            firuts: ['韦德', '詹姆斯', '威斯布鲁克']
        });
    });
});

router.get('/players/new', function (req, res) {
    res.render('new.html');
});

router.post('/players/new', function (req, res) {
    //1.获取表单数据
    var newPlayer = req.body;
    //2.处理
    //      将填写的数据保存到 db.json 文件中 用以持久化
    //3.发送响应
    Players.save(newPlayer, function (err, data) {
        if (err) {
            return res.status(500).send('Server error.');
        };
        res.redirect('/players');
    });
    //      拿到 db.json 文件中的字符串数据，将字符串转为对象，
    //      再向对象数组中添加填写的数据，
    //      最后将对象转化成字符串更新写入 db.json 文件

});

router.get('/players/edit', function (req, res) {
    Players.findById(parseInt(req.query.id), function (err, data) {
        if (err) {
            return res.status(500).send('Server error.');
        };
        res.render('edit.html', {
            player: data
        });
    });
});

router.post('/players/edit', function (req, res) {
    //1.获取表单数据 req.body
    //2.更新  exports.updateById()
    //3，发送响应
    Players.updateById(req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error.');
        };
        res.redirect('/players');
    });
});

router.get('/players/delete', function (req, res) {
    //1.获取要删除的 id
    //2.根据 id 执行删除操作
    //3.根据操作结果发送响应数据 (先写调用，再写封装，应对不熟练)
    Players.deleteById(req.query.id, function (err) {
        if (err) {
            return res.status(500).send('Server error.');
        };
        res.redirect('/players');
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