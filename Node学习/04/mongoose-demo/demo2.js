//引包
const mongoose = require('mongoose');
const Schema = mongoose.Schema; //架构，结构，概要，计划，图表

//1.连接数据库
//指定连接的数据库不需要存在，当你输入第一条数据之后就会自动被创建出来
mongoose.connect('mongodb://localhost/test');

//2.设计文档结构（表结构）
//字段名称就是表结构中的属性名称
//约束的目的是为了保证数据的完整性，不要有脏数据
const userSchema = new Schema({
    username: {
        type: String,
        required: true //必须有
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
});

//3.将文档结构发布为模型
/**
 * mongoose.model 方法就是用来将一个架构发布为 model
 * 
 * 第一个参数：
 *      传入一个首字母大写单数名词字符串，用来表示数据库名称
 *      mongoose 会自动将首字母大写的单数名词的字符串生成 小写复数 的集合名称
 *      例如本案例中 User ===> users
 * 
 * 第二个参数：
 *      架构 Schema
 * 
 * 返回值：
 *      模型构造函数
 */
var User = mongoose.model('User', userSchema);

//4.当有了模型构造函数之后，就可以使用这个构造函数对 users 集合中的数据进行增删改查操作了

// ***********************
// #region /新增数据 
// ***********************
var admin = new User({
    username:'lisi',
    password:'123456890',
    email:'lisi@admin.com'
});

//数据持久化
admin.save(function(err,ret){
    if(err){
        console.log('保存失败！');
    }else{
        console.log('保存成功');
        console.log('ret: '+ret);
    }
});
// ***********************
// #endregion /新增数据 
// ***********************

// ***********************
// #region /查询数据 
// ***********************
User.find(function(err,ret){
    if(err){
        console.log('查询失败！');
    }else{
        console.log('查询成功！');
        console.log(ret);
    }
});

User.findOne({
    username:'lisi'
},function (err, ret) {
    if (err) {
        console.log('查询失败！');
    } else {
        console.log('查询成功！');
        console.log(ret);
    }
});
// ***********************
// #endregion /查询数据
// ***********************