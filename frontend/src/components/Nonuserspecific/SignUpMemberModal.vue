<template>
<div>
<div class="modal fade" id="SUMModals" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
               <div class="modal-container">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Member Sign Up</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
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
        </form>
        <div class="modal-footer">
<div class="col-auto">
     <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#Signup3"> Return</button>
    <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">Submit</button>
  </div>
   </div>
    </div>
      </div>
  </div>
</div>
<Signup3> </Signup3>
</div>
</template>

<script>
import Signup3 from './signup3.vue'

export default {
  name: 'SUMModals',
  components: { Signup3,
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