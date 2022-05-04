<template>
  <div class="tab-pane fade active show" id="account-change-password">
    <div class="card-body pb-2">
      <div class="form-group">
        <label class="form-label">Current password</label>
        <input
          type="password"
          v-model="password.current"
          @input="$store.commit('SET_PASSWORD', 'curent', $event.target.value)"
          class="form-control"
        />
      </div>

      <div class="form-group">
        <label class="form-label">New password</label>
        <input
          type="password"
          v-model="password.new"
          class="form-control"
          @input="$store.commit('SET_PASSWORD', 'new', $event.target.value)"
        />
      </div>

      <div class="form-group">
        <label class="form-label">Repeat new password</label>
        <input
          type="password"
          v-model="password.newRepeat"
          class="form-control"
          @input="
            $store.commit('SET_PASSWORD', 'newRepeat', $event.target.value)
          "
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "change-password",
  components: {},
  computed: {
    password() {
      return this.$store.getters.password;
    },
  },
};
</script>

<style></style>
