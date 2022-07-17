<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <section class="section-nav">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <!-- Name -->
        <div class="header-left px-5 d-flex justify-content-center">
          <nuxt-link to="/" class="label d-inline mx-2">Troov Test</nuxt-link>
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
                >Ajouter un event</nuxt-link
              >
            </li>
          </ul>

          <!-- Dropdown(手機版顯示)  -->
          <ul class="navbar-nav d-block d-lg-none">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">個人服務中心</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">22登出</a>
            </li>
          </ul>
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
  color: red;
}
</style>
