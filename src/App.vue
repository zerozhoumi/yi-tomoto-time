<template>
  <div id="app">

    <Menu mode="horizontal" theme="primary" active-name="1">
      <div class="layout-nav">
        <MenuItem name="1"  >
          <a href="#/">
          <Icon type="ios-navigate"></Icon>
          首页</a>
        </MenuItem>
        <MenuItem name="2">
          <a href="#/todo">
          <Icon type="ios-keypad"></Icon>
          tOdO</a>
        </MenuItem>
        <MenuItem name="3">
          <a href="#/time">
            <Icon type="ios-analytics"></Icon>
          番茄钟</a>
        </MenuItem>
      </div>
    </Menu>
    <h1 class="page-title">易效率</h1>

    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style scoped>

h1{
  text-align: center;
}
  a{
    color: #fff;
    text-decoration: none;
  }
</style>
