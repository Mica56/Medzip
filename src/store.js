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
  },
  getters: {
    user(state) {
      return state.user;
    },
    password(state) {
      return state.password;
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
  },
});
export default store;
