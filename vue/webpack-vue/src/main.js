//main.js 作为整个项目的入口文件

// 如何在 webpack 构建的项目中，使用 Vue 进行开发

// 复习 在普通网页中如何使用vue： 
// 1. 使用 script 标签 ，引入 vue 的包
// 2. 在 index 页面中，创建 一个 id 为 app div 容器
// 3. 通过 new Vue 得到一个 vm 的实例

console.log('ok');
// 在webpack 中尝试使用 Vue：
// 注意： 在 webpack 中， 使用 import Vue from 'vue' 导入的 Vue 构造函数，功能不完整，只提供了 runtime-only 的方式，并没有提供 像网页中那样的使用方式；
import Vue from 'vue';
//import Vue from '../node_modules/vue/dist/vue.js';
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
// 总结梳理： webpack 中如何使用 vue :
// 1. 安装vue的包：  cnpm i vue -S
// 2. 由于 在 webpack 中，推荐使用 .vue 这个组件模板文件定义组件，所以，需要安装 能解析这种文件的 loader ,cnpm i vue-loader vue-template-complier -D
// 3. 在 main.js 中，导入 vue 模块  import Vue from 'vue'
// 4. 定义一个 .vue 结尾的组件，其中，组件有三部分组成： template script style
// 5. 使用 import login from './login.vue' 导入这个组件
// 6. 创建 vm 的实例 var vm = new Vue({ el: '#app', render: c => c(login) })
// 7. 在页面中创建一个 id 为 app 的 div 元素，作为我们 vm 实例要控制的区域；
