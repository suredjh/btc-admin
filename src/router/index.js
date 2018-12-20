import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home';
import Detail from '@/pages/detail';
import Test from '@/pages/test';

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'detail',
      path: '/detail/:id',
      component: Detail
    },
    {
      name: 'test',
      path: '/test',
      component: Test
    }
  ]
})
