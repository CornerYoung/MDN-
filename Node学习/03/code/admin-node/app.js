var express = require('express');

var app = express();
app.engine('html',require('express-art-template'));
app.use('/node_modules', express.static('./node_modules'));
app.use('/public', express.static('./public'));

app.get('/',function(req,res){
    res.render('index.html',{
        player:[
            '詹姆斯',
            '韦德',
            '鲍尔'
        ]
    });
});

app.listen(3000,function(){
    console.log('Running... 3000')
});