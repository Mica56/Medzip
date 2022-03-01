<template>
    <div>
        <!-- <transition name="modal-fade"> -->
        <div class="modal-mask" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header" id="modalTitle">
                <slot name="header">
                  <h1>User Type Log In</h1>
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