<template>
  <div>
    <Login @selectedUser="capturedMessage" />
    <LoginFormDefault @AccountDetails="getAccountDetails"/>
    <!-- just to test if accountDetails was received by parent
    but it seems it wasn't able to -->
      {{accountDetails}}
  
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
    getAccountDetails(details) {
      this.accountDetails = details;
      console.log(this.accountDetails);
    }
  },
  computed: {
    isProvider(){
      return this.loginType === 'provider'
    },
    isPatient() {
      return this.loginType === 'patient'
    }
  },

}

</script>

<style>

</style>