import Vue from 'vue'
import Router from 'vue-router'
import indexPage from '@/components/indexPage'
import devPage from '@/components/devPage'
import createUser from '@/components/createUser'
import getUserInfo from '@/components/getUserInfo'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'indexPage',
      component: indexPage
    }, {
      path: '/dev',
      name: 'devPage',
      component: devPage
    },
    {
      path: '/createUser',
      name: 'createUser',
      component: createUser
    },
    {
      path: '/getUserInfo',
      name: 'getUserInfo',
      component: getUserInfo
    }
  ]
})
