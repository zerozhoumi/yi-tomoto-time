import Vue from 'vue'
import Router from 'vue-router'
// 引用页面模板->供路由使用
import index from '../page/pageIndex.vue'
import time from '../page/pageTime.vue'
import todo from '../page/pageTodo.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  },
  {
    path: '/time',
    name: 'time',
    component: time
  },
  {
    path: '/todo',
    name: 'todo',
    component: todo
  }]
})
