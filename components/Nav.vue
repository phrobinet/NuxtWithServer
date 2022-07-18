<script setup lang="ts">
import { useProfileStore } from "../store/profileStore";
import axios from "axios";

const profileStore = useProfileStore();

const logout = () => {
  axios.post("/user/logout");
  profileStore.toggleIsLoggedIn();
};
</script>

<template>
  <section class="section-nav">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <!-- Name -->
        <div class="header-left px-5 d-flex justify-content-center">
          <nuxt-link to="/" class="label d-inline mx-2">Troov~Test</nuxt-link>
        </div>

        <!-- Nav Item -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <nuxt-link to="/event" class="nav-link" aria-current="page"
                >Events</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link to="/create" class="nav-link"
                >Créers un événement</nuxt-link
              >
            </li>
          </ul>

          <div v-if="!profileStore.isLoggedIn" class="form-inline my-2 my-lg-0">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <nuxt-link to="/user/login" class="nav-link"
                  >Connexion</nuxt-link
                >
              </li>
              <li class="nav-item">
                <nuxt-link to="/user/register" class="nav-link"
                  >Inscription</nuxt-link
                >
              </li>
            </ul>
          </div>

          <div v-else class="form-inline my-2 my-lg-0">
            <div class="navbar-nav me-auto">
              <p @click="logout" class="nav-item">
                <nuxt-link to="/user/login" class="nav-link">Logout</nuxt-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>

<style scoped>
.section-nav {
  width: 100%;
  color: rgb(0, 0, 0);
  background-color: rgb(255, 255, 255);
}
.section-nav nav {
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
}

.section-nav .label {
  font-weight: 500;
  color: rgba(0, 0, 0, 0.85);
  font-size: 20px;
  text-decoration: none;
}

.section-nav .nav-link {
  font-weight: 400;
  color: black !important;
}
.section-nav .nav-link:hover {
  font-weight: 400;
}
</style>
