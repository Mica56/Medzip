<template>
    <div class="membersignupform">
        <form class="row g-3 needs-validation" novalidate>
    <div class="mb-3">
                <input type="Unique Account Identification" class="form-control" id="exampleInputUAI1" placeholder="Unique Account Identification" required>
               <div class="invalid-feedback">
      Please provide a valid Unique Account Identification.
    </div>
     </div>
             <div class="mb-3">
                <input type="Password" class="form-control" id="examplePassword1" placeholder="Password" required>
                <div class="invalid-feedback">
      Please provide a valid Password.
    </div>
    </div>
            </form>
    </div>
</template>

<script>
export default {
    name: 'Home',
  components: {
    
  },
}
</script>

<style>

</style>