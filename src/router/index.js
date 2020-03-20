import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Login from '@/components/Login'

import Wrapper from '@/components/Wrapper'

Vue.use(Router)

export default new Router({
  // routes: [
  //   {
  //     path: '/',
  //     name: 'HelloWorld',
  //     component: HelloWorld
  //   },

  //   {
  //     path: '/login/:name',
  //     name: 'nameLogin',
  //     component: Login
  //   },

  //   {
  //     path: '/login',
  //     name: 'idLogin',
  //     component: Login
  //   },

  //   {
  //     path: '/login',
  //     name: 'accountLogin',
  //     component: Login
  //   },
  // ]
  routes: [
    {
      path: '/',
      component: Wrapper,
    },
    // {
    //   path: '/login',
    //   name: 'accountLogin',
    //   component: Login
    // },
    // {
    //   path: '/body',
    //   component: Body
    // }
  ]
})
