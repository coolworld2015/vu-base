import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Login from '@/components/common/login'

import Phones from '@/components/phones/phones'
import PhoneEdit from '@/components/phones/edit'

import Users from '@/components/users/users'
import UserEdit from '@/components/users/edit'
import UserAdd from '@/components/users/add'

import Audits from '@/components/audits/audits'

export default new Router({
  routes: [
    {path: '/', component: Login},
    {path: '*', component: Login},
    {path: '/login', component: Login},

    {path: '/phones', component: Phones},
    {path: '/phone-edit', component: PhoneEdit},

    {path: '/users', component: Users},
    {path: '/user-edit', component: UserEdit},
    {path: '/user-add', component: UserAdd},

    {path: '/audits', component: Audits}
  ]
})
