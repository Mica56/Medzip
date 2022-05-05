<template>
  <div>
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          class="nav-link active"
          id="providers-tab"
          data-bs-toggle="tab"
          data-bs-target="#providers"
          type="button"
          role="tab"
          aria-controls="providers"
          aria-selected="true"
        >
          Provider Findings
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="home-tab"
          data-bs-toggle="tab"
          data-bs-target="#provreq"
          type="button"
          role="tab"
          aria-controls="home"
          aria-selected="false"
        >
          Provider requests
        </button>
      </li>

      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="#accept"
          type="button"
          role="tab"
          aria-controls="profile"
          aria-selected="false"
        >
          Accepted
        </button>
      </li>

      <li class="nav-item" role="presentation">
        <button
          class="nav-link"
          id="contact-tab"
          data-bs-toggle="tab"
          data-bs-target="#reject"
          type="button"
          role="tab"
          aria-controls="contact"
          aria-selected="false"
        >
          Rejected
        </button>
      </li>
    </ul>
    <div class="tab-content" id="myTabContent">
      <div
        class="tab-pane fade show active"
        id="providers"
        role="tabpanel"
        aria-labelledby="providers-tab"
      >
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Provider</th>
              <!-- <th scope="col">Company</th> -->
              <th scope="col">Recommendation</th>
              <th scope="col">Summary</th>
              <th scope="col">Explanation</th>
              <th scope="col">Others</th>
              <!-- <th scope="col">Recommendation to</th> -->
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i, index) in request.providerFunding" :key="index">
              <th scope="row">{{ i.date }}</th>
              <td>{{ i.provider }}</td>
              <td>{{ i.recommendation }}</td>
              <td>{{ i.summary }}</td>
              <td>{{ i.explanation }}</td>
              <td>{{ i.others }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="tab-pane fade"
        id="provreq"
        role="tabpanel"
        aria-labelledby="home-tab"
      >
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Provider</th>
              <th scope="col">Company</th>
              <th scope="col">Recommendation</th>
              <th scope="col">Summary</th>
              <th scope="col">Explanation</th>
              <th scope="col">FIles</th>
              <th scope="col">Response</th>
              <th scope="col">Recommendation to</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i, index) in request.providerRequest" :key="index">
              <th scope="row">{{ i.date }}</th>
              <td>{{ i.provider }}</td>
              <td>{{ i.company }}</td>
              <td>{{ i.recommendation }}</td>
              <td>{{ i.summary }}</td>
              <td>{{ i.explanation }}</td>
              <td>{{ i.files }}</td>
              <td>{{ i.respone }}</td>
              <td>{{ i.recommendation_to }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="tab-pane fade"
        id="accept"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Provider</th>
              <th scope="col">Recommendation</th>
              <th scope="col">Medical Order</th>
              <th scope="col">Others</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i, index) in request.accepted" :key="index">
              <th scope="row">{{ i.date }}</th>
              <td>{{ i.provider }}</td>
              <td>{{ i.recommendation }}</td>
              <td>{{ i.medical_orders }}</td>
              <td>{{ i.others }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div
        class="tab-pane fade"
        id="reject"
        role="tabpanel"
        aria-labelledby="contact-tab"
      >
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Provider</th>
              <th scope="col">Recommendation</th>
              <th scope="col">Medical Order</th>
              <th scope="col">Others</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(i, index) in request.rejected" :key="index">
              <th scope="row">{{ i.date }}</th>
              <td>{{ i.provider }}</td>
              <td>{{ i.recommendation }}</td>
              <td>{{ i.medical_orders }}</td>
              <td>{{ i.others }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "rphpatients",
  data() {
    return {
      request: {
        providerFunding: [
          {
            id: 1,
            date: "2022/01/01",
            provider: "Jon",
            recommendation: "OTTO",
            summary: "Mark",
            explanation: "OTTO",
            others: "@mdo",
          },
          {
            id: 2,
            date: "2022/01/01",
            provider: "Doe",
            recommendation: "OTTO",
            summary: "Mark",
            explanation: "OTTO",
            others: "@mdo",
          },
        ],
        providerRequest: [
          {
            id: 1,
            date: "2022/01/01",
            provider: "Jon",
            company: "OTTO",
            recommendation: "OTTO",
            summary: "Mark",
            explanation: "OTTO",
            files: "@mdo",
            respone: "response",
            recommendation_to: "12345",
          },
          {
            id: 2,
            date: "2022/01/01",
            provider: "Rok",
            company: "OTTO",
            recommendation: "OTTO",
            summary: "Mark",
            explanation: "OTTO",
            files: "@mdo",
            respone: "response",
            recommendation_to: "12345",
          },
        ],
        accepted: [
          {
            id: 1,
            date: "2022/01/01",
            provider: "Rok",
            recommendation: "OTTO",
            medical_orders: "Mark",
            others: "@mdo",
          },
          {
            id: 2,
            date: "2022/01/01",
            provider: "Jon",
            recommendation: "OTTO",
            medical_orders: "Mark",
            others: "@mdo",
          },
        ],
        rejected: [
          {
            id: 1,
            date: "2022/01/01",
            provider: "Rok",
            recommendation: "OTTO",
            medical_orders: "Mark",
            others: "@mdo",
          },
          {
            id: 2,
            date: "2022/01/01",
            provider: "Jon",
            recommendation: "OTTO",
            medical_orders: "Mark",
            others: "@mdo",
          },
        ],
      },
      request_num: "",
    };
  },
  components: {},
  async mounted() {
    let self = this;
    await axios
      .get(
        `http://127.0.0.1:8000/request/details?query_params=${this.$store.state.user.id}`
      )
      .then((e) => {
        console.log(e);
        // make sure the respone format match the demo data format
        // self.request = e.data.request
      });

    await axios
      .get(
        `http://127.0.0.1:8000/request/details/?user_id=${this.$store.state.user.id}`
      )
      .then((e) => {
        self.request_num = e.data.data;
      });
  },
};
</script>

<style></style>
