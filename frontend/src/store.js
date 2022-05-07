import { createStore } from "vuex";
import axios from "axios";
// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 10,
      user:
        localStorage.getItem("user") === null
          ? null
          : JSON.parse(localStorage.getItem("user")),
      password: {
        current: "",
        new: "",
        newRepeat: "",
      },
      allUser: [],
    };
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    SET_ACCOUNT_DETAILS(state, payload) {
      localStorage.setItem("user", JSON.stringify(payload));
      state.user = payload;
    },
    SET_PASSWORD(type, state, payload) {
      if (type === "current") {
        state.password[type] = payload;
      } else if (type === "new") {
        state.password[type] = payload;
      } else if (type === "newRepeat") {
        state.password[type] = payload;
      } else if (type === "empty") {
        state.password.current = "";
        state.password.new = "";
        state.password.newRepeat = "";
      }
    },
    SET_ALL_USER(state, payload) {
      state.allUser = payload;
    },
  },
  getters: {
    user(state) {
      return state.user;
    },
    password(state) {
      return state.password;
    },
    allUser(state) {
      return state.allUser;
    },
    doctors(state) {
      return state.allUser.filter((x) => x.provider_type === "Doctor");
    },
    provider(state) {
      return state.allUser.filter((x) => x.provider_type === "Provider");
    },
  },
  actions: {
    requestCreate({ state }, payload) {
      let data = {
        ...payload,
        account: state.user.id,
      };
      if (payload.appointment_date === null) {
        alert("Appoinment Date is required");
      } else {
        axios.post("http://127.0.0.1:8000/request/create", data).then((e) => {
          console.log(e);
        });
      }
    },
    getAllUser({ commit }, payload) {
      axios.get("http://127.0.0.1:8000/account/all").then((e) => {
        e.data.results.forEach((element) => {
          if (element.prc_pic_url !== null) {
            element.prc_pic_url = process.env.VUE_APP_URL + element.prc_pic_url;
          }
        });
        commit("SET_ALL_USER", e.data.results);
      });
    },
  },
});
export default store;
