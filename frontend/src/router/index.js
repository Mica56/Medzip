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
    },
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('../views/Home.vue'),
        alias: '/home'
      },
      {
        path: '/about',
        name: 'About',
        component: () => import( '../views/AboutUs.vue')
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
        path: '/settings',
        name: 'settings',
        component: () => import('../views/settings.vue')
      },
      
      {
        path: '/profile',
        name: 'profile',
        component: () => import('../components/Userspecific/profile.vue')
      },
      {
        path: '/doctors',
        name: 'doctors',
        component: () => import('../components/Userspecific/doctors.vue')
      },
      {
         path: '/pharmacists',
         name: 'pharmacists',
         component: () => import('../components/Userspecific/pharmacists.vue')
      },
      {
        path: '/doctorprofile',
        name: 'doctorprofile',
        component: () => import('../components/Userspecific/doctorprofile.vue')
      },
      {
        path: '/pharmacistprofile',
        name: 'pharmacistprofile',
        component: () => import('../components/Userspecific/pharmacistprofile.vue')
      },        
    ]
  },
   

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
