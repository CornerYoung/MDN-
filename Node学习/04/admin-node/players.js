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
exports.findById = function (playerId, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        };
        var players = JSON.parse(data).players;
        var ret = players.find(function (item) {
            return item.id === parseInt(playerId);
        });
        callback(null, ret);
    });
};

/**
 * 添加保存球员
 * @param  {Object}   student  球员对象
 * @param  {Function} callback 回调函数
 */
exports.save = function (player, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        };
        //将拿到的数据，从字符串类型转化成对象类型进行操作
        data = JSON.parse(data);
        //提取其中的 players
        var players = data.players; 
        // 添加 id ，唯一不重复
        //player.id = players.length; //如果这样写的话，会出现 id 重复的缺陷
        player.id = players[players.length - 1].id + 1
        //将添加 id 后的新增 player 追加到 players 中去
        players.push(player);
        //将修改后的 data 转为字符串用于写入 db.json
        data = JSON.stringify(data);
        //向 db.json 中写入新增数据
        fs.writeFile(dbPath, data, function (err, data) {
            if (err) {
                return callback(err);
            };
            callback(null);
        });
    });
    //===================第二种写法===================
    // fs.readFile(dbPath, 'utf8', function (err, data) {
    //     if (err) {
    //         return callback(err)
    //     }
    //     var players = JSON.parse(data).players

    //     // 添加 id ，唯一不重复
    //     player.id = players[players.length - 1].id + 1

    //     // 把用户传递的对象保存到数组中
    //     players.push(player)

    //     // 把对象数据转换为字符串
    //     var fileData = JSON.stringify({
    //         players: players
    //     })

    //     // 把字符串保存到文件中
    //     fs.writeFile(dbPath, fileData, function (err) {
    //         if (err) {
    //             // 错误就是把错误对象传递给它
    //             return callback(err)
    //         }
    //         // 成功就没错，所以错误对象是 null
    //         callback(null)
    //     })
    // })
    //===================第二种写法===================
};

/**
 * 更新球员
 * 
 * 期望的调用方式
 * updateById({
 *      id:1,
 *      name:xxx,
 *      level
 * },function(err){
 *      
 * });
 */
exports.updateById = function (player, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err);
        };
        var players = JSON.parse(data).players;
        //注意：这里要把 id 统一转换为数字类型
        player.id = parseInt(player.id);
        //想修改谁，就需要把谁找出来
        var plaRet = players.find(function (item) {
            //这里如果写成了一个等于号将出现bug
            return item.id === player.id;
        });

        for (var key in player) {
            plaRet[key] = player[key]
        };

        //把对象转化成字符串
        var fileData = JSON.stringify({
            players: players
        });

        //把字符串保存到文件中
        fs.writeFile(dbPath, fileData, function (err, data) {
            if (err) {
                return callback(err);
            };
            callback(null);
        });
    });
};

/**
 * 删除球员
 */
exports.deleteById = function (id, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            callback(err);
        };

        //将获取到的数据转化为对象格式，得到其中的 players
        var players = JSON.parse(data).players;

        //遍历 players，如果需要删除的元素的 id 与其中的 id 匹配，就拿到这个元素
        var deletePlayerId = players.findIndex(function (item) {
            //这里要对形参 id 的数据格式进行转换，否则会出现bug，使得 deletePlayerId 始终等于 -1
            return item.id === parseInt(id);
        });
        
        //根据 id，在 players 数组中删除这一项元素
        players.splice(deletePlayerId, 1);

        //将删除操作完成之后的 players 数组转化为字符串重新写入文件
        var fileData = JSON.stringify({
            players: players
        });
        fs.writeFile(dbPath, fileData, function (err) {
            if (err) {
                callback(err);
            };
            callback(null);
        });
    });
};