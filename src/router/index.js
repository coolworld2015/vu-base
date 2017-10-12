import Vue from 'vue'
import Router from 'vue-router'

import Test from '@/components/Test'
import Payments from '@/components/Payments'

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'Test', component: Test },
    { path: '/payments', name: 'Payments', component: Payments },
    { path: '/test2', name: 'Hello', component: Test }
  ]
})
