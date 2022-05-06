<template>
  <div>
    <!-- <transition name="modal-fade"> -->
    <div
      class="modal-mask"
      role="dialog"
      aria-labelledby="modalTitle"
      aria-describedby="modalDescription"
    >
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header" id="modalTitle">
            <slot name="header"> Sign Up Healthcare </slot>
          </div>

          <div class="modal-body" id="modalDescription">
            <slot name="body">
              <!-- <button class="btn btn-default btn-outlined" type="button" @click="showModal">Provider</button>
                  <button class="btn btn-default btn-outlined" type="button" @click="showModal">Patient</button> -->
              <!-- LoginForm -->
              <!-- <LoginForm v-show="isModalVisible" @close="closeModal"/> -->
              <!-- <LoginForm></LoginForm> -->
              <form class="row g-3 needs-validation" novalidate>
                <div class="mb-3">
                  <input
                    type="email"
                    class="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Email address"
                    required
                  />
                  <div id="emailHelp" class="form-text">
                    We'll never share your email with anyone else.
                  </div>
                  <div class="invalid-feedback">
                    Please provide a valid email.
                  </div>
                </div>
                <div class="mb-3">
                  <input
                    type="Name"
                    class="form-control"
                    placeholder="Fullname"
                    required
                  />
                  <div class="invalid-feedback">
                    Please provide a valid name.
                  </div>
                </div>
                <div class="mb-3">
                  <input
                    type="Contact Number"
                    class="form-control"
                    placeholder="Contact Number"
                    required
                  />
                  <div class="invalid-feedback">
                    Please provide a valid Contact number.
                  </div>
                </div>
                <div class="mb-3">
                  <input
                    type="Bday"
                    class="form-control"
                    placeholder="Date of Birth"
                    required
                  />
                  <div class="invalid-feedback">
                    Please provide a valid Date of birth.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="Sex" class="form-label"
                    >Sex assigned from birth :
                  </label>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="option1"
                    />
                    <label class="form-check-label" for="inlineCheckbox1"
                      >female</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="option2"
                    />
                    <label class="form-check-label" for="inlineCheckbox2"
                      >Male</label
                    >
                  </div>
                  <div class="invalid-feedback">
                    Please provide a valid sex.
                  </div>
                </div>
                <div class="mb-3">
                  <label for="Pronouns" class="form-label">Pronouns : </label>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="option1"
                    />
                    <label class="form-check-label" for="inlineCheckbox1"
                      >She/Her</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="option2"
                    />
                    <label class="form-check-label" for="inlineCheckbox2"
                      >He/Him</label
                    >
                  </div>
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value="option3"
                    />
                    <label class="form-check-label" for="inlineCheckbox2"
                      >They/Them</label
                    >
                  </div>
                  <div class="invalid-feedback">
                    Please provide a valid pronoun/s.
                  </div>
                </div>
                <div class="mb-3">
                  <input
                    type="Password"
                    class="form-control"
                    placeholder="Password"
                    required
                  />
                  <div class="invalid-feedback">Please type a password.</div>
                </div>
                <div class="col-12">
                  <div class="form-check">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      required
                    />
                    <label class="form-check-label" for="invalidCheck">
                      I have validated the information above.
                    </label>
                    <div class="invalid-feedback">
                      You must validate before submitting.
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <button class="btn btn-primary" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              default footer
              <button
                class="modal-default-button"
                @click="$emit('close')"
                aria-label="Close modal"
              >
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
  name: "TCC",
  components: {
    // LoginForm
  },
  methods: {
    close() {
      this.$emit("close");
    },
    // showModal() {
    //     this.isModalVisible = true;
    // },
    // closeModal() {
    //   this.isModalVisible = false;
    // }
  },
};
</script>

<style></style>
