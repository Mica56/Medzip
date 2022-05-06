<template>

<div class="modal fade" id="Doctorresponsereject" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
<div class="modal-content">
<div class="modal-header">
<h5 class="modal-title" id="Doctorresponsereject">Doctor response reject</h5>
<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">

<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Name</label>
<input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Firstname Lastname">
</div>
<div class="mb-3">
<label for="exampleFormControlInput1" class="form-label">Recommendation </label>
<select class="form-select" aria-label="Default select example">
<option selected>Select a Recommendation</option>
<option value="1">Recommend to a different healthcare proffesional</option>
<option value="2">Unavailable</option>
<option value="3">Repeated request</option>
</select>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Remarks</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
      </div>
      <div class="modal-footer">
<div class="col-auto">
    <button type="accept" class="btn btn-primary mb-3"> Reject </button>
  </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
export default {
    name: 'Doctorresponsereject',
  components: {
    
  },
}
</script>

<style>

</style>