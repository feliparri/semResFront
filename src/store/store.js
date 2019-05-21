import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logedIn: false ,// estado de logeo para eventos dentro de la app
    errMessage: '' // mensaje de error de logeo
  },

  getters: {
    // Here we will create a getter
  },

  mutations: {
    logea(state, payload){
      this.state.logedIn = payload.status
      this.state.errMessage = payload.res
    }
  },

  actions: {
    logea(state, payload) {
      state.commit('logea', payload)
    }
  }
});
