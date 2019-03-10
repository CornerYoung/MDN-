/**
 * players.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 * Node 的精华部分：封装异步 API
 */
var fs = require('fs');
var dbPath = './db.json';
/**
 * 获取球员列表
 * @param  {Function} callback 回调函数
 * return []
 * 
 * callback 中的参数
 *  第一个参数是 err
 *      成功是 null
 *      错误是错误对象
 *  第二个参数是 结果
 *      成功是数组
 *      错误是undefined
 */
exports.find = function (callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        };
        callback(null, JSON.parse(data).players);
    });
};

/**
 * 根据 id 获取球员信息对象
 * @param  {Number}   id       球员 id
 * @param  {Function} callback 回调函数
 */

/**
 * 添加保存球员
 * @param  {Object}   student  球员对象
 * @param  {Function} callback 回调函数
 */
exports.save = function (player,callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        };
        data = JSON.parse(data);
        var players = data.players;
        player.id = players.length;
        //将添加 id 后的新增 player 追加到 players 中去
        players.push(player);
        data = JSON.stringify(data);
        //向 db.json 中写入新增数据
        fs.writeFile(dbPath, data,function(err,data){
            if(err){
                return callback(err);
            };
            callback(null);
        });
    });
};

/**
 * 更新球员
 */
exports.update = function () {};

/**
 * 删除球员
 */
exports.delete = function () {};