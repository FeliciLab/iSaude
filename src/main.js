import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './sass/main.scss'
import './plugins/vue-bootstrap'
import { initFirebase, requestPushPermission } from './push-notification'
Vue.config.productionTip = false
initFirebase()
requestPushPermission()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
