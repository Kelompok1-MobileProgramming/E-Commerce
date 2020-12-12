import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Login from '@/components/login'

import User from '@/components/user'
import UserAdd from '@/components/useradd'
import UserDetail from '@/components/userdetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/user-add',
      name: 'UserAdd',
      component: UserAdd
    },
    {
      path: '/user-detail',
      name: 'UserDetail',
      component: UserDetail
    }
  ]
})
