const fs = require('fs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dbPath = './db.json';

//报错信息提示：当前的URL字符串分析器已弃用，将在将来的版本中删除。要使用新的解析器，请将选项useNewUrlParser:true传递到mongoclient.connect。
//DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. 
//To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
// mongoose.connect('mongodb://localhost/test', {
//     useMongoClient: true
// });
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const players = new Schema({
    name: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    level: {
        type: String
    },
    gener: {
        type: Number,
        enum: [0, 1], //在0和1中选择
        default: 0 //默认是0
    }
});
let Players = mongoose.model('Player', players);

module.exports = Players;