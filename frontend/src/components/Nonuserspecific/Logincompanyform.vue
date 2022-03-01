
<template>
   
<div class="modal fade" id="Signup3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 900px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header,
.modal-footer {
    padding: 15px;
    display: flex;
}

.modal-header h3 {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
}

.modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
}

.modal-body {
    position: relative;
    padding: 20px 10px;
}

.modal-default-button {
  float: right;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.label {
  display: inline-block;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  padding: 4px 8px;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 400;
  color: #FFF
}

.label.label-pill,
.label.label-rounded {
  border-radius: 99999px
}

.label.label-square {
  border-radius: 0
}

.label.label-outlined {
  border-width: 1px;
  border-style: solid;
  background-color: transparent
}

.label.label-outlined.label-default {
  border-color: #323a45;
  color: #323a45
}
</style>