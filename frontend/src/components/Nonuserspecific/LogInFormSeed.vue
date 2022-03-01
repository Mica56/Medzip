<template>

<div class="modal fade" id="LIFSeedP" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog">
    <div class="modal-content">
          <div class="modal-container">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
         
              <form>
                <div class="loginform" id="seedlogin">
                  <form class="row g-3 needs-validation" novalidate>
                    <div class="mb-3">
                      <label for="exampleInputSP1" class="form-label">Seed Phrase</label>
                      <input type="Seed Phrase" class="form-control" id="exampleInputSP1" placeholder="Seed Phrase" required>
                      <div class="invalid-feedback">
                        Please provide a valid Seed Phrase.
                      </div>
                      <div class="mb-3 form-check">
                          <input type="checkbox" class="form-check-input" id="exampleCheck1">
                          <label class="form-check-label" for="exampleCheck1">Check me out</label>
                      </div>
                <div class="options text-center text-md-right mt-1">
                  <p> Wrong account type? <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#LoginModals" >Choose account type</button></p>
                                <p> Log In Using  <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#LoginFormDef" >Email </button></p>
                          <p> Log In Using  <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#LogInUN" >User Name </button></p>
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
<LoginFormDef></LoginFormDef>
<Signup3> </Signup3>
<LogInUN></LogInUN>
<LoginModals></LoginModals>

</template>


<script>
import LoginFormDef from './LoginFormDefault.vue'
import Signup3 from './signup3.vue'
import LogInUN from './LoginUNform.vue'
import LoginModals from './LoginModals.vue'

export default {
    name: 'LIFSeedP',
  components: {
    LoginFormDef, Signup3, LogInUN, LoginModals,

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