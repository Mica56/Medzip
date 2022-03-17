<template>
  <div>
      <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" style="background-color: #fff ;">
      <!-- Navbar content -->
      <div class="container-fluid">
        <a class="navbar-brand" href="#page-top">
          <!-- class="d-inline-block align-text-top" -->
          <img src="../assets/MEDZIP.png" alt="logo" width="150" height="200" > 
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
          <i class="fas fa-bars ms-1"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav justify-content-center ms-auto py-4 py-lg-0" >
            <a class="nav-link" aria-current="page"><router-link style="text-decoration: none; color: inherit;" to="/home">Home</router-link></a>
            <a class="nav-link"><router-link style="text-decoration: none; color: inherit;" to="/about">About</router-link></a>
            <a class="nav-link"><router-link style="text-decoration: none; color: inherit;" to="/partners">Partner Company</router-link></a>
            <a class="nav-link"><router-link style="text-decoration: none; color: inherit;" to="/providers">Providers</router-link></a>
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Patient User ID
            </a>
            <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="navbarDropdownMenuLink" dropdown-menu-lg-end>
              <li><a class="dropdown-item" href="#">Profile Information</a></li>
              <li><a class="dropdown-item" href="#">Smart Contracts</a></li>
              <li><a class="dropdown-item" href="#">Transaction History</a></li> 
              <li><a class="dropdown-item" href="#">Settings</a></li>
              </ul>
          </ul>
        </div>
      </div>
    </nav>
    <router-view/>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './footer.vue'

export default {
  name: 'PatientView',
  components: {
    Footer, 
  },
}
</script>

<style>

</style>