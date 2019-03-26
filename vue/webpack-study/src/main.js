//main.js 作为整个项目的入口文件

//1.导入 JQuery
// import *** from *** 是ES6中导入模块的方式
// 由于 ES6的代码，太高级了，浏览器解析不了，所以，这一行执行会报错
import $ from 'jquery';
// const $ = require('jquery') node中这样来引用

$(function(){
    $('li:odd').css('backgroundColor','lightblue');
    $('li:even').css('backgroundColor', 'skyblue');
});

// Webpack 可以做什么事情？？？
// 1. webpack 能够处理 JS 文件的互相依赖关系；
// 2. webpack 能够处理JS的兼容问题，把 高级的、浏览器不是别的语法，转为 低级的，浏览器能正常识别的语法

// 刚才运行的命令格式：    webpack  要打包的文件的路径  打包好的输出文件的路径