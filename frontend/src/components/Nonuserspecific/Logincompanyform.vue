
<template>
   
<div class="modal fade" id="LogInCF" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
          <div class="modal-container">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Company Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
              <form>
      <div class="loginform" id="seedlogin">
        <form class="row g-3 needs-validation" novalidate>
             <div class="loginform" id="LogInCF">
    <div class="mb-3">
            <label for="exampleInputUAI1" class="form-label">Unique Account Identification</label>

                <input type="Unique Account Identification" class="form-control" id="exampleInputUAI1" placeholder="Unique Account Identification" required>
               <div class="invalid-feedback">
      Please provide a valid Unique Account Identification.
    </div>
     </div>
           <div class="mb-3">
                         <label for="exampleInputAuthentication1" class="form-label">Authentication</label>

                <input type="Authentication" class="form-control" id="exampleInputAuthentication1" placeholder="Authentication" required> 
               <div class="invalid-feedback">
      Please provide a valid Authentication.
    </div>
            </div>
             <div class="mb-3">
       <label for="examplePassword1" class="form-label">Password</label>

                <input type="Password" class="form-control" id="examplePassword1" placeholder="Password" required>
                <div class="invalid-feedback">
      Please provide a valid Password.
    </div>
    </div>
                 <div class="mb-3">
        <label for="exampleInputSeedPhrase1" class="form-label">Seed Phrase</label>

                <input type="Seed Phrase" class="form-control" id="exampleInputSeedPhrase1" placeholder="Seed Phrase" required>
                <div class="invalid-feedback">
      Please provide a valid Seed Phrase.
    </div>
    </div>
                <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                
            </div>
                          <div class="options text-center text-md-right mt-1">
                  <p> Wrong account type? <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#LoginModals" >Choose account type</button></p>
                <p>Not a member? <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#Signup3" >Sign Up</button></p>
                <p>Forgot <a href="#" class="blue-text">Password?</a></p>
              </div>
            <button type="submit" class="btn btn-primary">Submit</button>
                                 </div>
   </form>
    </div>
     
            </form>
      <div class="modal-footer">
<div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Submit</button>
  </div>
      </div>
    </div>
    </div>
  </div>
</div>

<Signup3> </Signup3>
<LoginModals></LoginModals>

</template>

<script>
import LoginModals from './LoginModals.vue'
import Signup3 from './signup3.vue'

export default {
    name: 'LogInCF',
  components: { 
LoginModals, Signup3, 

    
  },
  methods: {
    close() {
      this.$emit('close');
    },
    // showModal() {
    //     this.isModalVisible = true;
    // },
    // closeModal() {
    //   this.isModalVisible = false;
    // }
  },
}
</script>

<style>
</style>