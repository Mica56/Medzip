<template>
  <div>
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

export default {
  name: 'App',
  components: {
    Login,
  },
  
  data() {
      return {
        loginType: 'default'
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
  }
}

</script>

<style>

</style>