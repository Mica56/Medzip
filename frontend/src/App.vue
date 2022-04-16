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
import axios from 'axios'

export default {
  name: 'App',
  components: {
    Login,
  },
  
  data() {
      return {
        loginType: 'default',
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
   created () {
    //  let headers = {'Authorization': 'Token' + localStorage.get('Token')};

		axios.get('https://jirroreo.pythonanywhere.com/account/1/profile',
      {
        params: {
          username: "orij", 
          password: "happy",
        },
        headers: {
          Authorization: 'Bearer ${token}',
          "Content-Type": "application/json",
        },
      }
      )
			.then(res => {
				this.accountDetails = res.data
			})  
	}
  
}

</script>

<style>

</style>