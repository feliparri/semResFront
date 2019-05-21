import Vue from 'vue'
import App from './App.vue'
import store from './store/store';
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

Vue.config.productionTip = false;

new Vue({
  //el: '#app',
  render: h => h(App),
  store,
}).$mount('#app');
