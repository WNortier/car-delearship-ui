import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    inventory: [], //[{make:"Volkswagen", model:"Jetta", color:"Blue", price:147285, reg_number: "CY 73015"}]
    filteredColors: [],
    filteredMakes: [],
    colors: [],
    makes: [],
    range: [],
    filterCount: 0
  },
  getters: {
    inventory: state => {
      return state.inventory
    },
    filterCount: state => {
      return state.filterCount
    }
  },
  mutations: {
    GET_FILTERCOUNT(state){
      state.filterCount = state.inventory.length
      console.log(state.filterCount)
    },
    GET_INVENTORY(state, inventory) {
      state.inventory = inventory
      console.log(state.inventory)
      console.log(state.inventory.length)
      // state.filterCount = inventory.length
    },
    GET_COLORS(state, filteredColors) {
      state.inventory = filteredColors
      // state.filterCount = filteredColors.length
    },
    GET_MAKES(state, filteredMakes){
      state.inventory = filteredMakes
      console.log(state.inventory)
      console.log(state.inventory.length)
      // state.filterCount = filteredMakes.length
      // console.log(state.range.length)
      // console.log(state.range)
    },
    SET_COLORS(state, colors) {
      var z = colors.pop()
      colors.unshift("Select Color")
      state.colors = colors
    },
    SET_MAKES(state, makes) {
      makes.unshift("Select Make")
      state.makes = makes
    },
    APPLY_RANGE(state, type) {
      console.log(type)
        var keys = Object.keys(type);
        var filtered = keys.filter(function (key) {
          return type[key]
        });
        switch(filtered) {
          case filtered.includes("colors"):
            state.range = state.filteredColors.slice(0, Number(type.amount))
            break;
          case filtered.includes("makes"):
            state.range = state.filteredMakes.slice(0, Number(type.amount))
            break;
          default:
            state.range = state.inventory.slice(0, Number(type.amount))
        }
        console.log(state.range)
    }
  },
  actions: {
    getInventory({commit}) {
      axios.get("https://api-tutor.herokuapp.com/v1/cars")
        .then(r => r.data)
        .then(inventory => {
          commit('GET_INVENTORY', inventory)
      })
    },
    getColors({commit}, color) {
      axios.get("https://api-tutor.herokuapp.com/v1/cars/color/" + color)
        .then(r => r.data)
        .then(filteredColors => {
          commit('GET_COLORS', filteredColors)
        })
    },
    getMakes({commit}, make) {
      axios.get("https://api-tutor.herokuapp.com/v1/cars/make/" + make)
        .then(r => r.data)
        .then(filteredMakes => {
          commit('GET_MAKES', filteredMakes)
        })
    },
    getFilterCount({commit}){
      commit('GET_FILTERCOUNT')
    },
    setColors({commit}) {
      axios.get("https://api-tutor.herokuapp.com/v1/colors")
      .then(r => r.data)
      .then(colors => {
        commit('SET_COLORS', colors)
      })
    },
    setMakes({commit}) {
      axios.get("https://api-tutor.herokuapp.com/v1/makes")
      .then(r => r.data)
      .then(makes => {
        commit('SET_MAKES', makes)
      })
    },
    getRangeOnCurrentFilter({commit}, type) {
      commit('APPLY_RANGE', type)//{colors: colorFilter, makes: makesFilter, inventory: totalInventory, amount: value})
    }
  },
  modules: {

  }
})