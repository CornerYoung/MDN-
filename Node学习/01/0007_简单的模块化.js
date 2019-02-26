/**
 * require 是一个方法，用来加载模块
 * 在 Node 中，模块有三种：
 *      具名的核心模块 ----> fs、http、os 等
 *      个人编写的文件模块
 *          相对路径必须加 ./
 *          可以省略后缀名
 * 在 Node 中，没有全局作用域，只有模块作用域
 *      外部访问不到内部，内部也访问不到外部，每个模块的作用域都是相对独立的
 */

var name = '令狐冲';

console.log('start');

console.log(name);

function add(x, y) {
    return x + y;
}

require('./data/a.js');

console.log(add(100, 200));

console.log('此时的名字是： ' + name);

console.log('end');