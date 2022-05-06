<template>
<div>
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
       <a class="btn btn-primary"><router-link style="text-decoration: none; color: inherit;" to="/doctors">Contact one here</router-link></a>
      </div>
    </div>
  </div>
    <div class="col">
    <div class="card">
      <img src="../assets/Practitioners/6.png" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Pharmacists</h5>
        <p class="card-text">Coordinate with Pharmacists for pharmacologic therapy to share. </p>
        <a class="btn btn-primary "><router-link style="text-decoration: none; color: inherit;" to="/pharmacists">Contact one here</router-link></a>
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

</div>
</template>

<script>

export default {
  name: 'Provider',
  components: {

  },
}
</script>

<style>

</style>