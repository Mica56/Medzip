<template>
  <div>
    <!-- <LoginModals @selectedUser="capturedMessage" /> -->
    <!-- Ewan ko ba basta '{{ isPatient }}' -->
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
// import LoginModals from './components/Nonuserspecific/LoginModals.vue'

export default {
  name: 'App',
  components: {
    // LoginModals,
  },
  data() {
      return {
        isPatient: false,
        isProvider: false
      };
    },
  // methods: {
  //   capturedMessaged(value){
  //     if (value == 'patient'){
  //       this.isPatient = true;
  //     };
  //   }
  // },
  // props: ['selectedUser']
}

</script>

<style>

</style>