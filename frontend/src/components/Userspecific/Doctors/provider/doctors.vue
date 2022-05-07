<template>
  <div>
    <div class="container">
      <div class="main-body">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Doctors</h2>
        </div>
        <div
          class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 gutters-sm"
        >
          <div class="col mb-3" v-for="(i, index) in doctors" :key="index">
            <div class="card h-100">
              <img
                src="https://via.placeholder.com/340x120/DDA0DD/000000"
                alt="Cover"
                class="card-img-top"
              />
              <div class="card-body text-center">
                <img
                  :src="
                    i.prc_pic_url === null
                      ? 'https://bootdey.com/img/Content/avatar/avatar3.png'
                      : i.prc_pic_url
                  "
                  style="width: 100px; margin-top: -65px"
                  alt="User"
                  class="img-fluid img-thumbnail rounded-circle border-0 mb-3"
                />
                <h5 class="card-title">{{ i.full_name }}</h5>
                <p class="text-secondary mb-1">{{ i.contact_no }}</p>
                <p class="text-muted font-size-sm">
                  {{ i.email }}
                </p>
              </div>
              <div class="card-footer d-flex justify-content-between">
                <a class="btn btn-primary"
                  ><router-link
                    style="text-decoration: none; color: inherit"
                    to="/doctorprofile1"
                    >Recommend a Profile</router-link
                  ></a
                >

                <button
                  type="button"
                  class="btn btn-primary ml-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Refer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Doctorrequest></Doctorrequest>
  </div>
</template>

<script>
import Doctorrequest from "./doctorrequest.vue";
export default {
  name: "doctors",
  components: { Doctorrequest },
  async mounted() {
    await this.$store.dispatch("getAllUser");
  },
  computed: {
    doctors() {
      return this.$store.getters.doctors;
    },
  },
};
</script>

<style>
body {
  margin-top: 20px;
  color: #1a202c;
  text-align: left;
  background-color: #e2e8f0;
}
.main-body {
  padding: 15px;
}
.card {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
}

.gutters-sm {
  margin-right: -8px;
  margin-left: -8px;
}

.gutters-sm > .col,
.gutters-sm > [class*="col-"] {
  padding-right: 8px;
  padding-left: 8px;
}
.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.bg-gray-300 {
  background-color: #e2e8f0;
}
.h-100 {
  height: 100% !important;
}
.shadow-none {
  box-shadow: none !important;
}

.bg-white {
  background-color: #fff !important;
}
.btn-light {
  color: #1a202c;
  background-color: #fff;
  border-color: #cbd5e0;
}
.ml-2,
.mx-2 {
  margin-left: 0.5rem !important;
}

.card-footer:last-child {
  border-radius: 0 0 0.25rem 0.25rem;
}
.card-footer,
.card-header {
  display: flex;
  align-items: center;
}
.card-footer {
  padding: 0.5rem 1rem;
  background-color: #fff;
  border-top: 0 solid rgba(0, 0, 0, 0.125);
}
</style>
