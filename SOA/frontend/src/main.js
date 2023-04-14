import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from './plugins/axios';
Vue.use(axios);


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App),
  created() {
    console.log(this.$axiosTreino ? '$axiosTreino plugin works' : '$axiosTreino plugin does not work');
    console.log(this.$axiosConta ? '$axiosConta plugin works' : '$axiosConta plugin does not work');
  }
}).$mount('#app')
