<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Tansaction number</th>
        <th scope="col">From</th>
        <th scope="col">To</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(i, index) in items" :key="index">
        <th scope="row">{{ i.date }}</th>
        <td>{{ i.transaction_id }}</td>
        <td>{{ i.from_p }}</td>
        <td>{{ i.to }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
export default {
  name: "Transactionhistory",
  components: {},
  data() {
    return {
      request_num: "",
      items: [
        {
          date: "2022-04-26",
          from_p: "John Doe",
          summary: "Everything will be ok",
          to: "Dr Hamza",
          transaction_id: "4c20498b-df92-4723-99a8-70aa5b496406",
        },
        {
          date: "2022-04-26",
          from_p: "Tanzil",
          summary: "Everything will be ok",
          to: "Jay",
          transaction_id: "4c20498b-df92-4723-99a8-70aa5b496406",
        },
        {
          date: "2022-04-26",
          from_p: "Micala",
          summary: "Everything will be ok",
          to: "Jay",
          transaction_id: "4c20498b-df92-4723-99a8-70aa5b496406",
        },
      ],
      accid: '',
    };
  },
  async mounted() {
    let self = this;
    let reqconfig = {
            headers: { Authorization: `Token ${localStorage.getItem("Token")}` },
            query_params: {
              accid: `${this.$store.state.user.id}`
            }
          };
    await axios
      .get(
        `http://127.0.0.1:8000/request/details`, reqconfig
      )
      .then((e) => {
        self.request_num = e.data.data;
        console.log(self.request_num);
      });
      //this is just a test to fetch request details
          // let reqconfig = {
          //   headers: { Authorization: `Token ${localStorage.getItem("Token")}` },
          //   query_params: {
          //     accid: this.id
          //   }
          // };
          //  axios.get('http://127.0.0.1:8000/request/details', reqconfig)
          // .then(response => {
          //     console.log(response.data);
          //   })
    await axios
      // .get(
      //   `http://127.0.0.1:8000/request/transaction/${this.$store.state.user.id}`
      // )
      .get(`http://127.0.0.1:8000/request/transaction/all/${self.request_num}`)//and this
      .then((e) => {
        // when bankend sends the data in same fromat then undo the comment
        // self.items = e.data.data;
      });
  },
};
</script>

<style></style>
