import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);

import Router from 'vue-router'

import Test2 from '@/components/Test2'
import Payments from '@/components/Payments'

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'Payments', component: Payments },
    { path: '/payments', component: Payments },
    { path: '/test2', name: 'Cash2Card', component: Test2 }
  ]
})
