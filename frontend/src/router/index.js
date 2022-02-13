import { createRouter, createWebHistory } from 'vue-router' 

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    // children: [
      
    // ]
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutUs.vue')
  },

  {
    path: '/partners',
    name: 'Partners',
    component: () => import('../views/Partnercompany.vue')
  }, 

  {
    path: '/providers',
    name: 'Providers',
    component: () => import('../views/Providers.vue')
  },
  
{
  path: '/LoginFormDef',
  name: 'LoginFormDef',
  component: () => import('../components/Nonuserspecific/LoginFormDefault.vue')
},
{
  path: '/LogInCF',
  name: 'LogInCF',
  component: () => import('../components/Nonuserspecific/Logincompanyform.vue')
},
{
  path: '/LoginModals',
  name: 'LoginModals',
  component: () => import('../components/Nonuserspecific/LoginModals.vue'),
}, 
{
  path: '/LIFSeedP',
  name: 'LIFSeedP',
  component: () => import('../components/Nonuserspecific/LogInFormSeed.vue')
},
{
  path: '/LogInUN',
  name: 'LogInUN',
  component: () => import('../components/Nonuserspecific/LoginUNform.vue')
},
{
  path: '/loginsignup',
  name: 'loginsignup',
  component: () => import('../components/Nonuserspecific/login.vue')
},
 

{
  path: '/SignUpUserType',
  name: 'SignUpUserType',
  component: () => import('../components/Nonuserspecific/signup3.vue')
},

{
  path: '/chats',
  name: 'chats',
  component: () => import('../components/Userspecific/chat.vue')
},

{
  path: '/SignupmodalsCompany',
  name: 'SignupmodalsCompany',
  component: () => import('../components/Nonuserspecific/SignUpCompanyform.vue')
},  {
  path: '/SUMModals',
  name: 'SUMModalsSUMModals',
  component: () => import('../components/Nonuserspecific/SignUpMemberModal.vue')
}, {
  path: '/SUPmodal',
  name: 'SUPmodal',
  component: () => import('../components/Nonuserspecific/Signupprovidersmodal.vue')
},  
{
  path: '/TCC',
  name: 'TCC',
  component: () => import('../components/Nonuserspecific/termscompany.vue')
},  {
  path: '/TCP',
  name: 'TCP',
  component: () => import('../components/Nonuserspecific/termspatient.vue')
}, {
  path: '/TCPrac',
  name: 'TCPrac',
  component: () => import('../components/Nonuserspecific/TermsPrac.vue')
}, 
{
  path: '/SUcompmod',
  name: 'SUcompmod',
  component: () => import('../components/Nonuserspecific/SignUpCompanyModal.vue')
},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
