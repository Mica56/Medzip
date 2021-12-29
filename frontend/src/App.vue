<template>
  <div>
    <!-- Navigation-->
    <nav class="navbar navbar-dark" style="background-color: #6f42c1;">
      <!-- Navbar content -->
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="#" alt="" width="30" height="24" class="d-inline-block align-text-top">
            Medzip
        </a>
        <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> -->
        <!-- <div class="collapse navbar-collapse" id="navbarNavAltMarkup"> -->
          <div class="nav justify-content-center">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">About Us</a>
            <a class="nav-link" href="#">Partners</a>
            <a class="nav-link" href="#">Other providers</a>
            <a class="nav-link" href="#">Patients</a>
            <!-- <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Account Name //shows when user login
            </a> -->
            <button class="btn btn-outline-primary me-2" type="button" @click="showModal">Login</button>
          </div>
        <!-- </div> -->
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
  </div>
</template>

<script>
import LoginModals from './components/LoginModals.vue'
export default {
  name: 'App',
  components: {
    LoginModals
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
.nav-link{
    color: #fff;
}

.nav-link:hover, .nav-link:active{
  color: black;
}

.btn-outline-primary{
  color: white;
}
</style>