<template>
  <div>
    <Login @selectedUser="capturedMessage" />

    <template v-if="isProvider">
      <router-view name="provider" />
    </template>

    <template v-else-if="isPatient">
      <router-view name="patient" />
    </template>

    <template v-else>
      <router-view />
    </template>
    <LoginFormDef
      :details="true"
      @AccountDetails="getAccountDetails"
    ></LoginFormDef>
    <!-- just to test if accountDetails was received by parent
    but it seems it wasn't able to -->
    <!-- {{ $store.state.user }} -->
  </div>
</template>

<script>
import Login from "./components/Nonuserspecific/LoginModals.vue";
import LoginFormDef from "./components/Nonuserspecific/LoginFormDefault.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Login,
    LoginFormDef,
  },

  data() {
    return {
      loginType: "default",
      token: "0",
      accountDetails: [],
    };
  },
  methods: {
    capturedMessage(value) {
      this.loginType = value;
    },
    getAccountDetails(details) {
      // console.log(details);
    },
  },
  computed: {
    isProvider() {
      return this.loginType === "provider";
    },
    isPatient() {
      return this.loginType === "patient";
    },
  },
};
</script>

<style></style>
