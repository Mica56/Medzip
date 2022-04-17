<template>
<div>
<div class="modal fade" id="LoginFormDef" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
                <div class="modal-container">

      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
          <form>
            <div class="loginform" id="emaillogin">
              <form class="row g-3 needs-validation" novalidate>

                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">Email address</label>
                  <input v-model="email" type="Email" class="form-control" id="exampleInputEmail1" placeholder="Email" aria-describedby="emailHelp" required>
                  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                  <div class="invalid-feedback">
                    Please provide a valid Email.
                  </div>
                </div>
              
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input v-model="password" type="Password" class="form-control" id="exampleInputPassword1" placeholder="Password" aria-describedby="password" required >
                  <div class="invalid-feedback">
                  Please provide a valid Password.
                  </div>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <div class="options text-center text-md-right mt-1">
                  <p> Wrong account type? <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#LoginModals" >Choose account type</button></p>
                                <p> Log In Using  <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#LIFSeedP" >Seed Phrase</button></p>
                          <p> Log In Using  <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#LogInUN" >User Name </button></p>
                    <p>Not a member? <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#Signup3" >Sign Up</button></p>
                    <p>Forgot <a href="#" class="blue-text">Password?</a></p>
                </div>
              </form>
            </div>          
          </form>
      <div class="modal-footer">
  <div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3" data-bs-dismiss="modal" aria-label="Close" @click="checkCreds">Submit</button>
  </div>
      </div>
    </div>
  </div>
  </div>
</div>
<LIFSeedP></LIFSeedP>
<Signup3> </Signup3>
<LogInUN></LogInUN>
<LoginModals></LoginModals>
</div>
</template>



<script>
import LoginModals from './LoginModals.vue'
import LIFSeedP from './LogInFormSeed.vue'
import Signup3 from './signup3.vue'
import LogInUN from './LoginUNform.vue'
import axios from 'axios'
// import { EventBus } from '../../main'

export default {
  name: 'LoginFormDef',
  components: { LIFSeedP, Signup3, LogInUN, LoginModals,
    
  },
  data () {
    return {
      // 'orij@jirroreo.dev' or 'orij' 
      // 'happy'
      email: '',
      password: '',
      token: '',
      isErrored: false,
    }
  },
  
  methods: {
    checkCreds () {
      console.log(this.email);
      //127.0.0.1:8000/authentication/
      axios.post('http://127.0.0.1:8000/authentication/', 
      {
        username: this.email,
        password: this.password,
      }).then(res => {
          localStorage.setItem('Token', res['Token']);
          this.token = res.data.token;
          console.log(this.token);
          // EventBus.$emit("UserToken", this.token);
          this.$emit('UserToken', this.token);
      }).catch(err => {
          this.isErrored = true
          console.error(err)
      });
    }
  },
}
</script>

<style>
.form-control:valid {
  background-color:  #96d3ec!important;
}
</style>