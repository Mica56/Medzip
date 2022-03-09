<template>
  <div>
  
    <template v-if="1==0">
      <router-view name="authed"/>
    </template>
  
    <template v-else>
      <router-view/>
    </template>
   
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },

}

</script>

<style>

</style>