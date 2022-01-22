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
            <a class="nav-link" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#about">About Us</a>
            <a class="nav-link" href="#partners">Partner Company</a>
            <a class="nav-link" href="provider">Providers</a>
            <!-- <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account Name //shows when user login
            </a> -->
            <button class="btn btn-outline-primary me-2" type="button" @click="showModal">Login</button>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Masthead-->
        <header class="masthead">
            <div class="container">
                <div class="masthead-heading text-uppercase">We provide easy solutions to your Healthcare needs</div>
                <div class="masthead-subheading">Medzip is a platform for patients, healthcare providers, and health care companies to utilize the safety and security of blockchain database</div><br>
                <a class="btn btn-primary btn-xl text-uppercase" href="#">GET STARTED</a>
            </div>
        </header>

    <!-- LoginModals -->
    <LoginModals v-show="isModalVisible" @close="closeModal"/>
    <!-- About Us -->
    <AboutUs></AboutUs>
    <!-- Partners -->
    <Partners></Partners>
  </div>
</template>

<script>
import LoginModals from './components/Nonuserspecific/LoginModals.vue'
import AboutUs from './components/Nonuserspecific/AboutUs.vue'
import Partners from './components/Nonuserspecific/Partnercompany.vue'

export default {
  name: 'App',
  components: {
    LoginModals,
    AboutUs,
    Partners
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