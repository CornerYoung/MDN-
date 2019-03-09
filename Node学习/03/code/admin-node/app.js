var express = require('express');
var router = require('./router');

var app = express();

app.engine('html', require('express-art-template'));
app.use('/node_modules', express.static('./node_modules'));
app.use('/public', express.static('./public'));

//把路由容器挂载到 app 服务中去
app.use(router);
//router(app);

app.listen(3000, function () {
    console.log('Running... 3000')
});
