import Vue from 'vue';
Vue.config.productionTip = false;

import VueResource from 'vue-resource';
Vue.use(VueResource);

import App from './App';
import router from './router';

import './assets/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/font-awesome-4.7.0/css/font-awesome.min.css';

const appConfig = new Vue();
appConfig.route ='Payments',
appConfig.phones = { items: [] };
appConfig.audits = { items: [] };
appConfig.users = { items: [] };
appConfig.payments = { items: [] };
appConfig.notifications = {items: []}
export default appConfig;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
