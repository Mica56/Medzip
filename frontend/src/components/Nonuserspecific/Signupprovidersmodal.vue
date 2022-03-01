<template>

<div class="modal fade" id="SUPmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
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
                <input type="Bday" class="form-control" id="exampleInputSex1" placeholder="Date of Birth MM/DD/YEAR" required>
               <div class="invalid-feedback">
      Please provide a valid Date of birth.
      
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

    <div class="col-md-3">
    <label for="validationCustom04" class="form-label">Provider Type</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>Doctor</option>
      <option>Pharmacist</option>
      <option>Nurse</option>
      <option>Medical Technologist</option>
      <option>Radio Technologist</option>
      <option>Dentists</option>
      <option>Others</option>
    </select>
    <div class="invalid-feedback">
      Please select provider type.
    </div>
    </div>
             <div class="mb-3">
                <input type="PRC License" class="form-control" id="exampleInputPRC1" placeholder="PRC Liscence Number" required>
                <div class="invalid-feedback">
      Please provide a valid License Number.
    </div>
    </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">Attach clear picture with PRC ID</label>
              <input class="form-control" type="file" id="formFile" required>
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
    <button type="submit" class="btn btn-primary ">Submit</button>
  </div>
   </div>
    </div>
      </div>
  </div>
<Signup3> </Signup3>
</template>

<script>
import Signup3 from './signup3.vue'


export default {
  name: 'SUPmodal',
  components: { Signup3,
    // LoginForm 
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