import Vue from 'vue'
import AppRGV from './views'
import router from './views'
import './assets/tailwind.css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(AppRGV),
}).$mount('#apprgv')
