<template>
  <div>
    <div
      class="modal fade"
      id="SUMModals"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-container">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Member Sign Up</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <form class="row g-3 needs-validation" novalidate>
              <div class="mb-3">
                <input
                  v-model="form.email"
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
                  v-model="form.first_name"
                  type="Name"
                  class="form-control"
                  id="exampleInputfName1"
                  placeholder="First name"
                  required
                />
                <div class="invalid-feedback">Please provide a valid name.</div>
              </div>
              <div class="mb-3">
                <input
                  v-model="form.last_name"
                  type="Name"
                  class="form-control"
                  id="exampleInputlName1"
                  placeholder="Last name"
                  required
                />
                <div class="invalid-feedback">Please provide a valid name.</div>
              </div>
              <div class="mb-3">
                <input
                  v-model="form.contact_no"
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
                  v-model="form.birthday"
                  type="Bday"
                  class="form-control"
                  placeholder="Date of Birth ex. YYYY-MM-DD"
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
                    @click="setSex('F')"
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
                    @click="setSex('M')"
                    class="form-check-input"
                    type="checkbox"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineCheckbox2"
                    >Male</label
                  >
                </div>
                <div class="invalid-feedback">Please provide a valid sex.</div>
              </div>
              <div class="mb-3">
                <label for="Pronouns" class="form-label">Pronouns : </label>
                <div class="form-check form-check-inline">
                  <input
                    @click="setPronouns('She/Her')"
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
                    @click="setPronouns('He/Him')"
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
                    @click="setPronouns('They/Them')"
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
                  v-model="form.password"
                  type="Password"
                  class="form-control"
                  aria-describedby="PwHelp"
                  placeholder="Password"
                  required
                />
                <div id="PwHelp" class="form-text">
                  Your password can’t be too similar to your other personal
                  information.<br />
                  Your password must contain at least 8 characters.<br />
                  Your password can’t be a commonly used password.<br />
                  Your password can’t be entirely numeric.
                </div>
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
            </form>
            <div class="modal-footer">
              <div class="col-auto">
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#Signup3"
                >
                  Return
                </button>
                <button
                  type="submit"
                  class="btn btn-primary"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  @click="submitForm"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <Signup3> </Signup3> -->
  </div>
</template>

<script>
// import Signup3 from "./signup3.vue";
import axios from "axios";

export default {
  name: "SUMModals",
  components: {
    // Signup3,
    // LoginForm
  },
  data() {
    return {
      form: {
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        user_type: "Patient",
        contact_no: "",
        birthday: "",
        sex: "",
        pronouns: "",
        seed_phrase: "random string",
      },
      isErrored: false,
      catchederror: "",
    };
  },

  methods: {
    setSex(key) {
      this.form.sex = key;
    },
    setPronouns(key) {
      this.form.pronouns = key;
    },
    submitForm() {
      // console.log(this.form);

      try {
        axios
          .post("https://jirroreo.pythonanywhere.com/account/create", this.form, {
            headers: { "Content-Type": "application/json" },
          })
          .then((res) => {
            console.log("post request success");
          })
          .catch((err) => {
            this.isErrored = true;
            this.catchederror = err;
          });
      } catch (e) {
        console.error(e);
        console.log(this.catchederror);
      }
    },
  },
};
</script>

<style></style>
