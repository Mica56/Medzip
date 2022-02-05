<template>
    <div>
        <!-- <transition name="modal-fade"> -->
        <div class="modal-mask" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header" id="modalTitle">
                <slot name="header">
                  Sign Up Healthcare
                </slot>
              </div>

              <div class="modal-body" id="modalDescription">
                <slot name="body">
                  <!-- <button class="btn btn-default btn-outlined" type="button" @click="showModal">Provider</button>
                  <button class="btn btn-default btn-outlined" type="button" @click="showModal">Patient</button> -->
                  <!-- LoginForm -->
                  <!-- <LoginForm v-show="isModalVisible" @close="closeModal"/> --> 
                  <!-- <LoginForm></LoginForm> -->
        <form class="row g-3 needs-validation" novalidate>
            <div class="mb-3">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" required>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                <div class="invalid-feedback">
      Please provide a valid email.
    </div>
    </div>
            <div class="mb-3">
                <input type="Name" class="form-control" id="exampleInputName1" placeholder="Fullname" required>
               <div class="invalid-feedback">
      Please provide a valid name.
    </div>
     </div>
           <div class="mb-3">
                <input type="Contact Number" class="form-control" id="exampleInputContact1" placeholder="Contact Number" required> 
               <div class="invalid-feedback">
      Please provide a valid Contact number.
    </div>
            </div>
            <div class="mb-3">
                <input type="Bday" class="form-control" id="exampleInputSex1" placeholder="Date of Birth" required>
               <div class="invalid-feedback">
      Please provide a valid Date of birth.
    </div>
            </div>
             <div class="mb-3">
                    <label for="Sex" class="form-label">Sex assigned from birth : </label>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label" for="inlineCheckbox1">female</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label" for="inlineCheckbox2">Male</label>
</div>
                <div class="invalid-feedback">
      Please provide a valid sex.
    </div>
    </div>
            <div class="mb-3">
                    <label for="Pronouns" class="form-label">Pronouns : </label>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label" for="inlineCheckbox1">She/Her</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label" for="inlineCheckbox2">He/Him</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option3">
  <label class="form-check-label" for="inlineCheckbox2">They/Them</label>
</div>
                <div class="invalid-feedback">
      Please provide a valid pronoun/s.
    </div>
    </div>
             <div class="mb-3">
                <input type="Password" class="form-control" id="exampleInputPpassword" placeholder="Password" required>
                <div class="invalid-feedback">
      Please type a password.
    </div>
    </div>
                 <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">
        I have validated the information above.
      </label>
      <div class="invalid-feedback">
        You must validate before submitting.
      </div>
    </div>
  </div>
 <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
        </form>
                </slot>
              </div>

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
// import LoginForm from './LoginForm.vue';

export default {
  name: 'SUMModals',
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
  width: 600px;
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