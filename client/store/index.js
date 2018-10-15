import Vuex from 'vuex'
import Vue from 'vue'

import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

Vue.use(Vuex)

const isDev = process.env.NODE_ENV === 'development'
export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    state: defaultState,
    mutations,
    getters,
    actions,
    modules: {
      a: {
        namespaced: true,
        state: {
          text: 1
        },
        mutations: {
          updataText(state, num) {
            console.log('a.state', state)
            state.text = num;
          }
        },
        getters: {
          textPlus(state, getters, rootState) {
            return state.text + rootState.b.text
          }
        },
        actions: {
          add({state, commit, rootState}) {
            commit('updateCount', {num: 56789}, {root: true})
          }
        }
      },
      b: {
        namespaced: true,
        state: {
          text: 'sadasds'
        },
        actions:{
          testAction({commit}){
            commit('a/updataText','test test',{ root: true })
          }
        }
      }
    }
  })

  if(module.hot){
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './getters/getters',
      './actions/actions'
    ],()=>{
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newActions = require('./actions/actions').default
      const newGetters = require('./getters/getters').default

      store.hotUpdate({
        state:newState,
        mutations:newMutations,
        actions:newActions,
        getters:newGetters
      })
    })
  }

  return store



}
// const store = new Vuex.Store({
//   state: {
//     num: 1
//   },
//   mutations: {
//     add(state, num) {
//       state.num = num;
//     }
//   }
// })
// export default store
