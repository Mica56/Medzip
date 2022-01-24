<template>
    <div class="membersignupform">
        <form class="row g-3 needs-validation" novalidate>
            <div class="mb-3">
                               <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="Name" class="form-control" id="exampleInputName1" placeholder="Fullname" required>
               <div class="invalid-feedback">
      Please provide a valid name.
    </div>
     </div>
     
    <div class="col-md-3">
    <label for="validationCustom04" class="form-label">Company</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>Others</option>
    </select>
    <div class="invalid-feedback">
      Please select provider type.
    </div>
    </div>
            <div class="mb-3">
                  <label for="inputEmail3" class="form-label">Reason for consultation</label>
                <input type="consultation" class="form-control" id="exampleInputconsultation1"  required>
               <div class="invalid-feedback">
      Please provide a valid reason.
    </div>
            </div>
             <div class="mb-3">
                <label for="Appointmentavailable" class="form-label">Appointment available</label>
                <input type="Appointmentavailable" class="form-control" id="exampleInputAppointment" placeholder="Choose date" required>
                <div class="invalid-feedback">
      Please Choose date.
    </div>
    </div>
                 <fieldset class="row mb-3">
    <legend class="col-form-label col-sm-2 pt-0">Sessions</legend>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1">
        <label class="form-check-label" for="gridRadios1">
          First Session
        </label>
      </div>
      <div class="form-check">
        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
        <label class="form-check-label" for="gridRadios2">
          Returning 
        </label>
      </div>
    </div>
  </fieldset>

    <label for="Requestavailable" class="form-label">Request</label>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label" for="inlineCheckbox1">Medical Certificate</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label" for="inlineCheckbox2">Prescription</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3">
  <label class="form-check-label" for="inlineCheckbox2">Others</label>
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
    name: 'SignupmodalsPatient',
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