import VueRouter from 'vue-router';
import account from './main/Account.vue';
import goodslist from './main/GoodsList.vue';
import login from './subcom/login.vue';
import register from './subcom/register.vue';

// 3. 创建路由对象
var router = new VueRouter({
    routes: [
        // account  goodslist
        {
            path: '/account',
            component: account,
            //在Account组件下面配置登录和注册的嵌套路由
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

export default router;