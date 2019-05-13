import axios from 'axios'

export const userService = {
  login,
};

export function login(username, password) {
  $.ajax({
    //context: this,
    type: "GET",
    data: {
      email: username,
      password: password
    },
    url: "http://localhost:8000/login",
    success: function(result) {
      console.log(result)
    }
  })
}
