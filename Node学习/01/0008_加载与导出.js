var cExports = require('./data/c');

console.log(cExports.foo);

console.log(cExports.age);

console.log(cExports.add(10, 20));

cExports.readFile('./data/a.js',function(err,data){
    if(err){
        console.log('文件读取失败！');
    }else{
        console.log(data);
    };
});