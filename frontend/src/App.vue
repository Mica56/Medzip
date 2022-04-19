<template>
  <div>
    {{accountDetails}}

    <Login @selectedUser="capturedMessage" />
  
    <template v-if="isProvider">
      <router-view name="provider"/>
    </template>

    <template v-else-if="isPatient">
      <router-view name="patient"/>
    </template>
  
    <template v-else>
      <router-view/>
    </template>
   
  </div>
</template>

<script>
import Login from './components/Nonuserspecific/LoginModals.vue'
import LoginFormDefault from './components/Nonuserspecific/LoginFormDefault.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Login,
    LoginFormDefault
  },
  
  data() {
      return {
        loginType: 'default',
        token: '0',
        accountDetails: [],
      };
    },
  methods: {
    capturedMessage(value){
      this.loginType = value;
    },
  },
  computed: {
    isProvider(){
      return this.loginType === 'provider'
    },
    isPatient() {
      return this.loginType === 'patient'
    }
  },
  // created () {
  //   // const AuthStr = 'Token '.concat(localStorage.getItem('token')); 
  //   const AuthStr = 'Token e18211bed2b816e4a5e56f1afc77fd268b2467b3'; 
  //     axios.get('https://jirroreo.pythonanywhere.com/account/i/profile/', 
  //     { headers: { Authorization: AuthStr } })
  //     .then(response => {
  //         // If request is good...
  //         console.log(response.data);
  //       })
  //     .catch((error) => {
  //         console.log('error ' + error);
  //       });
	// 	// axios.get('https://jirroreo.pythonanywhere.com/account/i/profile/')
	// 	// 	.then(res => {
	// 	// 		this.accountDetails = res.data
	// 	// 	})
	// },

}

</script>

<style>

</style>