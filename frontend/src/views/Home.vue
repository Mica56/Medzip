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
        <header class="masthead">
                      <div class="container">
 <div class="row g-0">
    <div class="col-md">
      <img src="../assets/about1.png" class="img-fluid rounded-start" alt="..." width="1500" height="1500" >
    </div>
    <div class="col-md">
                <div class="masthead-heading text-uppercase fs-2">
                  <p class="text-center">About MedZip</p>
                  </div>
                <div class="masthead-subheading fs-4">MedZip was founded with the goal of providing technical solutions that would have a positive impact on the healthcare industry. The creators came up with the name "MedZip" as a trademark for the platform, which combines the terms "Medical" and ".zip." We have the best data secured application databases for the of the patients which provides a user friendly software to easily track medical records. We assure safety access of the patient of merdical professionals for their medical references ensured to have data access provided with verification security blockchain.</div><br>
            </div>
                        </div>
 </div>
        </header>

    <AboutUs></AboutUs>
  </div>
</template>

<script>
import AboutUs from "./AboutUs.vue"
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    AboutUs,
  }
}
</script>
<style>

</style>