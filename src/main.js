import Vue from 'vue';
Vue.config.productionTip = false;

import VueResource from 'vue-resource';
Vue.use(VueResource);

import App from './App';
import router from './router';

require('./assets/css/bootstrap.css')
// require('./assets/css/font-awesome.min.css')
require('./assets/css/style.css')


const appConfig = new Vue();
appConfig.route = 'Payments';
export default appConfig;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
