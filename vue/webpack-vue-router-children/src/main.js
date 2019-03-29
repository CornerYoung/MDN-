import Vue from 'vue';

// 1. 导入 vue-router 包
import VueRouter from 'vue-router'
import app from './App.vue';
import account from './main/Account.vue';
import goodslist from './main/GoodsList.vue'
import login from './subcom/login.vue';
import register from './subcom/register.vue'

// 2. 手动安装 VueRouter 
Vue.use(VueRouter)

// 3. 创建路由对象
var router = new VueRouter({
    routes: [
        // account  goodslist
        {
            path: '/account',
            component: account,
            children: [{
                    path: 'login',
                    component: login
                },
                {
                    path: 'register',
                    component: register
                }
            ]
        },
        {
            path: '/goodslist',
            component: goodslist
        }
    ]
});


var vm = new Vue({
    el: '#app',
    // render 会把 el 指定的容器中，所有的内容都清空覆盖，所以不能把路由的 router-view 和 router-link 直接写到 el 所控制的元素中
    render: c => c(app),
    // components:{
    //     app:app
    // }

    // 4. 将路由对象挂载到 vm 上
    router
});

// 注意：App 这个组件，是通过 VM 实例的 render 函数，渲染出来的， render 函数如果要渲染组件，渲染出来的组件，只能放到 el: '#app' 所指定的元素中；
// Account 和 GoodsList 组件， 是通过路由匹配监听到的，所以这两个组件只能展示到属于路由的 <router-view></router-view> 中去；