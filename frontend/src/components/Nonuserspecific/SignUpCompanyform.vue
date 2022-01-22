<template>
    <div class="companysignupform">
        <form class="row g-3 needs-validation" novalidate>
                       <div class="mb-3">
                <input type="Company Name" class="form-control" id="exampleInputCompanyName1" placeholder="Company Name" required>
               <div class="invalid-feedback">
      Please provide a valid Company Name.
    </div>
     </div>
            <div class="mb-3">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email address" required>
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                <div class="invalid-feedback">
      Please provide a valid email.
    </div>
    </div>
            <div class="mb-3">
                <input type="Representative Name" class="form-control" id="exampleInputName1" placeholder="Representative Name" required>
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
                <input type="Business Liscence Number" class="form-control" id="exampleInputBL1" placeholder="Business Liscence Number" required>
                <div class="invalid-feedback">
      Please provide a valid License Number.
    </div>
    </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">Attach Business Liscence</label>
              <input class="form-control" type="file" id="formFile" required>
              </div>
                          <div class="mb-3">
              <label for="formFile1" class="form-label">Attach Business proposal </label>
              <input class="form-control" type="file" id="formFile1" required>
              </div>
                          <div class="mb-3">
              <label for="formFile2" class="form-label">Attach Smart Contract</label>
              <input class="form-control" type="file" id="formFile2" required>
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
    name: 'SignupmodalsCompany',
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