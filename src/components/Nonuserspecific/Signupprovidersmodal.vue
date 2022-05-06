<template>
  <div>
    <div
      class="modal fade"
      id="SUPmodal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-container">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Providers Sign Up
              </h5>
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
                  placeholder="First Name"
                  required
                />
                <div class="invalid-feedback">
                  Please provide a valid first name.
                </div>
              </div>
              <div class="mb-3">
                <input
                  v-model="form.last_name"
                  type="Name"
                  class="form-control"
                  id="exampleInputName2"
                  placeholder="Last Name"
                  required
                />
                <div class="invalid-feedback">
                  Please provide a valid last name.
                </div>
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
                  placeholder="Date of Birth MM/DD/YEAR"
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

              <div class="col-md-3">
                <label for="validationCustom04" class="form-label"
                  >Provider Type</label
                >
                <select
                  v-model="form.provider_type"
                  class="form-select"
                  id="validationCustom04"
                  required
                >
                  <option selected disabled value="">Choose...</option>
                  <option>Doctor</option>
                  <option>Pharmacist</option>
                  <!-- <option>Nurse</option>
                      <option>Medical Technologist</option>
                      <option>Radio Technologist</option>
                      <option>Dentists</option>
                      <option>Others</option> -->
                </select>
                <div class="invalid-feedback">Please select provider type.</div>
              </div>

              <div class="mb-3">
                <input
                  v-model="form.prc_num"
                  type="PRC License"
                  class="form-control"
                  id="exampleInputPRC1"
                  placeholder="PRC Liscence Number"
                  required
                />
                <div class="invalid-feedback">
                  Please provide a valid License Number.
                </div>
              </div>
              <!-- v-model="form.prc_pic_url" -->
              <div class="mb-3">
                <label for="formFile" class="form-label"
                  >Attach clear picture with PRC ID</label
                >
                <input
                  @change="previewFiles"
                  class="form-control"
                  type="file"
                  required
                />
              </div>

              <div class="mb-3">
                <input
                  v-model="form.password"
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
  name: "SUPmodal",
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
        user_type: "Provider",
        contact_no: "",
        birthday: "",
        sex: "",
        pronouns: "",
        seed_phrase: "random string",
        provider_type: "",
        prc_num: "",
        prc_pic_url: "",
      },
      isErrored: false,
    };
  },

  methods: {
    setSex(key) {
      this.form.sex = key;
    },
    setPronouns(key) {
      this.form.pronouns = key;
    },
    //have to save input #formfile to prc_pic_url as a URL
    //this didn't work
    previewFiles(event) {
      // console.log(event.target.files);
      this.prc_pic_url = URL.createObjectURL(event.target.files[0]);
      // console.log(this.prc_pic_url);
    },
    submitForm() {
      console.log(this.form);
      //undone the following comments once this.form prints out complete details

      try {
        axios.post('https://jirroreo.pythonanywhere.com/account/create', this.form,
        { headers: { "Content-Type": "application/json" } })
        .then(res => {
            console.log("post request success" +  res);
        }).catch(err => {
          this.isErrored = true;
          this.catchederror = err;
      })
      } catch (e) {
        console.error(e);
        console.log(this.catchederror);
      }
    },
  },
};
</script>

<style></style>
