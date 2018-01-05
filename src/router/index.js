import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

import Login from '@/components/common/login';
import Test2 from '@/components/common/test2';
import Test3 from '@/components/common/test3';
import Test4 from '@/components/common/test4';
import Test5 from '@/components/common/test5';

import Users from '@/components/users/users';
import UserEdit from '@/components/users/edit';
import UserAdd from '@/components/users/add';

import Phones from '@/components/phones/phones';
import PhoneEdit from '@/components/phones/edit';

import Audits from '@/components/audits/audits';
import AuditsEdit from '@/components/audits/edit';

export default new Router({
  routes: [
    { path: '/', component: Login },
	{ path: '*', component: Login },
    { path: '/login', component: Login },
    { path: '/test2', component: Test2 },
    { path: '/test3', component: Test3 },
    { path: '/test4', component: Test4 },
    { path: '/test5', component: Test5 },
	
    { path: '/users', component: Users },
    { path: '/user-edit', component: UserEdit },
    { path: '/user-add', component: UserAdd },
	
	{ path: '/phones', component: Phones },
	{ path: '/phone-edit', component: PhoneEdit },
	
	{ path: '/audits', component: Audits },
	{ path: '/audit-edit', component: AuditsEdit }
  ]
})
