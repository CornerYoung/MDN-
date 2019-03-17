var express = require('express');
var User = require('../models/user');
var md5 = require('blueimp-md5');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('index.html');
});

router.get('/login', function (req, res) {
    res.render('login.html');
});

router.post('/login', function (req, res) {

});

router.get('/register', function (req, res) {
    res.render('register.html');
});

router.post('/register', function (req, res) {
    //1.获取表单提交数据
    var body = req.body;
    console.log(body)
    //2.操作数据库
    //      判断该用户是否存在，如果已存在，不允许注册，如果不存在，注册新建用户
    User.findOne({
        $or: [{
                email: body.email
            },
            {
                nickname: body.nickname
            }
        ]
    }, function (err, data) {
        if (err) {
            return res.status(500).json({
                err_code: 500,
                message: '服务器繁忙，请稍后重试···'
            });
        };
        if (data) {
            //如果邮箱或者昵称已经存在
            return res.status(200).json({
                err_code: 1,
                message: '邮箱或者昵称已经存在'
            });
        };

        //使用md5对密码进行二层加密
        body.password=md5(md5(body.password));
        new User(body).save(function (err, user) {
            if (err) {
                return res.status(500).json({
                    err_code: 500,
                    message: '服务器繁忙，请稍后重试···'
                });
            };

            //Express 提供了一个响应方法： json
            //该方法接收一个对象作为参数，它会自动帮你把对象转为字符串在发送给浏览器
            res.status(200).json({
                err_code:0,
                message:'注册成功！'
            });
        });
    });
    //3.发送响应
});


module.exports = router;