import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'

import './assets/styles/global.styl'

import creatRouter from './router/index'
import creatStore from './store/index'


Vue.use(VueRouter)
Vue.use(Vuex)

const router = creatRouter()
const store = creatStore()

store.registerModule('c', {
  state: {
    text: 'ccccc'
  }
})

// store.watch((state) => state.count + 1, (newCount) => {
//   console.log('new count watched:', newCount)
// })

// store.subscribe((mutation,state)=>{
//   console.log(mutation)
//   console.log(state)
// })

store.subscribeAction((action, state) => {
  console.log(action)
  console.log(state)
})


router.beforeEach((to, form, next) => {
  console.log('beforeEach')
  next()
})

router.beforeResolve((to, form, next) => {
  console.log('beforeResolve')
  next();
})

router.afterEach((to, form) => {
  console.log('afterEach')
})


const root = document.createElement('div')
document.body.appendChild(root)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount(root)
