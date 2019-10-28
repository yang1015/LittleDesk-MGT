// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


import '@styles/reset.css'

Vue.config.productionTip = false



router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | vue-manage-system`;

    // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
    next()

});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
