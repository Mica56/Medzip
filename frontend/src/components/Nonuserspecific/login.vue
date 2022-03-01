
<template>
    <div>
        <!-- <transition name="modal-fade"> -->
        <div class="modal-mask" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
          <div class="modal-wrapper">
            <div class="modal-container">
              

     <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

              <div class="modal-body" id="modalDescription">
                <slot name="body">
                  <!-- <button class="btn btn-default btn-outlined" type="button" @click="showModal">Provider</button>
                  <button class="btn btn-default btn-outlined" type="button" @click="showModal">Patient</button> -->
                  <!-- LoginForm -->
                  <!-- <LoginForm v-show="isModalVisible" @close="closeModal"/> --> 
                  <!-- <LoginForm></LoginForm> -->
                  <form>
                    
                    <div class="LoginUserType" align-content="center">
                      <a href="LoginFormDef"> <img src="../Nonuserspecific/UserType/1.png"  height="250" width="250"> </a>
                      <a href="LogInCF"><img src="../Nonuserspecific/UserType/2.png" height="250" width="250"> </a>
                      <a href="LoginFormDef"><img src="../Nonuserspecific/UserType/3.png"  height="250" width="250"> </a>
                    </div>
                    <p>Not a member? <a href="#" class="blue-text">Sign Up</a></p>
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
  name: 'LoginModals',
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

</style>
