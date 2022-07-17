<script setup lang="ts">
import { ref } from "vue";
</script>

<template>
  <section class="section-nav">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        <!-- Logo -->
        <div class="header-left px-5 d-flex justify-content-center">
          <div class="align-self-center d-inline mr-1">
            <img
              src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"
              alt=""
              width="30"
              height="24"
            />
          </div>
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
          <!-- Dropdown(手機版隱藏) -->
          <div class="inline-block px-5 d-none d-lg-block">
            <div class="btn-group">
              <a
                class="btn"
                data-bs-toggle="dropdown"
                data-bs-display="static"
                aria-expanded="false"
              >
                <span>
                  <i class="far fa-user"></i>
                </span>
              </a>
              <ul class="dropdown-menu dropdown-menu-end" id="userDropdown">
                <li>
                  <div class="dropdown-item">
                    <span id="userName">User Name</span>
                    <span class="badge rounded-pill bg-secondary" id="groupName"
                      >Group Name</span
                    >
                  </div>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="javascript:void(0);"
                    onclick="logout()"
                  >
                    Hello<i class="fas fa-sign-out-alt fa-fw"></i> 登出
                  </a>
                </li>
                <div class="dropdown-divider"></div>
                <li class="px-3">
                  <i class="fas fa-code-branch"></i>
                  <span>ver 0.0.1</span>
                </li>
              </ul>
            </div>
          </div>
          <!-- Dropdown(手機版顯示)  -->
          <ul class="navbar-nav d-block d-lg-none">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="#">個人服務中心</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">登出</a>
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
