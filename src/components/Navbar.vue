<template>
    <div class="topnav">
        <a href="#" class="navbar-brand">
            <img class="logo-semillero" src="/src/assets/img/logo_semillero.png" alt="">
        </a>

        <div class="topnav-right">
            <a class="active" href="#home">INICIO</a>
            <a href="#news">RESERVAS</a>
            <a href="#news">EVENTOS</a>
            <a href="#news">SOPORTE</a> &nbsp
              <a v-if="logedIn" href="#news">BIENVENIDO</a>
              <a v-if="!logedIn" href="#news">INGRESAR</a>
            <div class="avatar avatar-sm pull-right">
                <img class="avatar avatar-img-sm" alt="" src="http://lorempixel.com/100/100/people/9/">
            </div>
        </div>
    </div>
</template>
<script>
import store from '../store/store';
export default {
    name: 'Navbar',
    computed: {
      logedIn(){
        return store.state.logedIn
      }
    },
}
</script>
