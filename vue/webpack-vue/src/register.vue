<template>
    <div>
        <h2>这是register组件  {{date}}</h2>
    </div>
</template>

<script>
export default {
    name:'register',
    data(){
        return {
            date : Date.now()
        }
    }
}
</script>

<style>
h2{
    font-size: 30px;
    color: aqua;
    font-family: 'Times New Roman', Times, serif;
}
</style>
