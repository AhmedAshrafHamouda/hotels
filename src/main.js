import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from "./store"
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'


Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount('#app')
