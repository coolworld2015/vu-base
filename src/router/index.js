import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Test2 from '@/components/test2';
import Payments from '@/components/payments';

import Users from '@/components/users/users';
import UserEdit from '@/components/users/edit';
import UserAdd from '@/components/users/add';

import Phones from '@/components/phones/phones';
import PhoneEdit from '@/components/phones/edit';

import Audit from '@/components/audit/audit';
import AuditEdit from '@/components/audit/edit';

export default new Router({
  routes: [
    { path: '/', component: Users },
    { path: '/test2', component: Test2 },
	
    { path: '/payments', component: Payments },
	
    { path: '/users', component: Users },
    { path: '/user-edit', component: UserEdit },
    { path: '/user-add', component: UserAdd },
	
	{ path: '/phones', component: Phones },
	{ path: '/phone-edit', component: PhoneEdit },
	
	{ path: '/audits', component: Audit },
	{ path: '/audit-edit', component: AuditEdit }
  ]
})
