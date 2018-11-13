import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import App from './app.vue'

import './assets/styles/global.styl'

import creatRouter from './router/index'
import creatStore from './store/index'
import Notification from './components/notification'
import Tabs from './components/tabs'
import Directive from './directive/longpress'
// import 'components/global.js'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(Meta)
Vue.use(Notification)
Vue.use(Tabs)
Vue.use(Directive)


export default () => {
  const router = creatRouter()
  const store = creatStore()
  const app = new Vue({
    router,
    store,
    render: (h) => h(App)
  })
  return {app, router, store}
}

