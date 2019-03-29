//main.js 作为整个项目的入口文件

// 如何在 webpack 构建的项目中，使用 Vue 进行开发

// 复习 在普通网页中如何使用vue： 
// 1. 使用 script 标签 ，引入 vue 的包
// 2. 在 index 页面中，创建 一个 id 为 app div 容器
// 3. 通过 new Vue 得到一个 vm 的实例

console.log('ok');
// 在webpack 中尝试使用 Vue：
// 注意： 在 webpack 中， 使用 import Vue from 'vue' 导入的 Vue 构造函数，功能不完整，只提供了 runtime-only 的方式，并没有提供 像网页中那样的使用方式；
//import Vue from 'vue';
import Vue from '../node_modules/vue/dist/vue.js';
// 包的查找规则：
// 1. 找 项目根目录中有没有 node_modules 的文件夹
// 2. 在 node_modules 中 根据包名，找对应的 vue 文件夹
// 3. 在 vue 文件夹中，找 一个叫做 package.json 的包配置文件
// 4. 在 package.json 文件中，查找 一个 main 属性【main属性指定了这个包在被加载时候，的入口文件】

// var login = {
//     template:'<h1>login组件</h1>'
// }

import login from './login.vue'
import register from './register.vue'
var vm = new Vue({
    el:'#app',
    data:{
        msg:'hello vue!'
    },
    components:{
        login
    },
    // render:function(creatElements){
    //     //vue 中，render方法会置空整个页面，只渲染render返回的内容
    //     return creatElements(register)
    // }
    render:c => c(register) //es6 语法，简化版
});
