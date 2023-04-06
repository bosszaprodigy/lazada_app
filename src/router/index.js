import Vue from 'vue'
import Router from 'vue-router'
// import test from '../views/test'
import mainpage from '../views/mainpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: mainpage
    }
    // {
    //   path: '/',
    //   name: 'test',
    //   component: test
    // }
  ]
})
