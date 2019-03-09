/**
 * players.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 * 这里才是我们学习 Node 的精华部分：奥义之所在
 * 封装异步 API
 */
var fs = require('fs');
var dbPath = './db.json';
/**
 * 获取学生列表
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
 * 根据 id 获取学生信息对象
 * @param  {Number}   id       学生 id
 * @param  {Function} callback 回调函数
 */

/**
 * 添加保存学生
 * @param  {Object}   student  学生对象
 * @param  {Function} callback 回调函数
 */
exports.save = function () {};

/**
 * 更新学生
 */
exports.update = function () {};

/**
 * 删除学生
 */
exports.delete = function () {};