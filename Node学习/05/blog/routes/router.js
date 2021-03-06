var express = require('express');
var User = require('../models/user');
var md5 = require('blueimp-md5');
var router = express.Router();

router.get('/', function (req, res) {
    //console.log(req.session.user)
    res.render('index.html', {
        user: req.session.user
    });
});

router.get('/login', function (req, res) {
    res.render('login.html');
});

router.post('/login', function (req, res, next) {
    //1.获取表单数据
    //2.查询数据库，用户名和密码是否正确
    //3.发送响应数据
    var body = req.body;
    User.findOne({
        email: body.email,
        password: md5(md5(body.password))
    }, function (err, user) {
        if (err) {
            // return res.status(500).json({
            //     err_code: 500,
            //     message: err.message
            // });

            return next(err);
        };

        if (!user) {
            return res.status(200).json({
                err_code: 1,
                message: 'Email or password is invalid!'
            });
        };

        //用户存在，登录成功，通过 session 记录登录状态
        req.session.user = user;
        res.status(200).json({
            err_code: 0,
            message: '登录成功！'
        });
    });
});

router.get('/register', function (req, res) {
    res.render('register.html');
});

router.post('/register', function (req, res, next) {
    //1.获取表单提交数据
    var body = req.body;

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
            // return res.status(500).json({
            //     err_code: 500,
            //     message: '服务器繁忙，请稍后重试···'
            // });
            return next(err);
        };
        if (data) {
            //如果邮箱或者昵称已经存在
            return res.status(200).json({
                err_code: 1,
                message: '邮箱或者昵称已经存在'
            });
        };

        //使用md5对密码进行二层加密
        body.password = md5(md5(body.password));

        new User(body).save(function (err, user) {

            if (err) {
                // return res.status(500).json({
                //     err_code: 500,
                //     message: '服务器繁忙，请稍后重试···'
                // });
                return next(err);
            };

            //注册成功，使用 session 记录用户的登录状态
            req.session.user = user;

            //Express 提供了一个响应方法： json
            //该方法接收一个对象作为参数，它会自动帮你把对象转为字符串在发送给浏览器
            res.status(200).json({
                err_code: 0,
                message: '注册成功！'
            });
        });
    });
    //3.发送响应
});

router.get('/logout', function (req, res) {
    //1.清除登录状态
    //2.重定向到登录页面
    //    a链接是同步请求，退出时可以使用服务端重定向
    req.session.user = null;
    res.redirect('/login');
});

router.get('/settings/profile',function(req,res,next){
    res.render('settings/profile.html');
});

router.get('/settings/admin', function (req, res, next) {
    res.render('settings/admin.html');
});

router.get('/topics/123', function (req, res, next) {
    res.render('topic/show.html');
});

router.get('/topics/new', function (req, res, next) {
    res.render('topic/new.html');
});

router.post('/topics/new', function (req, res, next) {
    res.redirect('/');
});

module.exports = router;