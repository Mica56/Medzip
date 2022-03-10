import { createRouter, createWebHistory } from 'vue-router' 
import MainView from '../views/Default.vue'
import ProviderView from '../views/ProviderView.vue'
import PatientView from '../views/PatientView.vue'

const routes = [
  {
    path: '/',
    components: {
      default: MainView ,
      provider: ProviderView,
      patient: PatientView,
    }
  },
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
  
// {
//   path: '/LoginFormDef',
//   name: 'LoginFormDef',
//   component: () => import('../components/Nonuserspecific/LoginFormDefault.vue')
// },
// {
//   path: '/LogInCF',
//   name: 'LogInCF',
//   component: () => import('../components/Nonuserspecific/Logincompanyform.vue')
// },
// {
//   path: '/LoginModals',
//   name: 'LoginModals',
//   component: () => import('../components/Nonuserspecific/LoginModals.vue'),
// }, 
// {
//   path: '/LIFSeedP',
//   name: 'LIFSeedP',
//   component: () => import('../components/Nonuserspecific/LogInFormSeed.vue')
// },
// {
//   path: '/LogInUN',
//   name: 'LogInUN',
//   component: () => import('../components/Nonuserspecific/LoginUNform.vue')
// },
// {
//   path: '/loginsignup',
//   name: 'loginsignup',
//   component: () => import('../components/Nonuserspecific/login.vue')
// },
 

// {
//   path: '/SignUpUserType',
//   name: 'SignUpUserType',
//   component: () => import('../components/Nonuserspecific/signup3.vue')
// },

// {
//   path: '/chats',
//   name: 'chats',
//   component: () => import('../components/Userspecific/chat.vue')
// },

// {
//   path: '/profile',
//   name: 'profile',
//   component: () => import('../components/Userspecific/profile.vue')
// },

// {
//   path: '/profileuser',
//   name: 'profileuser',
//   component: () => import('../components/Userspecific/profileuser.vue')
// },

// {
//   path: '/profilesummary',
//   name: 'profilesummar',
//   component: () => import('../components/Userspecific/profilesummary.vue')
// },

// {
//   path: '/doctorprofile',
//   name: 'doctorprofile',
//   component: () => import('../components/Userspecific/doctorprofile.vue')
// },


// {
//   path: '/profilesettings',
//   name: 'profilesettings',
//   component: () => import('../components/Userspecific/profilesetting.vue')
// },

// {
//   path: '/settings',
//   name: 'settings',
//   component: () => import('../components/Userspecific/settings.vue')
// },

// {
//   path: '/doctors',
//   name: 'doctors',
//   component: () => import('../components/Userspecific/doctors.vue')
// },

// {
//   path: '/Doctorrequest',
//   name: 'Doctorrequest',
//   component: () => import('../components/Userspecific/doctorrequest.vue')
// },

// {
//   path: '/Pharmacistrequest',
//   name: 'Pharmacistrequest',
//   component: () => import('../components/Userspecific/pharmacistrequest.vue')
// },

// {
//   path: '/pharmacistprofile',
//   name: 'pharmacistprofile',
//   component: () => import('../components/Userspecific/pharmacistprofile.vue')
// },

// {
//   path: '/pharmacists',
//   name: 'pharmacists',
//   component: () => import('../components/Userspecific/pharmacists.vue')
// },

// {
//   path: '/SignupmodalsCompany',
//   name: 'SignupmodalsCompany',
//   component: () => import('../components/Nonuserspecific/SignUpCompanyform.vue')
// },  {
//   path: '/SUMModals',
//   name: 'SUMModalsSUMModals',
//   component: () => import('../components/Nonuserspecific/SignUpMemberModal.vue')
// }, {
//   path: '/SUPmodal',
//   name: 'SUPmodal',
//   component: () => import('../components/Nonuserspecific/Signupprovidersmodal.vue')
// },  
// {
//   path: '/TCC',
//   name: 'TCC',
//   component: () => import('../components/Nonuserspecific/termscompany.vue')
// },  {
//   path: '/TCP',
//   name: 'TCP',
//   component: () => import('../components/Nonuserspecific/termspatient.vue')
// }, {
//   path: '/TCPrac',
//   name: 'TCPrac',
//   component: () => import('../components/Nonuserspecific/TermsPrac.vue')
// }, 
// {
//   path: '/SUcompmod',
//   name: 'SUcompmod',
//   component: () => import('../components/Nonuserspecific/SignUpCompanyModal.vue')
// },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
