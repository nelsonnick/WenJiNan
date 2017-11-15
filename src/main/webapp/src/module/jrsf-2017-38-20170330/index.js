import Vue from 'vue'
import iView from 'iview'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import files from './files.vue'
import 'iview/dist/styles/iview.css'
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(iView)

const routes = [
  { path: '/files', component: files },
  { path: '/', redirect: '/files' }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

const store = new Vuex.Store({
  state: {
    keyword: '',
    pageCurrent: '1'
  },
  mutations: {
    save (state, page) {
      state.keyword = page.keyword
      state.pageCurrent = page.pageCurrent
    }
  }
})
/* eslint-disable no-unused-vars  */
const app = new Vue({
  router,
  store,
  template: '<router-view></router-view>'
}).$mount('#app')
