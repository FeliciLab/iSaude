import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import './sass/main.scss'
import './plugins/vue-bootstrap'
<<<<<<< HEAD
// import { initFirebase } from './push-notification'
Vue.config.productionTip = false
=======
// import { initFirebase, requestPushPermission } from './push-notification'
Vue.config.productionTip = false
// requestPushPermission()
>>>>>>> a6635381479dc1a018bfb4570f88e8afa3992a5f
// initFirebase()
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
