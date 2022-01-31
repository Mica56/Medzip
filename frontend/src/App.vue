<template>
  <div>
   <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" >
      <!-- Navbar content -->
      <div class="container">
        <a class="navbar-brand" href="#page-top">
          <!-- class="d-inline-block align-text-top" -->
          <img src="../src/assets/MEDZIP.png" alt="logo" width="120" height="70" > 
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
          <i class="fas fa-bars ms-1"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav justify-content-center ms-auto py-4 py-lg-0" >
            <a class="nav-link" aria-current="page"><router-link to="/">Home</router-link></a>
            <a class="nav-link"><router-link to="/about">About</router-link></a>
            <a class="nav-link"><router-link to="/partners">Partner Company</router-link></a>
            <a class="nav-link"><router-link to="/providers">Providers</router-link></a>
            <!-- <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account Name //shows when user login
            </a> -->
            <button class="btn btn-outline-primary me-2" type="button" @click="showModal">Login</button>
          </ul>
        </div>
      </div>
    </nav>

     <!-- LoginModals -->
    <LoginModals v-show="isModalVisible" @close="closeModal"/>
   <router-view/>
  </div>
</template>

<script>
import LoginModals from './components/Nonuserspecific/LoginModals.vue'

export default {
  name: 'App',
  components: {
    LoginModals,
  },
  data() {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
    }
}
</script>

<style>

</style>
