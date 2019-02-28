var template = require('art-template');
var fs = require('fs');
var tmp = fs.readFile('./art-template.html',function(err,data){
    if(err){
        return console.log('读取失败！');
    };

    data = data.toString();

    var ret = template.render(data, {
        name: 'Young',
        age:18,
        player:'Lebron James GOAT'
    });
    console.log(ret)
});

