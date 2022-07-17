<script setup lang="ts">
import { ref, reactive } from "vue";
import axios from "axios";

const router = useRouter();

const user = reactive({
  name: "",
  email: "",
  password: "",
});

const errorMessage = ref(null);

const register = () => {
  axios
    .post("/user/register", {
      name: user.name,
      email: user.email,
      password: user.password,
    })
    .then((response) => {
      console.log(response);
      user.name = "";
      user.email = "";
      user.password = "";
      router.push("/user/login");
    })
    .catch((error) => {
      console.error(error.response.data);
      errorMessage.value = error.response.data;
    });
};
</script>

<template>
  <div class="container">
    <div class="text-center my-5">
      <h1>Inscription</h1>
      <hr />
    </div>
    <div class="container mt-5 pt-5">
      <div class="row">
        <div class="col-12 col-sm-8 col-md-6 off-md-3 m-auto">
          <div class="card border-0 shadow">
            <div class="card-body">
              <div class="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"
                  />
                </svg>
              </div>
              <form action="">
                <input
                  type="text"
                  class="form-control my-4 py-2"
                  placeholder="Nom d'utilisateur"
                  v-model="user.name"
                />
                <input
                  type="text"
                  class="form-control my-4 py-2"
                  placeholder="E-mail"
                  v-model="user.email"
                />
                <input
                  type="password"
                  class="form-control my-4 py-2"
                  placeholder="Mot de passe"
                  v-model="user.password"
                />
                <p class="error-message text-center" v-if="errorMessage">
                  {{ errorMessage }}
                </p>
                <div class="text-center mt-3">
                  <button @click.prevent="register" class="btn btn-primary">
                    Envoyer
                  </button>
                  <nuxt-link class="nav-link" to="/user/login"
                    >Vous avez déjà un compte ?</nuxt-link
                  >
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.error-message {
  color: red;
  font-style: italic;
  font-size: small;
}
</style>
