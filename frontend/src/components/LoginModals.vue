<template>
    <div>
        <!-- <transition name="modal-fade"> -->
        <div class="modal-mask" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
          <div class="modal-wrapper">
            <div class="modal-container">

              <div class="modal-header" id="modalTitle">
                <slot name="header">
                  default header
                </slot>
              </div>

              <div class="modal-body" id="modalDescription">
                <slot name="body">
                  default body
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
export default {
  name: 'LoginModals',
  components: {
    
  },
  methods: {
      close() {
        this.$emit('close');
      },
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
  width: 300px;
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

</style>