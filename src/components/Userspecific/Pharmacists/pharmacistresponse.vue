<template>
  <div
    class="modal fade"
    id="Pharmacistresponse"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="Pharmacistresponse">
            Pharmacist response
          </h5>
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
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Firstname Lastname"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label"
              >Recommendation
            </label>
            <select class="form-select" aria-label="Default select example">
              <option selected>Select a Recommendation</option>
              <option value="1">Return for follow up</option>
              <option value="2">
                Recommend to a different healthcare proffesional
              </option>
              <option value="3">Clear</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Summary</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label"
              >Explanation</label
            >
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>

          <div>
            <label for="Requests" class="form-label"> Requests: </label>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" value="option1" />
              <label class="form-check-label" for="inlineCheckbox1"
                >Medical Order</label
              >
              <div class="mb-3">
                <label for="formFile" class="form-label">Attach File</label>
                <input class="form-control" type="file" required />
              </div>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" value="option2" />
              <label class="form-check-label" for="inlineCheckbox2"
                >Others</label
              >
              <div class="mb-3">
                <label for="formFile" class="form-label">Attach File</label>
                <input class="form-control" type="file" required />
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="col-auto">
            <button type="accept" class="btn btn-primary mb-3">accept</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Pharmacistresponse",
  components: {},
};
</script>

<style></style>
