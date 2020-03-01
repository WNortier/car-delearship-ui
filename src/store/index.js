import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    carPool: [],
    partners: ['aaaaaaa','bbbbbbb','c']
  },
  getters: {
    partners: state => {
      return state.carPool
    }
  },
  mutations: {
    searchPool: (state, payload) => {
      var result = state.partners.filter((e) => {
        return e.length < 2
      })
      console.log(result)
      return result
    }
  },
  actions: {
    searchPool: (context, payload) => {
      context.commit('searchPool', payload)
    }
  },
  modules: {}
})