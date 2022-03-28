<template>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Pharmacist Refer</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
       
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Firstname Lastname">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Company</label>
  <select class="form-select" aria-label="Default select example">
  <option selected>Select a company</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Reason for consultation</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Appointment available</label>
  <select class="form-select" aria-label="Default select example">
  <option selected>Select available date.</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
</div>
       <div class="mb-3">
          <label for="formFile" class="form-label">Attach Prescription</label>
          <input class="form-control" type="file" id="formFile" required>
        </div>
<div>
      <label for="Sessions" class="form-label">Sessions:</label>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
  <label class="form-check-label" for="inlineRadio1">First Session</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
  <label class="form-check-label" for="inlineRadio2">  <label class="form-check-label" for="inlineCheckbox2">Returning session </label>
</label>
</div>
</div>

<div>
      <label for="Requests" class="form-label"> Requests: </label>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
  <label class="form-check-label" for="inlineCheckbox1">Medical Order</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
  <label class="form-check-label" for="inlineCheckbox2">Others</label>
</div>
</div>

 

      </div>
      <div class="modal-footer">
<div class="col-auto">
    <button type="submit" class="btn btn-primary mb-3">Refer</button>
  </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
    name: 'Pharmacistrequest',
  components: {
    
  },
}
</script>

<style>

</style>