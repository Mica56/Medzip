<template>
    <div class="providersignupform">
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
 <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
        </form>
    </div>
</template>

<script>

export default {
    name: 'SignupmodalsHCP',
  components: {
    
  },
  methods: {
    //   close() {
    //     this.$emit('close');
    //   },
    },
}
</script>

<style>

</style>