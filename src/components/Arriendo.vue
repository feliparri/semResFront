<template>
  <div>
      <div class="card-columns card-position">
          <div class="card"><img class="card-img-top" src="/src/assets/img/cards/c_futbol.png" alt="Card image" />
              <div class="card-body"></div>
              <h6 class="text-center card-title card-text-color">CANCHA DE FUTBOL</h6>
              <h4 class="text-center card-title card-text-color">$10.000</h4>
              <h6 class="text-center card-title card-text-detail-color">POR HORA</h6>
              <p class="card-text card-text-detail-color">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.</p>
              <button v-if="estadoLogin" class="btn btn-primary arriendo" v-on:click="reservar(1)" href="#" role="button" aria-expanded="false" aria-controls="calendario">RESERVAR</button>
              <button v-if="!estadoLogin" class="btn btn-secondary arriendo" v-on:click="logea" href="#" role="button" aria-expanded="false" aria-controls="calendario">RESERVAR</button>
          </div>
          <div class="card"><img class="card-img-top" src="/src/assets/img/cards/c_tenis.png" alt="Card image" />
              <div class="card-body"></div>
              <h6 class="text-center card-title card-text-color">CANCHA DE TENIS</h6>
              <h4 class="text-center card-title card-text-color">$10.000</h4>
              <h6 class="text-center card-title card-text-detail-color">POR HORA</h6>
              <p class="card-text card-text-detail-color">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.</p>
              <button v-if="estadoLogin" class="btn btn-primary arriendo" v-on:click="reservar(2)" href="#" role="button" aria-expanded="false" aria-controls="calendario">RESERVAR</button>
              <button v-if="!estadoLogin" class="btn btn-secondary arriendo" v-on:click="logea" href="#" role="button" aria-expanded="false" aria-controls="calendario">RESERVAR</button>
          </div>
          <div class="card"><img class="card-img-top" src="/src/assets/img/cards/c_eventos.png" alt="Card image" />
              <div class="card-body"></div>
              <h6 class="text-center card-title card-text-color">ESPACIOS PARA EVENTOS</h6>
              <h4 class="text-center card-title card-text-color">$10.000</h4>
              <h6 class="text-center card-title card-text-detail-color">POR HORA</h6>
              <p class="card-text card-text-detail-color">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.</p>
              <button v-if="estadoLogin" class="btn btn-primary arriendo" v-on:click="reservar(3)" href="#" role="button" aria-expanded="false" aria-controls="calendario">RESERVAR</button>
              <button v-if="!estadoLogin" class="btn btn-secondary arriendo" v-on:click="logea" href="#" role="button" aria-expanded="false" aria-controls="calendario">RESERVAR</button>
          </div>
      </div>
  </div>
</template>
<script>
//####TENIA QUE IMPORTAR LA KGA DE STORE!!!!!
import store from '../store/store';
import { userService } from '../auth/auth';

export default {

    name: 'Arriendo',
    data() {
        return {
            mostrar: this.estadoLogin,
            user: [
              {
                usuario:'felipe',
                password:'123',
              }
            ]
        }
    },
    mounted() {
      if(this.mostrar){

      }
    },
    computed: {
      estadoLogin () {
        return store.state.logedIn
      }
    },
    methods: {
      logea(){
        console.log(userService.login('fhuerta@gmail.com','123456'))
      },
      reservar(cancha){
        console.log('reservar')
      }
    }
}
</script>
