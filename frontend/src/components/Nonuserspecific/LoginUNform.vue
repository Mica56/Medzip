<template>
<div>
<div class="modal fade" id="LogInUN" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-container">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
             <form class="row g-3 needs-validation" novalidate>
    <div class="mb-3">
                <input v-model="username" type="Unique Account Identification" class="form-control" id="exampleInputUAI1" placeholder="Unique Account Identification" required>
               <div class="invalid-feedback">
      Please provide a valid Unique Account Identification.
    </div>
     </div>
             <div class="mb-3">
                <input v-model="password" type="Password" class="form-control" id="examplePassword2" placeholder="Password" aria-describedby="password" required>
                <div class="invalid-feedback">
      Please provide a valid Password.
    </div>
    </div>
     <div class="options text-center text-md-right mt-1">
                  <p> Wrong account type? <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#LoginModals" >Choose account type</button></p>
                                <p> Log In Using  <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#LoginFormDef" >Email </button></p>
                          <p> Log In Using  <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#LIFSeedP" >SeedPhrase </button></p>
                    <p>Not a member? <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#Signup3" >Sign Up</button></p>
                    <p>Forgot <a href="#" class="blue-text">Password?</a></p>
                </div>
            </form>
      <div class="modal-footer">
        <div class="col-auto">
           <button type="submit" class="btn btn-primary mb-3" data-bs-dismiss="modal" aria-label="Close" @click="checkCreds">Submit</button>
        </div>
      </div>
    </div>
  </div>
</div></div>
<LoginFormDef></LoginFormDef>
<LIFSeedP></LIFSeedP>
<Signup3> </Signup3>
<LoginModals></LoginModals>
</div>
</template>

<script>


import LoginFormDef from './LoginFormDefault.vue'
import LIFSeedP from './LogInFormSeed.vue'
import Signup3 from './signup3.vue'
import LoginModals from './LoginModals.vue'
import axios from 'axios'

export default {
    name: 'LogInUN',
  components: {
    LoginFormDef, LIFSeedP, Signup3, LoginModals,
  },
  data () {
    return {
      // 'orij' 
      // 'happy'
      username: '',
      password: '',
      token: '',
      isErrored: false,
    }
  },
  
  methods: {
    checkCreds () {
      console.log(this.username);
      //127.0.0.1:8000/authentication/
      axios.post('http://127.0.0.1:8000/authentication/', 
      {
        username: this.username,
        password: this.password,
      }).then(res => {
          localStorage.setItem('Token', res['Token']);
          this.token = res.data.token;
          // console.log(this.token);
          this.$emit("UserToken", this.token);
      }).catch(err => {
          this.isErrored = true
          console.error(err)
      });
    }
  },
}
</script>

<style>
</style>