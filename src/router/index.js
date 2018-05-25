import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/view/indexPage'
import Page404 from '@/view/page404'
import devPage from '@/components/devPage'
import createUser from '@/components/createUser'
import getUserInfo from '@/components/getUserInfo'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'indexPage',
      component: IndexPage
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
    },
    {
      path:'*',
      component:Page404
    }
  ]
})
