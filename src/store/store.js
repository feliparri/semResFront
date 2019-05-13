import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logedIn: false // The TV inventory
  },

  getters: {
    // Here we will create a getter
  },

  mutations: {
    logea(state, estado){
      return state.logedIn = estado
    }
  },

  actions: {
    logea(state) {

      //if(context.state.logedIn == false) {
        // If we enough TVs, ask Jenny to remove it
        state.commit('logea', true)
      //}
    }
  }
});
