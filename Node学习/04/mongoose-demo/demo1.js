const mongoose = require('mongoose');
console.log('mongoose')
//连接 MongoDB 数据库
mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser: true
});

//创建一个模型（设计数据库）
//MongoDB 是动态的，非常灵活，只需要在代码中设计你的数据库就可以了
//mongoose 这个包可以使设计编写过程得到很大的简化
const Cat = mongoose.model('Cat', {
    name: String
});

const kitty = new Cat({
    name: 'Zildjian'
});

kitty.save().then(() => console.log('meow'));

//持久化保存 kitty 实例
kitty.save(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('meow!');
    };
});