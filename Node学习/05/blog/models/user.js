var mongoose = require('mongoose');
// 连接数据库
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    created_time: { //创建时间
        type: Date,
        //⚠️注意：这里不要写 Date.now（） 因为它会被即可调用
        //这里直接给了一个方法：Date.now
        //当 new Model 使，如果没有传递 created_time，则 mongoose 就会调用这个方法
        default: Date.now
    },
    last_modified_time: { //最后一次修改时间
        type: Date,
        default: Date.now
    },
    avater:{
        type:String,
        default:'/public/img/avatar-default.png'
    },
    bio:{
        type:String,
        default:''
    },
    gender:{
        type:Number,
        enum:[-1,0,1], //在-1，0，1之间枚举
        default:-1
    },
    birthday:{
        type:Date
    },
    status:{
        type:Number,
        //0 没有权限限制
        //1 不可以评论
        //2 不可以登录
        enum:[0,1,2],
        default:0
    }
});

module.exports = mongoose.model('User', userSchema);
