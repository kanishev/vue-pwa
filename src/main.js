import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

Vue.config.productionTip = false


console.log('mode 2', window.navigator.standalone)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
