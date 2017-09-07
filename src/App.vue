<template>
  <div id="app">
    <h1 class="page-title">易效率</h1>
    <el-menu  class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1"><a href="#/">首页</a></el-menu-item>
      <el-menu-item index="2"><a href="#/todo">tOdO</a></el-menu-item>
      <el-menu-item index="3"><a href="#/time">番茄钟</a></el-menu-item>
    </el-menu>

    <router-view></router-view>
  </div>
</template>

<script>
  import ElementUI from 'element-ui'
  import 'element-ui/lib/theme-default/index.css'
  import Vue from 'vue'
  Vue.use(ElementUI)

export default {
    name: 'app'
}
</script>

<style scoped>
h1{
  text-align: center;
}
  a{
    text-decoration: none;
  }
</style>
