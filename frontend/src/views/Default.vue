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
            <a class="nav-link" aria-current="page"><router-link style="text-decoration: none; color: inherit;" to="/">Home</router-link></a>
            <a class="nav-link" href="#about">About</a>
            <a class="nav-link"><router-link style="text-decoration: none; color: inherit;" to="/partners">Partner Company</router-link></a>
            <a class="nav-link"><router-link style="text-decoration: none; color: inherit;" to="/providers">Providers</router-link></a>
            <!-- <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account Name //shows when user login
            </a> -->
            <button class="btn btn-outline-primary me-2" type="button"  data-bs-toggle="modal" data-bs-target="#LoginModals" >Login</button>
           <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Signup3"> Sign Up</button>

          </ul>
        </div>
      </div>
    </nav>
     <!-- LoginModals -->
    <LoginModals></LoginModals>
    <Signup3></Signup3>
    <router-view/>
    <!-- Masthead-->
         <img src="../assets/IMG.png" class="rounded float-end" alt="right" id="right">
        <header class="masthead">
            <div class="container">
                <div class="masthead-heading text-uppercase fs-3">We provide easy solutions to your Healthcare needs</div>
                <div class="masthead-subheading fs-4">Medzip is a platform for patients, healthcare providers, and health care companies to utilize the safety and security of blockchain database</div><br>
                <a class="btn btn-primary btn-xl text-uppercase" href="#">GET STARTED</a>
            </div>
        </header>

    <AboutUs></AboutUs>
    <Footer></Footer>
    </div>
</template>

<script>
import LoginModals from '../components/Nonuserspecific/LoginModals.vue'
import Signup3 from '../components/Nonuserspecific/signup3.vue'
import AboutUs from './AboutUs.vue'
import Footer from './footer.vue'

export default {
  name: 'Default',
  components: {
    LoginModals,
    Footer, 
    Signup3,
    AboutUs,
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
.nav-link {
font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 21px;
color: #000000;
}
</style>