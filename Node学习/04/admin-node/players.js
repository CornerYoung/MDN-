const fs = require('fs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dbPath = './db.json';

mongoose.connect('mongodb://localhost/test');
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
    gener:{
        type: Number
    }
});
let Players = mongoose.model('Player', players);

module.exports=Players;

// exports.find = function (callback) {
//     fs.readFile(dbPath, 'utf8', function (err, data) {
//         if (err) {
//             return callback(err);
//         };
//         callback(null, JSON.parse(data).players);
//     });
// };

// exports.findById = function (playerId, callback) {
//     fs.readFile(dbPath, 'utf8', function (err, data) {
//         if (err) {
//             return callback(err);
//         };
//         var players = JSON.parse(data).players;
//         var ret = players.find(function (item) {
//             return item.id === parseInt(playerId);
//         });
//         callback(null, ret);
//     });
// };

// exports.save = function (player, callback) {
//     fs.readFile(dbPath, 'utf8', function (err, data) {
//         if (err) {
//             return callback(err);
//         };
//         //将拿到的数据，从字符串类型转化成对象类型进行操作
//         data = JSON.parse(data);
//         //提取其中的 players
//         var players = data.players;
//         // 添加 id ，唯一不重复
//         //player.id = players.length; //如果这样写的话，会出现 id 重复的缺陷
//         player.id = players[players.length - 1].id + 1
//         //将添加 id 后的新增 player 追加到 players 中去
//         players.push(player);
//         //将修改后的 data 转为字符串用于写入 db.json
//         data = JSON.stringify(data);
//         //向 db.json 中写入新增数据
//         fs.writeFile(dbPath, data, function (err, data) {
//             if (err) {
//                 return callback(err);
//             };
//             callback(null);
//         });
//     });
// };

// exports.updateById = function (player, callback) {
//     fs.readFile(dbPath, 'utf8', function (err, data) {
//         if (err) {
//             return callback(err);
//         };
//         var players = JSON.parse(data).players;
//         //注意：这里要把 id 统一转换为数字类型
//         player.id = parseInt(player.id);
//         //想修改谁，就需要把谁找出来
//         var plaRet = players.find(function (item) {
//             //这里如果写成了一个等于号将出现bug
//             return item.id === player.id;
//         });

//         for (var key in player) {
//             plaRet[key] = player[key]
//         };

//         //把对象转化成字符串
//         var fileData = JSON.stringify({
//             players: players
//         });

//         //把字符串保存到文件中
//         fs.writeFile(dbPath, fileData, function (err, data) {
//             if (err) {
//                 return callback(err);
//             };
//             callback(null);
//         });
//     });
// };

// exports.deleteById = function (id, callback) {
//     fs.readFile(dbPath, 'utf8', function (err, data) {
//         if (err) {
//             callback(err);
//         };

//         //将获取到的数据转化为对象格式，得到其中的 players
//         var players = JSON.parse(data).players;

//         //遍历 players，如果需要删除的元素的 id 与其中的 id 匹配，就拿到这个元素
//         var deletePlayerId = players.findIndex(function (item) {
//             //这里要对形参 id 的数据格式进行转换，否则会出现bug，使得 deletePlayerId 始终等于 -1
//             return item.id === parseInt(id);
//         });

//         //根据 id，在 players 数组中删除这一项元素
//         players.splice(deletePlayerId, 1);

//         //将删除操作完成之后的 players 数组转化为字符串重新写入文件
//         var fileData = JSON.stringify({
//             players: players
//         });
//         fs.writeFile(dbPath, fileData, function (err) {
//             if (err) {
//                 callback(err);
//             };
//             callback(null);
//         });
//     });
// };