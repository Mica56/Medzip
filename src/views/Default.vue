<template>
  <div>
    <!-- Navigation-->
    <nav
      class="navbar navbar-expand-lg navbar-light fixed-top"
      id="mainNav"
      style="background-color: #fff"
    >
      <!-- Navbar content -->
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          <img src="../assets/MEDZIP.png" alt="logo" width="150" height="200" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars ms-1"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav justify-content-center ms-auto py-4 py-lg-0">
            <a class="nav-link" aria-current="page"
              ><router-link
                style="text-decoration: none; color: inherit"
                to="/home"
                >Home</router-link
              ></a
            >
            <a class="nav-link"
              ><router-link
                style="text-decoration: none; color: inherit"
                to="/about"
                >About</router-link
              ></a
            >
            <a class="nav-link"
              ><router-link
                style="text-decoration: none; color: inherit"
                to="/partners"
                >Partner Company</router-link
              ></a
            >
            <a class="nav-link"
              ><router-link
                style="text-decoration: none; color: inherit"
                to="/providers"
                >Providers</router-link
              ></a
            >
            <button
              class="btn btn-outline-primary me-2"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#LoginModals"
              @click="showModal"
            >
              Login
            </button>
          </ul>
        </div>
      </div>
    </nav>

    <section>
      <router-view />
    </section>
    <Footer></Footer>
    <!-- LoginModals -->
    <LoginModals v-show="isModalVisible" @close="closeModal"></LoginModals>
  </div>
</template>

<script>
import LoginModals from "@/components/Nonuserspecific/LoginModals.vue";
import Footer from "./footer.vue";

export default {
  name: "Default",
  components: {
    LoginModals,
    Footer,
  },
  data() {
    return {
      isModalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>

<style>
.nav-link {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
}
</style>
