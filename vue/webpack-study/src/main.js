//main.js 作为整个项目的入口文件

//1.导入 JQuery
import $ from 'jquery'

$(function(){
    $('li:odd').css('backgroundColor','lightblue');
    $('li:even').css('backgroundColor', 'lightpink');
});