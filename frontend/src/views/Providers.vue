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
    <section class="page-section" id="provider">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Providers</h2>
                </div>
            </div>
            <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card">
      <img src="../assets/Practitioners/1.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Doctors</h5>
                <p class="card-text">Coordinate with physicians from different specializations.</p>
       <a href="doctors" class="btn btn-primary">Contact one here</a>
      </div>
    </div>
  </div>
    <div class="col">
    <div class="card">
      <img src="../assets/Practitioners/6.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Pharmacists</h5>
        <p class="card-text">Coordinate with Pharmacists for pharmacologic therapy to share. </p>
        <a href="pharmacists" class="btn btn-primary ">Contact one here</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="../assets/Practitioners/2.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Nurses</h5>
        <p class="card-text">Coordinate with nurses for medical care and home care. </p>
        <a href="#" class="btn btn-primary disabled">Contact one here</a>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src="../assets/Practitioners/3.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Radio Technologists</h5>
        <p class="card-text">Coordinate with  Radio technologists for diganostic imaging to share.</p>
        <a href="#" class="btn btn-primary disabled">Contact one here</a>
      </div>
    </div>
  </div>
    <div class="col">
    <div class="card">
      <img src="../assets/Practitioners/4.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Medical Technologists</h5>
        <p class="card-text">Coordinate with  Medical technologists for laboratory informations.</p>
       <a href="#" class="btn btn-primary disabled">Contact one here</a>
      </div>
    </div>
  </div>  
  <div class="col">
    <div class="card">
      <img src="../assets/Practitioners/5.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Dentists</h5>
        <p class="card-text">Coordinate with Dentists for prevention, diagnosis, and treatment on dental care.</p>
       <a href="#" class="btn btn-primary disabled">Contact one here</a>
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
  name: 'Provider',
  components: {
    LoginModals,
    Signup3,
    Footer
  },
}
</script>

<style>

</style>