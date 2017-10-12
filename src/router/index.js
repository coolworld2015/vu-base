import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Test from '@/components/Test'
//import Payments from '@/components/Payments1'
 

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Test', component: Test },
    { path: '/payments', name: 'Payments', component: Test },
    { path: '/test', name: 'Hello', component: Hello }
  ]
})
