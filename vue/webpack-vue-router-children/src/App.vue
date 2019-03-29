<template>
    <div>
        <h1>这是App 组件</h1>
        <router-link to="/account">Account</router-link>
        <router-link to="/goodslist">Goodslist</router-link>
        <!-- <account></account>
        <goodslist></goodslist> -->
        <router-view></router-view>
    </div>
</template>

<script>
// import account from './main/Account.vue';
// import goodslist from './main/GoodsList.vue'

// export default {
//     name : 'app',
//     components:{
//         account:account,
//         goodslist:goodslist
//     }
// }
</script>

<style>
h1 {
  color: gray;
  font-family: Arial, Helvetica, sans-serif;
}
</style>

