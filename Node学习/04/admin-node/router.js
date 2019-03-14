var fs = require('fs');
var Players = require('./players');
var express = require('express');

//1.创建一个路由容器
var router = express.Router();

//2.把路由都挂载到 router 路由容器中去
router.get('/players', function (req, res) {
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
    new Players(req.body).save(function (err, data) {
        if (err) {
            return res.status(500).send('Server error.');
        };
        res.redirect('/players');
    });
});

router.get('/players/edit', function (req, res) {
    Players.findById(req.query.id, function (err, data) {
        if (err) {
            return res.status(500).send('Server error.');
        };
        res.render('edit.html', {
            player: data
        });
    });
});

router.post('/players/edit', function (req, res) {
    //findByIdAndUpdate 方法需要传递三个参数，1.id值；2.更新后的内容；3.回调函数
    Players.findByIdAndUpdate(req.query.id, req.body, function (err) {
        if (err) {
            return res.status(500).send('Server error.');
        };
        res.redirect('/players');
    });
});

router.get('/players/delete', function (req, res) {
    Players.findByIdAndRemove(req.query.id, function (err) {
        if (err) {
            return res.status(500).send('Server error.');
        };
        res.redirect('/players');
    });
});

module.exports = router;