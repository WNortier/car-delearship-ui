import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inventory: [], //[{make:"Volkswagen", model:"Jetta", color:"Blue", price:147285, reg_number: "CY 73015"}]
    filteredInventory: [],
    colors: []
  },
  getters: {
    inventory: state => {
      return state.inventory
    }
  },
  mutations: {
    SET_INVENTORY(state, inventory) {
      state.inventory = inventory
    },
    GET_FILTER(state, filteredInventory) {
      state.filteredInventory = filteredInventory
      console.log(state.filteredInventory)
    },
    SET_COLORS(state, colors) {
      state.colors = colors
    }

  },
  actions: {
    loadInventory({commit}) {
      axios.get("https://api-tutor.herokuapp.com/v1/cars")
        .then(r => r.data)
        .then(inventory => {
          commit('SET_INVENTORY', inventory)
      })
    },
    getColors({commit}, color) {
      axios.get("https://api-tutor.herokuapp.com/v1/cars/color/" + color)
        .then(r => r.data)
        .then(filteredInventory => {
          commit('GET_FILTER', filteredInventory)
        })
    },
    loadColors({commit}) {
      axios.get("https://api-tutor.herokuapp.com/v1/colors")
      .then(r => r.data)
      .then(colors => {
        commit('SET_COLORS', colors)
      })
    }
    // searchPool: (context, payload) => {
    //   context.commit('searchPool', payload)
    // }
  },
  modules: {

  }
})