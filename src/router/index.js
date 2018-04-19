import Vue from 'vue'
import Router from 'vue-router'
import menuPage from '@/components/menuPage'
import createUser from '@/components/createUser'
import getUserInfo from '@/components/getUserInfo'


Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
export default new Router({
  routes: [{
      path: '/',
      name: 'menuPage',
      component: menuPage
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
