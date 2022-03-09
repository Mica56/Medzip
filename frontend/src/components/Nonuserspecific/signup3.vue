<template>
<div>
<div class="modal fade" id="Signup3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog">
    <div class="modal-content">
          <div class="modal-container">
      <div class="modal-header">

        <h5 class="modal-title" id="exampleModalLabel">Sign Up</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
  <div class="LoginUserType" align-content="center">
    <div class="row">
                     <div class="col-md-4">
                      <img src="../Nonuserspecific/UserType/1.png"  height="250" width="250">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#SUPmodal"> Inquire</button>
                     </div>
                    <div class="col-md-4">
                      <img src="../Nonuserspecific/UserType/2.png" height="250" width="250"> 
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#SignupmodalsCompany"> Inquire</button>
                     </div>
                     <div class="col-md-4">
                      <img src="../Nonuserspecific/UserType/3.png"  height="250" width="250">
                       <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#SUMModals"> Inquire</button>
                      </div>
                </div>

  <p> Do you have an account? <button type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#LoginModals" >Login</button></p>

                    </div>
      </div>
    </div>
  </div>
</div>
</div>
<SignupmodalsCompany></SignupmodalsCompany>
<SUMModals></SUMModals>
<SUPmodal></SUPmodal>
<LoginModals></LoginModals>
</div>
</template>

<script>
import SignupmodalsCompany from './SignUpCompanyform.vue'
import SUMModals from './SignUpMemberModal.vue'
import SUPmodal from './Signupprovidersmodal.vue'
import LoginModals from './LoginModals.vue'

export default {
    name: 'Signup3',
  components: { SignupmodalsCompany, SUMModals, SUPmodal, LoginModals,
  },
}
</script>

<style>
</style>
