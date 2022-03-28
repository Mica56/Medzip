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
        path: '/providerpatient',
        name: 'Providerpatient',
        component: () => import('../views/ProviderPatient.vue')
      },
      {
        path: '/providerdr',
        name: 'Providerdr',
        component: () => import('../views/ProviderDr.vue')
      },
      {
        path: '/ProviderPharm',
        name: 'ProviderPharm',
        component: () => import('../views/ProviderPharm.vue')
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
        component: () => import('../components/Userspecific/patientview/doctors.vue')
      },
      {
        path: '/doctors1',
        name: 'doctors1',
        component: () => import('../components/Userspecific/Doctors/provider/doctors.vue')
      },
      {
        path: '/doctors2',
        name: 'doctors2',
        component: () => import('../components/Userspecific/Pharmacists/provider/doctors.vue')
      },
      {
         path: '/pharmacists',
         name: 'pharmacists',
         component: () => import('../components/Userspecific/patientview/pharmacists.vue')
      },
      {
        path: '/pharmacists1',
        name: 'pharmacists1',
        component: () => import('../components/Userspecific/Doctors/provider/pharmacists.vue')
     },
     {
      path: '/pharmacists2',
      name: 'pharmacists2',
      component: () => import('../components/Userspecific/Pharmacists/provider/pharmacists.vue')
   },
      {
        path: '/doctorprofile',
        name: 'doctorprofile',
        component: () => import('../components/Userspecific/patientview/doctorprofile.vue')
      },
      {
        path: '/pharmacistprofile',
        name: 'pharmacistprofile',
        component: () => import('../components/Userspecific/patientview/pharmacistprofile.vue')
      },  
      {
        path: '/doctorprofile1',
        name: 'doctorprofile1',
        component: () => import('../components/Userspecific/Doctors/provider/doctorprofile.vue')
      },      
      {
        path: '/doctorprofile2',
        name: 'doctorprofile2',
        component: () => import('../components/Userspecific/Pharmacists/provider/doctorprofile.vue')
      },
      {
        path: '/pharmacistprofile1',
        name: 'pharmacistprofile1',
        component: () => import('../components/Userspecific/Doctors/provider/pharmacistprofile.vue')
      },      
      {
        path: '/pharmacistprofile2',
        name: 'pharmacistprofile2',
        component: () => import('../components/Userspecific/Pharmacists/provider/pharmacistprofile.vue')
      },    
      {
        path: '/transactionhistory',
        name: 'transactionhistory',
        component: () => import('../components/Userspecific/transactionhistory.vue')
      },  
      {
        path: '/drpatients',
        name: 'drpatients',
        component: () => import('../components/Userspecific/Doctors/drpatients.vue')
      },    
      {
        path: '/rphpatients',
        name: 'rphpatients',
        component: () => import('../components/Userspecific/Pharmacists/rphpatients.vue')
      },    
    ], 
  },
  {
    path: '/default',
    name: 'Default',
    component: MainView
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
