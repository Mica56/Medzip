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
          <h5 class="modal-title" id="exampleModalLabel">Doctor Refer</h5>
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
              >Patient Name</label
            >
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Firstname Lastname"
              v-model="payload.name"
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
              >Reason recommendation</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              v-model="payload.reason"
            ></textarea>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Findings</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              v-model="payload.findings"
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
            <label for="Requests" class="form-label"> Requests: </label>
            <div class="form-check form-check-inline">
              <input
                id="mC2"
                class="form-check-input"
                type="radio"
                v-model="payload.request"
                value="medical_certificate"
              />
              <label class="form-check-label" for="inlineCheckbox1"
                >Medical certifcate</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                id="ep2"
                class="form-check-input"
                type="radio"
                v-model="payload.request"
                value="e_prescription"
              />
              <label class="form-check-label" for="inlineCheckbox2"
                >E-prescription</label
              >
            </div>
            <div class="form-check form-check-inline">
              <input
                id="o2"
                class="form-check-input"
                type="radio"
                v-model="payload.request"
                value="others"
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
              Refer
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
