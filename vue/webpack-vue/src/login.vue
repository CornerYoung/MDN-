<template>
    <div>
        <h1>这是登录组件，使用 .vue 文件定义出来的 --- {{msg}}</h1>
    </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      msg: "login 组件"
    };
  }
};
</script>

<style>
h1{
    color: #555555;
    font-size: 50px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
