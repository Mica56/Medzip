<template>
  <div>
    <!-- <Login @selectedUser="capturedMessage" /> -->
    <!-- Ewan ko ba basta '{{ isProvider }}' -->
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
        isPatient: false,
        isProvider: false
      };
    },
  // methods: {
  //   capturedMessaged(value){
  //     if (value == 1){
  //       this.isProvider = true;
  //     };
  //   }
  // },
  // props: ['selectedUser']
}

</script>

<style>

</style>