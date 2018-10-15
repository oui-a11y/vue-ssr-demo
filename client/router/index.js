import Router from 'vue-router'

import routes from './routes'


export default () => {
  return new Router({
    routes,
    mode: 'history',
    // base:'/base/',
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-link',
    scrollBehavior(to, form, savedPostion) {
      if (savedPostion) {
        return savedPostion
      } else {
        return {x: 0, y: 0}
      }
    },
    // fallback: true
    // parseQuery (query) {

    // },
    // stringifyQuery (obj) {

    // }
  })
}
