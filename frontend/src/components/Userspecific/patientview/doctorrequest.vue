<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Doctor request</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Name</label
            >
            <input
              type="name"
              v-model="payload.name"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Firstname Lastname"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Company</label
            >
            <select
              v-model="payload.company"
              class="form-select"
              aria-label="Default select example"
            >
              <option selected>Select a company</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Reason for consultation</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              v-model="payload.prescription"
            ></textarea>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Appointment available</label
            >
            <input
              type="date"
              class="form-control"
              v-model="payload.appointment_date"
            />
          </div>

          <div>
            <label for="Sessions" class="form-label">Sessions:</label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                value="first_session"
                v-model="payload.session"
              />
              <label class="form-check-label" for="inlineRadio1"
                >First Session</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio2"
                value="returing_session"
                v-model="payload.session"
              />
              <label class="form-check-label" for="inlineRadio2">
                <label class="form-check-label" for="inlineCheckbox2"
                  >Returning session
                </label>
              </label>
            </div>
          </div>

          <div>
            <label for="Requests" class="form-label"> Requests: </label>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                value="medical_certificate"
                v-model="payload.request"
                id="mC3"
              />
              <label class="form-check-label" for="inlineCheckbox1"
                >Medical certifcate</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                value="e_prescription"
                v-model="payload.request"
                id="ep3"
              />
              <label class="form-check-label" for="inlineCheckbox2"
                >E-prescription</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                value="others"
                v-model="payload.request"
                id="o3"
              />
              <label class="form-check-label" for="inlineCheckbox2"
                >Others</label
              >
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="col-auto">
            <button
              type="button"
              @click="$store.dispatch('requestCreate', payload)"
              class="btn btn-primary mb-3"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Doctorrequest",
  components: {},
  data() {
    return {
      payload: {
        name: "",
        company: "",
        prescription: "",
        session: "",
        reason: "",
        findings: "",
        appointment_date: null,
        request: "",
      },
    };
  },
};
</script>

<style></style>
