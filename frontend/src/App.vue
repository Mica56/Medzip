<template>
  <div>
    {{accountDetails}}
    {{ token }}

    <Login @selectedUser="capturedMessage" />
    <LoginCreds @UserToken="capturedToken" />
  
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
import LoginCreds from './components/Nonuserspecific/LoginFormDefault.vue'
import axios from 'axios'
// import {EventBus}  from './main'

export default {
  name: 'App',
  components: {
    Login,
    LoginCreds
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
    capturedToken(tok){
      console.log(tok);
      this.token = tok;
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
  //  created () {
  //   //  let headers = {'Authorization': 'Token' + localStorage.get('Token')};

	// 	axios.get('https://jirroreo.pythonanywhere.com/account/1/profile/',
  //     {
  //       params: {
  //         username: "orij", 
  //         password: "happy",
  //       },
  //       headers: {
  //         Authorization: 'Bearer ${token}',
  //         // Authorization: Token + localStorage.get('Token'),
  //         "Content-Type": "application/json",
  //       },
  //     }
  //     )
	// 		.then(res => {
	// 			this.accountDetails = res.data
	// 		})  
	// }
  created () {
		axios.get('https://jirroreo.pythonanywhere.com/account/i/profile/')
			.then(res => {
				this.accountDetails = res.data
			})
	},
  // mounted() {
  //   EventBus.$on("UserToken", token => {
  //     console.log("The token is", token)
  //   });
  // }

}

</script>

<style>

</style>