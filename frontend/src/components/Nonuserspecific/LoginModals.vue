<template>

<div class="modal fade" id="LoginModals" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
          <div class="modal-container">
             
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
  <div class="LoginUserType" align-content="center">
              
    <div class="row">
                     <div class="col-md-4">
                      <img src="../Nonuserspecific/UserType/1.png"  height="250" width="250">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#LoginFormDef"> Inquire</button>
                     </div>
                    <div class="col-md-4">
                      <img src="../Nonuserspecific/UserType/2.png" height="250" width="250"> 
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#LogInCF"> Inquire</button>
                     </div>
                     <div class="col-md-4">
                      <img src="../Nonuserspecific/UserType/3.png"  height="250" width="250">
                       <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#LoginFormDef"> Inquire</button>
                      </div>
                </div>

  <p>Not a member? <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#Signup3" >Sign Up</button></p>
                    </div>
      </div>
    </div>
  </div>
  </div>
</div>
<LoginFormDef></LoginFormDef>
<LogInCF></LogInCF>
<Signup3> </Signup3>

</template>

<script>
import LoginFormDef from './LoginFormDefault.vue'
import LogInCF from './Logincompanyform.vue'
import Signup3 from './signup3.vue'

export default {
  name: 'LoginModals',
  components: { LoginFormDef, LogInCF, Signup3,
    // LoginForm
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
