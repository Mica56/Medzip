<template>
  <div class="container light-style flex-grow-1 container-p-y">
    <h4 class="font-weight-bold py-3 mb-4">Account settings</h4>

    <div class="card overflow-hidden">
      <div class="row no-gutters row-bordered row-border-light">
        <div class="col-md-3 pt-0">
          <div class="list-group list-group-flush account-settings-links">
            <a
              class="list-group-item list-group-item-action"
              data-toggle="list"
              v-for="tab in tabs"
              :key="tab"
              @click="selected = tab"
            >
              {{ tab }}
            </a>
          </div>
        </div>
        <div class="col-md-9">
          <div class="tab-content">
            <component :is="selected"></component>
          </div>
        </div>
      </div>
    </div>

    <div class="text-right mt-3">
      <button
        class="btn btn-primary"
        role="button"
        style="text-decoration: none; color: inherit"
        @click="settings(selected)"
      >
        Save changes
      </button>
      <button type="button" class="btn btn-default">Cancel</button>
    </div>
  </div>
</template>

<script>
import General from "../components/Userspecific/accountgeneral.vue";
import ChangePassword from "../components/Userspecific/accountchangepw.vue";
import Info from "../components/Userspecific/accountinfo.vue";

export default {
  name: "settings",
  components: {
    General,
    ChangePassword,
    Info,
  },
  data: function () {
    return {
      tabs: ["General", "ChangePassword", "Info"],
      selected: "General",
    };
  },
  methods: {
    settings(selected) {
      if (selected === "ChangePassword ") {
        // Call axios to change password
        // request payload  will be
        // this.password

        // if the api call is success then clear the password
        //this.$store.commit("SET_PASSWORD",'empty')

        console.log(this.password);
      }
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    password() {
      return this.$store.getters.password;
    },
  },
};
</script>

<style>
body {
  background: #f5f5f5;
  margin-top: 20px;
}

.ui-w-80 {
  width: 80px !important;
  height: auto;
}

.btn-default {
  border-color: rgba(24, 28, 33, 0.1);
  background: rgba(0, 0, 0, 0);
  color: #4e5155;
}

label.btn {
  margin-bottom: 0;
}

.btn-outline-primary {
  border-color: #26b4ff;
  background: transparent;
  color: #26b4ff;
}

.btn {
  cursor: pointer;
}

.text-light {
  color: #babbbc !important;
}

.btn-facebook {
  border-color: rgba(0, 0, 0, 0);
  background: #3b5998;
  color: #fff;
}

.btn-instagram {
  border-color: rgba(0, 0, 0, 0);
  background: #000;
  color: #fff;
}

.card {
  background-clip: padding-box;
  box-shadow: 0 1px 4px rgba(24, 28, 33, 0.012);
}

.row-bordered {
  overflow: hidden;
}

.account-settings-fileinput {
  position: absolute;
  visibility: hidden;
  width: 1px;
  height: 1px;
  opacity: 0;
}
.account-settings-links .list-group-item.active {
  font-weight: bold !important;
}
html:not(.dark-style) .account-settings-links .list-group-item.active {
  background: transparent !important;
}
.account-settings-multiselect ~ .select2-container {
  width: 100% !important;
}
.light-style .account-settings-links .list-group-item {
  padding: 0.85rem 1.5rem;
  border-color: rgba(24, 28, 33, 0.03) !important;
}
.light-style .account-settings-links .list-group-item.active {
  color: #4e5155 !important;
}
.material-style .account-settings-links .list-group-item {
  padding: 0.85rem 1.5rem;
  border-color: rgba(24, 28, 33, 0.03) !important;
}
.material-style .account-settings-links .list-group-item.active {
  color: #4e5155 !important;
}
.dark-style .account-settings-links .list-group-item {
  padding: 0.85rem 1.5rem;
  border-color: rgba(255, 255, 255, 0.03) !important;
}
.dark-style .account-settings-links .list-group-item.active {
  color: #fff !important;
}
.light-style .account-settings-links .list-group-item.active {
  color: #4e5155 !important;
}
.light-style .account-settings-links .list-group-item {
  padding: 0.85rem 1.5rem;
  border-color: rgba(24, 28, 33, 0.03) !important;
}
</style>
