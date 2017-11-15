import Vue from 'vue'
import App from './main.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: App }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})
/* eslint-disable no-unused-vars  */
const app = new Vue({
  router,
  template: '<router-view></router-view>'
}).$mount('#app')
