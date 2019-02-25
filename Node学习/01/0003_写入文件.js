var fs = require('fs');

fs.writeFile('./data/hi.txt','湖人总冠军，詹姆斯GOAT!',function(error,data){
    if(error){
        console.log('文件写入失败！');
    }else{
        console.log('文件写入成功！');
    };
});