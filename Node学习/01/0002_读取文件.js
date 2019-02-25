// 浏览器中的 JavaScript 是没有文件操作能力的
// 但是 Node 中的 JavaScript 具有文件操作的能力

// fs 是 file-system 的简写，就是文件系统的意思
// 在 Node 中如果想要进行文件操作，就必须引入 fs 这个核心模块
// 在 fs 这个核心模块中，提供了所有的文件操作相关的 API
// 例如：fs.readFile 就是用来读取文件的

// 1. 使用 require 方法加载 fs 核心模块
var fs = require('fs');

//2.读取文件
//readFile是fs中的一个方法，传两个参数，一个是文件路径，一个是回调函数

fs.readFile ('./data/hello.txt',function(error,data){
    console.log(data.toString())
})