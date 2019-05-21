import axios from 'axios';
import store from '../store/store';

//userService
export const userService = {
  login,
};

export function login(username, password) {
  $.ajax({
    //context: this,
    type: "POST",
    data: {
      email: username,
      password: password
    },
    url: "http://localhost:8000/api/login",
    success: function(result) {
      console.log(result)
      if(result.token!=null){
        localStorage.setItem('token', result.token)

        store.dispatch('logea', {
          status: true,
          res: 'logeado'
        })
      }else{
        store.dispatch('logea', {
          status: false,
          res: result.res
        })
      }
    }
  })
}
