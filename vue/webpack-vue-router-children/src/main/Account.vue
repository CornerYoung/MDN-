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

<style lang="scss">
/* 普通的 style 标签只支持 普通的 样式，如果想要启用 scss 或 less ，需要为 style 元素，设置 lang 属性 */
// 只要style 标签， 是在 .vue 组件中定义的，那么，推荐都为 style 开启 scoped 属性
div{
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: cyan;
  a{
    text-decoration: none;
  }
}
</style>

