<template>
    <div>
        <h2>这是Account组件</h2>
        <router-link to="/account/login">登录</router-link>
        <router-link to="/account/register">注册</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "account"
};
</script>

<style>
h2 {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: cyan;
}
</style>

