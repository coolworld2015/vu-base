import Vue from 'vue'
import App from './App'
import router from './router'

require('./assets/css/bootstrap.css')
// require('./assets/css/font-awesome.min.css')
require('./assets/css/style.css')

Vue.config.productionTip = false

const appConfig = new Vue();
appConfig.route = 'Payments';
export default appConfig;

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
