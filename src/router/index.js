import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Test2 from '@/components/Test2';
import Payments from '@/components/Payments';
import Users from '@/components/users/Users';
import UserEdit from '@/components/users/edit';

export default new Router({
  routes: [
    { path: '/', name: 'Payments', component: Payments },
    { path: '/test2', name: 'Cash2Card', component: Test2 },
    { path: '/payments', component: Payments },
    { path: '/users', component: Users },
    { path: '/user-edit', component: UserEdit },
  ]
})
