import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css';
import vuetify from './plugins/vuetify';
import axios from "axios";
import "firebase/performance";
import './registerServiceWorker'


Vue.prototype.$axios = axios;
Vue.config.productionTip = false
Vue.component("countdown", require("./components/time.vue").default);

Vue.component("confirm", require("./components/confirm.vue").default);
Vue.component("price", require("./components/price.vue").default);
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
