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
    <section class="page-section" id="partners">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Partner Company</h2>
                    <h3 class="section-subheading text-muted">Trusted and verified companies in relation to healh and wellness.</h3>
                </div>
            </div>
            <div class="card mb-3" style="w-100; h-100; center">
  <div class="row g-0">
    <div class="col-md-2">
      <img src="../assets/umaklogo.png" class="img-fluid rounded-start" alt="..." width="200" height="200" >
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">University of Makati</h5>
        <p class="card-text">The University of Makati, or simply "UMak," assists us in bringing MedZip to the public's attention, notably the university Medical and Dental Clinic, as they are the major players in the platform's growth. The faculty staffs of the College of Allied Health Studies' Center of Pharmacy also assisted in refining the design of this platform so that it could be adequately presented to the users.</p>
               <a href="https://www.umak.edu.ph/" class="btn btn-primary">Learn more</a>
      </div>
    </div>
  </div>
</div>
</section>
<!-- LoginModals -->
<LoginModals></LoginModals>
<Signup3></Signup3>
<Footer></Footer>
</div>
</template>

<script>
import LoginModals from '../components/Nonuserspecific/LoginModals.vue'
import Signup3 from '../components/Nonuserspecific/signup3.vue'
import Footer from './footer.vue'

export default {
  name: 'Partners',
  components: {
    LoginModals,
    Signup3,
    Footer
  },
}
</script>

<style>

</style>