<template>
  <div class="home">
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
  </div>
</template>

<script>
import AboutUs from './AboutUs.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    AboutUs,
  }
}
</script>
<style>

</style>