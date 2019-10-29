import Vue from 'vue'
import Router from 'vue-router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('../common/Home/Home.vue'),
      meta: { title: '默认' },
      children: [
        {
          path: '/orderList',
          component: () => import('../pages/OrderList/OrderList.vue'),
          meta: { title: '订单列表' }
        },
        {
          path: '/auth',
          component: () => import('../pages/AuthMGT/AuthMGT.vue'),
          meta: { title: '权限管理' }
        },
        {
          path: '/userList',
          component: () => import('../pages/userMGT/UserList.vue'),
          meta: { title: '用户列表' }
        },
        {
          path: '/userFeedback',
          component: () => import('../pages/userMGT/UserFeedback.vue'),
          meta: { title: '用户反馈' }
        }
      ]
    }
  ]
})


