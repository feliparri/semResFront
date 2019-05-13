<template>
    <div v-show="mostrarCal" class="container container-calendar">
        <div class="row row-calendar" id="calendario">

            <div class="col-md-4 container-cal">
                <div style="position:relative;float-left">
                        <div class="calendario"></div>
                </div>
            </div>
            <div class="col-md-4">
                <div style="position:relative;float-right">
                    <div class=" ui-widget-header ui-header-tabla-dispo">Bloques Disponibles</div>
                    <ul class="list-group list-group-flush btn-horarios timeline">
                        <li class="list-group-item btn btn-secondary list-dispo"><span class="text-reserva-ahora">Reservar ahora 9:00 - 10:00</span></li>
                        <li class="list-group-item btn btn-secondary list-dispo"><span class="text-reserva-ahora">Reservar ahora 10:00 - 11:00</span></li>
                        <li class="list-group-item btn btn-secondary list-dispo"><span class="text-reserva-ahora">Reservar ahora 11:00 - 12:00</span></li>
                        <li class="list-group-item btn btn-secondary list-dispo"><span class="text-reserva-ahora">Reservar ahora 12:00 - 13:00</span></li>
                        <li class="list-group-item btn btn-secondary list-dispo"><span class="text-reserva-ahora">Reservar ahora 15:00 - 16:00</span></li>
                    </ul>
                </div>
            </div>
            <div class="col-md-4">
                <div style="position:relative;float-right">
                    <div class=" ui-widget-header ui-header-tabla-dispo">Bloques Disponibles</div>
                    <ul class="list-group list-group-flush btn-horarios timeline">
                        <li class="list-group-item btn btn-secondary list-dispo"><span class="text-reserva-ahora">Reservar ahora 16:00 - 17:00</span></li>
                        <li class="list-group-item btn btn-secondary list-dispo"><span class="text-reserva-ahora">Reservar ahora 17:00 - 18:00</span></li>
                        <li class="list-group-item btn btn-secondary list-dispo"><span class="text-reserva-ahora">Reservar ahora 18:00 - 19:00</span></li>
                        <li class="list-group-item btn btn-secondary list-dispo"><span class="text-reserva-ahora">Reservar ahora 19:00 - 20:00</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import store from '../store/store';
    export default {
        name: 'Calendario',
        data() {
          return {

          }
        },
        computed: {
          mostrarCal(){
            return store.state.logedIn
          }
        },
    }
   $(document).ready(function(){
        //resizeCalendarContainer();
        $(window).on('resize',function(){
            //resizeCalendarContainer();
        })
        $('.arriendo').on('click',function(){
            //resizeCalendarContainer();
        })

        $('.container-cal').on('hidden.bs.collapse', function () {
            //resizeCalendarContainer();
        })
   });



   function resizeCalendarContainer(){
        var altura = $('.btn-horarios').height();
        console.log(altura);
        var altura = parseInt((altura))+200;
        $('.container-cal').attr('style','min-height:'+altura+'px;');
   }
</script>
