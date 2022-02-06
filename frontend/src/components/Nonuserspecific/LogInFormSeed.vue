
<template>
    <div>
        <!-- <transition name="modal-fade"> -->
        <div class="modal-mask" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header" id="modalTitle">
                <slot name="header">
                  Company Login
                </slot>
     <a href="home">  <button type="button" class="btn-close" aria-label="Close"></button> </a>

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
                                          <p> Wrong account type? <a href="LoginModals" class="blue-text">Choose account type</a></p>
                <p>Not a member? <a href="#" class="blue-text">Sign Up</a></p>
          <p> Log In Using  <a href="LoginFormDef" class="blue-text">Email Account</a></p>

                <p>Forgot <a href="#" class="blue-text">Password?</a></p>
              </div>
               <button type="submit" class="btn btn-primary">Submit</button>
     </div>
     
            </form>
    </div>

        </form>
    



              <div class="modal-footer">
                <slot name="footer">
                  default footer
                  <button class="modal-default-button" @click="$emit('close')" aria-label="Close modal">
                    OK
                  </button>
                </slot>
              </div> 
            </div>
          </div>
        </div>
      <!-- </transition> -->
      
    </div>
</template>



<script>
export default {
    name: 'LIFSeedP',
  components: {
    
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