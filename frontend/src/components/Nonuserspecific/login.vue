<template>

    <div>
        <!-- <transition name="modal-fade"> -->
        <div class="modal-mask" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
          <div class="modal-wrapper">
            <div class="modal-container">

       <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Log In</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>      </div>
              <div class="modal-body" id="modalDescription">
                <slot name="body">
                  <form>
                     <div class="LoginUserType" align-content="center">
<a href="emaillogin"> <img src="../Nonuserspecific/UserType/1.png"  height="250" width="250"> </a>
<a href="companylogin"><img src="../Nonuserspecific/UserType/2.png" height="250" width="250"> </a>
<a href="emaillogin"><img src="../Nonuserspecific/UserType/3.png"  height="250" width="250"> </a>
    </div>
                  </form>
                </slot>
    </div>
                  </div>
            </div>
          </div>
        </div>
                                                                              
    <div>
        <!-- <transition name="modal-fade"> -->
        <div class="modal-mask" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
          <div class="modal-wrapper">
            <div class="modal-container">

       <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Log In</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>      </div>
              <div class="modal-body" id="modalDescription">
                <slot name="body">
                  <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
                          <div class="options text-center text-md-right mt-1">
                <p>Not a member? <a href="#" class="blue-text">Sign Up</a></p>
                <p>Forgot <a href="#" class="blue-text">Password?</a></p>
              </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
                </slot>
    </div>
                  </div>
            </div>
          </div>
        </div>

        
 <div class="loginform" id="emaillogin">
        <form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
                          <div class="options text-center text-md-right mt-1">
                <p>Not a member? <a href="#" class="blue-text">Sign Up</a></p>
                <p>Forgot <a href="#" class="blue-text">Password?</a></p>
              </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>

  
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
                <p>Not a member? <a href="#" class="blue-text">Sign Up</a></p>
                <p>Forgot <a href="#" class="blue-text">Password?</a></p>
              </div>
               <button type="submit" class="btn btn-primary">Submit</button>
     </div>
     
            </form>
    </div>

    <div class="loginform" id="companylogin">
        <form class="row g-3 needs-validation" novalidate>
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
                <p>Not a member? <a href="#" class="blue-text">Sign Up</a></p>
                <p>Forgot <a href="#" class="blue-text">Password?</a></p>
              </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form>
    </div>
      

</template>

<script>
// import LoginForm from './LoginForm.vue';

export default {
  name: 'LoginModals',
  components: {
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