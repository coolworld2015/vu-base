import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Login from '@/components/common/login';
import Test2 from '@/components/common/test2';

import Payments from '@/components/payments/payments';
import PaymentEdit from '@/components/payments/edit';

import Users from '@/components/users/users';
import UserEdit from '@/components/users/edit';
import UserAdd from '@/components/users/add';

import Phones from '@/components/phones/phones';
import PhoneEdit from '@/components/phones/edit';

import Audits from '@/components/audits/audit';
import AuditsEdit from '@/components/audits/edit';

export default new Router({
  routes: [
    { path: '/', component: Login },
    { path: '/login', component: Login },
    { path: '/test2', component: Test2 },
	
    { path: '/payments', component: Payments },
	{ path: '/payment-edit', component: PaymentEdit },
	
    { path: '/users', component: Users },
    { path: '/user-edit', component: UserEdit },
    { path: '/user-add', component: UserAdd },
	
	{ path: '/phones', component: Phones },
	{ path: '/phone-edit', component: PhoneEdit },
	
	{ path: '/audits', component: Audits },
	{ path: '/audit-edit', component: AuditsEdit }
  ]
})
