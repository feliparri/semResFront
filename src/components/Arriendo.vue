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
              <button v-if="!estadoLogin" class="btn btn-secondary arriendo" @click="isCardModalActive = true"  href="#" role="button" aria-expanded="false" aria-controls="calendario">RESERVAR</button>

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
      <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
        <form action="" v-on:submit.prevent>
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Login</p>
                    </header>
                    <section class="modal-card-body">
                        <b-field label="Email">
                            <b-input
                                type="email"
                                ref="inputEmail"
                                :value="formProps.email"
                                placeholder="Your email"
                                required>
                            </b-input>
                        </b-field>

                        <b-field label="Password">
                            <b-input
                                type="password"
                                ref="inputPassword"
                                :value="formProps.password"
                                password-reveal
                                placeholder="Your password"
                                required>
                            </b-input>
                        </b-field>
                        <p>{{ errorMessage }}</p>
                        <!--<b-checkbox>Remember me</b-checkbox>-->
                    </section>
                    <footer class="modal-card-foot">
                        <button class="button" type="button" @click="isCardModalActive = isCardModalActive">Close</button>
                        <button class="button is-primary" @click="logea" >Login</button>
                    </footer>
                </div>
            </form>
      </b-modal>
  </div>
</template>
<script>
//####TENIA QUE IMPORTAR LA KGA DE STORE!!!!!
import store from '../store/store';
import { userService } from '../auth/auth';
import Buefy from 'buefy'



export default {
    name: 'Arriendo',
    data() {
        return {
          isCardModalActive: false,
          formProps: {
              email: null,
              password: null,
          },
          errMessage: store.state.errMessage
        }
    },

    mounted() {
      let token = localStorage.getItem('token')
      console.log(token!=null)
      if(token){
        store.dispatch('logea', {
          status: true,
          res: 'logeado'
        })
      }
    },
    computed: {
      estadoLogin () {
        if(store.state.logedIn ){
          this.isCardModalActive = false
          return store.state.logedIn
        }
      },
      errorMessage () { return store.state.errMessage }
    },
    methods: {
      check(){
        alert('asdasd')
      },

      logea(){
        let email = this.$refs.inputEmail.$refs.input.value
        let password = this.$refs.inputPassword.$refs.input.value
        userService.login(email, password)
        let res = localStorage.getItem('token')
        console.log(res)
        if(res!=null){

        }

      },
      reservar(cancha){
        console.log('reservar')
      }
    }
}
</script>
