<template>
  <div id="app">

    <!-- <h3>{{ this.$store.state.estadoLogin }}</h3>
    <h3>mostrar -> {{ this.$store.state.estadoLogin }}</h3>
    <button @click="login">login</button>
    <button @click="logout">logout</button> -->
    <navbar></navbar>
    <slide></slide>
    <arriendo></arriendo>
    <calendario></calendario>
    <informacion></informacion>
  </div>
</template>

<script>

//import Vue from 'vue'
//import Vuex from 'vuex'

//mapGetters
//import { mapGetters } from 'vuex'
//import { mapMutations } from 'vuex'


//COMPONENTES
import Navbar from './components/Navbar'
import Slide from './components/Slide'
import Arriendo from './components/Arriendo'
import Calendario from './components/Calendario'
import Informacion from './components/Informacion'

//use vuex
//Vue.use(Vuex);

export default {
  name: 'app',
  data () {
    return {
      loader: false,
      email: '',
      password: '',
      //mostrar: this.$store.state.estadoLogin
    }
  },
  components:{
    Navbar,
    Slide,
    Arriendo,
    Calendario,
    Informacion,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
