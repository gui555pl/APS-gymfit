import axios from "axios";

const axiosClientTreino = axios.create({
  baseURL : `http:localhost:3333`
});
const axiosClientConta = axios.create({
  baseURL : `http:localhost:3334`
});

export default {
  install: function(Vue) {
    Object.defineProperty(Vue.prototype, '$axiosTreino', { value: axiosClientTreino });
    Object.defineProperty(Vue.prototype, '$axiosConta', { value: axiosClientConta });
  }
}
